// Contact Form Validation

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const reason = document.getElementById("reason");
    const message = document.getElementById("message");
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked');

    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const reasonError = document.getElementById("reasonError");
    const messageError = document.getElementById("messageError");
    const contactMethodError = document.getElementById("contactMethodError");
    const successMessage = document.getElementById("successMessage");

    firstNameError.textContent = "";
    lastNameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    reasonError.textContent = "";
    messageError.textContent = "";
    contactMethodError.textContent = "";
    successMessage.textContent = "";

    if (firstName.value.trim() === "") {
      firstNameError.textContent = "Please enter your first name.";
      isValid = false;
    }

    if (lastName.value.trim() === "") {
      lastNameError.textContent = "Please enter your last name.";
      isValid = false;
    }

    if (email.value.trim() === "") {
      emailError.textContent = "Please enter your email address.";
      isValid = false;
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    if (phone.value.trim() === "") {
      phoneError.textContent = "Please enter your phone number.";
      isValid = false;
    } else if (!phonePattern.test(phone.value.trim())) {
      phoneError.textContent = "Please use this format: 123-456-7890.";
      isValid = false;
    }

    if (reason.value === "") {
      reasonError.textContent = "Please select a reason for contact.";
      isValid = false;
    }

    if (!contactMethod) {
      contactMethodError.textContent = "Please choose a preferred contact method.";
      isValid = false;
    }

    if (message.value.trim() === "") {
      messageError.textContent = "Please enter a message.";
      isValid = false;
    }

    if (isValid) {
      successMessage.textContent = "Thank you! Your contact form has been submitted.";
      contactForm.reset();
    }
  });
}