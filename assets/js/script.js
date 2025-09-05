function openPopup(id) {
  const popup = document.getElementById(id);
  popup.style.display = "block";
  dragElement(popup);
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

function dragElement(elmnt) {
  const header = elmnt.querySelector(".popup-header");
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  header.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function openPopup(id) {
  document.getElementById(id).style.display = "block";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

document.getElementById("close-all-btn").addEventListener("click", () => {
  ["publications-popup", "projects-popup", "teaching-popup", "funfact-popup"].forEach(id => {
    closePopup(id);
  });
});

