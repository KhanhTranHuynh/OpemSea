const body = document.querySelector("body");

function clickactivenew(arraylist, classnameactive) {
  arraylist.forEach((item) => {
    item.addEventListener("click", function () {
      arraylist.forEach((test) => {
        test.classList.remove(classnameactive);
      });
      item.classList.add(classnameactive);
    });
  });
}

function clickactive(arraylist, item, classactive) {
  arraylist.forEach((test) => {
    test.classList.remove(classactive);
  });
  item.classList.add(classactive);
}

//Header Nav page
const headBot_nav = document.querySelectorAll(".head-bot .bot-nav li");
clickactivenew(headBot_nav, "active");

//SelectTranding
const selectleft = document.querySelectorAll(".main-select-left h2");
clickactivenew(selectleft, "select-leftactive");

//SelectTime
const selecttime = document.querySelectorAll(".main-select-right-time div");
clickactivenew(selecttime, "time-buttonactive");

// ================================================================================================
//Banner slide show
const SlideView = document.querySelector(".SlideView");
for (let i = 1; i <= 2; i++) {
  SlideView.innerHTML += `<img src="./image/banner${i}.jpg" alt="" />`;
}

const Next = document.querySelector(".SlideNext");
const Prev = document.querySelector(".SlidePrev");
const SlideMainWidth = document.querySelector(".SlideMain").offsetWidth;
const img = document.querySelectorAll(".SlideView img");
const bannercontenleft = document.querySelector(".banner-conten-left h2");
const quantity = img.length;
let cnt = 0;
function changename() {
  if (cnt == 1) bannercontenleft.innerHTML = `<h2>One piece</h2>`;
  else bannercontenleft.innerHTML = `<h2>Dragon Ball</h2>`;
}
setInterval(function TimeDots() {
  if (cnt < quantity - 1) {
    cnt++;
  } else {
    cnt = 0;
  }
  SlideView.style = `transform: translate(${-SlideMainWidth * cnt}px);`;
  changename();
}, 5000);
Next.addEventListener("click", function () {
  if (cnt < quantity - 1) {
    cnt++;
  } else {
    cnt = 0;
  }
  SlideView.style = `transform: translate(${-SlideMainWidth * cnt}px);`;
  changename();
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
  changename();
});

// ================================================================================================
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

// ================================================================================================
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

// ================================================================================================
const productshow = document.querySelectorAll(".product-show");
const productslide = document.querySelectorAll(".product-slide");
const productnext = document.querySelectorAll(".product-next");
const productprev = document.querySelectorAll(".product-prev");

for (let i = 0; i < productslide.length; i++) {
  let checkproductnext = 1;
  productslide[i].addEventListener("mouseout", function () {
    productprev[i].style = `opacity: 0;`;
    productnext[i].style = `opacity: 0;`;
  });

  productnext[i].addEventListener("mouseover", function () {
    productnext[i].style = `opacity: 1;`;
  });

  productnext[i].addEventListener("mouseout", function () {
    productnext[i].style = `opacity: 0;`;
  });

  productnext[i].addEventListener("click", function () {
    productshow[i].style = `transform: translateX(${
      -productslide[i].offsetWidth - 24
    }px);`;
    productnext[i].style = "opacity: 0;";
    checkproductnext = 2;
  });

  productprev[i].addEventListener("mouseover", function () {
    productprev[i].style = `opacity: 1;`;
  });

  productprev[i].addEventListener("mouseout", function () {
    productprev[i].style = `opacity: 0;`;
  });

  productprev[i].addEventListener("click", function () {
    productshow[i].style = `transform: translateX(0px);`;
    productprev[i].style = "opacity: 0;";
    checkproductnext = 1;
  });

  productslide[i].addEventListener("mouseover", function () {
    if (checkproductnext == 1) {
      productnext[i].style = `opacity: 1;`;
    } else {
      productprev[i].style = `opacity: 1;`;
    }
  });
}

// ================================================================================================
window.addEventListener("scroll", function () {
  let value = this.window.scrollY;
  let headposfix = this.document.querySelector(".headposfix");
  let header = this.document.querySelector(".head-top");
  header.classList.toggle("sticky", value > 50);
  if (value > 50) {
    headposfix.style = `background-color: #000;`;
  } else {
    headposfix.style = `background-color: transparent;`;
  }
});

// ================================================================================================
var gallery = document.querySelector(".galleryUser");
const User = document.querySelector(".Language");
const gallery__inner = document.querySelector(".galleryUser-inner");

User.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    gallery.classList.toggle("showgallery");
  }
});

//e.target: the cu the ma minh chon
//e.currentTarget: the ma minh dang goi ham den
gallery.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    gallery.classList.toggle("showgallery");
  }
});
// ================================================================================================
const fromboxshow = document.querySelector(".galleryUser-inner-show");
fromboxshow.addEventListener("click", function (e) {
  if (fromboxshow.innerText == "Show less") {
    document.querySelector(".galleryUser-inner-list").scrollTop = 0;
    document.querySelector(
      ".galleryUser-inner-list"
    ).style = `overflow-Y: hidden;`;
    fromboxshow.innerText = "Show more";
  } else {
    document.querySelector(
      ".galleryUser-inner-list"
    ).style = `overflow-Y: scroll;`;
    fromboxshow.innerText = "Show less";
  }
});

// ================================================================================================
const search = document.querySelector('input[name="search"');
const close = document.querySelector(".close");
const searchhistory = document.querySelector(".search-history");

search.addEventListener("input", function () {
  console.log(search.value);
  searchhistory.innerHTML = "";
  if (search.value != "") {
    close.style.display = "block";
    let cntheight = 10;

    for (let i = 0; i < nameproduct.length; i++) {
      if (nameproduct[i].toLowerCase().search(search.value) != -1) {
        searchhistory.style.display = "block";
        searchhistory.innerHTML += `<span>${nameproduct[i]}</span> <br>`;
        searchhistory.style.height = `${(cntheight += 30)}px`;
        searchhistory.style.background = "red";
        var searchhistoryElement = document.querySelectorAll(
          ".search-history span"
        );
        searchhistoryElement.forEach((item) => {
          item.addEventListener("click", function () {
            search.value = item.textContent;
            searchhistory.style.display = "none";
          });
        });
      }
    }
    body.addEventListener("keydown", function (e) {
      if (e.keyCode == 13) {
        search.value = "";
        close.style.display = "none";
        searchhistory.innerHTML = "";
      }
    });
  } else {
    close.style.display = "none";
    searchhistory.style.display = "none";
  }
});

close.addEventListener("click", function () {
  search.value = "";
  close.style.display = "none";
});

// ================================================================================================
