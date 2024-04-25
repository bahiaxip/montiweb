
/* document.body.addEventListener('mousemove',e => {
    let x = e.clientX;
    let y = e.clientY;
    //console.log(x)
    //console.log(y)

    // gsap.to('.txtBox', {
    //     x : e.clientX,
    //     //[716,737,736]
    //     //[287,289,291]
    //     y : e.clientY,
    //     stagger:-0.01,
    //     rotate: (i,target) => {
    //         return (i + 1) * 0.1
    //     }
    // })
}) */

function animation(){
    const text = document.querySelector('.text.animejs');
    console.log("cargado: ",text);
    
    text.innerHTML = text.textContent.replace(/\S/ig, "<span>$&</span>");
    anime.timeline({
        loop:false
        })
        //mostrar
        .add({
            targets:'.text.animejs',
            opacity:[0,1],
            duration:100,
        })
        .add({
            targets:'.text.animejs span',
            translateY:[-600, 0], //[start value, end value]
            scale:[10,1],//[start value, end value]
            opacity:[0,1],//[start value, end value]
            easing:"easeOutExpo",
            duration:1500, //1.5seconds
            delay:anime.stagger(100)            
        })
        .add({
            begin: function(){
                hola()
            }
        })

        //desaparecer por la izquierda
        // .add({
        //     targets:'.text.animejs span',
        //     translateX:[0, -1000], //[start value, end value]
        //     scale:[1,1],//[start value, end value]
        //     opacity:[1,0],//[start value, end value]
        //     easing:"easeOutExpo",
        //     duration:2000, //1.5seconds
        //     delay:anime.stagger(100)
        // })
        // //volver a mostrar de forma horizontal
        // .add({
        //     targets:'.text.animejs span',
        //     translateX:[-1000,0], //[start value, end value]
        //     scale:[1,1],//[start value, end value]
        //     opacity:[0,1],//[start value, end value]
        //     easing:"easeOutExpo",
        //     duration:2000, //1.5seconds
        //     delay:anime.stagger(100)
        // })
        // //volver a desaparecer acercándose a la pantalla
        // .add({
        //     targets:'.text.animejs span',
        //     translateX:[0, 0], //[start value, end value]
        //     scale:[1,50],//[start value, end value]
        //     opacity:[1,0],//[start value, end value]
        //     easing:"easeOutExpo",
        //     duration:2000, //1.5seconds
        //     delay:anime.stagger(100)
        // })
    
    
    
}

function hol(){
    hola();
}
const route = document.getElementsByName('route_name')[0].getAttribute('content');
window.addEventListener('load', ()=>{
    // for(let i= 1; i <= 100; i++){{{{
    //     let box = document.createElement('div');
    //     box.classList.add('txtBox');
    //     box.innerHTML = "<span>Diseño</span> <span class='word_title'>y Desarrollo</span><span class='web'>Web</span>";
    //     document.querySelector('.text').appendChild(box);
    // }}}}
    // console.log("cargado")
    console.log("route: ",route)
    if(route == 'home'){
        animation();
        pruebaRotate();
        caroussel();
    }else if(route == 'services'){
        //caroussel2()
    }
    
})

//función para título de header que va mostrando los servicios de forma
function pruebaRotate(){
    let words = document.querySelectorAll('.word');
    words.forEach((word) => {
        let letters = word.textContent.split("");
        word.textContent = "";
        letters.forEach((letter) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.className = 'letter';
            word.append(span);
        })
    })

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = '1';

    let rotateText = () => {
        let currentWord = words[currentWordIndex];
        let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
        // rotate out letters of current word
        Array.from(currentWord.children).forEach((letter,i) => {
            setTimeout(() => {
                letter.className = 'letter out';
            }, i * 80);
        })

        //reveal and rotate in letters of next word
        nextWord.style.opacity = '1';
        Array.from(nextWord.children).forEach((letter,i) => {
            letter.className = 'letter behind';
            setTimeout(() => {
                letter.className = 'letter in';
            },340 + i * 80);
        })
        currentWordIndex = 
            currentWordIndex === maxWordIndex ? 0 :currentWordIndex + 1;
    }
    rotateText();
    setInterval(rotateText,4000)
}
// window.addEventListener('resize', () => {
//     animation();
// })
/* window.addEventListener('click', (event) => {
    console.log(event.clientX)
}) */

/* let prev,next;

function moveScroll(sel,type){
    console.log("sel: ",sel)
    console.log("type: ",type)
    let carousel = document.querySelector('.slider');
    carousel.scrollLeft += 390;
} */