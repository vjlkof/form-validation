const form = document.getElementById("form");
const inputEmail = document.getElementById("email");
const inputCountry = document.getElementById("country");
const inputZipCode = document.getElementById("zip-code");
const inputPassword = document.getElementById("password");
const inputPassword2 = document.getElementById("repeat-password");
const submitButton = document.getElementById("submit-button");

function validate(element) {
  const showError = document.querySelector(`#${element.id} + span.error`);
  if (element.validity.valid === false) {
    showError.textContent = element.validationMessage;
    return;
  }
  showError.textContent = "";
}

function validatePassword(element1, element2) {
  const showError = document.querySelector(`#${element1.id} + span.error`);
  const showError2 = document.querySelector(`#${element2.id} + span.error`);
  if (!(element1.value === element2.value)) {
    element1.setCustomValidity("Passwords do not match");
    element2.setCustomValidity("Passwords do not match");
    showError.textContent = element1.validationMessage;
    showError2.textContent = element2.validationMessage;
    return;
  }
  element1.setCustomValidity("");
  element2.setCustomValidity("");
  showError.textContent = "";
  showError2.textContent = "";
}

inputEmail.addEventListener("focusout", () => {
  validate(inputEmail);
});

inputCountry.addEventListener("focusout", () => {
  validate(inputCountry);
});

inputZipCode.addEventListener("focusout", () => {
  validate(inputZipCode);
});

inputPassword.addEventListener("focusout", () => {
  validate(inputPassword);
});
inputPassword2.addEventListener("focusout", () => {
  validate(inputPassword2);
  validatePassword(inputPassword, inputPassword2);
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    validate(inputEmail);
    validate(inputCountry);
    validate(inputZipCode);
    validate(inputPassword);
    validate(inputPassword2);
  } else {
    alert("High five my brother, you complete the form correctly");
  }
});
