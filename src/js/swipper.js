const swiper = new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    init: function (data) {
      document
        .querySelectorAll(".testimonial-slide")
        [data.activeIndex].classList.add("active");
    },
  },
});

swiper.on("slideChange", function (data) {
  const { realIndex } = data;

  console.log(data);

  const focusCard =
    document.querySelectorAll(".testimonial-slide")[data.activeIndex];
  focusCard.classList.add("active");

  document
    .querySelectorAll(".testimonial-slide")
    [data.previousIndex].classList.remove("active");
});
