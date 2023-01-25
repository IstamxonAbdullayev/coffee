var elBurgerBtn = document.querySelector(".js-open-btn");

elBurgerBtn.addEventListener("click", function () {
    elBurgerBtn.closest(".site-header").classList.toggle("sitenav-open")
})

var btnDropdown = document.querySelector(".btn-box");
var btn = document.querySelector(".radio-group");

btnDropdown.addEventListener("click", function(){
  btn.classList.toggle("radio-group-show");
})

var btnDropdown1 = document.querySelector(".btn-box1");
var btn1 = document.querySelector(".radio-group1");

btnDropdown1.addEventListener("click", function(){
  btn1.classList.toggle("radio-group-show");
})

var btnDropdown2 = document.querySelector(".btn-box2");
var btn2 = document.querySelector(".radio-group2");

btnDropdown2.addEventListener("click", function(){
  btn2.classList.toggle("radio-group-show");
})

var btnDropdown3 = document.querySelector(".btn-box3");
var btn3 = document.querySelector(".radio-group3");

btnDropdown3.addEventListener("click", function(){
  btn3.classList.toggle("radio-group-show");
})

var btnDropdown4 = document.querySelector(".btn-box4");
var btn4 = document.querySelector(".radio-group4");

btnDropdown4.addEventListener("click", function(){
  btn4.classList.toggle("radio-group-show");
})

