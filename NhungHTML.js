let nameproduct = [
  "Audio Galleries",
  "Wrapped Cryptopunks",
  "Bored Ape Yacht Club",
  "BEANZ Official",
  "CryptoPunks V1 (wrapped)",
  "Women Unite",
  "PonziLords",
  "RR/MILADY",
  "Cool Cats NFT",
  "Monkey NFT",
  "Azuki",
];

// ================================================================================================

const Resources_list = document.querySelector(".Resources_list");
Resources_list.innerHTML =
  Resourceslists() +
  `<hr />
<div class="Resources_element">
  <a href="#"><i class="fa-brands fa-twitter"></i></a>
  <a href="#"><i class="fa-brands fa-instagram"></i></a>
  <i class="fa-brands fa-facebook"></i>
  <i class="fa-brands fa-tiktok"></i
  ><i class="fa-brands fa-youtube"></i
  ><i class="fa-brands fa-github"></i>
  </div>
  `;
function Resourceslists() {
  const Resourceslist = [
    "Blog",
    "Learn",
    "Help Center",
    "Use content FAQs",
    "Taxes",
    "Partners",
    "Developper platfrom",
    "Platfrom Status",
  ];
  let chuoi = ``;
  for (let i = 0; i < Resourceslist.length; i++) {
    chuoi += `<div class="Resources_element">` + Resourceslist[i] + `</div>`;
  }
  return chuoi;
}

// ================================================================================================
const Languagelist = document.querySelector(".Language_list");
const listLanguage = [
  "VietNamese",
  "French",
  "Chinese",
  "Japanese",
  "Korean",
  "German",
];
for (let i = 0; i < 6; i++) {
  Languagelist.innerHTML += `<div class="Language_element">
  ${listLanguage[i]}
  <div class="language-icon"></div>
</div>`;
}
// ================================================================================================
const botnav = document.querySelector(".bot-nav");
const headbotlist = [
  "All",
  "Art",
  "Gaming",
  "Memberships",
  "PFPs",
  "Photography",
];
botnav.innerHTML += `<li class="active">${headbotlist[0]}</li>`;
for (let i = 1; i < 6; i++) {
  botnav.innerHTML += `<li>${headbotlist[i]}</li>`;
}
// ================================================================================================

const producttrending = document.querySelector(".product-trending");
producttrending.innerHTML =
  `<div class="grid wide">
<div class="row sm-gutter">
  <div class="col p-6">
    <div class="product-trending mb-4">
      <div class="product-trending-name">COLLECTION</div>
      <div class="product-trending-price">
        <div class="floor">FLOOR PRICE</div>
        <div class="volume">VOLUME</div>
      </div>
    </div>
  </div>
  <div class="col p-6">
    <div class="product-trending mb-4">
      <div class="product-trending-name">COLLECTION</div>
      <div class="product-trending-price">
        <div class="floor">FLOOR PRICE</div>
        <div class="volume">VOLUME</div>
      </div>
    </div>
  </div>` +
  producttrendinglist() +
  `</div>
  </div>`;

function producttrendinglist() {
  let chuoidayneee = ``;
  for (let i = 1; i <= 10; i++) {
    chuoidayneee += producttrendingelement(
      i,
      Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)
    );
  }
  return chuoidayneee;
}

function producttrendingelement(stt, bien) {
  let num = Math.floor(Math.random() * 10);
  let chuoi = ``;
  chuoi +=
    `<div class="col p-6 mb-2">
  <div class="product-trending">
    <div class="product-trending-name">
      <span>` +
    stt +
    `</span>
      <img src="./image/image` +
    bien +
    `.jpg" alt="">
      <span>${nameproduct[num]}</span>
    </div>
    <div class="product-trending-price">
      <div class="floor">0.${num + 10} ETH</div>
      <div class="volume">${num * num + 2 * num} ETH</div>
    </div>
  </div>
</div>`;
  return chuoi;
}

// ================================================================================================
const showproduct = document.querySelectorAll(".showproduct");
const titleproduct = [
  "Notable Collections",
  "Top Collector Buys Today",
  "Women's History Month Spotlight",
  "Trending in Art",
  "Trending in Gaming",
  "Trending in Memberships",
  "Trending in PFPs",
  "Trending in Photography",
  "NFT 101",
  "Explore Categories",
];
let numbertitleproduct = 0;
showproduct.forEach((item) => {
  item.innerHTML =
    `<h3>${titleproduct[numbertitleproduct]}</h3>
  <div class="grid wide product-main">
    <div class="product-slide">
      <div class="row product-show">` +
    productlist() +
    `</div>
      </div>
      <i class="fa-solid fa-angle-left product-prev"></i>
      <i class="fa-solid fa-angle-right product-next"></i>`;
  numbertitleproduct++;
});

