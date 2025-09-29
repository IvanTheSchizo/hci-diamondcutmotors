let index=0;
let slider=document.querySelectorAll(".carousel-slider img");

function showImg(idx){
    if(idx<0){
        index = slider.length - 1;
    }
    else if (idx >= slider.length) {
        index=0;
    }
    const slide = -index * 100 + "%";
    document.querySelector(".carousel-slider").style.transform = "translateX(" + slide + ")";
}
function next(){
    index++;
    showImg(index);
}
function prev(){
    index--;
    showImg(index);
}