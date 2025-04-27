IMask(document.getElementById("phone"), {
    mask: "+{7}(000)000-00-00",
  });

  
  AOS.init();

  const swiper = new Swiper(".mySwiper", {
    loop: true,
    //   autoplay: {
    // delay: 4000,
    // disableOnInteraction: false,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const productSwiper = new Swiper(".productSwiper", {
    loop: false,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        navigation: {
            enabled: true,
        },
      },
      576: {
        slidesPerView: 2,
        navigation: {
            enabled: true,
        },
      },
      768: {
        slidesPerView: 3,
        navigation: {
            enabled: true,
        },
      },
      992: {
        slidesPerView: 4,
        navigation: {
            enabled: false,
        },
      },
    },
  });

  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Следим за прокруткой
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      // scrollTopBtn.classList.remove("d-none");
      scrollTopBtn.classList.add("scroll-btn-active");
    } else {
      // scrollTopBtn.classList.add("d-none");
      scrollTopBtn.classList.remove("scroll-btn-active");
    }
  });

  // Плавный скролл наверх
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }