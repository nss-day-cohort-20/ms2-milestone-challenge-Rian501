var CarLot = (function (globalScopeCarLot) {

  let _car_inventory = [];  

  let inventory = Object.create(null, {
    loadInventory: {
      value: function (callback) {
        var inventoryLoader = new XMLHttpRequest();
        inventoryLoader.open("GET", "javascripts/inventory.json");
        inventoryLoader.send();
        inventoryLoader.addEventListener("error", function () {
          window.alert("There was an error fetching the data!");
        });
        inventoryLoader.addEventListener("load", function () {
          _car_inventory = JSON.parse(event.target.responseText).cars;
          console.log("car array of objects", _car_inventory);
          callback(_car_inventory, CarLot.DOMside.printToDOM);
        });
      }
    }
  })

  globalScopeCarLot.Inventory = inventory;
  return globalScopeCarLot;

})(CarLot || {});