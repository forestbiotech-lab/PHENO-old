#!/usr/bin/env bash

table=$(head -1 tableValues.tsv)
echo $table
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
echo $query

mysql -u testing -D brapi_dan -ptest -e "$query"