#!/usr/bin/env python3

import  mysql.connector
from mysql.connector import errorcode
import json
from scripts.colors import Bcolors as bc
import re

class Database:
	def __init__(self):
		config=json.load(open("../.config_db.js"))		
		try:
			cnx = mysql.connector.connect(user=config["user"],password=config["password"],host=config["host"],database=config["database"])
			print("[DATABASE] - Connection established to: "+config["database"])
		except mysql.connector.Error as err:
		  if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
		    print("[DATABASE] - Something is wrong with your user name or password")
		  elif err.errno == errorcode.ER_BAD_DB_ERROR:
		    print("[DATABASE] - Database does not exist")
		  else:
		    print(err)
		  cnx.close()
		self.cnx=cnx
		self.cursor = cnx.cursor()
	
	def insertData(self,insertStructure,data):
		self.cursor.execute(insertStructure, data)
		return self.cursor.lastrowid

	def execute(self,stm):
		self.cursor.execute(stm)
		
	def query(self,query):
		self.cursor.execute(query)
		print(self.cursor)
		return [row for row in self.cursor]

	def update(self,data,parameters):
		#Data with columns and values
		#Parameters with Table and ID 
		updates=""
		for key in data.keys():
			column=key
			value=data[key]
			updates=updates+"%s=%s, " %(column,value)
		##Remove trailing comma 
		parameters[updates]=updates[0:-1]
		query="UPDATE %(table)s SET %(updates)s WHERE id=%(id)s" %(parameters)
		self.cursor.execute(query)

	def commit(self):
		self.cnx.commit()
		print("[DATABASE] - Data inserted")

	def close(self):
		self.cursor.close()
		self.cnx.close()
		print("[DATABASE] - Connection closed")

	def prettyPrint(self,structure,data):
		structure=re.sub("(%\([a-zA-Z0-9_-]*\)s)", "€(OKBLUE)s\g<1>€(ENDC)s", structure)
		query=structure %(data)
		query=query.replace("€","%")
		query=query.replace("SELECT", "%(WARNING)sSELECT%(ENDC)s")
		query=query.replace("INSERT", "%(WARNING)sINSERT%(ENDC)s")
		query=query.replace("FROM", "%(FAIL)sFROM%(ENDC)s")
		query=query.replace("WHERE", "%(FAIL)sWHERE%(ENDC)s")
		query=query.replace("INTO", "%(FAIL)sINTO%(ENDC)s")
		query=query.replace("VALUES", "%(FAIL)sVALUES%(ENDC)s")
		print()
		print()
		print(query %(bc.DCOLORS))
