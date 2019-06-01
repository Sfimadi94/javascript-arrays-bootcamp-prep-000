var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"]
  
function addElementToBeginningOfArray(){
  return ['foo', 1, ...chocolateBars,]
}

function destructivelyAddElementToEndOfArray(){
  return chocolateBars.unshift("cookies") 
}