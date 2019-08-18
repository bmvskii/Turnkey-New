require('normalize.css/normalize.css');
require('../styles/index.sass');

document.addEventListener('DOMContentLoaded', () => {
    const page = $('html, body');
    // const header = document.querySelector('.header__wrapper');
    const scrollTimeInMs = 1000;
    const options = {
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            first_name: "required",
            last_name: "required",
            business_email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },
            phone_number: {
                required: true,
                minlength: 10,
                digits: true,
            },
            company_name: "required",
        },
        // Specify validation error messages
        messages: {
            first_name: "Please enter your firstname",
            last_name: "Please enter your lastname",
            phone_number: {
                required: "Please provide a phone-number",
                minlength: "Your password must be at least 10 characters long",
                digits: "Phone number should consist only from digits"
            },
            business_email: "Please enter a valid email address",
            company_name: "Please enter a company name",
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            form.submit();
        }
    };

    const scrollToAnchor = function () {
        page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top,
        }, scrollTimeInMs);
        return false;
    };

    $('.testimonials').slick({
        // fade: true,
        easing: 'ease-in-out',
        infinite: false,
    });

    // $("#form").validate(options);
    $(".contact-us__form").validate(options);

    $('[href="#anchor"]').click(scrollToAnchor);
});