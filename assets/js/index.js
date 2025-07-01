let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*='${id}']`)
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};


(function(){
    emailjs.init("jlF22ihgx8N6gS_YN");
})();

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_eztyy8t', 'template_fjrsrmh', this)
    .then(function() {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
    }, function(error) {
        console.log('FAILED...', error);
        alert('Something went wrong. Please try again.');
    });
});

