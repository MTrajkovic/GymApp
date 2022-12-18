let url = window.location.search;
const search = new URLSearchParams(url);
const trainingID = search.get("trainingID");

fetch("http://localhost:3000/trainings/" + trainingID, {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (training) {
    renderTraining(training)
  });

  function renderTraining(training){
    document.getElementById(
      "about"
    ).innerHTML = `<div class="about" data-aos="fade-up">
    <h2>${training.trainingTitle}</h2>
    <p>
      ${training.trainingDescription}
    </p><br>
    <p>${training.publishedDate}</p>
    <br>
    <button class="apply"><a href="candidate.html">APPLY TRAINING</a></button> 
    </div>
    
    <!-- Second Section  -->
    <div class="people" data-aos="fade-up">
    <!-- First Card  -->
    <div class="team">
      <div class="img">
        <img src="${training.trainingImage}" />
      </div>
      <div class="teamDetails">
        <div class="name">
          <h4>${training.trainer}</h4><h3 id="priceAfterName">${training.price}</h3>
        </div>
        <div class="pro">
          <p>${training.title} Instructor</p><br>
        </div>         
      </div>
    </div>
    </div>`;
  }
