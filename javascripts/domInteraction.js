//put the string into the DOM and also do the input box interaction

var CarLot = (function (globalScopeCarLot) {
	let domside = Object.create(null);
	let outputDiv = document.getElementById('output');

	domside.printToDOM = function (HTMLString) {
		outputDiv.innerHTML = HTMLString;
	}

globalScopeCarLot.DOMside = domside;
  return globalScopeCarLot;

})(CarLot || {});