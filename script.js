const galleryContainer = document.getElementById("galleryContainer");
const slide = document.querySelector(".slide");
const arrowPrev = document.getElementById("arrowPrev");
const arrowNext = document.getElementById("arrowNext");


arrowNext.addEventListener("click",()=>{
    const slideWidth = slide.clientWidth;
    galleryContainer.scrollLeft += slideWidth;
});

arrowPrev.addEventListener("click", ()=>{
    const slideWidth = slide.clientWidth;
    galleryContainer.scrollLeft -= slideWidth;
});


