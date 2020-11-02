$(document).ready(function(){

  let scriptName=[
    'setup'
  ]

  var pathname=document.location.pathname
  var paths=pathname.split("/").splice(1)

  if(paths[1]=="phenotyping"){
     scriptName=[
      'setup'
    ]
  }

  scriptTarget = $('script#actions')[0];
  for (s in scriptName){
    let url="/javascripts/phenotyping/"+scriptName[s]+".js";
    let script = document.createElement('script');
    script.src = url;
    scriptTarget.parentNode.insertBefore(script, scriptTarget);
  }



});