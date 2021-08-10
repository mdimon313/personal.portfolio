// jQuery functions
$(document).ready(function () {});

// Click Menu Events
const buttonOpen = document.querySelector(".bar"),
  buttonClose = document.querySelector(".close"),
  navLink = document.querySelectorAll(".nav-link"),
  ul = document.querySelector(".navber-nav");
function open() {
  const ul = document.querySelector(".navber-nav");
  ul.classList.add("block");
  buttonOpen.classList.add("hide");
  buttonClose.classList.add("show");
}

function close() {
  const ul = document.querySelector(".navber-nav");
  ul.classList.remove("block");
  buttonClose.classList.remove("show");
  buttonOpen.classList.remove("hide");
}

navLink.forEach((currentLink) => {
  currentLink.addEventListener("click", () => {
    close();
    ul.querySelector(".active").classList.remove("active");
    currentLink.classList.add("active");
  });
});
buttonOpen.addEventListener("click", open);
buttonClose.addEventListener("click", close);
// Click Event End

// Scroll Event Start
function scroll() {
  const header = document.querySelector(".header");
  const fixed = window.pageYOffset;
  if (fixed > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}
window.addEventListener("scroll", scroll);
// Scroll Event End

// Preload Start
// function preload() {}

window.addEventListener("load", () => {
  const preload = document.querySelector(".loding");
  preload.style.display = "none";

  $(".textIllate").textillate({
    // selector: ".texts",
    loop: false,
    minDisplayTime: 2000,
    autoStart: true,
    in: {
      effect: "fadeInRight",
      delayScale: 5,
      delay: 30,
      sequence: true,
    },
  });

  $(".bannerTitle").textillate({
    loop: false,
    minDisplayTime: 4,
    initialDelay: 1,
    autoStart: true,
    in: {
      effect: "fadeInDown",
      delayScale: 2,
      delay: 15,
      sequence: true,
    },
  });

  //   slick slider

  $(".slider").slick({
    centerMode: true,
    dots: true,
    centerPadding: "80px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
// Preload End
