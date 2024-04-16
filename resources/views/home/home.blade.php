@extends('layouts.app')

@section('title','Inicio')

@section('content')
@include('layouts.header')


<section class="column">
    <div class="ctner white clippath right">
        {{-- <div class="sct_title">
            <h4>¿Necesitas un sitio web? <span style="color:#FFF"> ¿Renovar uno existente?</span></h4>            
        </div> --}}
        <div class="center100">
            <div class="cnt50 image">
                <div class="background" style="width:100%;height:100%">

                </div>
                {{-- <img src="{{asset('img/website.png')}}" alt="" style="display:flex;margin:auto;width:50%;z-index:2;position:relative" > --}}
                
            </div>
            <div class="cnt50">
                <h4>Consigue tu web corporativa por <span>499€</span></h4>
                <div class="cnt80">                    
                    <div style="display:block">
                        <ul>
                            <li><h5>Diseño moderno y atractivo </h5></li>
                            <li><h5>Últimas tecnologías</h5></li>
                            <li><h5>Conexión segura</h5></li>
                            <li><h5>Adaptable a todos los dispositivos </h5></li>
                            {{-- <li><h5>Integración en redes sociales </h5></li> --}}
                            <li><h5>Soporte técnico</h5></li>
                        </ul>
                    </div>
                    
                </div>
                <div class="button">
                        <button>Contactar ahora</button>
                    </div>
            </div>
        </div>
        {{-- <div class="sct_title"></div> --}}
    </div>
</section>


<section class="web_design">
    <div class="ctner2 greylight">        
        <!-- <h3>Servicios de diseño y desarrollo a empresas y particulares</h3> -->

        <div class="sct_title mtop40">
            <h3>Servicios de diseño web</h3>
            <!-- <h4>Si necesitas una web, escalar uno existente o que tu sitio sea encontrado</h4> -->            
            <!-- <h3>¿Las soluciones disponibles no satisfacen tus objetivos?</h3> -->
        </div>
        <div class="boxes_services">
            <div class="box_service" style="">
                <img src="icons/iconos_web/wordpress.svg" alt="" >
                <h3>Corporativa</h3>
                <div class="social-cred">
                    <div class="social-text">Diseño con CMS</div>
                </div>
                <div class="circle"></div>
            </div>

            <div class="box_service" style="">
                <img src="icons/iconos_web/woocommerce-icon.svg" alt="" >
                <h3>Ecommerce</h3>
                <div class="social-cred">
                    <div class="social-text">Comercio online</div>
                </div>
                <div class="circle"></div>
            </div>

            <div class="box_service" style="">
                <img src="icons/iconos_web/landing-page-web-design.svg" alt="" >
                <h3>A medida</h3>
                <div class="social-cred">
                    <div class="social-text">Diseño 100% personalizado</div>
                </div>
                <div class="circle"></div>
            </div>

            <div class="box_service" style="">
                <img src="icons/iconos_web/browser-success.svg" alt="" >
                <h3>Mantenimiento</h3>
                <div class="social-cred">
                    <div class="social-text">Análisis y actualización</div>
                </div>
                <div class="circle"></div>
            </div>

            <div class="box_service" style="">
                <img src="icons/iconos_web/analytics.svg" alt="" >
                <h3>Posicionamiento</h3>
                <div class="social-cred">
                    <div class="social-text">Optimización para SEO</div>
                </div>
                <div class="circle"></div>
            </div>
        </div>
        <!--        
            <h3>¿Las soluciones disponibles no satisfacen tus objetivos?</h3>
            <h3>Necesitas un sitio web personalizado</h3>                   
            <p>Sitios web originales asociados a la imagen corporativa.</p>
         -->
        <!-- <p>En un mundo interconectado y competitivo es necesario disponer de presencia en la red. Pero además es necesario que tu sitio sea:</p>
        <ul>
            <li>Moderno</li>(actualizado)
            <li>Original</li>(un enfoque distinto)
            <li>Atractivo</li>(para atraer a usuario o clientes)
            <li>Intuitivo</li>
            <li>Fácil navegación</li>Sencillo y práctico de manejar
            <li>Rápido</li> Carga rápida
            <li>Estructura correcta</li> (para posicionamiento en buscadores)
        </ul> -->
        <!-- <p>Un diseño de web inicial atraerá más usuarios</p> -->
    </div>
</section>
<!-- SECTION DE DESARROLLO WEB (FRONTEND, BACKEND, API REST, CHAT, PWA) -->

