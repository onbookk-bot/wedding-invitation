/* =========================
계좌 복사
========================= */

function copyAccount(account){


navigator.clipboard.writeText(account)
.then(() => {

    alert("계좌번호가 복사되었습니다.");

})
.catch(() => {

    alert(account);

});


}

/* =========================
계좌 팝업
========================= */

function openModal(id){


const modal =
document.getElementById(id);

if(modal){

    modal.style.display = "flex";

}


}

function closeModal(id){


const modal =
document.getElementById(id);

if(modal){

    modal.style.display = "none";

}


}

/* =========================
페이지 로드 후 실행
========================= */

document.addEventListener("DOMContentLoaded", () => {

/* =====================
스크롤 애니메이션
===================== */

const fadeElements =
document.querySelectorAll(".fade-up");

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

fadeElements.forEach(el=>{

observer.observe(el);

});

/* =========================
갤러리 팝업
========================= */

const galleryImages =
document.querySelectorAll(".gallery-img");

const galleryModal =
document.getElementById("galleryModal");

const modalImage =
document.getElementById("modalImage");

const galleryClose =
document.getElementById("galleryClose");

const galleryCount =
document.getElementById("galleryCount");

const prevBtn =
document.getElementById("prevBtn");

const nextBtn =
document.getElementById("nextBtn");

if(
galleryModal &&
modalImage &&
galleryClose &&
galleryCount &&
prevBtn &&
nextBtn
){

let currentIndex = 0;

function showImage(index){

modalImage.src =
galleryImages[index].src;

galleryCount.innerText =
`${index + 1} / ${galleryImages.length}`;

}

galleryImages.forEach((img,index)=>{

img.addEventListener("click",()=>{

currentIndex = index;

showImage(currentIndex);

galleryModal.style.display = "flex";

});

});

galleryClose.addEventListener("click",()=>{

galleryModal.style.display = "none";

});

galleryModal.addEventListener("click",(e)=>{

if(e.target === galleryModal){

galleryModal.style.display = "none";

}

});

prevBtn.addEventListener("click",(e)=>{

e.stopPropagation();

currentIndex--;

if(currentIndex < 0){

currentIndex =
galleryImages.length - 1;

}

showImage(currentIndex);

});

nextBtn.addEventListener("click",(e)=>{

e.stopPropagation();

currentIndex++;

if(currentIndex >= galleryImages.length){

currentIndex = 0;

}

showImage(currentIndex);

});

}

/* =========================
BGM
========================= */

const bgm =
document.getElementById("bgm");

const musicBtn =
document.getElementById("musicBtn");

let isPlaying = false;

if(bgm && musicBtn){

musicBtn.addEventListener("click",()=>{

if(isPlaying){

bgm.pause();

musicBtn.innerHTML =
"▶";

}else{

bgm.play();

musicBtn.innerHTML =
"⏸";

}

isPlaying = !isPlaying;

});

}

});
