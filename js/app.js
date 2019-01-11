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
    coin: 'ramen.gif',
    prize: 'eevee.png',
  },
  link: {
    character: 'link-char.png',
    map: 'map.gif',
    coin: 'rupee.gif',
    prize: 'eevee.png',
  },
  zelda: {
    character: 'zelda-char.gif',
    map: 'map.gif',
    coin: 'rupee.gif',
    prize: 'mew.gif',
  },
  naruto: {
    character: 'naruto-char.png',
    map: 'map.gif',
    coin: 'ramen.gif',
    prize: 'eevee.png',
  },
}

const coinCount = 10;
const coinSize = {
  x: 25,
  y: 35,
}

let coins = []

function generateCoinCoordinates(coinCount) {
  for (var i = 0; i < coinCount; i++) {
    const {x, y} = generateRandomCoordinates({x: gameSize.width - coinSize.x, y: gameSize.height - coinSize.y});
    coins.push({top: y, left: x});
  }
}

generateCoinCoordinates(coinCount);
console.log(coins)

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
function loadGame ({character, map, coin, prize}) {
  $('.homepage').remove();
  $('#game').css("background-image", `url('${map}')`);
  $('#game').append(`<img id="character" src="${character}"/>`);
  $('#game').append(`<img id="prize" src="${prize}"/>`);
  for (var i = 0; i < coins.length; i++) {
    placeCoin({...coins[i], id: i, coin});
  }
  $(document).on('keydown', (e) => keyPressHandler(e));
}

// places coins on map
function placeCoin({top, left, id, coin}) {
  $('#game').append(`<img id='coin-${id}' src="${coin}" class="coin"/>`);
  $(`#coin-${id}`).css({"top":top, "left":left});
}

//telling the character to "move" on keypress
function keyPressHandler(e) {
  const {top, left} = getGameObjectPosition(getCharacter());
  const {height, width} = getGameObjectSize(getCharacter());

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
  checkForCoinCollisions();
  if (checkForWin()) {
    $('#prize').css("display", "block")
  }
}

// getter for character
function getCharacter() {
  return $('#character');
}

function getCoin(i) {
  return $(`#coin-${i}`);
}

// getter for character position
function getGameObjectPosition(gameObject) {
  return {
    top: parseInt(gameObject.css('top')),
    left: parseInt(gameObject.css('left')),
  }
}

// setter for character position
function setCharacterPosition({top, left}) {
  getCharacter().css({"top":top, "left":left});
}

// getter for character size
function getGameObjectSize(gameObject) {
  return {
    height: parseInt(gameObject.css('height')),
    width: parseInt(gameObject.css('width')),
  }
}

//attach start button
$('#start').on('click', function() {
  setupCharacterSelect();
});

function getGameObjectBox(gameObject) {
  const {top, left} = getGameObjectPosition(gameObject);
  const {height, width} = getGameObjectSize(gameObject);
  return {
    x: {
      start: left,
      end: left + width
    },
    y: {
      start: top,
      end: top + height,
    },
  }
}

function checkForCollision(object1, object2) {
  const object1Box = getGameObjectBox(object1);
  const object2Box = getGameObjectBox(object2);
  if (axisOverlap(object1Box.x, object2Box.x) && axisOverlap(object1Box.y, object2Box.y) ) {
    return true;
  } else {
    return false;
  }
}

function checkForCoinCollisions() {
  for (var i = 0; i < coins.length; i++) {
    let collide = checkForCollision(
      getCharacter(),
      getCoin(i)
    );
    if (collide) {
      getCoin(i).remove();
    }
  }
}

function checkForWin() {
  if ($(`.coin`).length === 0) {
    return true;
  }
}

function axisOverlap(range1, range2) {
  if (
    // range2.start inside range1
    (range1.start <= range2.start && range2.start <= range1.end)
    // range2.end inside range1
    || (range1.start <= range2.end && range2.end <= range1.end)
    // range1.start inside range2
    || (range2.start <= range1.start && range1.start <= range2.end)
    // range1.end inside range2
    || (range2.start <= range1.end && range1.end <= range2.end)
  ) {
    return true
  } else {
    return false
  }
}

function generateRandomCoordinates({x, y}) {
  return {
    x: getRandomInt(x),
    y: getRandomInt(y),
  }
}

//helper for random numbers
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
