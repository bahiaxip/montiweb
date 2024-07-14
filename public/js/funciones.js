
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
//desplegable en la opción tipo de consulta en la vista de contacto
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
            ev.target.classList.add('active')
            ev.target.parentNode.parentNode.classList.add('select');
            console.log("existe selected")
        }else{
            if(optionsContainer.classList.contains('active')){
                console.log("tiene active")
                optionsContainer.classList.remove('active');
            }
            console.log("NO existe selected")
        }
        //console.log("EV: ",ev)
    })
}

//animación del texto inicial con la librería animejs (se podría replicar con gsap y solo cargar una librería)
function animationGsap(){
    const text = document.querySelector('.text.animejs');
    //console.log("cargado: ",text);
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
            duration:1000, //1.5seconds
            delay:anime.stagger(100)            
        })        
        .add({
            begin: function(){
                //bundle() es la función del archivo (bundle.js) que activa la animación de texto secundario que pasa de borroso a claro .
                //La función bundle() se ha envuelto del código después de haber sido compilado el archivo functions.js, que una vez compilado se crea el archivo bundle.js,
                // este nombramiento después de compilar es necesario para poder ejecutar la función en un momento determinado y no al cargar la página.
                //bundle()
                
            }
        })
}

const route = document.getElementsByName('route_name')[0].getAttribute('content');
let bubbleInterval = null;
let mwChars = null;
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

        setTimeout(()=> {
            
            document.querySelector('.textrotate').style.opacity=1;
            document.querySelector('.textrotate').style.transform='translateX(0)';
            setTimeout( () => {
                bundle()
            },2000)
        },2500)
        
        
        //bundle()
        //caroussel();
        animationgsap(route)
        cursorCards()
        //anulado
        //disolvText()
    }else if(route == 'services'){
        animationgsap(route)
        //caroussel2()
    }else if(route == 'contact'){
        //setInterval(stars,10000)
        //para mantener la compatibilidad del efecto de burbujas y el position sticky del footer es necesario el div_body y dándole estilos con overflow hidden
        document.querySelector('.div_body').classList.add('hidden');        
        const select = selectContact();
        window.addEventListener('resize',() => {            
            clearInterval(bubbleInterval);
            intervalBubble()            
        })
        createBubble();
        intervalBubble()
        animationgsap('contact')
    }
    
})

function disolvText(){
    
    let mwText = document.querySelector('.column.mw p');
    let listMwText = mwText.innerText.split("");
    console.log(listMwText);
    html = "";
    for(var i=0;i<listMwText.length;i++){
        if(listMwText[i] !== " "){
            html += '<div style="position:relative;display:inline-block;">'+listMwText[i]+'</div>';
        }else{
            html += listMwText[i];
        }
    }
    mwText.innerHTML = html;
    mwChars = mwText.getElementsByTagName("div");
    console.log("mwChars: ",mwChars)
    
    
    /* var tl = gsap.timeline({
        repeat:0,
        //repeatDelay: 1,
        //yoyo: true
    })
    tl.set('.mw_text',{perspective:400});

    tl.from(chars,{
        duration:1.5,
        opacity:0,
        x:gsap.utils.random(-300,300,true),
        y:gsap.utils.random(50,300,true),
        z:gsap.utils.random(0,300,true),
        rotate:gsap.utils.random(-90,90,true),
        scale:.1,
        stagger:{
            amount:3
        },
    }) */

}


function cursorCards(){
    document.getElementById('ul').onmousemove = e => {
        for(const card of document.getElementsByClassName('li')){
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
    
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
            card.querySelector('p').style.setProperty('--mouse-x', `${x}px`);
        }
    }
    
}

//intervalos de burbujas en la vista contact
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
    //rotateText();
    setInterval(rotateText,8000)
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

