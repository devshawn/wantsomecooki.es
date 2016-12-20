"use strict";

// this should be more general but it's easier this way
var pattern = /^([a-zA-Z0-9-]+)\.wantsomecooki\.es$/;

// kick it off:
window.addEventListener("DOMContentLoaded", replace);

// given a hostname (shawn.wantsomecooki.es), return a name (shawn) or null if
// none matches
function match(hostname) {
    var result = pattern.exec(hostname);
    return result ? result[1] : null;
}

// swap out the text if possible
function replace() {
    var host = document.location.host;
    var name = match(host);

    // quit if there's no name
    if (!name) return;

    var node = document.getElementById("text");
    node.innerText = name.toUpperCase() + " WANT SOME COOKIES!!??!1!11?!11?!";

    var sounds = require('./sounds.js');

    if(sounds.indexOf(name) > -1) {
      var audio = document.getElementById("audio");
      audio.innerHTML += '<source src="sounds/' + name + '.mp3">';
    }
  }
