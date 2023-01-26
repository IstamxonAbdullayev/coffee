var elBurgerBtn = document.querySelector(".js-open-btn");

elBurgerBtn.addEventListener("click", function () {
    elBurgerBtn.closest(".site-header").classList.toggle("sitenav-open")
})

var btnDropdown = document.querySelector(".btn-box");
var btn = document.querySelector(".radio-group");
var img = document.querySelector(".btn-dropdown-img");

btnDropdown.addEventListener("click", function(){
  btn.classList.toggle("radio-group-show");
  img.classList.toggle("btn-dropdown-img-open");
})

var btnDropdown1 = document.querySelector(".btn-box1");
var btn1 = document.querySelector(".radio-group1");
var img1 = document.querySelector(".btn-dropdown-img1");

btnDropdown1.addEventListener("click", function(){
  btn1.classList.toggle("radio-group-show");
  img1.classList.toggle("btn-dropdown-img-open");
})

var btnDropdown2 = document.querySelector(".btn-box2");
var btn2 = document.querySelector(".radio-group2");
var img2 = document.querySelector(".btn-dropdown-img2");

btnDropdown2.addEventListener("click", function(){
  btn2.classList.toggle("radio-group-show");
  img2.classList.toggle("btn-dropdown-img-open");
})

var btnDropdown3 = document.querySelector(".btn-box3");
var btn3 = document.querySelector(".radio-group3");
var img3 = document.querySelector(".btn-dropdown-img3");

btnDropdown3.addEventListener("click", function(){
  btn3.classList.toggle("radio-group-show");
  img3.classList.toggle("btn-dropdown-img-open");
})

var btnDropdown4 = document.querySelector(".btn-box4");
var btn4 = document.querySelector(".radio-group4");
var img4 = document.querySelector(".btn-dropdown-img4");

btnDropdown4.addEventListener("click", function(){
  btn4.classList.toggle("radio-group-show");
  img4.classList.toggle("btn-dropdown-img-open");
})

