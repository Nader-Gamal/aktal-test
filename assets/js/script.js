"use strict";

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  /**
   * element toggle function
   */
  const elemToggleFunc = function (elem) {
    elem.classList.toggle("active");
  };

  /**
   * navbar toggle
   */
  const navbar = document.querySelector("[data-navbar]");
  const overlay = document.querySelector("[data-overlay]");
  const navCloseBtn = document.querySelector("[data-nav-close-btn]");
  const navOpenBtn = document.querySelector("[data-nav-open-btn]");
  const navbarLinks = document.querySelectorAll("[data-nav-link]");

  const navElemArr = [overlay, navCloseBtn, navOpenBtn];

  /**
   * close navbar when click on any navbar link
   */
  for (let i = 0; i < navbarLinks.length; i++) {
    navElemArr.push(navbarLinks[i]);
  }

  /**
   * add event on all elements for toggling navbar
   */
  for (let i = 0; i < navElemArr.length; i++) {
    if (navElemArr[i]) {
      // Check if the element exists
      navElemArr[i].addEventListener("click", function () {
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
      });
    }
  }

  /**
   * header active state
   */
  const header = document.querySelector("[data-header]");
  if (header) {
    window.addEventListener("scroll", function () {
      window.scrollY >= 400
        ? header.classList.add("active")
        : header.classList.remove("active");
    });
  }

  // js validation
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (() => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

  // Carousel slider logic

  //step 1: get DOM elements
  let nextDom = document.getElementById("next");
  let prevDom = document.getElementById("prev");

  let carouselDom = document.querySelector(".carousell");
  let SliderDom = carouselDom
    ? carouselDom.querySelector(".carousell .list")
    : null;
  let thumbnailBorderDom = document.querySelector(".carousell .thumbnail");
  let thumbnailItemsDom = thumbnailBorderDom
    ? thumbnailBorderDom.querySelectorAll(".item")
    : [];

  let timeDom = document.querySelector(".carousell .time");

  if (thumbnailBorderDom && thumbnailItemsDom.length > 0) {
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
  }

  let timeRunning = 3000;
  let timeAutoNext = 5000;

  if (nextDom) {
    nextDom.onclick = function () {
      showSlider("next");
    };
  }

  if (prevDom) {
    prevDom.onclick = function () {
      showSlider("prev");
    };
  }

  let runTimeOut;
  let runNextAuto = setTimeout(() => {
    if (nextDom) nextDom.click();
  }, timeAutoNext);

  function showSlider(type) {
    let SliderItemsDom = SliderDom
      ? SliderDom.querySelectorAll(".carousell .list .item")
      : [];
    let thumbnailItemsDom = document.querySelectorAll(
      ".carousell .thumbnail .item"
    );

    if (SliderDom && thumbnailBorderDom && SliderItemsDom.length > 0) {
      if (type === "next") {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom.classList.add("prev");
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        if (nextDom) nextDom.click();
      }, timeAutoNext);
    }
  }
});
