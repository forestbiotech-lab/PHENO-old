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
  const blockWidth=18
  $('#blocks').change(function(){
    let numberOfBlocks=parseInt($(this).val())
    $('.study-design').empty()
    for(let i=0; i<numberOfBlocks; i++){
      let block=mkel("div",{class:"card block",id:i,style:`width: ${blockWidth}rem`})
      $('.study-design').append(block)

      let title=mkel('div',{class:"card-header"},block)
      let h3=mkel('h3',{class:"card-title"},title)
      let body=mkel('div',{class:"card-body"},block)
      h3.textContent='Block '+i
      if(numberOfBlocks==1){
        let numOfCols=$('#cols').val()
        let numOfRows=$('#rows').val()
        if(numOfCols=="0"){
          $('#cols').val(1)
        }
        if(numOfRows=="0"){
          $('#rows').val(1)
        }
      }
      let cols=parseInt($('#cols').val())
      let rows=parseInt($('#rows').val())
      buildPlots(cols,rows,body)
    }
  })
  $('#rows').change(function(){
    let rows=parseInt($(this).val())
    let cols=parseInt($('#cols').val())
    $('.block .card-body').each(function(){
      let body=$(this)
      body.empty()
      buildPlots(cols,rows,body)
    })
  })
  $('#cols').change(function(){
    let cols=parseInt($(this).val())
    let rows=parseInt($('#rows').val())
    $('.block .card-body').each(function(){
      let body=$(this)
      body.empty()
      buildPlots(cols,rows,body)
    })
  })
  function buildPlots(cols,rows,body){
    for(let i=0; i<rows; i++){
      var row=mkel('div',{class:'d-flex'},body)
      if(!(body instanceof Element)){
        body=body[0]
      }
      body.parentNode.style.width=blockWidth*cols+"rem"  
      for(let i=0; i<cols; i++){
        mkel('div',{class:"plot rounded border"},row)
      }
    }
  }
})