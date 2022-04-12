


function creat(title = "", desc = "") {
    const template = ` <div class="model">
    <img src="./assets/image/logo.png" alt="" class="model-img">
    <div class="model-desc">
         <h3 class="model-name">${title}</h3>
         <p class="model-text">Đang xem phim</p>
    </div>
</div>`;
document.body.insertAdjacentHTML("beforebegin", template);
}

const randomData = [
 
    "Huỳnh Thái Bảo", 
    "Nguyễn Thanh Bình",
    "Ăn chơi",
    "thanh nguyen",

  ];

let last;
const timer = setInterval(function()  { 
    const item = document.querySelector(".model");
    if(item) item.parentNode.removeChild(item);
    const title = randomData[Math.floor(Math.random() *randomData.length)];
    if(last !==  title) {
        creat(title);
    }
    last = title;
}, 5000)