function productlist() {
  let chuoidayne = ``;
  for (let i = 1; i <= 10; i++) {
    chuoidayne += productelement(
      Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)
    );
  }
  return chuoidayne;
}

function productelement(bien) {
  let num = Math.floor(Math.random() * 10);

  let chuoi =
    `<div class="col p-2-4 t-4 m-6">
  <div class="product-show-item">
    <div class="img">
    <img src="./image/image` +
    bien +
    `.jpg" alt="">
    </div>
    <div class="product-show-item-content">
      ${nameproduct[num]}`;
  if (num % 2 == 0) {
    chuoi += `<i
        class="fa-sharp fa-solid fa-circle-check"
      ></i>`;
  }
  chuoi += `<div class="product-show-item-price">
        <div class="product-show-item-floor">
          <p>FLOOR</p>
          <p>0.0${num} ETH</p>
        </div>
        <div class="product-show-item-volume">
          <p>TOTAL VOLUMA</p>
          <p>${num * num + 2 * num} ETH</p>
        </div>
      </div>
    </div>
  </div>
</div>`;
  return chuoi;
}

// ================================================================================================
let Marketplacelist =
  "Marketplace,All NFTs,Art,Gaming,Memberships,PFPs,Photography";
let MyAccountlist =
  "My Account,Profile,Favorites,Watchlist,My Collections,Create,Settings,";
let Resourceslist =
  "Resources,Blog,Learn,Help Center,User Content FAQs,Taxes,Partners,Developer Platform,Platform Status";
let Companylist = "Company,About,Careers,Ventures,Grants";
let Statslist = "Stats,Rankings,Activity";
let Learnlist =
  "Learn,What is an NFT?,How to buy an NFT,What are NFT drops?,How to sell an NFT using OpenSea,How to create an NFT on OpenSea,What is a crypto wallet?,What is cryptocurrency?,What are blockchain gas fees?,What is a blockchain?,What is web3?,How to stay protected in web3";

const arrayHaiChieu = [
  Marketplacelist.split(","),
  MyAccountlist.split(","),
  Resourceslist.split(","),
  Companylist.split(","),
  Statslist.split(","),
  Learnlist.split(","),
];

for (let i = 0; i < arrayHaiChieu.length; i++) {
  const mangcon = arrayHaiChieu[i];
  for (let j = 0; j < mangcon.length; j++) {
    let clasnamene = `.endfoot${i + 1}`;
    if (j == 0)
      document.querySelector(clasnamene).innerHTML += `<h4>${mangcon[0]}</h4>`;
    else document.querySelector(clasnamene).innerHTML += `<p>${mangcon[j]}</p>`;
  }
}
// ================================================================================================
const imagePayList = [
  "https://opensea.io/static/images/logos/metamask-fox.svg",
  "https://static.opensea.io/logos/walletlink-alternative.png",
  "https://static.opensea.io/logos/walletconnect-alternative.png",
  "https://opensea.io/static/images/logos/ledgerconnect-alternative.png",
  "https://opensea.io/static/images/logos/phantom.svg",
  "https://lh3.googleusercontent.com/uBaatYG20TOMFFUCTEgwtaI9Q6l_Nqr0qKUGQPJHjKnlLDqhwQaQbAvQku4nyH8TVxZKx96RsiFduLrcw2vqqjrr=s48",
  "https://lh3.googleusercontent.com/uSYrwIYFZ-7kwg0-P_0YKubeNhFUN_jGg9J8bPbCOYjwW94jbFCEMqHUaV35sn0bvqujkuy6M72gjIRD4NTCirsQpXc=s48",
  "https://opensea.io/static/images/logos/glow.svg",
  "https://static.opensea.io/logos/fortmatic-alternative.png",
  "https://opensea.io/static/images/logos/venly.svg",
];
const namePayList = [
  "MetaMask",
  "Coinbase Wallet",
  "Wallet connect",
  " Ledger",
  "Phantom",
  "BitKeep",
  "Core",
  "Glow",
  "Fortmatic",
  "Venly",
];

const galleryUserinnerlist = document.querySelector(".galleryUser-inner-list");
for (let i = 0; i < imagePayList.length; i++) {
  galleryUserinnerlist.innerHTML += `<p>
  <img
    src="${imagePayList[i]}"
    alt=""
  />
  ${namePayList[i]}
</p>`;
}
