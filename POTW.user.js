// ==UserScript==
// @name           Project of the Week
// @description    Each week, a quality project is hand-selected. With this script, you can view the project on the Scratch homepage.
// @author         7Snails, TastyLittleMuffin
// @version        1.2.1
// @match          *://scratch.mit.edu
// @icon           https://raw.githubusercontent.com/7Snails/project-of-the-week/master/logo.png
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
 
var version = data.version;
var newUser = localStorage.getItem("newUser");
if (newUser === null) {
  window.alert("Thank you for installing Project of the Week! Our goal is to support wonderful projects.");
  localStorage.setItem("newUser", 0); 
localStorage.setItem("version", version);
}
  var storedVersion = localStorage.getItem("version");
if (version !== storedVersion) {
 document.write("Project of the Week is out of date. Please update it by clicking below.");
 document.write("<p style="color: blue" id='update'>Update</p>");
 document.getElementById("update").onclick = function() {
  localStorage.setItem("version", version); 
 window.location.href = "https://github.com/7Snails/project-of-the-week/raw/master/POTW.user.js";
 }
}
  
var description = data.description;
var projectID = data.id;
  
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://scratch.mit.edu/api/v1/project/" + projectID, false);
xmlHttp.send(null);
var projectData = JSON.parse(xmlHttp.responseText);

var title = projectData.title;
var creator = projectData.creator.username;
var thumbnail = "https://" + projectData.thumbnail.substring(2, projectData.thumbnail.length);

var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://api.scratch.mit.edu/users/" + creator, false);
xmlHttp.send(null);
var userData = JSON.parse(xmlHttp.responseText);

var userImage = userData.profile.images["90x90"];

document.getElementById("hi" + potwContent).innerHTML = "<a href='/projects/" + projectID + "'><img src='" + thumbnail + "' width='300px'><b>" + title + "</b></a><br><a href='/users/" + creator + "'>" + creator + "</a><br>" + description;
};
