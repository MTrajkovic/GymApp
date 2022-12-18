window.onload = function () {
  renderLinks();
};
//Hamburger menu
let listBox = document.getElementById("list-box");
if (listBox) listBox.style.right = "-300px";

let menu = document.getElementById("bar");
menu.onclick = function () {
  if (listBox.style.right == "-300px") {
    listBox.style.right = "0";
  } else {
    listBox.style.right = "-300px";
  }
};

function renderLinks() {
  fetch("http://localhost:3000/links", {
    method: "GET",
  }).then(function (response) {
    response.json().then((data) => {
      data.forEach((element) => {
        renderLink(element.name, element.id, element.link);
      });
    });
  });
}

function renderLink(text, id, href) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  li.appendChild(a);
  a.innerText = text;
  a.id = id;
  a.href = href;
  listBox.appendChild(li);
}
