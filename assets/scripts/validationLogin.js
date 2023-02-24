const form = document.getElementById("login_form");
const usernameEL = document.getElementById("username");
const passwordEL = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = usernameEL.value.trim();
  const passwordValue = passwordEL.value.trim();

  if (usernameValue === "") {
    setError(usernameEL, "نام کاربری باید وارد شود");
  } else {
    setSuccess(usernameEL);
  }

  if (passwordValue === "") {
    setError(passwordEL, "کلمه عبور باید وارد شود");
  } else if (passwordValue.length < 8) {
    setError(passwordEL, "کلمه عبور باید حداقل 8 کاراکتر باشد");
  } else {
    setSuccess(passwordEL);
  }
};
