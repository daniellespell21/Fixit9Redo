hmbMenu.onclick=function(s){
  if (typeof(s) == "object"){ 
    return 
  } else { 
  hmbMenu.value = s  
 switch(s) {
  case "Describe You":
    ChangeForm(describeYou)
    break;
  case "Dessert Voting":
    ChangeForm(Voting)
    break;
  case "Fav Exercises":
    ChangeForm(favExercises)
    break;
  default:
  return
}
}
}