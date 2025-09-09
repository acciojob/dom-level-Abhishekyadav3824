//your JS code here. If required.
let element = document.getElementById("level");

// Start counting from 1 (the element itself)
let level = 1;

// Traverse up until <html> (which has no parentElement)
while (element.parentElement) {
  element = element.parentElement;
  level++;
}

// Show result
alert("The level of the element is: " + level);