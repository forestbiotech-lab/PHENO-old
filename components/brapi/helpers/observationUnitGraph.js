var Graph = require('graph-data-structure')

const SPECIAL_TABLES=["ObservationUnit", "Sample", "Plot", "Plant"]

class ObservationUnitGraph{
  constructor(){
    this.graph=Graph()
    //They are all unidirectional
    this.graph.addEdge("Sample","SamplePlant")
    this.graph.addEdge("SamplePlant","Sample")
    this.graph.addEdge("SamplePlant","Plant")
    this.graph.addEdge("Plant","SamplePlant")
    this.graph.addEdge("Plant","Plot")
    this.graph.addEdge("Plot","Plant")
    this.graph.addNode("ObservationUnit")
    this.orig=""
    this.dest=""    
  }
  set level(node){
    this.graph.removeNode("ObservationUnit")
    //Add both directions
    this.graph.addEdge(node,'ObservationUnit')
    this.graph.addEdge('ObservationUnit',node)
  }
  set origin(o){
    this.orig=o
  }
  set destination(d){
    this.dest=d
  }
  get shortestPath(){
    return this.graph.shortestPath(this.orig,this.dest)  
  }
}

function intersect(b) {
    var a=SPECIAL_TABLES;
    var t;
    if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
    return a.filter(function (e) {
        return b.indexOf(e) > -1;
    });
}

module.exports={
  graph:ObservationUnitGraph,
  SPECIAL_TABLES:SPECIAL_TABLES,
  intersect:intersect
}

