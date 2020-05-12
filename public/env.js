var randomNumber=function(max){
  return Math.floor(Math.random() * Math.floor(max));
} 

var remoteRoll=function(max){
  $.get('/roll',{number:max},function(result){
    console.log(result)
    $('#spanText').text(result.rolledNumber)   

  })

}


$(document).ready(function(){
  console.log('Ready')
  $('#randomButton').click(function(){
    $('#spanText').text(randomNumber(10))   
  })
  $('#d4Button').click(function(){
    remoteRoll(4)
  })
  $('#d6Button').click(function(){
    $('#spanText').text(randomNumber(6))   
  })
  $('#d20Button').click(function(){
    $('#spanText').text(randomNumber(20))   
  })

})
