#!/usr/bin/env python3
from scripts.database import Database as db

instituteFileReader=open('/home/brunocosta/Documentos/BrAPI/Institute codes - 4 brapi Country Codes_.tsv.csv','r')

header=instituteFileReader.readline().strip().replace(" ","_").split("£")
print(header)
instituteInfo=[]
for i in instituteFileReader:
	d={}
	typeOfI="INSTITUTION"
	for key,value in zip(header,i.strip().split("£")):
		if key in header[5:8]:
			if value=="1":	
				d[key]="true"
			else:
				d[key]="false"	
		else:	
			d[key]=value
		if key in header[5:8] and value=="1":
#/////////////////////////////////////
			if(key=="BOTANICAL_GARDEN"):
				if(key=="BOTANICAL_GARDEN" and typeOfI=="GENBANK"):
					typeOfI="GENEBANK"
				else:
					typeOfI=key
			else:
				typeOfI="GENEBANK"

	d["typeOfI"]=typeOfI		
	instituteInfo.append(d)	


print(instituteInfo[3])
countryCode=instituteInfo[3]["ISO3"]
print(countryCode)

db=db()

for row in instituteInfo:
	#print(row) 
	row["FULL_NAME_LOCATION"]="%(FULL_NAME)s - %(CITY_STATE)s" %(row)
	structureLocation="""INSERT INTO Location
		(name,abbreviation,locationType,latitude,longitude,altitude,country_id)
		VALUES
		(%(FULL_NAME_LOCATION)s,%(ACRONYM)s,%(typeOfI)s,%(LATITUDE)s,%(LONGITUDE)s,%(ALTITUDE)s,
		(select id from Country where code=%(ISO3)s))"""
	try:
		db.prettyPrint(structureLocation,row)
		locationId=db.insertData(structureLocation,row)
	except Exception as e: 
		print(row)
		db.prettyPrint(structureLocation,row)
		print(e)	
		quit(1)
	row["locationId"]=locationId
	structureInstitution="""INSERT IGNORE INTO Institution
	(code,name,locationId)
	VALUES (%(INSTCODE)s,%(FULL_NAME)s,%(locationId)s)
	"""
	#db.prettyPrint(structureInstitution,row)
	db.insertData(structureInstitution,row)
	keys=["ECPACRONYM","TYPE","GENEBANK_LONG_TERM_COLLECTIONS","BOTANICAL_GARDEN","GENEBANK_MEDIUM_TERM_COLLECTIONS","GENEBANK_SHORT_TERM_COLLECTIONS","STREET_POB","CITY_STATE","ZIP_CODE","PHONE","FAX","EMAIL","URL","UPDATED_ON","V_INSTCODE"]
	for key in keys:
		d={"locationId":locationId,"key":key,"value":row[key]}
		structureAdditionalInfo=""" INSERT INTO LocationAdditionalInfo 
		(location,propertyName,propertyValue)
		VALUES (%(locationId)s,%(key)s,%(value)s)"""
		#db.prettyPrint(structureAdditionalInfo,d)
		db.insertData(structureAdditionalInfo,d)
db.commit()		
db.close()