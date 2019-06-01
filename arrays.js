var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"]
  
function addElementToBeginningOfArray(){
  return ['cookies', ...chocolateBars]
}

function destructivelyAddElementToEndOfArray(){
  return chocolateBars.unshift("cookies") 
}