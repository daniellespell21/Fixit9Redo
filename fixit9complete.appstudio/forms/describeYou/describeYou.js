rbnPersonality.onclick = function() {
  // get the text of the option chosen by the user
  let userChoice = $("input[name=rbnPersonality]:checked").prop("value")
  lblType.value = `I would agree that you are a ${userChoice} person too!`


}
btnTo.onclick=function(){
  ChangeForm(Voting)
}

