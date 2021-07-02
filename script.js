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

    let n= "l0";
    let activen = "l0";
   
var el = document.getElementById('lista');
el.addEventListener('click', function(e){
    n = e.target.id;
    if(n != 'active'){
        console.log(n)
    document.getElementById('active').setAttribute('id', activen);
    document.getElementById(n).setAttribute('id', 'active');
    activen = n;
    }
    switch(n){
        case 'l0':
            document.querySelector('.infoarea--title').innerHTML = "Cortadores de grama"
            // document.querySelector('.infoarea--text').innerHTML = "...";
            document.querySelector('.infoarea--img').setAttribute('src','assets/images/slide5.jpg');
            break;
        case 'l1':
            document.querySelector('.infoarea--title').innerHTML = "Roçadeiras costais"
            // document.querySelector('.infoarea--text').innerHTML = "...";
            document.querySelector('.infoarea--img').setAttribute('src','assets/images/rocadeira5.jpg');
            break;
        case 'l2':
            document.querySelector('.infoarea--title').innerHTML = "Motoserras"
            // document.querySelector('.infoarea--text').innerHTML = "...";
            document.querySelector('.infoarea--img').setAttribute('src','assets/images/motoserras.jpg');
            break;
        case 'l3':
            document.querySelector('.infoarea--title').innerHTML = "Motobombas"
            // document.querySelector('.infoarea--text').innerHTML = "...";
            document.querySelector('.infoarea--img').setAttribute('src','assets/images/bomba.jpg');
            break;
        case 'l4':
            document.querySelector('.infoarea--title').innerHTML = "Lavadoras de alta pressão"
            // document.querySelector('.infoarea--text').innerHTML = "...";
            document.querySelector('.infoarea--img').setAttribute('src','assets/images/lavadora2.jpg');
            break;
        case 'l5':
            document.querySelector('.infoarea--title').innerHTML = "Ferramentas elétricas"
            // document.querySelector('.infoarea--text').innerHTML = "..."; 
            document.querySelector('.infoarea--img').setAttribute('src','assets/images/ferramentas.jpg');
            break;
        case 'l6':
            document.querySelector('.infoarea--title').innerHTML = "Rebobinamento de motores"
            // document.querySelector('.infoarea--text').innerHTML = "...";
            document.querySelector('.infoarea--img').setAttribute('src','assets/images/motor.jpg');
            break;
        case 'l7':
            document.querySelector('.infoarea--title').innerHTML = "Geradores de energia"
            // document.querySelector('.infoarea--text').innerHTML = "...";
            document.querySelector('.infoarea--img').setAttribute('src','assets/images/gerador.jpg');
            break;
    }
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 34 || document.documentElement.scrollTop > 34) {
        document.querySelector('.header--area').style.height = "70px";
        document.querySelector('.logo img').style.width = "150px";
        document.querySelector('.line').style.height = "0"
        document.querySelector('.line2').style.boxShadow = "0px 5px 20px";


    } else{
        document.querySelector('.header--area').style.height = "115px";
        document.querySelector('.logo img').style.width = "200px";
        document.querySelector('.line').style.height= "35px"
        document.querySelector('.line2').style.boxShadow = "0px 0px 0px";
    }
}

