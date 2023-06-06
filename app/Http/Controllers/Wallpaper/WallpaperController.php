<?php

namespace App\Http\Controllers\Wallpaper;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WallpaperController extends Controller
{
    public function index(){
        return Inertia::render('Wallpaper');
    }
}
