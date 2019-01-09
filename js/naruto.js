function startMap () {
  $('#map').append('<img id="basic-map" src="map.gif">')
}

$('body').append('<div class="naruto-adventure"><p class="welcome">Ah, yes! Naruto! I remember, hehe...How could I forget a noble ninja such as yourself? Anyway, welcome to Pokawaii</p></div>')
$('.welcome').velocity('transition.shrinkIn', {
  duration: 300,
})

$('.naruto-adventure').append('<button id="naruto-game-start">start</button>')

$('#naruto-game-start').on('click', function() {
  $('.welcome').remove()
  startMap();
})
