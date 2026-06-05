document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

const form =
document.querySelector(".contact-form");

if(form){

    form.addEventListener("submit", e => {

        e.preventDefault();

        alert(
            "Thank you. Our team will contact you shortly."
        );

        form.reset();

    });

}

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".fade-up")
.forEach(el => observer.observe(el));

