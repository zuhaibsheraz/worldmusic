document.addEventListener("DOMContentLoaded", function () {
    let pro = document.querySelectorAll(".pro");

    pro.forEach((pr) => {
        pr.setAttribute("data-aos", "fade-up");  
        pr.setAttribute("data-aos-offset", "200"); 
    });

    AOS.init(); // AOS animations initialize karna zaroori hai
});
