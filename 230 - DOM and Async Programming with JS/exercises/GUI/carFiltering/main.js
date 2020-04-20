var cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];



var App  = {
  allCars: cars,
  carTemplate: Handlebars.compile($("#carTemplate").html()),
  $filters: $("#filters select"),

  renderCars: function() {
    $("#carResults").append(this.carTemplate({cars: this.allCars}));
  },

  renderOptions: function() {
    var self = this;

    this.$filters.each(function(_, selectBox) {
      var options = self.uniqueCarPropValues(selectBox)

      options.forEach(function (value) {
        $selectBox.append(new Option(value, value))
      });

    });
  },

  uniqueCarPropValues: function(selectBox) {
    $selectBox = $(selectBox)
    var selectProperty = $selectBox.attr("name");
    return this.allCars.map((item => item[selectProperty])).filter(unique);
  },

  handleFilters: function(e) {
    var selectBox = e.target.name
    var selectedValue = $(e.target).children("option:selected").val();
    var self = this;
    $(".cars").each(function(idx, element) {
      if (selectedValue === "Any"){
        $(this).fadeIn();
      } else if (self.allCars[idx][selectBox] === selectedValue){
          $(element).show();
      } else {
        $(element).fadeOut();
      }
    });
  },

  init: function () {
    this.renderCars();
    this.renderOptions();
    $("#filters").on("click", "select", this.handleFilters.bind(this));
    this.$filteredCars = $(".cars")
  },
}

App.init()

function unique(value, index, self) {
  return self.indexOf(value) === index;
}