<section class="column buildweb">
    <div class="ctner clippath left">
        {{-- <h4 style="z-index:1;text-align:center" class="cwhite">¿Por qué necesitas una página web?</h4> --}}
        <h4 style="z-index:1;text-align:center" class="cwhite mtop40">¿Aun no conoces las ventajas de una página web?</h4>
        {{-- <div class="sct_title title_design">           
        </div> --}}
        <div class="center100 ">
            
            <div class="center70">
                <div class="cnt50">
                    <div class="center100 h80">
                        
                        <div class="cnt90">
                            
                            <ul>
                                <li>
                                    <span>Información</span> 
                                    <p>En la actualidad la presencia en línea es fundamental para mostrar información sobre ti o tu negocio</p>
                                </li>
                                <li>
                                    <span>Promoción</span>
                                    <p>Lugar donde promocionar tus productos o servicios</p>
                                </li>
                                <li>
                                    <span>Coste</span>
                                    <p> En comparación con otros medios de publicidad es una opción más económica</p>
                                </li>
                                <li>
                                    <span>Disponibilidad</span>
                                    <p>Disponible las 24 horas los 7 días de la semana</p>
                                </li>
                                <li>
                                    <span>Comunicación</span> 
                                    <p>Comunicación directa mediante formularios, chats o enlaces a redes sociales</p>
                                </li>
                                <li>
                                    <span>Accesibilidad</span>
                                    <p>Es accesible desde cualquier lugar del planeta</p>
                                </li>
                                
                            </ul>
                            
                            
                        </div>
                    </div>
                    {{-- <div class="button">
                        <button>Contactar ahora</button>
                    </div> --}}
                </div>
            
            <div class="cnt50 image">
                <div class="image">
                            
                    <svg id="10015.io" viewBox="0 0 550 550" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill-rule="evenodd" clip-rule="evenodd">
                        <clipPath id="mask">
                            <path fill="#474bff" d="M442,277Q430,314,413,348.5Q396,383,358,391.5Q320,400,290,428.5Q260,457,228,426Q196,395,165,387.5Q134,380,105,360.5Q76,341,73,306.5Q70,272,49.5,236.5Q29,201,67,179Q105,157,127.5,139Q150,121,170,92Q190,63,223,68Q256,73,283.5,85.5Q311,98,352,99.5Q393,101,405,136Q417,171,435.5,205.5Q454,240,442,277Z" />
                        </clipPath>
                        <image href="{{asset('img/website.jpg')}}" alt="" width="100%" height="100%" clip-path="url(#mask)" preserveAspectRatio="xMidYMid slice" x="0" y="60"/>
                    </svg>
                </div>
                {{-- <div class="background2" style="width:100%;height:100%">

                </div> --}}
                {{-- <img src="{{asset('img/website.png')}}" alt="" style="display:flex;margin:auto;width:50%;z-index:2;position:relative" > --}}
                
            </div>
        </div>
            {{-- <div class="cnt80">
                <div class="card black">
                    <div class="icon">
                        <img src="icons/responsive-devices_white.svg" alt="">
                    </div>
                    <div class="detail">
                        <div class="title">
                            Responsive
                        </div>
                        <div class="text">
                            Diseño responsivo, adaptable a cualquier dispositivo
                        </div>
                    </div>
                </div>
                <div class="card black">
                    <div class="icon">
                        <img src="icons/responsive-devices_white.svg" alt="">
                    </div>
                    <div class="detail">
                        <div class="title">
                            Optimización
                        </div>
                        <div class="text">
                            Carga rápida
                        </div>
                    </div>
                </div>
                <div class="card black">
                    <div class="icon">
                        <img src="icons/responsive-devices_white.svg" alt="">
                    </div>
                    <div class="detail">
                        <div class="title">
                            Posicionamiento
                        </div>
                        <div class="text">
                            Estructura optimizada SEO
                        </div>
                    </div>
                </div>
            </div> --}}
        </div>
    </div>
</section>
<section class="column mw">
    <div style="background:linear-gradient(90deg,rgba(17,17,17,0) 0%,rgb(255,255,255) 50%, rgba(17,17,17,0) 100%);height:1px;width:392px;margin:20px auto"></div>
    <div class="cnt50 mauto " style="padding:20px 0">
        <p class="cwhite" style="font-weight:400;font-size:20px;line-height:2em;">
            <span>Montiweb</span> ofrece soluciones digitales a empresas, autónomos y particulares. Ya sea que necesites un nuevo sitio web, añadir una nueva funcionalidad o renovar un sitio existente has llegado al lugar adecuado.
        </p>
    </div>
    <div style="background:linear-gradient(90deg,rgba(17,17,17,0) 0%,rgb(255,255,255) 50%, rgba(17,17,17,0) 100%);height:1px;width:392px;margin:20px auto"></div>
