// ==UserScript==
// @name         Project of the Week
// @namespace    http://scratch.mit.edu/users/7Snails/
// @version      0.0.1
// @description  Adds a new "featured" section to the home page
// @author       @7Snails
// @match        http://scratch.mit.edu/
// @match        https://scratch.mit.edu/
// @icon         http://tampermonkey.net/favicon.ico
// @grant        none
// @run-at       document-end
// ==/UserScript==

/* https://scratch.mit.edu/studios/4169223/ */ 

document.getElementsByTagName("h4")[1].innerHTML = "Project of the Week";
