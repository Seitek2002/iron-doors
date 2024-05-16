$(".single-product__slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1025,
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
  box.querySelectorAll(".second").forEach((item) => {
    item.addEventListener("click", () => {
      accordeons[2].classList.add('active')
      box
        .querySelectorAll(".select-box__item.second")
        .forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
    });
  });
  box.querySelectorAll(".select-box__item.third").forEach((item) => {
    item.addEventListener("click", () => {
      accordeons[3].classList.add('active')
      box
        .querySelectorAll(".select-box__item.third")
        .forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
    });
  });
  box.querySelectorAll(".fourth").forEach((item) => {
    item.addEventListener("click", () => {
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

const counter = document.getElementById("counter");
const span = counter.querySelector(".span");
const minusButton = counter.querySelector(".minus");
const plusButton = counter.querySelector(".plus");
const priceElement = document.getElementById("price");

let initialPrice = parseFloat(
  priceElement.textContent.replace("$", "").replace(",", "")
);

let count = 1;
span.textContent = count;

minusButton.addEventListener("click", () => {
  if (count > 1) {
    count--;
    span.textContent = count < 1 ? 1 : count;
    updatePrice(count);
  }
});

plusButton.addEventListener("click", () => {
  count++;
  span.textContent = count;
  updatePrice(count);
});
function updatePrice(quantity) {
  const totalPrice = initialPrice * quantity;
  priceElement.textContent = '$'+ totalPrice
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,"); // Форматируем и обновляем цену
}
