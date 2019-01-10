//h1 bounce on page load
$('h1').velocity('callout.bounce', {
  duration: 3000
})

//settings
const moveDistance = 25;
const gameSize = {height: 700, width: 700};
const options = {
  sakura: {
    character: 'sakura-char.png',
    map: 'pink-sakura.gif',
  },
  link: {
    character: 'link-char.png',
    map: 'map.gif',
  },
  zelda: {
    character: 'zelda-char.png',
    map: 'map.gif',
  },
  naruto: {
    character: 'naruto-char.png',
    map: 'map.gif',
  },
}
const coins = [
  {top: 20, left: 200},
  {top: 200, left: 40},
  {top: 35, left: 665},
  {top: 80, left: 400},
  {top: 450, left: 30},
  {top: 600, left: 350},
  {top: 300, left: 300},
]
// controls
const UP = ['Up', 'ArrowUp', 'w']
const DOWN = ['Down', 'ArrowDown', 's']
const LEFT = ['Left', 'ArrowLeft', 'a']
const RIGHT = ['Right', 'ArrowRight', 'd']

//alert the developer if move distance is too high
if (moveDistance >= gameSize.height || moveDistance >= gameSize.width) {
  alert("Hey! I can't move!")
}

// remove start button and build character select buttons
function setupCharacterSelect() {
  $('#start').remove()
  $('.homepage').append('<p id="ask-name">Oh! I know you! Yer name is uh....um...</p>')
  $('.homepage').append('<ul id="character-select"></ul>')
  $('#character-select').append('<li class="name-input"><button id="naruto">Naruto</button></li>')
  $('#character-select').append('<li class="name-input"><button id="sakura">Sakura</button></li>')
  $('#character-select').append('<li class="name-input"><button id="link">Link</button></li>')
  $('#character-select').append('<li class="name-input"><button id="zelda">Zelda</button></li>')

  $('#character-select button').on('click', (e) => {
    loadGame(options[e.target.id])
  })
}


//loads map, character and coins, listen for key presses
function loadGame ({character, map}) {
  $('.homepage').remove();
  $('#game').css("background-image", `url('${map}')`)
  $('#game').append(`<img id="character" src="${character}">`)
  for (var i = 0; i < coins.length; i++) {
    placeCoin({...coins[i], id: i});
  }
  $(document).on('keydown', (e) => keyPressHandler(e));
}

// places coins on map
function placeCoin({top, left, id}) {
  $('#game').append(`<div id='coin-${id}' class="coin"/>`)
  $(`#coin-${id}`).css({"top":top, "left":left});
}

//telling the character to "move" on keypress
function keyPressHandler(e) {
  const {top, left} = getCharacterPosition();
  const {height, width} = getCharacterSize();

  if (RIGHT.includes(e.key)) {
    if (left + width <= gameSize.width - moveDistance) {
      setCharacterPosition({
        top,
        left: left + moveDistance,
      });
    }
  } else if (LEFT.includes(e.key)) {
    if (left >= moveDistance) {
      setCharacterPosition({
        top,
        left: left - moveDistance,
      });
    }
  } else if (UP.includes(e.key)) {
    if (top >= moveDistance) {
      setCharacterPosition({
        top: top - moveDistance,
        left,
      });
    }
  } else if (DOWN.includes(e.key)) {
    if (top + height <= gameSize.height - moveDistance) {
      setCharacterPosition({
        top: top + moveDistance,
        left,
      });
    }
  }
}

// getter for character
function getCharacter() {
  return $('#character');
}

// getter for character position
function getCharacterPosition() {
  return {
    top: parseInt(getCharacter().css('top')),
    left: parseInt(getCharacter().css('left')),
  }
}

// setter for character position
function setCharacterPosition({top, left}) {
  getCharacter().css({"top":top, "left":left});
}

// getter for character size
function getCharacterSize() {
  return {
    height: parseInt(getCharacter().css('height')),
    width: parseInt(getCharacter().css('width')),
  }
}

//attach start button
$('#start').on('click', function() {
  setupCharacterSelect();
});
