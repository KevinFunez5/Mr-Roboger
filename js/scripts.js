function processNumber(number){
  if (!number){
    return [];
    
  }

  const result = [];
  number = parseInt(number);
  for(let i = 0; i <= number; i++){
    let finalValue = i.toString();
    if (i.toString().includes('1')) {
      finalValue = "Beep!";
    }
    if (i.toString().includes('2')) {
      finalValue = "Boop!"
    }
    if (i.toString().includes('3')){
      finalValue = "Won't you be my neighbor?";
    }
    result.push(finalValue);
  } 
  return result;
}
$( document ).ready(function(){
  $("#process").click(function(){
    const numberFromTxt = $("#answer").val();
    const results = processNumber(numberFromTxt);
    if (results.length === 0){
      $("numbers").html("No NUmbers to Display");
      return;
    }
    for(let i = 0; i < results.length; i++) {
      $("#numbers").append("<div>" =results[i] + "</div>")
    }
  })
});
