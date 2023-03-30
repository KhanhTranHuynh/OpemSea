const body = document.querySelector("body");

function clickactive(arraylist, item, classactive) {
  console.log(item);
  arraylist.forEach((test) => {
    test.classList.remove(classactive);
  });
  item.classList.add(classactive);
}

//Header Nav page
const headBot_nav = document.querySelectorAll(".head-bot .bot-nav li");
headBot_nav.forEach((item) => {
  item.addEventListener("click", function () {
    clickactive([...headBot_nav], item, "active");
  });
});

//SelectTranding
const selectleft = document.querySelectorAll(".select-left h2");
selectleft.forEach((item) => {
  item.addEventListener("click", function () {
    clickactive([...selectleft], item, "select-leftactive");
  });
});

//SelectTime
const selecttime = document.querySelectorAll(".select-time div");
selecttime.forEach((item) => {
  item.addEventListener("click", function () {
    clickactive([...selecttime], item, "time-buttonactive");
  });
});

//==============================================================
//Banner slide show
const SlideView = document.querySelector(".SlideView");
const Next = document.querySelector(".SlideNext");
const Prev = document.querySelector(".SlidePrev");
const SlideMainWidth = document.querySelector(".SlideMain").offsetWidth;
const img = document.querySelectorAll(".SlideView img");
const quantity = img.length;
let cnt = 0;
setInterval(function TimeDots() {
  if (cnt < quantity - 1) {
    cnt++;
  } else {
    cnt = 0;
  }
  SlideView.style = `transform: translate(${-SlideMainWidth * cnt}px);`;
}, 5000);
Next.addEventListener("click", function () {
  if (cnt < quantity - 1) {
    cnt++;
  } else {
    cnt = 0;
  }
  SlideView.style = `transform: translate(${-SlideMainWidth * cnt}px);`;
});
Prev.addEventListener("click", function () {
  if (cnt <= 1) {
    cnt = quantity;
    SlideView.style = `transform: translate(${
      -SlideMainWidth * cnt + SlideMainWidth
    }px);`;
  } else {
    cnt--;
    SlideView.style = `transform: translate(${
      -SlideMainWidth * cnt + SlideMainWidth
    }px);`;
  }
});

// Night mode
const toggle_night = document.querySelector(".toggle_night");
const night_box = document.querySelector(".night_box");
const iconsun = document.querySelector(".iconsun");
const iconmoon = document.querySelector(".iconmoon");
const Dark = document.querySelectorAll(".Dark");

toggle_night.addEventListener("click", function () {
  var check = night_box.classList.toggle("toggleclick");
  if (check) {
    body.classList.add("class-bg-body");
    toggle_night.style.background = "#202225";
    iconmoon.style = `display: none;`;
    iconsun.style = `display: block;`;
    for (let i = 0; i < Dark.length; i++) {
      Dark[i].style = `background: #fff; color: #000;`;
    }
  } else {
    body.classList.remove("class-bg-body");
    toggle_night.style.background = "#2081e2";
    iconmoon.style = `display: block;`;
    iconsun.style = `display: none;`;
    for (let i = 0; i < Dark.length; i++) {
      Dark[i].style = `background: #000; color: #fff;`;
    }
  }
});

//selection Laguage
const tranlateLanguage = document.querySelector(".tranlateLanguage");
const User_list = document.querySelector(".User_list");
const backLanguage = document.querySelector(".backLanguage");
tranlateLanguage.addEventListener("click", function () {
  User_list.style = `transform: scale(0);`;
});
backLanguage.addEventListener("click", function () {
  User_list.style = `transform: scale(1);`;
});
User_list.addEventListener("mouseover", function () {
  User_list.style = `transform: scale(1);`;
});

const Language_element = document.querySelectorAll(".Language_element");
const languageicon = document.querySelectorAll(".language-icon");
for (let i = 0; i < Language_element.length; i++) {
  Language_element[i].addEventListener("click", function () {
    for (let j = 0; j < languageicon.length; j++) {
      if (j != i - 1) languageicon[j].innerHTML = ``;
    }
    User_list.style = `transform: scale(1); `;
    languageicon[i - 1].innerHTML = `<i class="fa-solid fa-check"></i>`;
  });
}

const productshow = document.querySelector(".product-show");
const productslide = document.querySelector(".product-slide");
const productnext = document.querySelector(".product-next");
const productprev = document.querySelector(".product-prev");
let checkproductnext = 1;

productslide.addEventListener("mouseout", function () {
  productprev.style = `opacity: 0;`;
  productnext.style = `opacity: 0;`;
});

productnext.addEventListener("mouseover", function () {
  productnext.style = `opacity: 1;`;
});

productnext.addEventListener("mouseout", function () {
  productnext.style = `opacity: 0;`;
});

productnext.addEventListener("click", function () {
  productshow.style = `transform: translateX(${
    -productslide.offsetWidth - 24
  }px);`;
  checkproductnext = 2;
});

productprev.addEventListener("mouseover", function () {
  productprev.style = `opacity: 1;`;
});
productprev.addEventListener("mouseout", function () {
  productprev.style = `opacity: 0;`;
});

productprev.addEventListener("click", function () {
  productshow.style = `transform: translateX(0px);`;
  checkproductnext = 1;
});

productslide.addEventListener("mouseover", function () {
  if (checkproductnext == 1) {
    productnext.style = `opacity: 1;`;
  } else {
    productprev.style = `opacity: 1;`;
  }
});

window.addEventListener("scroll", function () {
  let value = this.window.scrollY;

  let header = this.document.querySelector(".head-top");
  header.classList.toggle("sticky", value > 50);
});
