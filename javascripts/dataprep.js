var CarLot = (function (globalScopeCarLot) {
	let dataprep = Object.create(null);

	dataprep.buildString = function (arrayOfObjs, cb2) {
	  let HTMLString = ''
	  for (let i=0; i < (arrayOfObjs.length); i++) {
	     if (i%3 === 1) {
			// just add to row
	     // <div class="col-md-1"></div>
	     HTMLString += `
	      <div class="card col-md-4">
	        <header><h1>${arrayOfObjs[i].year} ${arrayOfObjs[i].make}  ${arrayOfObjs[i].model}</h1></header>
	        <article class="deets"><h3>${arrayOfObjs[i].description}<br><br><br>Our Low Price: $${arrayOfObjs[i].price}</h3></article>
	      </div>`
	     // <div class="col-md-1"></div>
		  } else if (i%3 === 0) {
		     // <div class="col-md-1"></div>
		  HTMLString += `
		  <div class="row">
		      <div class="card col-md-4">
		        <header><h1>${arrayOfObjs[i].year} ${arrayOfObjs[i].make}  ${arrayOfObjs[i].model}</h1></header>
		        <article class="deets"><h3>${arrayOfObjs[i].description}<br><br><br>Our Low Price: $${arrayOfObjs[i].price}</h3></article>
		      </div>`
		  } else if (i%3 === 2) {
		  HTMLString += `
		      <div class="card col-md-4">
		        <header><h1>${arrayOfObjs[i].year} ${arrayOfObjs[i].make}  ${arrayOfObjs[i].model}</h1></header>
		        <article class="deets"><h3>${arrayOfObjs[i].description}<br><br><br>Our Low Price: $${arrayOfObjs[i].price}</h3></article>
			  </div>
		     <div class="col-md-1"></div>
	      </div>`
		  }
	  }
	  cb2(HTMLString);
	}
    
   
  globalScopeCarLot.Dataprep = dataprep;
  return globalScopeCarLot;

})(CarLot || {});
