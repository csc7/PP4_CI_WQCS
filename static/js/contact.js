//const aws = require('aws-sdk');
//
//let s3 = new aws.S3({
//  eMailJSServiceId: process.env.EMAILJS_SERVICE_ID,
//  eMailJSUser: process.env.EMAILJS_USER,
//  eMailJSTemplate: process.env.EMAILJS_TEMPLATE
//});


// EmailJS
// Copied and modified from Code Institute's material for "Sending Emails Using EmailJS" lessons
// Used to send e-mails from the contact form in the Contact page
function sendMail(contactForm) {
    // Credit: EmailJS - Code copied on July 31st, 2021, at 6:37, from EmailJS personal account
    // First line in head element of contact.html file
    emailjs.init("user_o5O0kmL8NWgC0wZzvn6X8");
    emailjs.send("service_riij4a4", "Code_Institute_MS4", {
        "from_name": contactForm.name.value,
        "from_surname": contactForm.surname.value,
        "from_email": contactForm.email.value,
        "description": contactForm.description.value
    })
    .then(
        function(response) {
            document.getElementById("email-status").textContent = "E-mail sent!";
            document.getElementById("form-send-button").style.display = "none";
        },
        function(error) {
            document.getElementById("email-status").textContent = "E-mail could not be sent";
            document.getElementById("email-status").style.color = "red";
            document.getElementById("form-send-button").style.display = "none";
        }
    );
    return false;  // To block from loading a new page
}