<header>
    {{-- <div class="background1">
        <div class="gradient left"></div>
        <div class="gradient right"></div>
    </div>    --}} 
    {{-- <div class="filigrana">
        <div class="text">Montiweb</div>
    </div> --}}
        <!-- fondo de colores -->
        <!--<div style="width:100%;height:100%;position:absolute;display:flex;justify-content: center;align-items:center;background-size:100%;background-position:bottom;background-repeat:no-repeat;background:linear-gradient(to left, rgba(55,200,113,1) 10%, rgba(251,251,251,0) 100%);opacity:0.2"></div>-->
        <!--<div style="width:100%;height:100%;position:absolute;display:flex;justify-content: center;align-items:center;background:url(img/fondo_colores.svg);background-size:150%;background-position:bottom;background-repeat:no-repeat;">
        </div>-->

            <!-- <div class="ball">
                <div class="circle" style="--clr:#04fc43";></div>
            </div> -->
        
        <div class="postheader">
            <div class="section">            
                <!-- <h2 class="text animejs">AnimeJS Text Animation Effects</h2> -->
                <h2 class="text animejs">Diseño y desarrollo <span class="span">web</span></h2>
                <!-- <div class="subtext">Servicios de diseño web personalizado</div> -->
                <div class="subtext">Soluciones tecnológicas en un mundo digital</div>
                <!-- <div class="subtext">Soluciones digitales a empresas y particulares</div> -->
                <!-- <p style="color:white">Cuando las soluciones disponibles no satisfacen tus necesidades desarrolla una aplicación web personalizada.</p> -->
                <!-- <p style="color:white">Cuando las soluciones disponibles no satisfacen tus objetivos necesitas un sitio web personalizado.</p> -->
                    
                <!-- </div>  -->
                
            </div>
        </div>
        <div class="boxes">
            <div class="box design">
                {{-- <span class="empty_line"></span> --}}
                <div class="content">
                    <div class="icon">
                        <div class="box_svg">
                            <img src="{{asset('icons/design.svg')}}" alt="">
                        </div>
                    </div>
                    <div class="title">
                        <h3>DISEÑO WEB</h3>
                        <a href="/services#webdesign" class="button"><span class="back"></span><span class="text_btn">Leer Más</span></a>
                    </div>
                </div>
                

            </div>
            <div class="box development">
                {{-- <span class="empty_line"></span> --}}
                <div class="content">
                    <div class="icon">
                        <div class="box_svg">
                            <img src="{{asset('icons/developing.svg')}}" alt="">
                        </div>
                    </div>
                    <div class="title">
                        <h3>DESARROLLO WEB</h3>
                        <a href="/services#webdevelopment" class="button"><span class="back"></span><span class="text_btn">Leer Más</span></a>
                    </div>
                </div>
            </div>
            <div class="box seo">
                {{-- <span class="empty_line"></span> --}}
                <div class="content">
                    <div class="icon">
                        <div class="box_svg">
                            <img src="{{asset('icons/optimize_seo.svg')}}" alt="">
                        </div>
                    </div>
                    <div class="title">
                        <h3>OPTIMIZACIÓN SEO</h3>
                        <a href="/services1" class="button"><span class="back"></span><span class="text_btn">Leer Más</span></a>
                    </div>
                </div>
            </div>
        </div>
        {{-- <div class="skills2">
            <div class="box_skills1">
                @include('home.skills1')
            </div>
            <!--<div class="box_skills2">
                @include('home.skills2')
            </div> -->
        </div> --}}
    </header>