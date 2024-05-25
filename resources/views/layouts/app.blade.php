<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="route_name" content={{ Route::currentRouteName() }}>
    <title>Montiweb</title>
    <link rel="shortcut icon" href="icons/logo_montiweb_128.svg">
    <link rel="stylesheet" href="{{asset('css/header.css')}}">
    <link rel="stylesheet" href="{{asset('css/nav.css')}}">
    <link rel="stylesheet" href="{{asset('css/estilos.css')}}">
    <link rel="stylesheet" href="{{asset('css/services.css')}}">
    <link rel="stylesheet" href="{{asset('css/estilos_provi.css')}}">
    <link rel="stylesheet" href="{{asset('css/footer.css')}}">
    <link rel="stylesheet" href="{{asset('css/contact.css')}}">
    {{-- <link rel="stylesheet" href="{{asset('css/stars.css')}}"> --}}
    <script src="{{asset('js/anime.min.js')}}"></script>
    <script src="{{asset('js/bundle.js')}}"></script>
    
</head>
<body>
    <div class="div_body">
        <div class="cursor "></div>
        <main>
            @include('layouts.nav')
            
            @yield('content')
        </main>
        @include('layouts.footer')
    </div>
    <script src="{{asset('js/funciones.js')}}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"></script>
    <script src="https://unpkg.com/split-type"></script>
    <script src="{{asset('js/animation_gsap.js')}}"></script>
</body>
</html>