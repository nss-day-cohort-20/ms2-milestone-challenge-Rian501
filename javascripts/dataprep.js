var CarLot = (function (globalScopeCarLot) {
	let dataprep = Object.create(null);

	dataprep.buildString = function (arrayOfObjs, domPrintCB) {
	  let HTMLString = ''
	  for (let i=0; i < (arrayOfObjs.length); i++) {
	     if (i%3 === 1) {
	     HTMLString += `
	      	<div class="card col-md-4">
		        <header><h1>${arrayOfObjs[i].year} ${arrayOfObjs[i].make}  ${arrayOfObjs[i].model}</h1></header>
		        <article class="deets"><h3>${arrayOfObjs[i].description}</h3><br><br><br></article>
		        <div class="price">Our Low Price: $${arrayOfObjs[i].price}</div>
		    </div>`
		  } else if (i%3 === 0) {
		  HTMLString += `
		  <div class="row">
		      <div class="card col-md-4">
		        <header><h1>${arrayOfObjs[i].year} ${arrayOfObjs[i].make}  ${arrayOfObjs[i].model}</h1></header>
		        <article class="deets"><h3>${arrayOfObjs[i].description}</h3><br><br><br></article>
		        <div class="price">Our Low Price: $${arrayOfObjs[i].price}</div>
			  </div>`
		  } else if (i%3 === 2) {
		  HTMLString += `
		      <div class="card col-md-4">
		        <header><h1>${arrayOfObjs[i].year} ${arrayOfObjs[i].make}  ${arrayOfObjs[i].model}</h1></header>
		        <article class="deets"><h3>${arrayOfObjs[i].description}</h3><br><br><br></article>
		        <div class="price">Our Low Price: $${arrayOfObjs[i].price}</div>
			  </div>
		     <div class="col-md-1"></div>
	      </div>`
		  }
	  }
	  domPrintCB(HTMLString);
	}
    
   
  globalScopeCarLot.Dataprep = dataprep;
  return globalScopeCarLot;

})(CarLot || {});
