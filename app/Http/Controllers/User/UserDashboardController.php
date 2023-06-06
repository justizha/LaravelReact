<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class UserDashboardController extends Controller
{
    public function index():Response 
    {
        $user = Auth::user();
        return Inertia::render('UserDashboard',['user' => $user]);
    }
}
