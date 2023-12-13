// type ANY use as a last resort
function showMessage(msg: string /* any */) {
  return msg;
}

//console.log(showMessage([1, 2, 3, 4]));
console.log(showMessage('Hello'));
//console.log(showMessage(1));
