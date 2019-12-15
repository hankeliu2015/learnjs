document.body.onload = addElement;

function addElement () {
  // create a new div element
  var newDiv = document.createElement("div");
  // and give it some content
  var newContent = document.createTextNode("Hi there and greetings!");
  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

// Create a new paragraph element, and append it to the end of the document body
var p = document.createElement("p");
p.appendChild(document.createTextNode("This is a new paragraph created by JS"))
document.body.appendChild(p);

// js manipulate DOM test:
var container = document.getElementById("container");
  container.innerHTML = "Added New Content to this empty div container!";