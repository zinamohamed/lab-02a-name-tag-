var myButton = document.getElementById('my-special-button');

var myName = document.getElementById('my-special-name');

var myInput = document.getElementById('my-special-input');

var myPronoun = document.getElementById('my-special-pronoun');

var myPronounInput = document.getElementById('my-pronoun-input')



myButton.addEventListener('click', () => {
  myName.textContent = myInput.value; 
  myPronoun.textContent = myPronounInput.value; 
})



var changePink = document.getElementById('pink-button');
var nameTag = document.getElementById('name-tag');
var pronounButton = document.getElementById('my-pronoun-button');


changePink.addEventListener('click', () => {
  nameTag.style.backgroundColor = "#FFADAD";
  myButton.style.backgroundColor="#FFADAD";
  pronounButton.style.backgroundColor="#FFADAD"

})

var changeBlue = document.getElementById('blue-button');
var nameTag = document.getElementById('name-tag');
var pronounButton = document.getElementById('my-pronoun-button');


changeBlue.addEventListener('click', () => {
  nameTag.style.backgroundColor = "#a0c4ff";
  myButton.style.backgroundColor="#a0c4ff";
  pronounButton.style.backgroundColor="#a0c4ff"

})

var changeLavender = document.getElementById('lavender-button');
var nameTag = document.getElementById('name-tag');
var pronounButton = document.getElementById('my-pronoun-button');


changeLavender.addEventListener('click', () => {
  nameTag.style.backgroundColor = "#bdb2ff";
  myButton.style.backgroundColor="#bdb2ff";
  pronounButton.style.backgroundColor="#bdb2ff"

})