var elBurgerBtn = document.querySelector(".js-open-btn");

elBurgerBtn.addEventListener("click", function () {
    elBurgerBtn.closest(".site-header").classList.toggle("sitenav-open")
})

