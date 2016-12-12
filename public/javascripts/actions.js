$(document).ready(function(){
  //Set hover event for menu.
  $('.menu span.menuItem1').click(function(){window.location.replace('login')}).mouseover(function(){$(this).toggleClass('hover')}).mouseout(function(){$(this).toggleClass('hover')});
  $('.authElixir-button#authElixir').click(function(){window.location.replace('/elixir')}); 
  /*$('.manage-resource').click(function(){manageResource()});
  manageResource=function(){
  	data={
  		
  	     : $('.form .clientID').val(),
   	     : $('.form .registerToken').val()
    }
 	var url=$('.form .resourceURL').val(),
  	$.post();
  }	*/
});