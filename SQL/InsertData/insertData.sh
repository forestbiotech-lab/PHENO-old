#!/usr/bin/env bash

table=$(head -1 tableValues.tsv)
echo $table
attributes=$(awk -F "\t" '{if( NR>2 ){printf $1","}}' tableValues.tsv | sed -r "s:,$::g")
values=$(
  awk -F "\t" '{
  	if( NR>2){
  		match($2, "varchar");
		if(RLENGTH>-1){
			printf "\""$3"\","
		}else{
			printf $3","
		}
	}
  }' tableValues.tsv | sed -r "s:,$::g"

)

query="INSERT INTO $table (id,$attributes) (${values});"
echo $query

mysql -u root -D brapi_dan -pkoolkool -e "$query"