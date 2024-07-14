//efecto dibujar iconos SVG
function setIcons(div_parent){
    //sustituido por clases CSS para cada stroke-dashoffset
    //Debido a que hemos establecido a -220px la propiedad 
    //stroke-dashoffset de forma genérica para todos los iconos, es necesario
    //retardar algunos con setTimeout o personalizar una (clase offset1,offset2,...) con 
    //un número de píxeles personalizado para cada uno de los iconos 
        
    //retardamos 0.8 segundos
    setTimeout(()=>{
            document.querySelectorAll(div_parent+' .icon .box_svg .path').forEach((item) => {
                //console.log(item)
                item.classList.add('svg_active')
            });
            /* document.querySelectorAll(div_parent+' .offset2 .path').forEach((item) => {
                //console.log(item)
                item.classList.add('svg_active')
            });
            document.querySelectorAll(div_parent+' .offset3 .path').forEach((item) => {
                //console.log(item)
                item.classList.add('svg_active')
            }); */
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
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline();
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
        
        //añadimos el método bundle() que genera un efecto con el subtítulo
        /* tl.add(bundle,4) */
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
        
        gsap.to('.column.mw .linear_gradient', {
            opacity:1,
            x:0,
            scrollTrigger: {
                trigger:'.column.buildweb',

                start:'100 top',
                end: '300 top',
                //markers:true,
                scrub:1
            }
        })

        
        
        /* gsap.set('.mw_text',{perspective:400}); */
        gsap.to('.column.mw p',{
            repeat:0,
            duration:1.5,
            opacity:1,
            scale:1,
            scrollTrigger: {
                trigger: '.column.buildweb',
                start: '200 top',
                end: '300 top',
                scrub:1
            }
        })
        /* gsap.from(mwChars,{
            repeat:0,
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
            scrollTrigger: {
                trigger:'.column.buildweb',
                start:'100 top',
                end:'300 top',
                scrub:1
            }
        }) */
        //fin texto disolver

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
    }else if(route == "services"){
        console.log("services andando")
        const title_webdesign = new SplitType('.title_webdesign');
        const title_webdev = new SplitType('.title_webdev');
        const title_webseo = new SplitType('.title_webseo');

        let h1 = document.querySelector('.init .main_title h1');        
        h1.innerHTML = h1.textContent.replace(/\S/g,"<span class='char'>$&</span>")
        let listNode = document.querySelectorAll('.init .main_title h1 span');
        gsap.delayedCall(1,filledChar,[listNode,100])
        gsap.from('.char',{y:50,opacity:0,stagger:0.1,ease:'back'})
        
        /* gsap.to('.main_title',{            
            x:0,
            opacity:1,
        }) */
        gsap.to('.box',{
            scale:1,
            duration:1,
            delay:1,
        })
        gsap.delayedCall(.1,setIcons,['.boxes']);
        /* rotación de ventajas de pagina web */
        gsap.to('.title_webdesign .char',{            
            rotationY:0,
            stagger:0.1,
            //delay:.3,
            duration:.06,
            scrollTrigger: {
                trigger:'section.init',
                //markers:true,
                start:'40 top',
                end:'+=250 top',
                scrub:1,
            }
        })
        gsap.to('.webdesign .ctner .center100 .detail',{
            x:0,
            opacity:1,
            duration: 0.5,
            scrollTrigger:{
                trigger:'section.init',
                start: '250 top',
                end:'+=400 top',
                scrub:1
            }
        })
        gsap.to('.webdesign .ctner4 .wordpress',{
            rotationX:0,
            //duration:.2,
            
            scrollTrigger: {
                trigger:'section.webdesign',
                start:'100 top',
                end:'300 top',                
                scrub:1,
            }
        })
        gsap.to('.webdesign .ctner4 .woocommerce',{
            rotationX:0,
            //duration:.2,
            
            scrollTrigger: {
                trigger:'section.webdesign',
                start:'150 top',
                end:'350 top',                
                scrub:2,
            }
        })
        gsap.to('.webdesign .ctner4 .custom',{
            rotationX:0,
            //duration:.2,
            
            scrollTrigger: {
                trigger:'section.webdesign',
                start:'200 top',
                end:'400 top',               
                scrub:3,
            }
        })
        gsap.to('.title_webdev .char',{
            rotationY:0,
            stagger:1,
            //delay:.3,
            duration:.06,
            scrollTrigger: {
                trigger:'section.webdesign',
                //markers:true,
                start:'300 top',
                end:'+=450 top',
                scrub:1,
            }
        })
        gsap.to('.webdevelopment .ctner .center100 .detail',{
            x:0,
            opacity:1,
            duration: 0.5,
            scrollTrigger:{
                trigger:'section.webdesign',
                start: '400 top',
                end:'+=500 top',
                scrub:1
            }
        })
        gsap.to('.webdevelopment .ctner .list_dev ul .one',{
            x:0,
            duration:.3,
            //delay:.3,
            opacity:1,
            scrollTrigger: {
                trigger:'.webdevelopment .ctner .center100',
                //markers:true,
                start:'100 top',
                end:'+=300 top',
                scrub:1,
            }
        })
        gsap.to('.webdevelopment .ctner .list_dev ul .two',{
            x:0,
            duration:.3,
            //delay:.3,
            opacity:1,
            scrollTrigger: {
                trigger:'.webdevelopment .ctner .center100',
                //markers:true,
                start:'100 top',
                end:'+=300 top',
                scrub:2,
            }
        })
        gsap.to('.webdevelopment .ctner .list_dev ul .three',{
            x:0,
            duration:.3,
            //delay:.3,
            opacity:1,
            scrollTrigger: {
                trigger:'.webdevelopment .ctner .center100',
                //markers:true,
                start:'100 top',
                end:'+=300 top',
                scrub:3,
            }
        })
        gsap.to('.webdevelopment .ctner .list_dev ul .four',{
            x:0,
            duration:.3,
            //delay:.3,
            opacity:1,
            scrollTrigger: {
                trigger:'.webdevelopment .ctner .center100',
                //markers:true,
                start:'100 top',
                end:'+=300 top',
                scrub:4,
            }
        })
        gsap.to('.webdevelopment .ctner .list_dev ul .five',{
            x:0,
            duration:.3,
            //delay:.3,
            opacity:1,
            scrollTrigger: {
                trigger:'.webdevelopment .ctner .center100',
                //markers:true,
                start:'100 top',
                end:'+=300 top',
                scrub:1,
            }
        })
        gsap.to('.webdevelopment .ctner .list_dev ul .six',{
            x:0,
            duration:.3,
            //delay:.3,
            opacity:1,
            scrollTrigger: {
                trigger:'.webdevelopment .ctner .center100',
                //markers:true,
                start:'100 top',
                end:'+=300 top',
                scrub:2,
            }
        })
        gsap.to('.webdevelopment .ctner .list_dev ul .seven',{
            x:0,
            duration:.3,
            //delay:.3,
            opacity:1,
            scrollTrigger: {
                trigger:'.webdevelopment .ctner .center100',
                //markers:true,
                start:'100 top',
                end:'+=300 top',
                scrub:3,
            }
        })
        gsap.to('.webdevelopment .ctner .list_dev ul .eight',{
            x:0,
            duration:.3,
            //delay:.3,
            opacity:1,
            scrollTrigger: {
                trigger:'.webdevelopment .ctner .center100',
                //markers:true,
                start:'100 top',
                end:'+=300 top',
                scrub:4,
            }
        })
        gsap.to('.title_webseo .char',{            
            rotationY:0,
            stagger:0.1,
            //delay:.3,
            duration:.06,
            scrollTrigger: {
                trigger:'section.webdevelopment',
                //markers:true,
                start:'400 top',
                end:'+=650 top',
                scrub:1,
            }
        })

        gsap.to('.webseo .ctner .center100 .detail',{
            x:0,
            opacity:1,
            duration: 0.5,
            scrollTrigger:{
                trigger:'section.webdevelopment',
                start: '500 top',
                end:'+=700 top',
                scrub:1
            }
        })

        gsap.to('.webseo .ctner .featureseo.one', {
            opacity:1,
            y:0,
            scrollTrigger: {
                trigger:'section.webseo',
                start: '400 bottom',
                end:'+=450 bottom',
                scrub:1,                
            }
        })
        gsap.to('.webseo .ctner .featureseo.two', {
            opacity:1,
            y:0,
            scrollTrigger: {
                trigger:'section.webseo',
                start: '400 bottom',
                end:'+=450 bottom',
                scrub:2,                
            }
        })
        gsap.to('.webseo .ctner .featureseo.three', {
            opacity:1,
            y:0,
            scrollTrigger: {
                trigger:'section.webseo',
                start: '400 bottom',
                end:'+=450 bottom',
                scrub:3,
            }
        })
        gsap.to('.webseo .ctner .featureseo.four', {
            opacity:1,
            y:0,
            scrollTrigger: {
                trigger:'section.webseo',
                start: '400 bottom',
                end:'+=450 bottom',
                scrub:4,
            }
        })
        gsap.to('.webseo .ctner .featureseo.five', {
            opacity:1,
            y:0,
            scrollTrigger: {
                trigger:'section.webseo',
                start: '400 bottom',
                end:'+=450 bottom',
                scrub:5,
            }
        })
        gsap.to('.webseo .ctner .featureseo.six', {
            opacity:1,
            y:0,
            scrollTrigger: {
                trigger:'section.webseo',
                start: '400 bottom',
                end:'+=450 bottom',
                scrub:6,
            }
        })
         //footer
         gsap.to('footer .footer_top .footer_links',{
            x:0,            
            scrollTrigger: {
                trigger:'.webseo',
                //markers:true,
                start:'50% top',
                end:'60% top',
                scrub:1,
                //markers:true,
            }
        })
    }else if(route == 'contact'){        
        
        //título Contacto
        let h1 = document.querySelector('.contact .title h1');        
        h1.innerHTML = h1.textContent.replace(/\S/g,"<span class='char'>$&</span>")
        let listNode = document.querySelectorAll('.contact .title h1 span');
        gsap.delayedCall(0.1,filledChar,[listNode,100])
        gsap.from('.char',{y:50,opacity:0,stagger:0.1,ease:'back'})
        gsap.to('.contact .container',{
            opacity:1,
            duration:2
        })
        
        
        //document.querySelector('.contact .title h1').classList.add('fill');
        //footer
        gsap.to('footer .footer_top .footer_links',{
            x:0,            
            scrollTrigger: {
                trigger:'section.contact',
                //markers:true,
                start:'100 top',
                end:'200 top',
                scrub:1,                
            }
        })
    }
    function filledChar(data,seconds){
        console.log("data filledChar",data)
        //añadimos el index al reloj de segundos para que tome efecto el setTimeout
        data.forEach((span,index) => {
            setTimeout(() => {
                span.classList.add('fill');                
            },seconds * index)
            
        })
    }

}