var inventory;

var Item = {
  init: function (id) {
    this.id = id;
    this.name = "";
    this.stockNumber = "";
    this.quantity = 1;

    return this;
  },
};

(function() {
  var currentID = 0;

  inventory = {
    collection: [],

    setDate: function() {
      $("#order_date").text(new Date().toUTCString());
    },

    cacheTemplate: function() {
      $script = $("#inventory_item").remove();
      return $script.html()
    },

    newItem: function(e) {
      e.preventDefault()
      var tr = this.template.replace(/ID/g, currentID);
      $("#inventory").append(tr)
      this.collection.push(Object.create(Item).init(currentID));
      currentID += 1;
      console.log(this.collection)

    },

    update: function($row) {
      item = this.collection.find(function(i) {
        return i.id === Number(this.findId($row));
      }, this);

      item.name = $row.find("input[name^=item_name]").val();
      item.stockNumber = $row.find("input[name^=item_stock_number]").val();
      item.quantity = $row.find("input[name^=item_quantity]").val();
      console.log(this.collection)
    },

    updateItem: function(e) {
      var $row = $(e.target).closest("tr");
      this.update($row)
    },

    findId: function($row) {
       return Number($row.find("input[type=hidden]").val());
    },

    bindEvents: function() {
      $("#inventory").on("blur", "input", this.updateItem.bind(this));
      $("#inventory").on("click", "a", this.delete.bind(this));
      $("#add_item").on("click", this.newItem.bind(this));

    },

    delete: function(e) {
      e.preventDefault();
      var $row = this.findParent($(e.target)).remove()
      var id = this.findId($row)
      this.collection = this.collection.filter((object) => object.id != id);
    },

    findParent($e) {
      return $e.closest("tr")
    },

    init: function() {
      this.setDate();
      this.template = this.cacheTemplate();
      this.bindEvents();

    },
  };
})();

$(inventory.init.bind(inventory));

