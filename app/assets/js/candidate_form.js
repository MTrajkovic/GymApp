fetch("http://localhost:3000/trainings", {
  method: "GET",
})
  .then(function (trainings) {
    return trainings.json();
  })
  .then(function (trainings) {
    renderTrainingsOptions(trainings);
  });

function renderTrainingsOptions(trainings) {
  for (let training of trainings) {
    let html = `<option>${training.title}</option>`;
    document.getElementById("selectTrainings").innerHTML += html;
  }
}

document
  .getElementById("createCandidate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      createCandidate();
    }
  });

function createCandidate() {
  let fullNameField = document.getElementById("fullName");
  let birthdayField = document.getElementById("birthday");
  let phoneNumberField = document.getElementById("phoneNumber");
  let emailField = document.getElementById("email");
  let selectTrainingsField = document.getElementById("selectTrainings");
  let gymExpirienceField = document.getElementById("gymExpirience");

  let fullName = fullNameField.value;
  let birthday = birthdayField.value;
  let phoneNumber = phoneNumberField.value;
  let email = emailField.value;
  let gymExpirience = gymExpirienceField.checked;
  let selectTrainings = selectTrainingsField.value;

  fetch("http://localhost:3000/candidates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullName: fullName,
      trainingName: selectTrainings,
      email: email,
      phoneNumber: phoneNumber,
      birthday: birthday,
      gymExpirience: gymExpirience,
    }),
  }).then(function () {
    alert("Candidate is created");
  });
}

function validateForm() {
  let fullNameField = document.getElementById("fullName");
  let birthdayField = document.getElementById("birthday");
  let phoneNumberField = document.getElementById("phoneNumber");
  let emailField = document.getElementById("email");
  let selectTrainingsField = document.getElementById("selectTrainings");
  let gymExpirienceField = document.getElementById("gymExpirience");

  let fullName = fullNameField.value;
  let birthday = birthdayField.value;
  let phoneNumber = phoneNumberField.value;
  let email = emailField.value;
  let gymExpirience = gymExpirienceField.checked;
  let selectTrainings = selectTrainingsField.value;

  let regfullName = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
  let isfullNameValid = regfullName.test(fullName);
  if (!isfullNameValid) {
    fullNameField.classList.add("error");
  } else {
    fullNameField.classList.remove("error");
  }

  let isbirthdayValid = birthday != "";
  if (!isbirthdayValid) {
    birthdayField.classList.add("error");
  } else {
    birthdayField.classList.remove("error");
  }

  let isphoneNumberValid = phoneNumber != "";
  if (!isphoneNumberValid) {
    phoneNumberField.classList.add("error");
  } else {
    phoneNumberField.classList.remove("error");
  }

  let regEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let isEmailValid = regEmail.test(email);
  if (!isEmailValid) {
    emailField.classList.add("error");
  } else {
    emailField.classList.remove("error");
  }

  let istrainingValid = selectTrainings != "0";
  if (!istrainingValid) {
    selectTrainingsField.classList.add("error");
  } else {
    selectTrainingsField.classList.remove("error");
  }
  const isFormValid =
    isfullNameValid &&
    isbirthdayValid &&
    isphoneNumberValid &&
    isEmailValid &&
    istrainingValid;

  return isFormValid;
}
