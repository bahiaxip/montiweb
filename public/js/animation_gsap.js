//efecto dibujar iconos SVG
function setIcons(div_parent){
    //sustituido por clases CSS para cada stroke-dashoffset
    //Debido a que hemos establecido a -220px la propiedad 
    //stroke-dashoffset de forma genérica para todos los iconos, es necesario
    //retardar algunos con setTimeout o personalizar una (clase offset1,offset2,...) con 
    //un número de píxeles personalizado para cada uno de los iconos 
        
    //retardamos 0.8 segundos
    setTimeout(()=>{
            document.querySelectorAll(div_parent+' .offset1 .path').forEach((item) => {
                //console.log(item)
                item.classList.add('svg_active')
            });
            document.querySelectorAll(div_parent+' .offset2 .path').forEach((item) => {
                //console.log(item)
                item.classList.add('svg_active')
            });
            document.querySelectorAll(div_parent+' .offset3 .path').forEach((item) => {
                //console.log(item)
                item.classList.add('svg_active')
            });
        /*
        else
            setTimeout(()=>{
               back_skill.querySelectorAll('.path').forEach((item) => {
                    item.classList.add('svg_active')
                });
           },300)
       */
    //})
    },800)
}

window.addEventListener('load',()=>{
    const route = document.getElementsByName('route_name')[0].getAttribute('content');
    console.log("ruta: ",route)
    if(route == 'home'){

        gsap.to('.profile',{y:0,opacity:1,duration:1,delay:2,ease:'power4.out'})
        //gsap.to('.background_cover',{width:'100%',ease:'power4.out',duration:3});
        gsap.delayedCall(1,setIcons,['.title']);

        //dibujar imágenes svg con stroke
        gsap.to('.back_skill1',{
            scale: 1,
            duration:.5,
            delay: 0.5
        })
        gsap.to('.back_skill2',{
            scale: 1,
            duration:.5,
            delay: 0.5
        })

        var tl=gsap.timeline();
        //dibujamos el primer bloque de elementos
    //las 2 líneas siguientes dan warning (GSAP target undefined not found)
        tl.to('.box_skills1',{}).call(setIcons('.box_skills1'));
        //dibujamos el segundo bloque de elementos
        //tl.to('.box_skills2',{}).call(setIcons('.box_skills2'));
        //gsap.to('.back_skill1')
    }

    })