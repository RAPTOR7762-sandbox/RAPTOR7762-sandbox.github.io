document.getElementById("instruction-button").onclick = () => {

  element = document.getElementById("instructions")
  button = document.getElementById("instruction-button")

  if (element.style.display === "block") {
    element.style.display = "none";
    //button.innerHTML = "?v=dQw4" //pt 4/5 of th3 fl@g find under /script.js

  } else {
    element.style.display = "block";
    button.innerHTML = "INSTRUCTIONS"
  }
}

function loadSite() {
  var site = document.getElementById("bar").value;
  window.location = site;
}
