#!/usr/bin/env python

import sys

inputFile=sys.argv[1]

obsUnit=open('observationUnit.sql','w')
sample=open('sample.sql','w')

obsUnit.write("INSERT INTO `ObservationUnit` VALUES\n")
sample.write("INSERT INTO `Sample` VALUES \n")

def printDetailedSamples(id, line,h):
	condition=""
	entryType=""

	plotNumber=int(line[h['plotNumber']])

	if plotNumber<7:
		condition="Control"
	else:
		condition="Salt"


	StudyId=1
	level="sampleNumber"
	blockNumber=1
	entyNumber=id+1
	x=line[h['x']]
	y=int(line[h['y']])
	germplasmId=line[h['germplasmId']]
	plantingDate=line[h['plantingDate']]
	harvestDate=line[h['harvestDate']]
	replicate=line[h['x']]
	plantNumber=line[h['plantNumber']]
	levels=f'block:1;plot:{plotNumber};plant:{plantNumber}' 	  			
	containedIn="NULL"
	locationId="NULL"
	

	sampleType="Tissue Sample"
	if y == 1:
		entryType="Susceptible control"
	if y == 2:
		entryType="Tolerant control" 				
	if y > 2:
		entryType="Test"	

	tissue="Shoot"
	name=f'{condition}_Tray{plotNumber}_X{x}_Y{y}_{tissue}' 
	obsUnit.write(f'({id+1},"{name}",{StudyId},"{level}","{levels}",{blockNumber},{id+1},"{entryType}",{x},{y},{id+1},{germplasmId},"{plantingDate}","{harvestDate}",{replicate},{plantNumber},{plotNumber},{containedIn},{locationId}),\n')	
	nameSample=f'2011-11-20_{sampleType}_{tissue}'
	sample.write(f'({id+1},"{nameSample}",3,"2011-11-20",1,"{sampleType}","{tissue}","Thoroughly washed with nanopore water, 3rd fully extended leaf"),\n')	
	
	obsUnit.write(f'({id+2},"{name}",{StudyId},"{level}","{levels}",{blockNumber},{id+2},"{entryType}",{x},{y},{id+2},{germplasmId},"{plantingDate}","{harvestDate}",{replicate},{plantNumber},{plotNumber},{containedIn},{locationId}),\n')	
	sample.write(f'({id+2},"{nameSample}",3,"2011-11-20",1,"{sampleType}","{tissue}","Thoroughly washed with nanopore water, 4th fully extended leaf"),\n')	
	
	obsUnit.write(f'({id+3},"{name}",{StudyId},"{level}","{levels}",{blockNumber},{id+3},"{entryType}",{x},{y},{id+3},{germplasmId},"{plantingDate}","{harvestDate}",{replicate},{plantNumber},{plotNumber},{containedIn},{locationId}),\n')	
	sample.write(f'({id+3},"{nameSample}",3,"2011-11-20",1,"{sampleType}","{tissue}","Thoroughly washed with nanopore water, 10µl of leaf juice extract."),\n')	
	
	tissue="Root"
	nameSample=f'2011-11-20_{sampleType}_{tissue}'	
	obsUnit.write(f'({id+4},"{name}",{StudyId},"{level}","{levels}",{blockNumber},{id+4},"{entryType}",{x},{y},{id+4},{germplasmId},"{plantingDate}","{harvestDate}",{replicate},{plantNumber},{plotNumber},{containedIn},{locationId}),\n')	
	sample.write(f'({id+4},"{nameSample}",3,"2011-11-20",1,"{sampleType}","{tissue}","Thoroughly washed with nanopore water"),\n')	

	

def printSample(id, line,h):
	condition=""
	entryType=""

	plotNumber=int(line[h['plotNumber']])

	if plotNumber<=7:
		condition="Control"
	else:
		condition="Salt"


	StudyId=1
	level="sampleNumber"
	blockNumber=1
	entyNumber=id+1
	x=line[h['x']]
	y=int(line[h['y']])
	germplasmId=line[h['germplasmId']]
	plantingDate=line[h['plantingDate']]
	harvestDate=line[h['harvestDate']]
	replicate=line[h['x']]
	plantNumber=line[h['plantNumber']]
	levels=f'block:1;plot:{plotNumber};plant:{plantNumber}' 	  			
	containedIn="NULL"
	locationId="NULL"
	sampleType="Whole Organism"

	if y == 1:
		entryType="Susceptible control"
	if y == 2:
		entryType="Tolerant control" 				
	if y > 2:
		entryType="Test"	

	tissue="Biomass"
	name=f'{condition}_Tray{plotNumber}_X{x}_Y{y}_{tissue}'
	nameSample=f'2011-11-20_{sampleType}_{tissue}'

	obsUnit.write(f'({id+1},"{name}",{StudyId},"{level}","{levels}",{blockNumber},{id+1},"{entryType}",{x},{y},{id+1},{germplasmId},"{plantingDate}","{harvestDate}",{replicate},{plantNumber},{plotNumber},{containedIn},{locationId}),\n')	
	sample.write(f'({id+1},"{nameSample}",3,"2011-11-20",1,"Whole organism","Whole plant","Thoroughly washed with nanopore water"),\n')	


input=[i.strip().split("\t") for i in open(inputFile,"r").readlines()]
h=[]

id=0
counter=0
for column in input[0]:
	h.append([column,counter])
	counter+=1
h=dict(h)


#Every 8 lines if a differnt genotype
for line in input[1::]:
	x=int(line[h['x']])
	y=line[h['y']]
	print("column: "+line[h['x']]+" column: "+line[h['y']])
	if x>5:
		printDetailedSamples(id,line,h)
		id+=4
	else:
		printSample(id,line,h)
		id+=1

obsUnit.flush()
sample.flush()
obsUnit.close()
sample.close()


#print(input)

