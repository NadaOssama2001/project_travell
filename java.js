// start Headers
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formclose = document.querySelector('#form-close');


let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginform.classList.remove('active');
}
menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

//login&register
searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
formBtn.addEventListener('click', () => {
        loginform.classList.add('active');
    });
    formclose.addEventListener('click', () => {
        loginform.classList.remove('active');
    });

let registerLink = document.getElementById('register-link');
let loginLink = document.getElementById('login-link');
let loginForm = document.getElementById('login-form');
let registerForm = document.getElementById('register-form');
let formClose = document.querySelector('#form-close');
let loginFormContainer = document.querySelector('.login-form-container');


registerLink.addEventListener('click', () => {
    loginFormContainer.classList.add('active');
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

loginLink.addEventListener('click', () => {
    loginFormContainer.classList.add('active');
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});

formClose.addEventListener('click', () => {
    loginFormContainer.classList.remove('active');
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});

//localStorage
var local = document.getElementById("login-form");

local.addEventListener("submit", function(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password=document.getElementById("password").value;

  localStorage.setItem("email", email);
  localStorage.setItem("password",password);
});
var localStorag = document.getElementById("register-form");

localStorag.addEventListener("submit", function(event) {
  event.preventDefault();
  
  var name = document.getElementById("Name").value;
  var email = document.getElementById("Email").value;
  var password=document.getElementById("Password").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password",password);
});

// end Headers

// start home
let bts = document.querySelectorAll(".controls .vid-btn")
bts[0].style.background ="orange";
// console.log(bts[0].getAttribute('data-sec'))

let vid = document.querySelector(".video-container #video-slider")
console.log(vid)

// console.log(vid.getAttribute('src'))

function changeColor (eve)
{
    for (var i = 0; i < bts.length; i++) {
            
           bts[i].style.background ="#fff";
         }
    eve.target.style.background = "orange";
    
    console.log(eve.target.getAttribute('data-sec'))
    // console.log(vid.src)
    vid.src=eve.target.getAttribute('data-sec')
}

// end home

// footer

function showLocation_C() {
    let latitude =30.033333;
    let longitude =31.233334;

    let googleMapsURL = `https://www.google.com/maps?q=${latitude},${longitude}`;

    window.open(googleMapsURL, '_blank');
}
function showLocation_G() {
    let latitude =30.013056;
    let longitude =31.208853;

    let googleMapsURL = `https://www.google.com/maps?q=${latitude},${longitude}`;

    window.open(googleMapsURL, '_blank');
} 
function showLocation_S() {
    let latitude =26.549999;
    let longitude =31.700001;

    let googleMapsURL = `https://www.google.com/maps?q=${latitude},${longitude}`;

    window.open(googleMapsURL, '_blank');
} 
function showLocation_A() {
    let latitude = 27.180134;
    let longitude =31.189283;

    let googleMapsURL = `https://www.google.com/maps?q=${latitude},${longitude}`;

    window.open(googleMapsURL, '_blank');
}


/* json */

fetch('tr.json')
.then((response) => {
    return response.json();
})
.then((completedata) => {
    let data = "";
    completedata.forEach((value) => {
        data += `<div class="box">
             <img src="${value.img}" alt="c"> 
            <div class="content">
                <h3><i class="fa-solid fa-location-dot"></i> ${value.city}</h3>
                <p>${value.description}</p>
                <div class="start">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star" style="color: dimgray;"></i>
                </div>
                <div class="price">${value.price} <span>${value.price2} </span></div>
                <a href="#" class="btn">book now</a>
            </div>
        </div>`;
    });
    document.getElementById("package").innerHTML = data;
})
.catch((error) => {
    console.error('Error fetching data:', error);
});

// end package