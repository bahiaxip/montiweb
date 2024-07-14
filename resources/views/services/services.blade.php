@extends('layouts.app')

@section('content')
<div class="services">
    
    <section class="init">
        {{-- <div class="backtitle">Servicios</div> --}}
        {{-- <div class="background1">
            <div class="gradient left"></div>
            <div class="gradient right"></div>
        </div>
        <div class="filigrana">
            <div class="text">Montiweb</div>
        </div> --}}
        {{-- <div class="background2"></div> --}}
        <div class="main_title">
            <h1><span class="fill">Servicios</span> <span class="stroke">web</span></h1>    
        </div>
        @include('services.boxes')
        {{-- <section class="web_design">
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
        </section> --}}
        {{-- <div class="div_tools">
            <div class="tools carousel_tools">
                <div class="tool html5"></div>
                <div class="tool css3"></div>
                <div class="tool laravel"></div>
                <div class="tool wordpress"></div>
                <div class="tool vue"></div>
                <div class="tool woocommerce"></div>
                <div class="tool angular"></div>
                <div class="tool mysql"></div>
                <div class="tool npm"></div>
                <div class="tool node"></div>
                <div class="tool livewire"></div>
                <div class="tool mongo"></div>
                <div class="tool git"></div>
                <div class="tool bootstrap"></div>
                <div class="tool jquery"></div>                
            </div>
        </div> --}}
    </section>
    
    <section class="webdesign " id="webdesign">
        <div class="center70">
            <div class="ctner">
                <div class="title">
                    <h2 class="title_webdesign center cwhite">Diseño web</h2>
                </div>
                <div class="center100">
                    <div class="detail left">
                        <div class="text">
                            <h2>La calidad de una página web puede marcar la diferencia</h2>
                            <p class="mtop20">
                                Crear un sitio web implica algo más que un diseño atractivo, requiere un diseño enfocado en la experiencia del usuario y adaptado a tus necesidades. Una página web visualmente atractiva que ofrezca una navegación intuitiva, capaz de cumplir tus objetivos y exponer tu idea.
                            </p>
                        </div>
                    </div>
                    <div class="detail right">
                        <div class="image">
                            
                            <svg id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill-rule="evenodd" clip-rule="evenodd">
                                <clipPath id="mask">
                                    <path fill="#474bff" d="M399.5,288Q372,336,334.5,376Q297,416,234.5,432.5Q172,449,124,404Q76,359,85,299.5Q94,240,86.5,181.5Q79,123,128.5,86.5Q178,50,234.5,67Q291,84,328.5,116.5Q366,149,396.5,194.5Q427,240,399.5,288Z" />
                                </clipPath>
                                <image href="{{asset('img/laptop.jpg')}}" alt="" width="100%" height="100%" clip-path="url(#mask)" preserveAspectRatio="xMidYMid slice"/>
                            </svg>
                        </div>
                    </div>
                </div>
                
                <div class="ctner4">
                    <div class="wordpress">
                        <div class="icon">
                            <img src="icons/iconos_web/wordpress.svg" alt="" >
                        </div>                        
                        <h4>Web corporativa</h4>
                        <p>
                            Tu sitio web con el gestor de contenido más popular del mundo, podrás gestionarlo tú mismo sin necesidad de conocimientos avanzados y en un tiempo limitado. Una solución rápida y rentable que te permitirá ofrecer tus servicios y mostrar información relevante de tí o tu negocio.
                        </p>
                        <!-- <p>
                            Ideal para la creación de webs corporativas, blogs, webs de noticias, foros, portafolios. Incorpora una interfaz intuitiva y un fantástico sistema de plantillas y plugins que permite ser administrado de forma genérica sin necesidad de grandes conocimientos en desarrollo web. Ideal para particulares y pequeñas empresas que no desean realizar un gran desembolso y no disponen de un desarrollador web profesional. 
                        </p> -->
                    </div>

                    <div class="woocommerce ">
                        <div class="icon">
                            <img src="icons/iconos_web/woocommerce-icon.svg" alt="" >
                        </div>
                        <h4>Comercio electrónico</h4>
                        <p>
                            Una tienda online que muestre tu catálogo de productos con un diseño atractivo enfocada en atraer ventas a través de un proceso de compra fácil y seguro generando confianza en tus clientes.
                        </p>
                        <!-- <p>                            
                            Creación de tienda online flexible con múltiples opciones. Dispone de una interfaz amigable que facilita la gestión de productos sin necesidad de grandes conocimiento técnicos en desarrollo web. Recomendado para pequeñas y grandes empresas que desean tener presencia y vender sus productos a través de la web. 
                        </p> -->
                    </div>

                    <div class="custom ">
                        <div class="icon">
                            <img src="{{asset('icons/code.svg')}}" alt="">
                        </div>
                        <h4>Web a medida</h4>
                        <p>
                            Tu sitio web 100% personalizado y adaptado a una idea o marca más específica. Recomendado para aquellos que desean diferenciarse de la mayoría de páginas basadas en plantillas o diseños genéricos alcanzando una apariencia diferente y original.
                        </p>
                    </div>
                </div>
                {{-- <h2>¿Las soluciones disponibles no satisfacen tus objetivos?</h2>
                <h2>Necesitas un diseño web personalizado</h2> --}}
                {{-- <div class="center100">
                    <div class="detail white">                    
                        
                    </div>   
                    <div class="wordpress">
                    </div>             
                    
                </div>
                <div class="center100">
                    
                    <div class="woocommerce white">
                        <div class="text">
                            <p>
                                Tienda online: Creación de tiendas online personalizables y flexibles.
                                <ul>
                                    <li>Interfaz intuitiva</li>
                                    <li>Inventario</li>
                                    <li>Cupones y descuentos</li>
                                    <li>Pasarela de pagos</li>
                                    <li>Configuración de envíos</li>
                                </ul>                        
                                Diseño de comercio electrónico con WooCommerce: Ideal para la creación de una tienda online flexible con múltiples opciones. Dispone de una interfaz amigable que facilita la gestión de productos sin necesidad de grandes conocimiento técnicos en desarrollo web.
                                Recomendado para pequeñas y grandes empresas que desean tener presencia y vender sus productos a través de la web. 
                                
                                
                                WooCommerce es una de las plataformas de comercio electrónico más populares del mundo. Mantenido y actualizado por Automattic, propietario de Wordpress, permite la integración perfecta obteniendo todas sus características y asegurando la compatibilidad.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="center100">
                    
                    <div class="custom white">
                        <div class="text">
                            <p>
                                Diseño personalizado: Creación de sitios web 100% personalizados y adaptados a una idea o marca más específica. Recomendado para aquellos que desean diferenciarse de la mayoría de páginas basadas en plantillas o diseños genéricos alcanzando una apariencia distinta y original.
                                <ul>
                                    <li></li>
                                </ul>                        
                                Diseño de comercio electrónico con WooCommerce: Ideal para la creación de una tienda online flexible con múltiples opciones. Dispone de una interfaz amigable que facilita la gestión de productos sin necesidad de grandes conocimiento técnicos en desarrollo web.
                                Recomendado para pequeñas y grandes empresas que desean tener presencia y vender sus productos a través de la web. 
                                
                                
                                WooCommerce es una de las plataformas de comercio electrónico más populares del mundo. Mantenido y actualizado por Automattic, propietario de Wordpress, permite la integración perfecta obteniendo todas sus características y asegurando la compatibilidad.
                            </p>
                        </div>
                        
                    </div>
                </div> --}}
            </div>
        </div>
    </section>
    
    <section class="webdevelopment" id="webdevelopment">
        <div class="center70">
            <div class="ctner">
                <h2 class="title_webdev center mtop40 cwhite">Desarrollo web</h2>
                <div class="center100 py40 acenter">
                    <div class="detail description">
                        <div class="text">
                            {{-- <h2>Un desarrollo adecuado y optimizado es esencial</h2> --}}
                            {{-- <h2>Un desarrollo de calidad y optimizado es esencial</h2> --}}
                            {{-- <h2>Desarrollo de software</h2> --}}
                            <h2>Potencia tu negocio</h2>
                            <p class="mtop20">
                                Descubre como las soluciones tecnológicas pueden optimizar tu sitio web.{{--  Automatización
                                El desarrollo web se encarga de crear soluciones de software mediante la integración de tecnologías avanzadas y la automatización de procesos. Un buen desarrollo web permite optimizar tu sitio para dispositivos móviles manteniendo un alto nivel de seguridad y un excelente rendimiento. --}} Montiweb ofrece desarrollos de software profesionales y optimizados a través de marcos de trabajo y herramientas basadas en lenguajes de desarrollo web como HTML, CSS, PHP, JavaScript y SQL.
                            </p>
                        </div>
                    </div>
                    <div class="detail image">
                        <div class="image_development">
                            
                        </div>
                    </div>
                </div>
                <div class="list_dev">
                    <ul>
                        <div class="one">
                            <li class="icon"><span>SPA</span></li>
                            <li>Aplicaciones de una sola página</li>
                        </div>
                        <div class="two">
                            <li class="icon"><span>PWA</span></li>
                            <li>Aplicaciones Progresivas</li>
                        </div>
                        <div class="three">
                            <li class="icon"><span>API</span></li>
                            <li>Interfaz de aplicaciones</li>
                        </div>
                        
                        <div class="four">
                            <li class="icon"><span>Chat</span></li>
                            <li>Integración de chat</li>
                        </div>
                    </ul>
                    <ul>
                        <div class="five">
                            <li class="icon"><span>CRM</span></li>
                            <li>Gestión de clientes</li>
                        </div>
                        
                        <div class="six">
                            <li class="icon"><span>Migrate</span></li>
                            <li>Migraciones a una nueva plataforma</li>
                        </div>
                        <div class="seven">
                            <li class="icon"><span>Admin</span></li>
                            <li>Administración de servidores</li>
                        </div>
                        <div class="eight">
                            <li class="icon"><span>Analytics</span></li>
                            <li>Herramientas de análisis</li>
                        </div>
                        
                    </ul>
                </div>
                {{-- <div class="center100">
                    <div class="cnt50 spa">
                        <div class="title">                            
                            <h4>SPA</h4>
                            <p>Aplicaciones de una sola página</p>
                        </div>
                    </div>
                    <div class="cnt50 spa">
                        <div class="title">
                            <h4>Admin</h4>
                            <p>Administración de servidores</p>
                        </div>
                        <!--
                            Desarrollo de SPA 
                        Las Aplicaciones de una sola página (SPA) son aplicaciones web modernas que permiten ofrecer una mejor experiencia de usuario. Las SPA, a diferencia de una MPA convencional, cargan la mayor parte del contenido al inicio, permitiendo durante la navegación cargar solamente el contenido requerido por el visitante. El usuario puede navegar entre las diferentes vistas (que visualmente reemplaza a las páginas de una MPA) pero a nivel interno se mantiene siempre en la misma página inicial. Esta estructura basada en componentes consigue unos tiempos de carga menores obteniendo una interacción para el visitante más fluida.
                        -->
                    </div>
                </div>
                <div class="center100">
                    <div class="cnt50 api">
                        <div class="title">
                            <h4>API</h4>
                            <p>Interfaz de programación de aplicaciones</p>
                        </div>
                    </div>
                    <div class="cnt50 api">
                        <div class="title">
                            <h4>Migrate</h4>
                            <p>Migración de sitios web a nuevas plataformas</p>
                        </div>
                    </div>
                </div>
                <div class="center100 ">
                    <div class="cnt50 pwa">
                        <div class="title">
                            <h4>PWA</h4>
                            <p>Aplicación web progresiva</p>
                        </div>
                    </div>
                    <div class="cnt50 pwa">
                        <div class="title">
                            <h4>Analytics</h4>
                            <p>Configuración de herramientas de analíticas</p>
                        </div>
                    </div>
                </div> --}}
            </div>
        </div>
        
    </section>
    
    <section class="webseo" id="webseo">
        <div class="backbox"></div>
        <div class="center70 ptop50">
            <div class="ctner">
                <h2 class=" title_webseo center cwhite">Optimización SEO</h2>
                <div class="center100">
                    <div class="detail filter" > 
                        <div class="text">
                            {{-- <h2>Un desarrollo adecuado y optimizado es esencial</h2> --}}
                            <h2>Impulsa tu presencia online y atrae más visitantes con servicios estratégicos</h2>
                            <p class="mtop20">
                                {{-- Tu sitio web puede ser maravillos pero... ¿Existes?. --}}
                                ¿Te gustaría conseguir más clientes? ¿Más llamadas? Es necesaria una correcta optimización SEO para posicionarte en los buscadores y la gente te encuentre.
                            </p>
                        </div>
                    </div>
                    
                    
                </div>
                <div class="features_seo" >
                    
                        <div class="featureseo one">
                            <div class="top">
                                <div class="icon"><img src="../icons/seo/analisis.svg" alt=""></div>
                            </div>
                            
                            <div class="title">
                                <h5>Auditoría</h5>
                            </div>
                            <p>Revisión en profundidad de tu sitio web identificando posibles áreas de mejora</p>                            
                        </div>
                        <div class="featureseo two">
                            <div class="top">
                                <div class="icon">
                                    <img src="../icons/seo/word-wrap.svg" alt="">
                                </div>
                            </div>                                
                            <div class="title">
                                <h5>Análisis de palabras clave</h5>
                            </div>
                            
                            <p>Investación avanzada de palabras clave relevantes para tu web</p>
                        </div>
                        <div class="featureseo three">
                            <div class="top">
                                <div class="icon">
                                    <img src="../icons/seo/code.svg" alt="">
                                </div>
                            </div>
                            <div class="title">
                                <h5>Metadatos estructurados</h5>
                            </div>
                            <p>Estructura del proyecto que facilita a los buscadores información precisa</p>
                        </div>
                        
                        
                        {{-- <p>Análisis de competencia</p>
                        <p>Análisis de competencia directa</p> --}}
                        <div class="featureseo four">
                            <div class="top">
                                <div class="icon">
                                    <img src="../icons/seo/seo_onpage.svg" alt="">
                                </div>
                            </div>
                            <div class="title">
                                <h5>Optimización OnPage</h5>
                            </div>
                            <p>Optimización de estructura y contenido obteniendo una indexación adecuada para los motores de búsqueda</p>
                        </div>
                        <div class="featureseo five">
                            <div class="top">
                                <div class="icon">
                                    <img src="../icons/seo/seo_performance.svg" alt="">
                                </div>
                            </div>
                            <div class="title">
                                <h5>Análisis</h5>
                            </div>                            
                            <p>Analizar el rendimiento de tu sitio web permite decidir estrategias basadas en el comportamiento de tus visitantes</p>
                        </div>
                        {{-- <p>Configuración y análisis de rendimiento de tu sitio web</p> --}}
                        
                        {{-- <p>Herramientas</p> --}}
                        <div class="featureseo six">
                            <div class="top">
                                <div class="icon">
                                    <img src="../icons/seo/seo_local.svg" alt="">
                                </div>
                            </div>
                            <div class="title">
                                <h5>SEO Local</h5>
                            </div>
                            
                            <p>Optimización para motores de búsqueda a través de factores de proximidad</p>
                        </div>
                </div>
                
            </div>
            
        </div>
        
        
    </section>
