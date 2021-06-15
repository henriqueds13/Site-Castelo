let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;
var slideInfo =  document.getElementsByClassName('.sInfo');

let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.slider--area').style.width = 
    `${sliderWidth * totalSlides}px` ;

    console.log(sliderWidth);
    console.log(totalSlides);

    function goPrev(){
        currentSlide --;
        if (currentSlide< 0){
            currentSlide = totalSlides -1;
        }
        updateMargin();
    }

    function goNext(){
        currentSlide ++;
        if(currentSlide > (totalSlides-1)){
            currentSlide = 0;
        }
        updateMargin();
    }

    function updateMargin(){
        let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
        let newMargin = (currentSlide * sliderItemWidth);
        document.querySelector('.slider--area').style.marginLeft = 
        `-${newMargin}px`;
        slideInfo.innerHTML = currentSlide.toString();
        console.log(slideInfo);
    }

