//headern sticky and hover a-tags
document.querySelectorAll(".nav").forEach((item) => {
  item.addEventListener("mouseover", (event) => {
    event.target.classList.add("hover");
  });

  item.addEventListener("mouseout", (event) => {
    event.target.classList.remove("hover");
  });
});

window.onscroll = function () {
  stickyHeader();
};

let header = document.getElementById("sticky-header");
let sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//scroll smooth
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Funktion för att kontrollera om en element är synlig i fönstret
function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Funktion för att aktivera animation när elementet är synligt i fönstret
function animateOnScroll() {
  let AboutH3 = document.querySelector(".main-about h3");
  let AboutH4 = document.querySelector(".main-skill h4");
  if (isElementInViewport(AboutH3)) {
    AboutH3.classList.add("fadeInRight");
  }
  if (isElementInViewport(AboutH4)) {
    AboutH4.classList.add("fadeInRight");
  }
}

window.addEventListener("scroll", animateOnScroll);

document.addEventListener("DOMContentLoaded", animateOnScroll);

//dark/light mode knapp bara lite olika remove och add klass funktioner
function toggleSun() {
  let SunBtn = document.getElementById("Lamp");
  let header = document.getElementById("sticky-header");
  let nav = document.querySelector(".nav");
  let nav2 = document.querySelector("#nav");
  let hr = document.querySelector("hr");
  let icon1 = document.querySelector(".fa-github");
  let icon2 = document.querySelector(".fa-linkedin");
  let JoinBtn = document.querySelector(".Join");
  let intro = document.querySelector(".intro");
  let main = document.querySelector("#main");
  let fot = document.querySelector("footer");
  let end = document.querySelector(".end");
  let spans = document.querySelectorAll("span");
  let fots = document.querySelectorAll(".fot");
  let home = document.querySelector(".home");
  let proj = document.querySelectorAll(".proj");
  let a = document.querySelectorAll(".A-btn");

  if (SunBtn.classList.contains("active")) {
    SunBtn.classList.remove("active");
    header.classList.remove("dark-header");
    nav.classList.remove("dark-nav");
    nav2.classList.remove("dark-nav");
    hr.classList.remove("dark-nav");
    icon1.classList.remove("dark-nav");
    icon2.classList.remove("dark-nav");
    JoinBtn.classList.remove("dark-nav");
    main.classList.remove("dark-main");
    intro.classList.remove("dark-intro");
    fot.classList.remove("dark-fot");
    end.classList.remove("dark-end");
    home.classList.remove("dark-textintro");

    proj.forEach((proj) => {
      proj.classList.remove("dark-textend");
    });
    a.forEach((a) => {
      a.classList.remove("dark-A");
    });
    spans.forEach((span) => {
      span.classList.remove("dark-span");
    });
    fots.forEach((fots) => {
      fots.classList.remove("dark-fots");
    });
    SunBtn.classList.add("inactive");
    SunBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    SunBtn.classList.remove("inactive");
    SunBtn.classList.add("active");
    SunBtn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    header.classList.add("dark-header");
    nav.classList.add("dark-nav");
    nav2.classList.add("dark-nav");
    hr.classList.add("dark-nav");
    icon1.classList.add("dark-nav");
    icon2.classList.add("dark-nav");
    JoinBtn.classList.add("dark-nav");
    intro.classList.add("dark-intro");
    main.classList.add("dark-main");
    end.classList.add("dark-end");
    fot.classList.add("dark-fot");
    home.classList.add("dark-textintro");
    proj.forEach((proj) => {
      proj.classList.add("dark-textend");
    });
    a.forEach((a) => {
      a.classList.add("dark-A");
    });
    spans.forEach((span) => {
      span.classList.add("dark-span");
    });
    fots.forEach((fots) => {
      fots.classList.add("dark-fots");
    });
  }
}
//eventlistener för dark-mode knappen
document.getElementById("Lamp").addEventListener("click", toggleSun);
