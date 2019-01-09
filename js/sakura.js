function startMap () {
  $('#map').append('<img id="basic-map" src="map.gif">')
}


$('.homepage').remove();
$('body').append('<div class="sakura-adventure"><div id="map-color"><p class="welcome">Oh yes!! Sakura, of course. Your favorite color is pink, right? So, is it safe to assume you would like a pink map? </p></div></div>')
$('.welcome').velocity('transition.shrinkIn', {
  duration: 300,
})
$('body').append('<ul><li><a href="pink-sakura.html" id="yes">Yes</a></li></ul>')
$('body').append('<ul><li><button id="no">No</button></li></ul>')
$('#no').on('click', function() {
  $('.welcome').remove()
  startMap();
})
