// In this exercise, you'll build a simple inventory management system. The system is composed of an item creator, an items manager, and a reports manager. The item creator makes sure that all necessary information are present and valid. The item manager is responsible for creating items, updating information about items, deleting items, and querying information about the items. Finally, the report manager generates reports for a specific item or ALL items. Reports for specific items are generated from report objects created from the report manager. The report manager is responsible for reports for all items.

// Component Specifications
// Here's all the required information for an item:

// SKU code: This is the unique identifier for a product. It consists of the first 3 letters of the item and the first 2 letters of the category. If the item name consists of two words and the first word consists of two letters only, the next letter is taken from the next word.
// Item name: This is the name of the item. It must consist of a minimum of 5 characters. Spaces are not counted as characters.
// Category: This is the category that the item belongs to. It must consist of a minimum of 5 characters and be only one word.
// Quantity: This is the quantity in stock of an item. This must not be blank. You may assume that a valid number will be provided.
// The following are the methods that the items manager can perform:

// create: This method creates a new item. Returns false if creation is not successful.
// update: This method accepts an SKU Code and an object as an argument and updates any of the information on an item. You may assume valid values will be provided.
// delete: This method accepts an SKU Code and deletes the item from the list. You may assume a valid SKU code is provided.
// items: This property returns all the items.
// inStock: This method list all the items that have a quantity greater than 0.
// itemsInCategory: This method list all the items for a given category
// The following are the methods on the reports managers:

// init: This method accepts the ItemManager object as an argument and assigns it to the items property.
// createReporter: This method accepts an SKU code as an argument and returns an object.
// The returned object has one method, itemInfo. It logs to the console all the properties of an object as "key:value" pairs (one pair per line). There are no other properties or methods on the returned object (except for properties/methods inherited from Object.prototype).
// reportInStock: Logs to the console the item names of all the items that are in stock as a comma separated values.
// Notes:

// There's no need to add the ability to validate the uniqueness of the SKU code. Given the current description, it's possible that a duplicate will exist.
// Each required piece of information for an item corresponds to one property.
// If any of the require information provided is not valid, the item creator returns an object with a notValid property with a value of true.
// The created item objects should not have any methods/properties on them other than the required information above and those inherited from Object.prototype.
// You may add methods to the item manager as you deem necessary.
// Here is a sample run that you can use a reference:



// PROBLEM p1 - get item creator to work
// p

// Responsible for state
  // SKU code - unique ID for product - consists of first 3 letters of item and first two letters of category
    // if item name is two words and the first word is only 2 letters long then use the next letter of teh second word (aka don't use space)
// item name - must be min of 5 chars, spaces are not counted
// category - must be 5 chars and only one word
// quantity - must not be blank (assume valid num will be provided)




// Responsibility for these behaviours

  // create: This method creates a new item. Returns false if creation is not successful.
  // update: This method accepts an SKU Code and an object as an argument and updates any of the information on an item. You may assume valid values will be provided.
  // delete: This method accepts an SKU Code and deletes the item from the list. You may assume a valid SKU code is provided.
  // items: This property returns all the items.
  // inStock: This method list all the items that have a quantity greater than 0.
  // itemsInCategory: This method list all the items for a given category

  // objects created in itemCreator are stored in a itemManager object.
  // item manager can have any methods we neeed
    // ItemManager.items - returns the items created.

var ItemCreator = function(name, category, quantity) {
  function validInfo() {
    return validName() && validCategory() && validQuantity();
  }

  function validName() {
    return name.match(/[A-Z]/ig).length >= 5
  }

  function validCategory() {
    return !(/[^A-Z]/i.test(category) && category.length < 5)
  }

  function validQuantity() {
    if (quantity === 0) return true;
    return !!quantity
  }

  function generateSKU() {
    if (validName() && validCategory()) {
      let firstHalf = name.replace(/[^A-Z]/i, "").slice(0, 3);
      let secondHalf = category.slice(0, 2);
      return (firstHalf + secondHalf).toUpperCase();
    }
  }

  return {
      name: name,
      category: category,
      quantity: quantity,
      validItem: validInfo(name, category, quantity),
      sku: generateSKU(name, category, quantity),
    }
}

var ItemManager = {
  items: {},
  create: function(name, category, quantity) {
      var newItem = ItemCreator(name, category, quantity);
      if (newItem.validItem) {
        this.items[newItem.sku] = newItem
        return newItem;
      } else {
        return false;
      }
  },

  update: function(sku, details) {
      Object.assign(this.items[sku], details);
    },

  inStock: function() {
    var itemsInStock = Object.keys(this.items).filter((sku) => this.items[sku].quantity > 0)
    return itemsInStock.map((sku) => this.items[sku]);
  },

  itemsInCategory: function(category) {
    let categoryItems = Object.keys(this.items).filter((sku) => this.items[sku].category === category)
    return categoryItems.map((sku) => this.items[sku]);
  },

  delete: function(sku) {
    delete this.items[sku]
  }
}

var ReportManager = {
  init: function(itemManager) {
    this.items = itemManager.items
  },

  reportInStock: function () {
    ItemManager.inStock.call(this).forEach(function(inStockItems) {
      console.log(inStockItems.name)
    })
  },

  createReporter: function(sku) {
    var self = this
    return {
      itemInfo: function() {
        var item = self.items[sku];
        for (let prop in item) {
          console.log(prop + ": " + item[prop]);
        }
      }
    }
  }
}



ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);                   // invalid - name is too short
ItemManager.create('asd a', 'sports', 0);                 // invalid - name is too short - spaces shouldn't count
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');                 // invalid - must have quantity
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);    // invalid - category must be one word
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
ItemManager.create('kitchen pot', 'cook', 3);           // invalid - category is too short

ItemManager.items;
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// // logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
// console.log(ItemManager.inStock());
// // returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// // logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// // returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
// console.log(ItemManager.items);
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)

var kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10