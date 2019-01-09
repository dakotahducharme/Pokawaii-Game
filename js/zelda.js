function startMap () {
  $('#map').append('<img id="basic-map" src="map.gif">')
}
startMap();

$('#zelda').on('click', function() {
  $('.homepage').remove();
  $('body').append('<div class="zelda-adventure"><p class="welcome">Welcome to Pokawaii, Princess Zelda. May the Goddess smile upon you.</p></div>')
  $('.zelda-adventure').append('<li><button id="thanks">thank you</button></li>')

  $('.welcome').velocity('transition.shrinkIn', {
    duration: 300,
  })
  $('#thanks').on('click', function() {
    $('.welcome').remove()
    startMap();
  })

})
