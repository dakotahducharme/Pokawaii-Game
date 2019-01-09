$('h1').velocity('callout.bounce', {
  duration: 3000
})


$('#start').on('click', function() {
  $('#start').remove()
  $('.homepage').append('<p id="ask-name">Oh! I know you! Yer name is uh....um...</p>')
  $('.homepage').append('<ul><li class="name-input"><a href="naruto.html" id="naruto">Naruto</a></li></ul>')
  $('.homepage').append('<ul><li class="name-input"><a href="sakura.html" id="sakura">Sakura</a></li></ul>')
  $('.homepage').append('<ul><li class="name-input"><a href="link.html" id="link">Link</a></li></ul>')
  $('.homepage').append('<ul><li class="name-input"><button id="zelda">Zelda</button></li></ul>')
});
