console.log('hi?')
$('h1').velocity('callout.bounce', {
  duration: 3000
})

function startMap () {
  $('body').append('<img id="basic-map" src="map.gif">')
}

$('#start').on('click', function() {
  $('#start').remove()
  $('.homepage').append('<p id="ask-name">Oh! I know you! Yer name is uh....um...</p>')
  $('.homepage').append('<ul><li class="name-input"><button id="naruto">Naruto</button></li></ul>')
  $('.homepage').append('<ul><li class="name-input"><button id="sakura">Sakura</button></li></ul>')
  $('.homepage').append('<ul><li class="name-input"><button id="link">Link</button></li></ul>')
  $('.homepage').append('<ul><li class="name-input"><button id="zelda">Zelda</button></li></ul>')

  // $('.welcome').append('<input type=')
  $('#naruto').on('click', function() {
    $('.homepage').remove();
    $('body').append('<div class="naruto-adventure"><p class="welcome">Ah, yes! Naruto! I remember, hehe...How could I forget a noble ninja such as yourself? Anyway, welcome to Pokawaii</p></div>')
    $('.welcome').velocity('transition.shrinkIn', {
      duration: 300,
    })
    $('.naruto-adventure').append('<button id="naruto-game-start">start</button>')
    $('#naruto-game-start').on('click', function() {
      startMap();
      $('.welcome').remove()
      $('#naruto-game-start').remove()
    })
  })

  $('#sakura').on('click', function() {
    $('.homepage').remove();
    $('body').append('<div class="sakura-adventure"><div id="map-color"><p class="welcome">Oh yes!! Sakura, of course. Your favorite color is pink, right? So, is it safe to assume you would like a pink map? </p></div></div>')
    $('.welcome').velocity('transition.shrinkIn', {
      duration: 300,
    })
    $('body').append('<ul><li><button id="yes">Yes</button></li></ul>')
    $('body').append('<ul><li><button id="no">No</button></li></ul>')
    $('#yes').on('click', function() {
      startMap();
      $('.welcome').remove()
      $('#yes').remove()
      $('#no').remove()
    })
    $('#no').on('click', function() {
      startMap();
    })
  })

  $('#link').on('click', function() {
    $('.homepage').remove();
    $('body').append('<div class="link-adventure"><p class="welcome">Welcome to Pokawaii, Link. May the Goddess smile upon you.</p></div>')
    $('.welcome').velocity('transition.shrinkIn', {
      duration: 300,
    })
    $('.link-adventure').append('<button id="link-game-start">start</button>')
    $('#link-game-start').on('click', function() {
      startMap();
      $('.welcome').remove()
    })
  })

  $('#zelda').on('click', function() {
    $('.homepage').remove();
    $('body').append('<div class="zelda-adventure"><p class="welcome">Welcome to Pokawaii, Princess Zelda. May the Goddess smile upon you.</p></div>')
    $('.zelda-adventure').append('<li><button id="thanks">thank you</button></li>')

    $('.welcome').velocity('transition.shrinkIn', {
      duration: 300,
    })
    $('#thanks').on('click', function() {

    })
  })
})
