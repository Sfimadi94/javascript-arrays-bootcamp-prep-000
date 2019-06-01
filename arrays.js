var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"]
  
function addElementToBeginningOfArray(){
  return [...chocolateBars,'food']
}

function destructivelyAddElementToEndOfArray(){
  return chocolateBars.unshift("cookies") 
}