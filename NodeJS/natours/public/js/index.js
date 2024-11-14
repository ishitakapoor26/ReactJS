import { login, logout } from "./login";
import { displayMap } from "./mapbox";
import { updateData } from "./updateSettings";

// DOM elements
const mapBox = document.getElementById("map");
const loginForm = document.querySelector(".form--login");
const updateDataForm = document.querySelector(".form-user-data");
const logoutBtn = document.querySelector(".nav__el--logout");

if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    login(email, password);
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", logout);
}

if (updateDataForm) {
  updateDataForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    updateData(name, email);
  });
}
