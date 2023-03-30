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

const producttrending = document.querySelector(".product-trending");
producttrending.innerHTML =
  `<div class="grid wide">
<div class="row sm-gutter">
  <div class="col p-6">
    <div class="product-trending">
      <div class="product-trending-name">COLLECTION</div>
      <div class="product-trending-price">
        <div class="floor">FLOOR PRICE</div>
        <div class="volume">VOLUME</div>
      </div>
    </div>
  </div>
  <div class="col p-6">
    <div class="product-trending">
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
  let chuoi = ``;
  chuoi +=
    `<div class="col p-6 mb-20">
  <div class="product-trending">
    <div class="product-trending-name">
      <span>` +
    stt +
    `</span>
      <img src="./image/image` +
    bien +
    `.jpg" alt="">
      <span>Hidden Weirdo</span>
    </div>
    <div class="product-trending-price">
      <div class="floor">0.02 ETH</div>
      <div class="volume">9.6 ETH</div>
    </div>
  </div>
</div>`;
  return chuoi;
}

// ================================================================================================

const showproduct = document.querySelectorAll(".showproduct");
showproduct.forEach((item) => {
  item.innerHTML =
    `<h3>Notable Collections</h3>
  <div class="grid wide product-main">
    <div class="product-slide">
      <div class="row product-show">` +
    productlist() +
    `</div>
      </div>
      <i class="fa-solid fa-angle-left product-prev"></i>
      <i class="fa-solid fa-angle-right product-next"></i>`;
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
  let chuoi =
    `<div class="col p-2-4 t-4 m-6">
  <div class="product-show-item">
    <div class="img">
    <img src="./image/image` +
    bien +
    `.jpg" alt="">
    </div>
    <div class="show-item-content">
      Audio Galleries<i
        class="fa-sharp fa-solid fa-circle-check"
      ></i>
      <div class="show-item-price">
        <div class="show-item-floor">
          <p>FLOOR</p>
          <p>0.03 ETH</p>
        </div>
        <div class="show-item-volume">
          <p>TOTAL VOLUMA</p>
          <p>41 ETH</p>
        </div>
      </div>
    </div>
  </div>
</div>`;
  return chuoi;
}
