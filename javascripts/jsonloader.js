// This IIFE will add a new module to Carlot in the
// namespace of CarLot.Inventory
var CarLot = (function (globalScopeCarLot) {

  // Define a private scope variable to store cars
  let _car_inventory = [];  

  // Start building the Object that will be attached
  // to the CarLot.Inventory namespace
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