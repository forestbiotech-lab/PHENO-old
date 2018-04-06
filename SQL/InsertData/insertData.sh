#!/usr/bin/env bash

table=$(head -1 tableValues.tsv)
echo $table
Total=$(grep "Total=" tableValues.tsv | awk -F "Total=" '{print $2}')
echo $Total
attributes=$(awk -F "\t" '{if( NR>2 ){printf $1","}}' tableValues.tsv | sed -r "s:,$::g")
values=$(
  awk -F "\t" '{
  	if( NR>2){
  		match($2, "varchar|text|date");
		if(RLENGTH>-1){
			printf "\""$3"\","
		}else{
			printf $3","
		}
	}
  }' tableValues.tsv | sed -r "s:,$::g"

)


query="INSERT INTO $table ($attributes) VALUES (${values});"


regex="#[0-9]*,[0-9]*\{[0-9a-zA-Z.,/ @\-\_]*\}" 

#Spaces exchanged for @
varList=($(echo $query | sed "s: :\@:g" | grep -Eo "${regex}"))
echo ${varList[@]}
varCount=$(echo $query | grep -o "#" | wc -l) #Count variables in query.
echo $varCount
variables=(i j k l m n o p q s t u v w x y z ) #Var array

#Set placeHolders
if [[ $varCount -gt "0" ]]; then
	for i in $(eval echo {0..${varCount}}); do #Iterate through vars in query and replace with placeholders
		#Replaces the first occurrence of a variable with placeholder variables[x]
		query=$(echo $query | sed -r "s:${regex}([\",| )]):\\$\{${variables[${i}]}\}\1:")
	done 
fi 
echo "1st for done"
#Create all the queries with distinct placeholders
if [[ $varCount -gt "0" ]]; then
	for jj in $(eval echo {1..$Total}); do
		#Iterate through vars in query and replace with placeholders
		tempQuery=$(echo $query | sed -r "s:\\$\{([i-z])\}:\\$\{\1$jj\}:g" )
		tempInsert="$tempInsert $tempQuery"
	done 
fi 
echo "2nd for done"
#Replace placeholder with vars
if [[ $varCount -gt "0" ]]; then
	for queryNum in $(eval echo {1..$Total}); do #Go though the values in iterator and queries
		for varNum in $(eval echo {0..${varCount}}); do #Number of substitutions to do varies with number of vars  
			iterator=$(echo ${varList[$varNum]} | sed "s:#::g") #iterator for var something in brackets #{}
			repeatItem=$(echo $iterator | awk -F "[,{}]" '{print $1}')
			repeatSet=$(echo $iterator | awk -F "[,{}]" '{print $2}')
			iterator=$(echo $iterator | sed "s:^[0-9]*,[0-9]*::")
			tempReplacement=""
			for item in $(eval echo $iterator); do 
				replacement=$(eval echo $(printf '$item %.0s' $(eval echo {1..${repeatItem}})))
				tempReplacement="$tempReplacement $replacement"
			done
			replacement=(NULLINDEX $(eval echo $(printf '$tempReplacement %.0s' $(eval echo {1..${repeatSet}}))))
			#Replace the var in each query 
			tempInsert=$(echo $tempInsert | sed -r "s:\\$\{${variables[$varNum]}${queryNum}\}:${replacement[$queryNum]}:")
		done
	done
	query=$( echo $tempInsert | sed -r "s:@: :g")
fi
echo $(echo $query | sed -r "s:\;:\;\n:g")
if [[ $1 == "GO" ]]; then
	echo "inserted into database"
	mysql -u testing -D brapi_dan -ptest -e "$query"
fi