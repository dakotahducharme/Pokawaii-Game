console.log('hi?')
$('h1').velocity('callout.bounce', {
  duration: 3000
})

$('#start').on('click', function() {
  $('#start').remove()
  $('.homepage').append('<p id="ask-name">Oh! I know you! Yer name is uh....um...</p>')
  $('.homepage').append('<li class="name-input"><button id="naruto">Naruto</button></li></ul>')
  $('.homepage').append('<li class="name-input"><button id="sakura">Sakura</button></li></ul>')
  $('.homepage').append('<li class="name-input"><button id="link">Link</button></li></ul>')
  $('.homepage').append('<li class="name-input"><button id="zelda">Zelda</button></li>')

  // $('.welcome').append('<input type=')
  $('#naruto').on('click', function() {
    $('body').append('<div class="naruto-adventure"><p class="welcome">Welcome to Pokawaii, Naruto!</p></div>')
    $('.welcome').velocity('transition.shrinkIn', {
      duration: 300,
    })
    $('.homepage').remove();
  })
})
