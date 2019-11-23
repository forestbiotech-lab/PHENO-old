$(document).ready(function(){
	$('.btn').click(function(){
		that=$(this)
		console.log(that)
		let row=that.attr('row')
		let pot=that.attr('pot')
		let location=getLocation(row,pot)
		window.location=location
	})



	function getLocation(row,pot){
		let location=window.location.href
		let locationArray=location.split("/")
		let newPot=parseInt(locationArray.pop())+parseInt(pot)
		let newRow=parseInt(locationArray.pop())+parseInt(row)
		location=location.replace(/[0-9]+\/[0-9]+$/,`${newRow}/${newPot}`)
		return location
	}

})