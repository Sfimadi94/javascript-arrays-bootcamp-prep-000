var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"]
  
function addElementToBeginningOfArray(){
  return ['food', ...chocolateBars]
}

function destructivelyAddElementToEndOfArray(){
  return chocolateBars.unshift("cookies") 
}