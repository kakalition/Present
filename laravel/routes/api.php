<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\MeditationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});

Route::get('/getUser', function (Request $request) {
  return Auth::user();
});

Route::get('/stubget', [HomeController::class, 'stub']);
Route::get('/getAllSaved', [HomeController::class, 'getAllSaved']);
Route::get('/test', function (Request $request) {
  return Auth::user();
});

Route::post('/newMeditation', [MeditationController::class, 'new']);
