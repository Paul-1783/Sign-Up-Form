const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#pw_confirm");
const button = document.querySelector("input[type=button]");
const error = document.querySelector("span.error");
const errorConfirm = document.querySelector("span.errorConfirm");

password.addEventListener("input", (event) => {
  if (password.value !== confirmPassword.value) {
    console.log(password.value, "   in password  ", confirmPassword.value);
    error.textContent = "* Password and Confirmation need to be congruent.";
    error.className = "error active";
    event.preventDefault();
  } else if (
    password.validity.valueMissing ||
    confirmPassword.validity.valueMissing
  ) {
    error.textContent = "* You need to enter a password and a confirmation.";
    error.className = "error active";
    event.preventDefault();
  } else {
    error.textContent = "";
    error.className = "error";
    errorConfirm.textContent = "";
    errorConfirm.className = "error";
  }
});

confirmPassword.addEventListener("input", (event) => {
  if (password.value !== confirmPassword.value) {
    console.log(password.value, "  in confirm  ", confirmPassword.value);
    errorConfirm.textContent =
      "* Password and Confirmation need to be congruent.";
    errorConfirm.className = "error active";
    event.preventDefault();
  } else if (
    password.validity.valueMissing ||
    confirmPassword.validity.valueMissing
  ) {
    errorConfirm.textContent =
      "* You need to enter a password and a confirmation.";
    event.preventDefault();
    errorConfirm.className = "error active";
  } else {
    errorConfirm.className = "error";
    errorConfirm.className = "error";
    error.className = "error";
    error.textContent = "";
  }
});
