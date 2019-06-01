var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"]
  
function addElementToBeginningOfArray(){
  chocolateBars = ['cookies', chocolateBars]
}

function destructivelyAddElementToEndOfArray(){
  return chocolateBars.unshift("cookies") 
}