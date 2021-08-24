window.addEventListener("load", () => {
  // preload
  const preload = document.querySelector(".loding");
  preload.style.display = "none";

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

  // Text Illate
  $(".textIllate").textillate({
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

  // Initial AOS

  AOS.init();

  // blog slider
  $("#blogSlider").slick({
    centerMode: true,
    centerPadding: "60px",
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
          dots: true,
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
  // Blog Slider End

  // Contact
  const form = document.querySelector("#form");
  const validateForm = (e) => {
    e.preventDefault();
    let name, email, message;
    name = document.querySelector("#name").value;
    email = document.querySelector("#email").value;
    message = document.querySelector("#msg").value;
    if (name !== "" && email !== "" && message !== "") {
      alert("successfull");
      console.log(`Name: ${name} \n Email: ${email} \n Message: ${message}`);
    } else {
      alert("Please Try again !");
    }
    form.reset();
  };

  form.addEventListener("submit", validateForm, true);
});
