const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#pw_confirm");
const button = document.querySelector("input[type=button]");
console.log("tad  ");

button.addEventListener("check", (event) => {
  if (password.value !== confirmPassword.value) {
    console.log(password.value, "   wefewf  ", confirmPassword.value);
    confirmPassword.setCustomValidity(
      "Passwort nicht übereinstimmend mit erster Eingabe"
    );
  } else {
    confirmPassword.setCustomValidity("");
    console.log("dvwvrwv");
  }
});
