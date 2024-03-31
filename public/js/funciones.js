
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
window.addEventListener('load', ()=>{
    // for(let i= 1; i <= 100; i++){{{{
    //     let box = document.createElement('div');
    //     box.classList.add('txtBox');
    //     box.innerHTML = "<span>Diseño</span> <span class='word_title'>y Desarrollo</span><span class='web'>Web</span>";
    //     document.querySelector('.text').appendChild(box);
    // }}}}
    // console.log("cargado")
    animation();
})
// window.addEventListener('resize', () => {
//     animation();
// })
window.addEventListener('click', (event) => {
    console.log(event.clientX)
})