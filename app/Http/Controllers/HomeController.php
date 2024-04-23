<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    //

    public function home(){
        return view('home.home');
    }

    public function services(){
        return view('services');
    }

    //añadiendo redirección con withFragment, equivalente a establecer sección por id con html (#nombredeid)
    public function services1(){
        return redirect()->route('services')->withFragment('webseo');
        //return view('services')->withFragment('webseo');
    }
}
