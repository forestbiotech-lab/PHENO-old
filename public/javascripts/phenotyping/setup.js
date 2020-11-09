$(document).ready(function(){
  $('a.btn').click(function(){
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
  const blockWidth=7
  $('#blocks').change(function(){
    let numberOfBlocks=parseInt($(this).val())
    $('.study-design').empty()
    for(let i=1; i<=numberOfBlocks; i++){
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
    for(let r=0; r<rows; r++){
      var row=mkel('div',{class:'d-flex'},body)
      if(!(body instanceof Element)){
        body=body[0]
      }
      body.parentNode.style.width=blockWidth*cols+"rem"  
      for(let c=0; c<cols; c++){
        let plot=mkel('div',{class:"plot rounded border d-flex justify-content-center"},row)
        let plotText=mkel('p',{class:"align-self-center p-2",row:r,col:c},plot)
        plotText.textContent=`Plot_row:${r}:col:${c}`
      }
    }
  }


  $('button.upload-augment-file').click(function(){
    $('input#augment-file').click();
  });
  $('input#augment-file').on('change', function(){
    let self=$(this)
    var files = $(this).get(0).files;
    if (files.length == 1){
      // One or more files selected, process the file upload

      // create a FormData object which will be sent as the data payload in the
      // AJAX request
      var formData = new FormData();
      // loop through all the selected files
      formData.append('uploads[]', files[0], files[0].name);
      
      $.ajax({
        url: `/phenotyping/mapping/upload`,
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(data,textStatus,jqXHR){
          if(success) success(data)
        },
        fail: function(jqXHR,textStatus,err){
          displayToast("Error",err,4000)
        },
        xhr: function() {
          return progress()
        }
      });
      function progress(){
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {
          let progressBar=makeProgressBar("progress-augment-dynamic")
          let pocketProgress=self.closest('.form-group').children('.pocket-progress')
          pocketProgress.empty()
          pocketProgress.append(progressBar)
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            percentComplete = parseInt(percentComplete * 100);
            progressBar=$('.progress.progress-augment-dynamic .progress-bar')
            progressBar.text(percentComplete + '%');
            progressBar.width(percentComplete + '%');
            if (percentComplete === 100) {
              progressBar.html('Done');
            }
          }
        }, false);
        return xhr;
      }
    }
    function success(data){
      filename=data.file.name
      hash=data.file.hash
      if(filename=="UnsupportedFile"){
        displayToast("Warning!","Unsupported file type! Please try again with another file. Should be a tab seperated value (.tsv) file.")
        resetProgressBar(".progress-augment-dynamic")
      }else{
        //let table=makePreviewTable(self,data)

      }
    }
  })

  function makeProgressBar(identifier){
    let progress=mkel('div',{class:`progress ${identifier}`})
    mkel("div",{
      class:"progress-bar bg-success",
      role:'progressbar'
    },progress)
    return progress
  }

  (function(){
    $.ajax({
      url:"/phenotyping/mapping/parse",
      success:function(data,textStatus,jqXHR){
        loadMapping(data)
      },
      fail:function(jqXHR,textStatus,error){
        displayToast("Error",err,4000)
      }
    })
  })();


  function loadMapping(data){
    let blocks=Object.keys(data)
    let numberOfBlocks=blocks.length
    let numberOfRows=data[blocks[0]].body.length
    let numberOfCols=data[blocks[0]].body[0].length

    let inputBlocks=$('.form-group input#blocks')
    let inputRows=$('.form-group input#rows')
    let inputCols=$('.form-group input#cols')

    inputBlocks.val(numberOfBlocks)
    inputBlocks.trigger('change')

    inputRows.val(numberOfRows)
    inputRows.trigger('change')
    inputCols.val(numberOfCols)
    inputCols.trigger('change')
    
    Object.entries(data).forEach(([block,blockData])=>{
      jqBlock=$(`.card .block#${blockData.headerId}`)
      if(jqBlock.length!=0){
        blockData.body.forEach((row,r)=>{
          row.forEach((col,c)=>{
            jqBlock.find(`.plot p[row|=${r}][col|=${c}]`).text(col)
          })
        })
      }      
    })

    
  }
})