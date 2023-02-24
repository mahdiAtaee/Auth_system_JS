const form = document.getElementById("register_form");
const firstNameEL = document.getElementById("firstName");
const lastNameEL = document.getElementById("lastName");
const usernameEL = document.getElementById("username");
const passwordEL = document.getElementById("password");
const emailEL = document.getElementById("email");
const phoneNumberEL = document.getElementById("phoneNumber");

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
  const firstNameValue = firstNameEL.value.trim();
  const lastNameValue = lastNameEL.value.trim();
  const usernameValue = usernameEL.value.trim();
  const passwordValue = passwordEL.value.trim();
  const emailValue = emailEL.value.trim();
  const phoneNumberValue = phoneNumberEL.value.trim();

  if (usernameValue === "") {
    setError(usernameEL, "نام کاربری باید وارد شود");
  } else {
    setSuccess(usernameEL);
  }

  if (emailValue === "") {
    setError(emailEL, "ایمیل باید وارد شود");
  } else if (!isValidEmail(emailValue)) {
    setError(emailEL, "لطفا یک ایمیل صحیح وارد نمایید");
  } else {
    setSuccess(emailEL);
  }

  if (passwordValue === "") {
    setError(passwordEL, "کلمه عبور باید وارد شود");
  } else if (passwordValue.length < 8) {
    setError(passwordEL, "کلمه عبور باید حداقل 8 کاراکتر باشد");
  } else {
    setSuccess(passwordEL);
  }

  if (firstNameValue === "") {
    setError(firstNameEL, "نام باید وارد شود");
  } else {
    setSuccess(firstNameEL);
  }
  if (lastNameValue === "") {
    setError(lastNameEL, " نام خانوادگی باید وارد شود");
  } else {
    setSuccess(lastNameEL);
  }
  if (phoneNumberValue === "") {
    setError(phoneNumberEL, " شماره تماس باید وارد شود");
  } else {
    setSuccess(phoneNumberEL);
  }
};
