const menuToggle =
    document.querySelector("#menu-toggle");

const navLinks =
    document.querySelector("#nav-links");


menuToggle.addEventListener(
    "click",
    function () {

        navLinks.classList.toggle("active");

    }
);


const navigationLinks =
    document.querySelectorAll("#nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            navLinks.classList.remove("active");

        }
    );

});


const bookingForm =
    document.querySelector(".booking-form");

const formMessage =
    document.querySelector("#form-message");


bookingForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        formMessage.textContent =
            "Demo only — connect this form to the real client's reservation system.";

        bookingForm.reset();

    }
);