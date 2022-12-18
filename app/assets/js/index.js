let trainingList = document.getElementById("training-list");
renderTrainings();

const parentContainer = document.querySelector(".classMenu");

if (parentContainer)
  parentContainer.addEventListener("click", (event) => {
    const current = event.target;

    const isReadMoreBtn = current.className.includes("read-more-btn");

    if (!isReadMoreBtn) return;

    const currentText =
      event.target.parentNode.querySelector(".read-more-text");

    currentText.classList.toggle("read-more-text--show");

    current.textContent = current.textContent.includes("Read More")
      ? "Read Less..."
      : "Read More...";
  });

const searchBox = document.getElementById("search-box");
if (searchBox)
  searchBox.addEventListener("keyup", function () {
    const searchValue = this.value;
    renderTrainings(searchValue);
  });

function renderTrainings(searchValue) {
  let url = "http://localhost:3000/trainings";
  if (searchValue) {
    url += "?title_like=" + searchValue;
  }
  fetch(url, {
    method: "GET",
  }).then(function (response) {
    response.json().then((data) => {
      trainingList.innerHTML = "";
      data.forEach((element) => {
        renderTraining(element);
      });
    });
  });
}

function renderTraining(element) {
  let team = document.createElement("div");
  team.className = "team";
  let img = document.createElement("div");
  img.className = "img";
  let image = document.createElement("img");
  image.src = element.imagePath;
  img.appendChild(image);
  let teamDetails = document.createElement("div");
  teamDetails.className = "teamDetails";
  let name = document.createElement("div");
  name.className = "name";
  let pro = document.createElement("div");
  pro.className = "pro";
  let nameDetails = document.createElement("div");
  nameDetails.className = "nameDetails";
  let h4 = document.createElement("h4");
  let p1 = document.createElement("p");
  let a1 = document.createElement("a");
  let span1 = document.createElement("span");
  let div1 = document.createElement("div");
  let h5 = document.createElement("h5");
  a1.href = "details.html?trainingID=" + element.id;
  a1.className = "title";
  a1.innerText = element.title;
  p1.innerText = "Trained by - ";
  span1.innerText = element.trainer;
  div1.className = "num";
  h5.innerText = element.price;
  let p2 = document.createElement("p");
  let span2 = document.createElement("span");
  let p3 = document.createElement("p");
  let span3 = document.createElement("span");
  span2.className = "read-more-text";
  span2.innerText = element.description;
  p2.innerText = "You will be trained from one of the best ";
  p3.id = "training-date";
  p3.innerText = "11.07.2022";
  span3.innerText = "Read more";
  span3.className = "read-more-btn";
  p2.appendChild(span2);
  pro.appendChild(p2);
  pro.appendChild(p3);
  pro.appendChild(span3);
  h4.appendChild(a1);
  div1.appendChild(h5);
  p1.appendChild(span1);
  nameDetails.appendChild(h4);
  nameDetails.appendChild(p1);
  name.appendChild(nameDetails);
  name.appendChild(div1);
  teamDetails.appendChild(name);
  teamDetails.appendChild(pro);
  team.appendChild(img);
  team.appendChild(teamDetails);
  trainingList.appendChild(team);
}
