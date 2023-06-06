<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index():Response
    {
        $user = Auth::user();
        return Inertia::render('Admin/CategoryTable',[
            'categories' => Category::all()->map(function($categories){
                    return [
                        'id' => $categories->id,
                        'name' => $categories->name,
                        'slug' => $categories->slug,
                        'edit_url' => route('categoryEdit',$categories)
                    ];
                }),
                'create_url' => route('CategoryForm'),
                'user' => $user
            ]);
    }

    public function create(){
        $user = Auth::user();
        return Inertia::render('Admin/CategoryForm',['user'=> $user]);
    }


    public function store(Request $request){
        Category::create($request->validate([
            'name' => 'required|max:30',
            'slug' => 'required|max:30',
        ]));

        return to_route('categories');

    }
    

    public function destroy(Category $category)
    {
        Category::destroy($category->id);

        return to_route('categories');

    }

    public function edit(){
            $user = Auth::user();
            return Inertia::render('');
    }

}
