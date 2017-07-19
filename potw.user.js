// ==UserScript==
// @name           Site - Script
// @description    ES6 script
// @author         7Snails, TastyLittleMuffin
// @namespace      http://spiralx.org/
// @version        0.0.1
// @icon           http://tampermonkey.net/favicon.ico
// @match          *://scratch.mit.edu
// @grant          none
// @run-at         document-end
// ==/UserScript==

window.onload = function() {

document.querySelector('div.splash-header').id = "splashHeader";
var div = document.createElement("div");
div.setAttribute("id", "potwBox");
div.setAttribute("class", "box");
var element = document.getElementById("splashHeader");
element.appendChild(div);
document.getElementsByClassName("box")[0].style.width = "400px";
document.getElementsByClassName("box")[1].style.width = "400px";
document.getElementsByClassName("box")[2].style.width = "400px";
div = document.createElement("div");
div.setAttribute("id", "boxHeader");
div.setAttribute("class", "box-header");
element = document.getElementById("potwBox");
element.appendChild(div);
div = document.createElement("h4");
div.setAttribute("id", "boxHeaderText");
element = document.getElementById("boxHeader");
element.appendChild(div);
document.getElementById("boxHeaderText").innerHTML = "Project of the Week";
  
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://raw.githubusercontent.com/7Snails/project-of-the-week/master/data.json", false);
xmlHttp.send(null);
var data = JSON.parse(xmlHttp.responseText);

var description = data.description;

var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://scratch.mit.edu/api/v1/project/" + data.id, false);
xmlHttp.send(null);
var projectData = JSON.parse(xmlHttp.responseText);

var creator = projectData.creator.username;
var thumbnail = "https://" + projectData.thumbnail.substring(2, projectData.thumbnail.length);

var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://api.scratch.mit.edu/users/" + creator, false);
xmlHttp.send(null);
var userData = JSON.parse(xmlHttp.responseText);

var userImage = userData.profile.images["90x90"]


#<h4>Project of the Week</h4>";
#<center><img src='" + thumbnail + "' width='300px'><br><img src='" + userImage + "' width='20px'>" + creator + "<br>" + description + "</center>";
};
