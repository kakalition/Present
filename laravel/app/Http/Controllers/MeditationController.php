<?php

namespace App\Http\Controllers;

use App\Models\Meditation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MeditationController extends Controller
{
  public function new(Request $request)
  {
    $meditation = Meditation::create([
      'author_id' => Auth::id(),
      'name' => $request->title,
      'file_path' => $request->file('file')->store('meditations'),
      'short_description' => $request->description
    ]);

    return response(json_encode($meditation));
  }
}
