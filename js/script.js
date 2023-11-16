// Date Show
function showDate() {
  /* body... */
  document.getElementById('sh').innerHTML=Date();
  document.getElementById('sh').style.display="block";
}

function hideDate() {
  /* body... */
  document.getElementById('sh').style.display="none";
}

// Bulb On/off
function bulbOn(){
  document.getElementById('img').src="images/on.jpg";
}
function bulbOff(){
  document.getElementById('img').src="images/off.jpg";
}

// Bulb On/off Hover
function bOn(){
  document.getElementById('img2').src="images/on.jpg";
}
function bOff(){
  document.getElementById('img2').src="images/off.jpg";
}
