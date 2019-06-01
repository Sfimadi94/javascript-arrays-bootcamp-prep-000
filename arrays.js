var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"]
  
function addElementToBeginningOfArray(){
  return [...chocolateBars,'foo', 1]
}

function destructivelyAddElementToEndOfArray(){
  return chocolateBars.unshift("cookies") 
}