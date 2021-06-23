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

    let n= "2";
var el = document.getElementById('lista');
el.addEventListener('click', function(e){
    n = e.target.id;
    switch(n){
        case 'l1':
            console.log('primeiro');
            break;
        case 'l2':
            console.log('segundo');
            break;
        case 'l3':
            console.log('terceiro');
            break;
        case 'l4':
            console.log('quarto');
            break;
        case 'l5':
            console.log('quinto');
            break;
        case 'l6':
            console.log('sexto');
            break;
        case 'l7':
            console.log('setimo');
            break;
    }
});

