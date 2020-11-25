var exercises = ["pullups", "pushups", "situps", "jogging", "plank", "curls"]
var coreExercises = ["situps", "plank"]

favExercises.onshow = function() {
  selExercises.clear()
   for (i = 0; i <= exercises.length - 1; i++) {
    selExercises.addItem(exercises[i])
}
}
selExercises.onfocusout = function() {
for (i = 0; i < coreExercises.length - 1; i++) {
  selExercises.addItem(coreExercises[i])
}
}

selExercises.onclick= function(s){
  if (typeof(s)=="object"){
  return
  }else{
    selExercises.value= s
    NSB.MsgBox(`The user chose ${s} and .selection is ${selExercises.selection}.`)
  }
  }


btnDone.onclick = function() {
  if (selExercises.text[0] == "situps" && selExercises.text[1] == "plank") {
    lblFav.hidden = false
    lblFav.textContent = `You chose ${selExercises.text[0]} and ${selExercises.text[1]} - those are the two core exercises.`
  } else {
    lblFav.hidden = false
    lblFav.textContent = "You did not pick the two core exercises"
  }
}
btnToNav.onclick=function(){
  ChangeForm(describeYou)
}



