//Las siguientes variables sirven para caroussel y carroussel2
let isAutoPlay=true;
let firstCardWidth;

let carousel,timeoutId;
let divArrows;
function caroussel(){

    //div carousel
    carousel = document.querySelector('.carousel');
    const arrowBtns = document.querySelectorAll(".sct_content button");
    console.log("buttons: ",arrowBtns)
    //anchura de primer div de imagen de carousel
    firstCardWidth = (carousel.querySelector('.boxjob').offsetWidth + 40);
   /*  divArrows = document.querySelector('.arrows');
    divArrows.style.width=carousel.offsetWidth+'px'; */
    console.log("carousel.offsetWidth: ",carousel.offsetWidth)
    console.log("firstCardWidth: ",firstCardWidth)
    //hijos de carousel
    const carouselChildrens = [...carousel.children];
    console.log(carouselChildrens);
    
    //obtenemos la cantidad de imágenes que entran en el ancho del carousel
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);


    // Insert copies of the last few cards to beginning of carousel for infinite scrolling
    //console.log(carouselChildrens.slice(-cardPerView));

    /* Los siguientes dos métodos slice añaden una copia de varias imágenes al comienzo y al final del carousel*/    
    /* Realizamos una copia de las últimas imágenes que entran en el ancho del carousel y las añade al comienzo del carousel, en este caso 3 imágenes */

    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    /* Realizamos una copia de las primeras imágenes que entran en el ancho del carousel  y las añade al final del carousel, en este caso 3 imágenes */
    // Insert copies of the first few cards to end of carousel for infinite scrolling
    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.classList.add("no-transition");
    //pasamos el carousel la primera tirada de imágenes que entran en el ancho del carousel (en este caso el carousel se avanza 3 imágenes)
    //esto es debido a la característica de ser infinito, como con el insertAdjacentHTML 
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    botones(arrowBtns,carousel);
    
    

    console.log("cardPerView: ",cardPerView)
    carousel.addEventListener('scroll',infiniteScroll);
    //autoPlay();
}

function botones(buttons,sel){
    buttons.forEach(btn => {
        btn.addEventListener("click", function() {
            console.log("el carousel desde foreach: ",sel)
            sel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
    });
}
const infiniteScroll = () => {
    console.log("infiniteScroll")
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        console.log("carousel desde infiniteScroll: ",carousel)
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(route == 'home')
        if(!document.querySelector('.jobs .cnt80').matches(":hover")) autoPlay();
    else
        if(!document.querySelector('.div_tools').matches(":hover")) autoPlay();
}

const autoPlay = () => {
    //console.log("autoplay")
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}

//carousel2 no tiene botones y no está utilizando grid en los elementos si no flexbox, por tanto, no se mantiene por número de items
function caroussel2(){
    
    carousel = document.querySelector('.carousel_tools');
    //anchura de primer div de imagen de carousel
    firstCardWidth = (carousel.querySelector('.tool').offsetWidth + 40);
    //hijos de carousel
    const carouselChildrens = [...carousel.children];
    console.log(carouselChildrens);
    //obtenemos la cantidad de imágenes que entran en el ancho del carousel
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.classList.add("no-transition");

    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    console.log("cardPerView: ",cardPerView)
    carousel.addEventListener('scroll',infiniteScroll);
    //autoPlay();
}

