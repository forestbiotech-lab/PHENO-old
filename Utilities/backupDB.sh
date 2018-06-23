#!/usr/bin/env bash

user=$1
database=$2

if [[ $1 == "" ]]; then
	echo "Terminating - User not provided"
	exit 0
fi
if [[ $2 == "" ]]; then 
	echo "Terminating - Database not provided"
	exit 0
fi

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

backup=${DIR}/../SQL/DB_backup/$(date +"%y-%m-%d-%H:%M:%S")-${database}_dump.sql

mysqldump -u ${user} --add-drop-table ${database} -p > $backup

cp $backup ${DIR}/../SQL/LATEST_dump.sql

echo "Database $database backed up successfully."

exit 0