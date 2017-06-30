//put the string into the DOM and also do the input box interaction

var CarLot = (function (globalScopeCarLot) {
	let domside = Object.create(null);
	let outputDiv = document.getElementById('output');
	let carCard = null;
	let inputBox = document.getElementById('userInput');

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
		domside.targetDescripOfSelected(selectedCard);
	}

	domside.targetDescripOfSelected = function(selectedCard) {
		let selectedDescrip = selectedCard.getElementsByClassName('deets');
		doStuffToSelected(selectedCard, selectedDescrip);
	}

	function doStuffToSelected(selectedCard, selectedDescrip) {
		var highlightedCard = document.getElementsByClassName('selected');
		console.log("selected Card", selectedCard);
		inputBox.focus();
		inputBox.addEventListener('keyup', function () {
			let replacementText = inputBox.value;
			if (selectedCard.classList.contains('selected') && event.key !== 'Enter') {
				selectedCard.querySelector('.deets').innerHTML = replacementText;
				}
			if (event.key === 'Enter')  {
				// clearEvent();
				inputBox.value = '';
				}
			});
	}

	function clearEvent() {
		inputBox.removeEventListener('keyup', function() {
			let replacementText = inputBox.value;
		});
		
		
	}

  globalScopeCarLot.DOMside = domside;
  return globalScopeCarLot;

})(CarLot || {});