const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const phoneNumber = document.querySelector(".phoneNumber");
const logout = document.querySelector(".logout");

let params = new URLSearchParams(window.location.search);
const arr = Array.from(params);
let info = Object.fromEntries(arr);

firstName.innerHTML = info.firstName;
username.innerHTML = info.username;
lastName.innerHTML = info.lastName;
email.innerHTML = info.email;
phoneNumber.innerHTML = info.phoneNumber;

logout.addEventListener("click", () => {
    window.location.replace("http://localhost:5500/index.html")
});