</div>

    {{-- <div class="wordpress white">
        <div class="icon">
            <img src="icons/iconos_web/wordpress.svg" alt=""  style="width:200px;">                        
        </div>
        <h4>Web corporativa</h4>                    
        
    </div>
    <div class="wordpress white">
        <div class="text">
            <p>
                Creación de diseño web basado en plantillas predefinidas.
                <ul>
                    <li>Interfaz intuitiva</li>
                    <li>Escalable</li>
                    <li>Ampliable</li>
                    <li>Responsive</li>
                    <li>Soporte</li>                            
                </ul>
                
            </p>

            <p>
                Diseño web con Wordpress: recomendado para la creación de webs corporativas, blogs, webs de noticias, foros, portafolios. Incorpora una interfaz intuitiva y un fantástico sistema de plantillas y plugins que permite ser administrado de forma genérica sin necesidad de grandes conocimientos en desarrollo web. Ideal para particulares y pequeñas empresas que no desean realizar un gran desembolso y no disponen de un desarrollador web profesional. 
            </p>
        </div>
        
        
        <!--<p>
            Wordpress es el CMS (sistema de gestión de contenidos) más popular del mercado, ocupando más del 40% de todos los sitios web del mundo. Aunque en sus orígenes fue destinado a páginas web de noticias y blogs, ha evolucionado de forma considerable a través de su sistema de plugins llegando a poder crear cualquier tienda o sitio web complejo. Wordpress ha sido seleccionado por grandes empresas como Sony, Meta o New York Times, sin embargo, existen otras opciones más recomendables para proyectos que requieren una mayor personalización y escalabilidad.
             Algunas de las características principales son 
            <span>su interfaz intuitiva que facilita la administración del sitio con unos conocimientos básicos en diseño y desarrollo web.</span>
            <span>Su sistema de plantillas que permite modificar el aspecto visual del sitio agilizando y disminuyendo el coste mediante el acceso a numerosas plantillas gratuitas y de bajo coste </span>
            <span>Su sistema de plugins que facilita la integración a múltiples opciones y funcionalidades con acceso a muy bajo coste apoyado por una amplia comunidad en la red</span>
            
        </p> -->
    </div> --}}
    

<script src="../js/carousel.js"></script>
@endsection