var games = [{
  "title": "The Legend of Zelda: Majora's Mask 3D",
  "id": 1,
  "category": "Nintendo 3DS"
}, {
  "title": "Super Smash Bros.",
  "id": 2,
  "category": "Nintendo 3DS"
}, {
  "title": "Super Smash Bros.",
  "id": 3,
  "category": "Nintendo WiiU"
}, {
  "title": "LEGO Batman 3: Beyond Gotham",
  "id": 4,
  "category": "Nintendo WiiU"
}, {
  "title": "LEGO Batman 3: Beyond Gotham",
  "id": 5,
  "category": "Xbox One"
}, {
  "title": "LEGO Batman 3: Beyond Gotham",
  "id": 6,
  "category": "PlayStation 4"
}, {
  "title": "Far Cry 4",
  "id": 7,
  "category": "PlayStation 4"
}, {
  "title": "Far Cry 4",
  "id": 8,
  "category": "Xbox One"
}, {
  "title": "Call of Duty: Advanced Warfare",
  "id": 9,
  "category": "PlayStation 4"
}, {
  "title": "Call of Duty: Advanced Warfare",
  "id": 10,
  "category": "Xbox One"
}];

$(function (){
  var $gameRows = $("tbody tr");
  var $checkboxes = $(":checkbox")

  $gameRows.hover(function(event) {
    $(event.target).parent().toggleClass("games-hover");
  }, function() {
    $gameRows.removeClass("games-hover");
  });

  $checkboxes.change(function(event) {
    var changedCheckbox = event.target.name;
    var gameIdsToRemove = games.filter((game) => game.category === changedCheckbox).map((game) => game["id"]);

    var $filteredGames = $gameRows.filter(function (index) {
      return gameIdsToRemove.includes($gameRows.eq(index).data("id"));
    });

    $filteredGames.toggle();
  });


});


{/* <th><a href="#" id=gameTitle>Title</a></th>
<th><a href="#" id="consoleTitle">Console</a></th> */}