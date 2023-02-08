let loginHeader = document.getElementById("loginHeader");
let loginBtn = document.getElementById("loginBtn");
let regBtn = document.getElementById("regBtn");
let loginLink = document.getElementById("loginLink");
let regLink = document.getElementById("regLink");
let exampleInputEmail = document.getElementById("exampleInputEmail");

function registerForm() {
  loginHeader.textContent = "REGISTER FORM";
  loginBtn.style.display = "none";
  regBtn.style.display = "block";
  loginLink.style.display = "block";
  regLink.style.display = "none";
}

function loginrForm() {
  loginHeader.textContent = "LOGIN FORM";
  loginBtn.style.display = "block";
  regBtn.style.display = "none";
  loginLink.style.display = "none";
  regLink.style.display = "block";
}

function onchangeUname(event) {
  console.log(event.target.value);
  var Uname = event.target.value;
  if (Uname.length >= 6) {
    exampleInputEmail1.style.backgroundColor = "aquamarine";
  } else {
    exampleInputEmail1.style.backgroundColor = "blueviolet";
  }
}

function login(event) {
  event.preventDefault();
  var cbox = document.querySelector("#examplecheck1").ariaChecked;
  console.log(cbox);
  var inputUname = exampleInputEmail.value;
  console.log(inputUname);
  if (inputUname != null) {
    if (inputUname == "sneka" && inputpass == "12345") {
    } else {
    }
  } else {
  }
}

function register() {
  event.preventDefault();
}
