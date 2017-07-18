// ==UserScript==
// @name           Site - Script
// @description    ES6 script
// @author         7Snails
// @namespace      http://spiralx.org/
// @version        0.0.1
// @icon           http://tampermonkey.net/favicon.ico
// @match          *://scratch.mit.edu
// @grant          none
// @run-at         document-end
// ==/UserScript==
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://raw.githubusercontent.com/7Snails/project-of-the-week/master/data.json", false);
xmlHttp.send(null);
var data = JSON.parse(xmlHttp.responseText);
window.alert(data.description);
