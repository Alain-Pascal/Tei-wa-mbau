document.addEventListener("DOMContentLoaded", function() {
    const openModalBtn = document.getElementById("openModalBtn");
    const modal = document.getElementById("myModal");
    const closeModal = document.getElementsByClassName("close")[0];
    const form = document.getElementById("myForm");

    openModalBtn.addEventListener("click", function() {
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Form submitted!");
        modal.style.display = "none";
        form.reset();
    });
});

function reveal(){
    var reveals = document.querySelectorAll(".reveal");
    for (var i =0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop =
        reveals[i].getBoundingClientReact().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }
        else{
            reveals[i].classList.remove("active");
        }
    }
}
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
var swiper = new Swiper(".home-slider",{
    loop:true,
    navigation:{
        nextE1:".swiper-button-next",
        prevtE1:".swiper-button-prev",
    }
})

