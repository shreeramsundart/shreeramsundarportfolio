




// SRS.js

document.addEventListener("DOMContentLoaded", function () {
  // Function to handle the reveal effect during scrolling
  function handleScrollReveal() {
      const revealElements = document.querySelectorAll(".reveal");

      revealElements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const elementBottom = element.getBoundingClientRect().bottom;

          // Check if the element is at least 20% visible in the viewport
          const isVisible = elementTop < window.innerHeight * 0.8 && elementBottom > 0;

          if (isVisible) {
              element.classList.add("active");
          } else {
              element.classList.remove("active");
          }
      });
  }

  // Call handleScrollReveal on page load and scroll events
  handleScrollReveal();
  window.addEventListener("scroll", handleScrollReveal);
});




function sendmail()
{
  let srs={
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
  }

  emailjs.send("service_8im3fxv","template_95puuxk",srs).then(alert("Email Sent!!"))
}