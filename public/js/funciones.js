
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


/* contact */
function selectContact(){
    let selected = document.querySelector('.selected');
    let optionsContainer = document.querySelector('.options-container');
    //document.querySelector('.inputBox').classList.add('select');

    let optionsList = document.querySelectorAll('.select-box .option')
    /* selected.addEventListener('click', (ev) => {
        console.log("d: ",ev.target.parentNode.parentNode)
        optionsContainer.classList.toggle('active');
        ev.target.classList.toggle('active')
        ev.target.parentNode.parentNode.classList.add('select');
        
        
    }) */
    optionsList.forEach((option) => {
        option.addEventListener('click', (ev) => {
            selected.innerHTML = option.querySelector('label').innerHTML;
            optionsContainer.classList.remove('active');
            ev.target.classList.remove('active')
            
        })
    })
    window.addEventListener('click',(ev) => {
        if(ev.target == selected){
            optionsContainer.classList.toggle('active');
            ev.target.classList.toggle('active')
            ev.target.parentNode.parentNode.classList.add('select');
            console.log("existe selected")
        }else{
            if(optionsContainer.classList.contains('active')){
                console.log("tiene active")
                optionsContainer.classList.remove('active');
            }
            console.log("NO existe selected")
        }
        console.log("EV: ",ev)
        /* if(optionsContainer.classList.contains('active')){
            console.log("tiene active")
            optionsContainer.classList.remove('active');
        } */
        
        /* optionsContainer.classList.remove('active'); */
        console.log("nada");
    })
}

function animationGsap(){
    const text = document.querySelector('.text.animejs');
    console.log("cargado: ",text);
    
    text.innerHTML = text.textContent.replace(/\S/ig, "<span>$&</span>");
    //animación del texto inicial con la librería animejs
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
                //hola() es la función del archivo (bundle.js) que activa la animación de texto secundario que pasa de borroso a claro .
                //La función hola() se ha envuelto del código después de haber sido compilado el archivo functions.js, que una vez compilado se crea el archivo bundle.js,
                // esto es necesario para poder ejecutar la función en un momento determinado y no al cargar la página.
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

const route = document.getElementsByName('route_name')[0].getAttribute('content');
let bubbleInterval = null;
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
        animationGsap();
        pruebaRotate();
        //caroussel();
        animationgsap('home')
    }else if(route == 'services'){
        //caroussel2()
    }else if(route == 'contact'){
        //setInterval(stars,10000)
        //para mantener la compatibilidad del efecto de burbujas y el position sticky del footer es necesario el div_body y dándole estilos con overflow hidden
        document.querySelector('.div_body').classList.add('hidden');
        document.querySelector('section.contact').classList.add('transparent');
        const select = selectContact();
        window.addEventListener('resize',() => {            
            clearInterval(bubbleInterval);
            intervalBubble()            
        })
        createBubble();
        intervalBubble()
    }
    
})

function intervalBubble(){
    let totalHeight = document.body.getBoundingClientRect().height;
    console.log("totalHeight: ",totalHeight)
    //establecemos medida fija al .div_body para que la burbuja no redimensione cada vez que aparece
    document.querySelector('.div_body').style.height = totalHeight+'px';    
    bubbleInterval = setInterval(createBubble,10000);
}
//función de creación de burbujas
function createBubble(){
    
    
    const div_body = document.querySelector('.div_body');

    const main = document.querySelector('main');
    const createElement = document.createElement('span');
    createElement.classList.add('bubble');
    var size = Math.random() * 60;
    console.log(size)

    let widthElement = 20 + size ;
    let heightElement = 20 + size ;
    createElement.style.width = widthElement + 'px';
    createElement.style.height = heightElement + 'px';
    //creamos div al span de burbuja
    let wrapWidthElement = widthElement + 5 +'px';
    let wrapHeightElement = heightElement + 5 + 'px';
    let wrap = document.createElement('div');
    wrap.style.width = wrapWidthElement;
    wrap.style.height = wrapHeightElement;
    wrap.classList.add('wrapBubble');

    //conseguimos que las que se salgan del 70% tanto por la izquierda como de la derecha se mantengan en los límites
    /* let oneWidth = innerWidth / 100;
    let width80 = oneWidth * 80; */
    
    let aleatorio = Math.random() * innerWidth;
    console.log("aleatorio: ",aleatorio);
    /* if(aleatorio < oneWidth * 15){
        console.log("oneWidth * 15 ",oneWidth * 15)
        console.log("resultado ",oneWidth)
        aleatorio = oneWidth * 15;
    }else if(aleatorio > width80){
        aleatorio = width80;
    } */
    

    wrap.style.left = aleatorio + 'px';
    wrap.appendChild(createElement);
    div_body.appendChild(wrap);
    console.log(innerWidth)

    setTimeout(()=> {
        wrap.remove()
    },15000)

}


//función para título de header que va mostrando los servicios de forma rotatoria
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

