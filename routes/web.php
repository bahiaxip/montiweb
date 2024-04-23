<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

/* Route::get('/',function(){
    return view('home/home');
}); */

Route::get('/',[HomeController::class,'home'])->name('home');
Route::get('/services',[HomeController::class,'services'])->name('services');
Route::get('/services1',[HomeController::class,'services1'])->name('services1');

