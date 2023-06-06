<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

use function Termwind\render;

class DashboardController extends Controller
{
    public function index():Response
    {
        $user = Auth::user();
        return Inertia::render('AdminDashboard',['user' => $user]);
    }
    public function user():Response
    {
        $users = User::all();

        return Inertia::render('Admin/UserTable',['users' => $users]);
    }

}
