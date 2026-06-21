const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const orderForm = document.getElementById("orderForm");
const formMessage = document.getElementById("formMessage");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

orderForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let drink = document.getElementById("drink").value;
  let quantity = document.getElementById("quantity").value;

  if (name === "") {
    formMessage.textContent = "Please enter your name.";
    formMessage.style.color = "red";
  } else if (email === "") {
    formMessage.textContent = "Please enter your email address.";
    formMessage.style.color = "red";
  } else if (!email.includes("@")) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
  } else if (drink === "") {
    formMessage.textContent = "Please choose a drink.";
    formMessage.style.color = "red";
  } else if (quantity === "" || quantity <= 0) {
    formMessage.textContent = "Please enter a valid quantity.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Thank you! Your order form was submitted successfully.";
    formMessage.style.color = "green";
    orderForm.reset();
  }
});
