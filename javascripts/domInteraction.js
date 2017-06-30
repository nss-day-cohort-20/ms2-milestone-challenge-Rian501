//put the string into the DOM and also do the input box interaction

var CarLot = (function (globalScopeCarLot) {
	let domside = Object.create(null);
	let outputDiv = document.getElementById('output');
	let carCard = null;

	domside.printToDOM = function (HTMLString) {
		outputDiv.innerHTML = HTMLString;
	  CarLot.DOMside.addClickListener();
		}
	

	domside.addClickListener = function() {
		carCard = document.getElementsByClassName("card");
		console.log("carCards", carCard);
		for (let i=0; i< carCard.length; i++) {
			carCard[i].addEventListener("click", function() {
				domside.UnSelect(event);
				});
		}
	}

	domside.UnSelect = function(event) {
	  for (let i=0; i<carCard.length; i++) {
		carCard[i].classList.remove("selected");
		}
		domside.newSelect(event);
	}

	domside.newSelect = function(event) {
		event.currentTarget.classList.add("selected");
		let selectedCard = document.getElementsByClassName("selected")[0];
		console.log("selected card", selectedCard);
	}
  globalScopeCarLot.DOMside = domside;
  return globalScopeCarLot;

})(CarLot || {});