</section>
<section class="column features">
    <div class="ctner black">
        <div class="sct_title title_design">            
            <h4>Todos los sitios incluyen</h4>
        </div>
        <div class="sct_content">
            <div class="boxes_features" >
                <div class="box_features mtop20">
                    <div class="circle_anim_features">
                        <div class="effect_circle"></div>
                    </div>
                    <div class="circle_anim_features anim2">
                        <div class="effect_circle"></div>
                    </div>
                    <div class="circle_icon_features">
                        <div class="icon_feature"></div>
                        {{-- <img src="{{asset('icons/responsive.svg')}}" alt="" style="width:32px;height:32px;"> --}}
                    </div>
                    <div class="title_features">
                        <h4>RESPONSIVE</h4>                        
                    </div>
                    <div class="text_features">
                        <p>Se adapta a cualquier dispositivo, ya sea smartphone o tablet</p>
                    </div>
                </div>
                
                <div class="box_features">
                    <div class="circle_anim_features">
                        <div class="effect_circle"></div>
                    </div>
                    <div class="circle_icon_features">
                        <div class="icon_feature"></div>
                        {{-- <img src="{{asset('icons/responsive.svg')}}" alt="" style="width:32px;height:32px;"> --}}
                    </div>
                    <div class="title_features">
                        <h4>HOSTING Y DOMINIO</h4>                        
                    </div>
                    <div class="text_features">
                        <p>Hospedaje y dominio incluido el primer año</p>
                    </div>
                    
                </div>
                
                <div class="box_features">
                    <div class="circle_anim_features">
                        <div class="effect_circle"></div>
                    </div>
                    <div class="circle_icon_features">
                        <div class="icon_feature"></div>
                        {{-- <img src="{{asset('icons/responsive.svg')}}" alt="" style="width:32px;height:32px;"> --}}
                    </div>
                    <div class="title_features">
                        <h4>RGPD</h4>                        
                    </div>
                    <div class="text_features">
                        <p>Adaptado al reglamento general de protección de datos</p>
                    </div>
                </div>                
                
                <div class="box_features">
                    <div class="circle_anim_features">
                        <div class="effect_circle"></div>
                    </div>
                    <div class="circle_icon_features">
                        <div class="icon_feature"></div>
                        {{-- <img src="{{asset('icons/responsive.svg')}}" alt="" style="width:32px;height:32px;"> --}}
                    </div>
                    <div class="title_features">
                        <h4>SSL</h4>                        
                    </div>
                    <div class="text_features">
                        <p>Certificado SSL estableciendo una comunicación cifrada</p>
                    </div>
                </div>
                <div class="box_features">
                    <div class="circle_anim_features">
                        <div class="effect_circle"></div>
                    </div>
                    <div class="circle_icon_features">
                        <div class="icon_feature"></div>
                        {{-- <img src="{{asset('icons/responsive.svg')}}" alt="" style="width:32px;height:32px;"> --}}
                    </div>
                    <div class="title_features">
                        <h4>RRSS</h4>                        
                    </div>
                    <div class="text_features">
                        <p>Integración de redes sociales</p>
                    </div>
                </div>
                <div class="box_features">
                    <div class="circle_anim_features">
                        <div class="effect_circle"></div>
                    </div>
                    <div class="circle_icon_features">
                        <div class="icon_feature"></div>
                        {{-- <img src="{{asset('icons/responsive.svg')}}" alt="" style="width:32px;height:32px;"> --}}
                    </div>
                    <div class="title_features">
                        <h4>GA</h4>                        
                    </div>
                    <div class="text_features">
                        <p>Google Analytics</p>
                    </div>
                </div>
                <div class="box_features">
                    <div class="circle_anim_features">
                        <div class="effect_circle"></div>
                    </div>
                    <div class="circle_icon_features">
                        <div class="icon_feature"></div>
                        {{-- <img src="{{asset('icons/responsive.svg')}}" alt="" style="width:32px;height:32px;"> --}}
                    </div>
                    <div class="title_features">
                        <h4>LOPD y LSSI</h4>                        
                    </div>
                    <div class="text_features">
                        <p>Aviso legal</p>
                    </div>
                </div>
                <div class="box_features">
                    <div class="circle_anim_features">
                        <div class="effect_circle"></div>
                    </div>
                    <div class="circle_icon_features">
                        <div class="icon_feature"></div>
                        {{-- <img src="{{asset('icons/responsive.svg')}}" alt="" style="width:32px;height:32px;"> --}}
                    </div>
                    <div class="title_features">
                        <h4>SEO</h4>                        
                    </div>
                    <div class="text_features">
                        <p>Optimización Indexación y posicionamiento y estructura</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</section>

