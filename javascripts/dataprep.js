var CarLot = (function (globalScopeCarLot) {
	let dataprep = Object.create(null);

	dataprep.buildString = function (arrayOfObjs, cb2) {
	  let HTMLString = ''
	  for (let i=0; i < arrayOfObjs.length; i++) {
	     HTMLString += `
	      <div class="card">
	        <header><h1>${arrayOfObjs[i].year} ${arrayOfObjs[i].make}  ${arrayOfObjs[i].model}</h1></header>
	        <article class="deets">${arrayOfObjs[i].description}<br>Our Low Price: $${arrayOfObjs[i].price}</article>
	      </div>`
	  }
	  cb2(HTMLString);
	}
    
   
  globalScopeCarLot.Dataprep = dataprep;
  return globalScopeCarLot;

})(CarLot || {});
