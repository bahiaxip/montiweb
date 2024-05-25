@extends('layouts.app')
@section('title','Contacto')
@section('content')

<section class="contact">
    {{-- <div class="night">
        <div class="star">
            <div class="star1A"></div>
            <div class="star1B"></div>
        </div>
        <div class="star">
            <div class="star1A"></div>
            <div class="star1B"></div>
        </div>
        <div class="star">
            <div class="star1A"></div>
            <div class="star1B"></div>
        </div>
        <div class="star">
            <div class="star1A"></div>
            <div class="star1B"></div>
        </div>
        <div class="star">
            <div class="star1A"></div>
            <div class="star1B"></div>
        </div>
    </div> --}}
    {{-- <div class="back"></div> --}}
    <div class="title">
        <h1><span class="fill">Contacto</span> {{-- <span class="stroke">web</span> --}}</h1>    
    </div>
    <div class="container">
        
        <form action="">
            <div class="box">
                <div class="col">
                    <div class="inputBox">
                        <input type="text" name="name" required="required">
                        <span class="text">Nombre</span>
                        <span class="line"></span>
                    </div>
                    <div class="inputBox">
                        <input type="text" name="email" required="required" >
                        <span class="text">Correo electrónico</span>
                        <span class="line"></span>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="col">
                    <div class="inputBox">
                        <input type="text" name="phone" required="required">
                        <span class="text">Teléfono</span>
                        <span class="line"></span>
                    </div>
                    <div class="inputBox">
                        <div class="select-box">
                            <div class="options-container">
                                <div class="option">
                                    <input type="radio" class="radio" id="automobiles" name="category" >
                                    <label for="automobiles">Consulta general</label>
                                </div>

                                <div class="option">
                                    <input type="radio" class="radio" id="film" name="category" >
                                    <label for="film">Diseño web</label>
                                </div>

                                <div class="option">
                                    <input type="radio" class="radio" id="science" name="category" >
                                    <label for="science">Desarrollo web</label>
                                </div>
                                <div class="option">
                                    <input type="radio" class="radio" id="Art" name="category" >
                                    <label for="art">Mantenimiento</label>
                                </div>

                                <div class="option">
                                    <input type="radio" class="radio" id="music" name="category" >
                                    <label for="music">Presupuesto</label>
                                </div>
                
                                {{-- <div class="option">
                                    <input type="radio" class="radio" id="travel" name="category" >
                                    <label for="travel">Travel & Events</label>
                                </div>
                                <div class="option">
                                    <input type="radio" class="radio" id="sports" name="category" >
                                    <label for="sports">Sports</label>
                                </div> --}}
                            </div>
                            <div class="selected">
                                Tipo de consulta
                            </div>
                        </div>
                        
                        {{-- <select name="query" id="" required="required">
                            <option value="1">Tipo de consulta</option>
                            <option value="1">Consulta general</option>
                            <option value="2">Diseño Corporativo</option>
                        </select> --}}
                        {{-- <input type="select" name="query" required="required" > --}}
                        {{-- <span class="text">Tipo de consulta</span> --}}
                        <span class="line"></span>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="col">
                    <div class="inputBox textarea">
                        <textarea required="required"></textarea>
                        <span class="text">Escribe tu mensaje</span>
                        <span class="line"></span>
                    </div>
                </div>
            </div>
        </form>
    </div>
</section>
@endsection