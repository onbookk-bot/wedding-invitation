function copyAccount(account){

navigator.clipboard.writeText(account);

alert("계좌번호가 복사되었습니다.");

}

function copyAccount(account){

navigator.clipboard.writeText(account);

alert("계좌번호가 복사되었습니다.");

}


/* 갤러리 확대 */

const galleryImages =
document.querySelectorAll(".gallery-img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightboxImg");

const closeBtn =
document.getElementById("closeBtn");


galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});


closeBtn.addEventListener("click",()=>{

lightbox.style.display="none";

});


lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});