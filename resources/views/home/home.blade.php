@extends('layouts.app')

@section('title','Inicio')

@section('content')
@include('layouts.header')
<section class="column">
    <div class="ctner white">
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
                <h4>Consigue tu diseño web por <span>499€</span></h4>
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
<section>
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
                <h3>Wordpress</h3>
                <div class="social-cred">
                    <div class="social-text">Diseño con plantillas</div>
                </div>
                <div class="circle"></div>
            </div>
                <!-- <p>Información: En la actualidad la presencia en línea es fundamental para mostrar información sobre tí o tu negocio.</p>
                <p>Promocionar: Promocionar productos o servicios</p>
                <p>Económica: En comparación con otros medios de publicidad es una opción más económica</p>
                <p>Disponibilidad: Disponible las 24 horas los 7 días de la semana</p>
                <p>Accesibilidad: Es accesible desde cualquier lugar del planeta</p> -->
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
                    <div class="social-text">Revisión y actualización</div>
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
        <!-- <div class="webdetail">
            <div class="text">
                <p> En la era digital actual, tener presencia en línea es fundamental para cualquier negocio o proyecto.</p>
                <p>Puedes promocionar tus productos o servicios</p>
                <p>Un lugar donde tus clientes pueden encontrar información sobre ti o tu negocio</p>
                <p>En comparación con otros medios de publicidad puede ser una opción mucho más económica</p>
                <p>Atraer clientes no solo a nivel local, sino también nacional e incluso internacional</p>
                <p>Información y servicios disponibles las 24 horas del día, los 7 días de la semana</p>
                <h3>¿Las soluciones disponibles no satisfacen tus objetivos?</h3>
                <h3>Necesitas un sitio web personalizado</h3>                   
                <p>Sitios web originales asociados a la imagen corporativa.</p>
            </div>
            <div class="text"></div>
        </div> -->
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

<section class="column">
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
                        <h4>SSL</h4>                        
                    </div>
                    <div class="text_features">
                        <p>Certificado SSL estableciendo una comunicación cifrada</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</section>
<section class="column">
    <div class="ctner greyboot">
        <div class="sct_title title_design">
            <h4>Trabajos recientes</h4>
        </div>
        <div class="sct_content" >
            <div>

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
<section class="column">
    <div class="ctner white">
        <div class="sct_title title_design">
            <h4>Todos los sitios incluyen</h4>
        </div>
        <div class="center100 ">
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
<div style="width:100%;height:10px;background-color:white"></div>
<footer>
    
    @include ('layouts.footer')
</footer>

@endsection