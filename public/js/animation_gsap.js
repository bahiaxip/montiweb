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




function animationgsap(page){    
    console.log("ruta: ",route)
    if(page == 'home'){

        //gsap.to('.profile',{y:0,opacity:1,duration:1,delay:2,ease:'power4.out'})
        //gsap.to('.background_cover',{width:'100%',ease:'power4.out',duration:3});
        /* gsap.delayedCall(1,setIcons,['.title']); */

        //dibujar imágenes svg con stroke
        /* gsap.to('.back_skill1',{
            scale: 1,
            duration:.5,
            delay: 0.5
        })
        gsap.to('.back_skill2',{
            scale: 1,
            duration:.5,
            delay: 0.5
        }) */

        //dividimos en caracteres con splittype
        const title_pageweb = new SplitType('.title_pageweb');
        const title_design = new SplitType('.title_design');

        gsap.registerPlugin(ScrollTrigger);
        var tl = gsap.timeline();
        //título web corporativa por 499€
        tl.to('.clippath.right h4',{
            opacity:1,
            duration:.5,
            x:0,
            scrollTrigger: {
                trigger: 'header',
                /* markers:true, */
                start: '100 top',
                end: '+=120 top',
                scrub:1,
            }
        });
        gsap.to('.clippath.right .clone',{
            duration:1,
            "--clip":'59.2% at 92% 50%',
            scrollTrigger: {
                trigger:'header',
                start: '120 top',
                end:'+=300 top',
                scrub:1
            }
            
        })
        //lista de ventajas de web corporativa 
        gsap.to('.clippath.right .list_offer li.one',{
            opacity: 1,
            duration:.3,
            //delay:.2,
            x:0,
            scrollTrigger: {
                trigger:'header',
                //markers:true,
                start: '250 top',
                end:'300 top',
                scrub:1
            }
        })
        gsap.to('.clippath.right .list_offer li.two',{
            opacity: 1,
            duration:.3,
            //delay:.4,
            x:0,
            scrollTrigger: {
                trigger:'header',
                /* markers:true, */
                start: '250 top',
                end:'300 top',
                scrub:2
            }
        })
        gsap.to('.clippath.right .list_offer li.three',{
            opacity: 1,
            duration:.3,
            //delay:.6,
            x:0,
            scrollTrigger: {
                trigger:'header',
                //markers:true,
                start: '250 top',
                end:'300 top',
                scrub:3
            }
        })
        gsap.to('.clippath.right .list_offer li.four',{
            opacity: 1,
            duration:.3,
            delay:.8,
            x:0,
            scrollTrigger: {
                trigger:'header',
                /* markers:true, */
                start: '250 top',
                end:'300 top',
                scrub:4
            }
        })        
        gsap.to('.clippath.right .list_offer li.five',{
            opacity: 1,
            duration:.3,
            delay:1,
            x:0,
            scrollTrigger: {
                trigger:'header',
                /* markers:true, */
                start: '250 top',
                end:'300 top',
                scrub:5
            }
        })
        /* botón Contactar ahora */
        gsap.to('.clippath.right .offer .button',{
            opacity: 1,
            duration:.3,
            delay:1.2,
            y:0,
            scrollTrigger: {
                trigger:'header',
                /* markers:true, */
                start: '300 top',
                end:'300 top',
                scrub:6
            }
        })

        /* rotación de ventajas de pagina web */
        gsap.to('.title_pageweb .char',{            
            rotationY:0,
            stagger:0.1,
            //delay:.3,
            duration:.06,
            scrollTrigger: {
                trigger:'header',
                //markers:true,
                start:'520 top',
                end:'+=580 top',
                scrub:1,
            }
        })
        /* opacity de ventajas de pagina web */
        /* gsap.to('.title_pageweb .char',{
            opacity:1,            
            stagger:0.02,            
            scrollTrigger: {
                trigger:'header',                
                start:'300 top',
                end:'+=500 top',
                scrub:1
            }
        }) */
        //lista de ventajas de una página web
        gsap.to('.buildweb ul li.one',{
            x:0,
            duration:.3,
            opacity:1,
            scrollTrigger: {
                trigger:'header',
                //markers:true,
                start:'800 top',
                end:'+=300 top',
                scrub:1,

            }
        })
        gsap.to('.buildweb ul li.two',{
            x:0,
            duration:.3,
            opacity:1,
            scrollTrigger: {
                trigger:'header',
                //markers:true,
                start:'800 top',
                end:'+=300 top',
                scrub:1,
            }
        })
        gsap.to('.buildweb ul li.three',{
            x:0,
            duration:.3,
            //delay:.3,
            opacity:1,
            scrollTrigger: {
                trigger:'header',
                //markers:true,
                start:'800 top',
                end:'+=300 top',
                scrub:2,
            }
        })
        gsap.to('.buildweb ul li.four',{
            x:0,
            duration:.3,
            //delay:.3,
            opacity:1,
            scrollTrigger: {
                trigger:'header',
                //markers:true,
                start:'800 top',
                end:'+=300 top',
                scrub:2,
            }
        })
        gsap.to('.buildweb ul li.five',{
            x:0,
            duration:.3,
            //delay:.5,
            opacity:1,
            scrollTrigger: {
                trigger:'header',
                //markers:true,
                start:'800 top',
                end:'+=300 top',
                scrub:3
            }
        })
        gsap.to('.buildweb ul li.six',{
            x:0,
            duration:.3,
            //delay:.5,
            opacity:1,
            scrollTrigger: {
                trigger:'header',
                //markers:true,
                start:'800 top',
                end:'+=300 top',
                scrub:3
            }
        })

        gsap.to('.title_design .char',{            
            rotationY:0,
            stagger:0.1,
            //delay:.3,
            duration:.06,
            scrollTrigger: {
                trigger:'.buildweb',
                //markers:true,
                start:'180 top',
                end:'+=300 top',
                scrub:1,
            }
        })

        gsap.to('.features .box_features.one',{
            //duration:.3,
            //stagger:0.5,
            y:0,
            scrollTrigger: {
                trigger:'.buildweb',
                //markers:true,
                start:'250 top',
                end:'+=450 top',
                scrub:1
            }
        })
        gsap.to('.features .box_features.two',{
            //duration:.3,
            //stagger:0.5,          
            y:0,
            scrollTrigger: {
                trigger:'.buildweb',
                //markers:true,
                start:'250 top',
                end:'+=450 top',
                scrub:2
            }
        })
        gsap.to('.features .box_features.three',{
            //duration:.3,
            //stagger:0.5,         
            y:0,
            scrollTrigger: {
                trigger:'.buildweb',
                //markers:true,
                start:'250 top',
                end:'+=450 top',
                scrub:3
            }
        })
        gsap.to('.features .box_features.four',{
            //duration:.3,
            //stagger:0.5,      
            y:0,
            scrollTrigger: {
                trigger:'.buildweb',
                //markers:true,
                start:'300 top',
                end:'+=400 top',
                scrub:4
            }
        })
        gsap.to('.features .box_features.five',{
            //duration:.3,
            //stagger:0.5,
            y:0,
            scrollTrigger: {
                trigger:'.buildweb',
                //markers:true,
                start:'300 top',
                end:'+=400 top',
                scrub:5
            }
        })
        gsap.to('.features .box_features.six',{
            //duration:.3,
            //stagger:0.5,            
            y:0,
            scrollTrigger: {
                trigger:'.buildweb',
                //markers:true,
                start:'300 top',
                end:'+=400 top',
                scrub:6
            }
        })
        gsap.to('.features .box_features.seven',{
            //duration:.3,
            //stagger:0.5,            
            y:0,
            scrollTrigger: {
                trigger:'.buildweb',
                //markers:true,
                start:'300 top',
                end:'+=400 top',
                scrub:7
            }
        })
        gsap.to('.features .box_features.eight',{
            //duration:.3,
            //stagger:0.5,            
            y:0,
            scrollTrigger: {
                trigger:'.buildweb',
                //markers:true,
                start:'300 top',
                end:'+=400 top',
                scrub:8
            }
        })

        gsap.to('section .backglass',{
            scale:1,
            scrollTrigger: {
                trigger: '.features',
                //markers:true,
                start:'100 top',
                end: '300 top',
                scrub:1
            }
        })

        //footer
        gsap.to('footer .footer_top .footer_links',{
            x:0,            
            scrollTrigger: {
                trigger:'.jobs',
                //markers:true,
                start:'100% bottom',
                end:'250 top',
                scrub:1,
            }
        })


        //dibujamos el primer bloque de elementos
    //las 2 líneas siguientes dan warning (GSAP target undefined not found)
        /* tl.to('.box_skills1',{}).call(setIcons('.box_skills1')); */
        //dibujamos el segundo bloque de elementos
        //tl.to('.box_skills2',{}).call(setIcons('.box_skills2'));
        //gsap.to('.back_skill1')
    }else if(route="services"){
        
    }

}