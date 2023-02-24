const create_accountEL = document.querySelector(".create-account");

const serialize = function (obj) {
  let str = [];
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  const errorInputs = document.querySelectorAll(".input-wrapper.error");

  if (errorInputs.length === 0) {
    const usernameValue = usernameEL.value.trim();
    const passwordValue = passwordEL.value.trim();
    const userInfo = JSON.parse(window.localStorage.getItem(usernameValue));
    const checkPass = userInfo.password === passwordValue;
    if (userInfo !== null && checkPass) {
      location.replace(`http://localhost:5500/dashboard.html?${serialize(userInfo)}`);
    } else {
      alert("ایمیل یا کلمه عبور وجود ندارد");
    }
  }
});

create_accountEL.addEventListener("click", () => {
  location.replace("http://localhost:5500/register.html");
});
