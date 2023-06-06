<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RedirectAuthenticatedUsersController;
use App\Http\Controllers\User\UserDashboardController;

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
Route::group(['middleware' => 'auth'], function() {
    // Route::inertia('/dashboard', 'Dashboard')->name('dashboard');

    Route::get("/redirectAuthenticatedUsers", [RedirectAuthenticatedUsersController::class,'home']);

    Route::group(['middleware' => 'checkRole:admin'], function() {
        Route::get('/adminDashboard',[DashboardController::class,'index'])->name('adminDashboard');
        Route::get('/AdminDashboard/users',[DashboardController::class,'user'])->name('users');
        Route::get('/Category',[CategoryController::class ,'index'])->name('categories');
        Route::get('/adminDashboard/Category/Add',[CategoryController::class,'create'])->name('CategoryForm');
        Route::post('/adminDashboard/Category', [CategoryController::class, 'store'])->name('category');
        Route::delete('/categories/{category}',[CategoryController::class,'destroy'])->name('deleteCategory');
        Route::get('/adminDashboard/Edit',[CategoryController::class,'edit'])->name('categoryEdit');

    });
    Route::group(['middleware' => 'checkRole:user'], function() {
        // Route::inertia('/userDashboard', 'UserDashboard')->name('user');
        Route::get('/Dashboard',[UserDashboardController::class,'index'])->name('dashboard');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/',function(){
    return Inertia::render('Home');
})->name('/');


Route::get('/wallpaper',[App\Http\Controllers\Wallpaper\WallpaperController::class,'index'])->name('wallpaper');

require __DIR__.'/auth.php';
