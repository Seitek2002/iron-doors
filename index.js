$(".single-product__slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
      },
    },
  ],
});

$(".hero__slider").slick({
  arrows: false,
  dots: true,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1022,
      settings: {
        arrows: true,
      },
    },
  ],
});

$(".review__slider").slick({
  arrows: false,
  dots: true,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1022,
      settings: {
        arrows: true,
      },
    },
  ],
});

const selectItems = document.querySelectorAll(".select-item");

selectItems.forEach((item) => {
  item.addEventListener("click", () => {
    selectItems.forEach((el) => el.classList.remove("active"));

    item.classList.add("active");
  });
});

const accordeons = document.querySelectorAll(".accordeon");

accordeons.forEach((item) => {
  item.querySelector(".accordeon__label").addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// const x = document.querySelectorAll(".select-box__item");

// x.forEach((item) => {
//   item.querySelector(".accordeon__label").addEventListener("click", () => {
//     item.classList.toggle("active");
//   });
// });

const selectBox = document.querySelectorAll(".select-box");

selectBox.forEach((box) => {
  box.querySelectorAll(".select-box__item.first").forEach((item) => {
    item.addEventListener("click", () => {
      accordeons[1].classList.add('active')
      box
        .querySelectorAll(".select-box__item.first")
        .forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
    });
  });
  box.querySelectorAll(".select-box__item.second").forEach((item) => {
    item.addEventListener("click", () => {
      accordeons[3].classList.add('active')
      box
        .querySelectorAll(".select-box__item.second")
        .forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
    });
  });
});

const tooltip = document.querySelector("span.product_label-tooltip-span");

tooltip.addEventListener("click", (e) => {
  e.stopPropagation();
  document
    .querySelector(".product_label-tooltip.product_label-tooltip--visible")
    .classList.toggle("active");
});

function openModal() {
  // document.getElementById('myModal').style.display = 'block'
  // document.body.style.overflow = 'hidden'
}

function closeModal() {
  // document.getElementById('myModal').style.display = 'none'
  // document.body.style.overflow = 'auto'
}

const counter = document.getElementById("counter");
const span = counter.querySelector(".span");
const minusButton = counter.querySelector(".minus");
const plusButton = counter.querySelector(".plus");

let count = 1;

minusButton.addEventListener("click", () => {
  if(count != 1) {
    count--;
    span.textContent = count < 1 ? 1 : count; 
  }
});

plusButton.addEventListener("click", () => {
  count++;
  span.textContent = count;
});
