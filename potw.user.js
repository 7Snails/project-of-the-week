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
var newElement = document.createElement("div");
newElement.setAttribute("id", "potwBox");
newElement.setAttribute("class", "box");
var element = document.getElementById("splashHeader");
element.appendChild(newElement);
document.getElementsByClassName("box")[0].style.width = "400px";
document.getElementsByClassName("box")[1].style.width = "400px";
document.getElementsByClassName("box")[2].style.width = "400px";
newElement = document.createElement("div");
newElement.setAttribute("id", "boxHeader");
newElement.setAttribute("class", "box-header");
element = document.getElementById("potwBox");
element.appendChild(newElement);
newElement = document.createElement("h4");
newElement.setAttribute("id", "boxHeaderText");
element = document.getElementById("boxHeader");
element.appendChild(newElement);
document.getElementById("boxHeaderText").innerHTML = "Project of the Week";
newElement = document.createElement("div");
newElement.setAttribute("id", "potwContent");
newElement.setAttribute("class", "box-content");
element = document.getElementById("potwBox");
element.appendChild(newElement);

var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://raw.githubusercontent.com/7Snails/project-of-the-week/master/data.json", false);
xmlHttp.send(null);
var data = JSON.parse(xmlHttp.responseText);

var description = data.description;

var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://scratch.mit.edu/api/v1/project/" + data.id, false);
xmlHttp.send(null);
var projectData = JSON.parse(xmlHttp.responseText);

var title = projectData.title;
  var creator = projectData.creator.username;
var thumbnail = "https://" + projectData.thumbnail.substring(2, projectData.thumbnail.length);

var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://api.scratch.mit.edu/users/" + creator, false);
xmlHttp.send(null);
var userData = JSON.parse(xmlHttp.responseText);

var userImage = userData.profile.images["90x90"]

window.alert(projectID);
document.getElementById("potwContent").innerHTML = "<center><img src='" + thumbnail + "' width='300px'><h2>" + title + "</h2><img src='" + userImage + "' width='20px'>" + creator + "<br>" + description + "</center>";
};
