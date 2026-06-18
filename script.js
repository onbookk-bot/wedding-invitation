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
    let startX = 0;

    function showImage(index){

        modalImage.src = galleryImages[index].src;

        galleryCount.innerText =
        `${index + 1} / ${galleryImages.length}`;

    }

    // 갤러리 클릭
    galleryImages.forEach((img,index)=>{

        img.addEventListener("click",()=>{

            currentIndex = index;

            showImage(currentIndex);

            galleryModal.style.display = "flex";

        });

    });

    // 닫기
    galleryClose.addEventListener("click",()=>{

        galleryModal.style.display = "none";

    });

    // 배경 클릭시 닫기
    galleryModal.addEventListener("click",(e)=>{

        if(e.target === galleryModal){

            galleryModal.style.display = "none";

        }

    });

    // 이전 버튼
    prevBtn.addEventListener("click",(e)=>{

        e.stopPropagation();

        currentIndex--;

        if(currentIndex < 0){

            currentIndex =
            galleryImages.length - 1;

        }

        showImage(currentIndex);

    });

    // 다음 버튼
    nextBtn.addEventListener("click",(e)=>{

        e.stopPropagation();

        currentIndex++;

        if(currentIndex >= galleryImages.length){

            currentIndex = 0;

        }

        showImage(currentIndex);

    });

    // 스와이프
    modalImage.addEventListener("touchstart",(e)=>{

        startX = e.touches[0].clientX;

    });

    modalImage.addEventListener("touchend",(e)=>{

    const endX = e.changedTouches[0].clientX;

    const diff = startX - endX;

    if(diff > 50){

        currentIndex++;

        if(currentIndex >= galleryImages.length){
            currentIndex = 0;
        }

        showImage(currentIndex);

    }

    else if(diff < -50){

        currentIndex--;

        if(currentIndex < 0){
            currentIndex = galleryImages.length - 1;
        }

        showImage(currentIndex);

    }

});



showImage(currentIndex);

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
"🎵";

}else{

bgm.play();

musicBtn.innerHTML =
"🎵";

}

isPlaying = !isPlaying;

});

}

});





document.addEventListener("click", () => {

    const bgm =
    document.getElementById("bgm");

    if(bgm){

        bgm.play();

    }

},{ once:true });




/*확대 방지 추가*/



document.addEventListener(
'touchmove',
function(e){
    if(e.touches.length > 1){
        e.preventDefault();
    }
},
{ passive:false }
);



document.addEventListener(
'gesturestart',
function(e){
    e.preventDefault();
}
);

document.addEventListener(
'gesturechange',
function(e){
    e.preventDefault();
}
);

document.addEventListener(
'gestureend',
function(e){
    e.preventDefault();
}
);


/*더블탭 확대 방지*/

let lastTouchEnd = 0;

document.addEventListener(
'touchend',
function(e){

const now = Date.now();

if(now - lastTouchEnd <= 300){
    e.preventDefault();
}

lastTouchEnd = now;

},
false
);