<section class="column jobs">
    <div class="ctner3 white">
        <div class="sct_title title_design ">
            <h4 class="cblack">Trabajos recientes</h4>
        </div>
        <div class="sct_content " >
            <div class="cnt80">
                <div class="carousel">
                    {{-- <div class="div_arrows">
                        <div class="arrows">
                            <div class="arrow">
                                <div class="prev">
                                    <!--<span>&#x279C;</span>-->
                                </div>
                                
                            </div>
                            <div class="arrow next">
                                <div class="next">
                                    <!--<span>&#x279C;</span>-->
                                </div>
                            </div>
                        </div>
                    </div> --}}
                    <div class="boxjob">
                        <div class="backweb decormontilla">
                        </div>
                    </div>

                    <div class="boxjob">
                        <div class="backweb ecomsail">
                        </div>
                    </div>

                    <div class="boxjob">
                        <div class="backweb bahiaxip">
                        </div>
                    </div>
                    <div class="boxjob">
                        <div class="backweb biedit">
                        </div>
                    </div>
                    <div class="boxjob">
                        <div class="backweb cazorla">
                        </div>
                    </div>
                    <div class="boxjob">
                        <div class="backweb cazorla">
                        </div>
                    </div>
                    {{-- <div class="boxjob">
                        <div class="backweb operario">
                        </div>
                    </div>
                    <div class="boxjob">
                        <div class="backweb taladro">
                        </div>
                    </div>
                    <div class="boxjob">
                        <div class="backweb limpieza">
                        </div>
                    </div> --}}
                </div>
                
            </div>
            <div class="btn">
                {{-- <button onclick="moveScroll(this,'prev')" class="prev" id="left">Adelante</button>
                <button onclick="moveScroll(this,'next')" class="next" id="right">Adelante</button> --}}
                    <button class="prev" id="left" class="prev">Atrás</button>
                    <button class="next" id="right" class="next">Adelante</button>
            </div>
            
        </div>
    </div>
</section>
{{-- <section class="column a background">
        
    <div class="title">
        <h2>¿Las soluciones disponibles no satisfacen tus objetivos?</h2>
        <h2>Necesitas un diseño web personalizado</h2>
        
    </div>
    <div class="ctner2 background">
        <div class="card cwhite">
            <div class="icon">
                <img src="icons/responsive-devices_white.svg" alt="">
            </div>
            <div class="detail">
                <div class="title">
                    Responsive
                </div>
                <div class="text">
                    Diseño responsivo, adaptable a cualquier dispositivo
                </div>
            </div>
        </div>
        <div class="card">
            Carga rápida
        </div>
        <div class="card">
            Analítica
        </div>

        <!-- <div class="concept">
            <p>Tú seleccionas el concepto</p>                
        </div>
        <div class="concept">
            <p>Nosotros lo desarrollamos</p>
        </div> -->
        <!-- <p>Potencia tu proyecto con un desarrollador web Freelancer</p> -->
        <!-- <p>Un diseño de web inicial atraerá más usuarios</p> -->
    </div>
    <!-- <div class="container">
        <div class="back_image_profile">

        </div>
    </div>
    <div class="container">
        <div class="description">
            <div class="text">
                <h3>Diseño y desarrollo web</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fugit esse nobis natus alias odit, veniam, quod quis neque laborum quo maxime nemo animi pariatur aliquam dolores est impedit aut?</p>
            </div>
            <div class="image"></div>
        </div>
    </div> -->
</section> --}}
{{-- <section class="column">
    <div class="ctner white">
        <div class="sct_title title_design">
            <h4>Todos los sitios incluyen</h4>
        </div>
        <div class="center100 ">
            <div class="cnt80"></div>
        </div>
    </div>
</section> --}}
{{-- <div style="width:100%;height:10px;background-color:white"></div> --}}
<footer>
    @include ('layouts.footer')
</footer>
<script src="../js/carousel.js"></script>
@endsection
