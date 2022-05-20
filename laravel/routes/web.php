<?php

use App\Http\Controllers\HomeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
  $public_path = asset('storage/');
  return view('welcome')
    ->with('public_path', $public_path);
});

Route::get('/home', function () {
  $transformedUsername = str_replace(' ', '+', Auth::user()->name);
  return view('home')
    ->with('transformedUsername', $transformedUsername);
});

