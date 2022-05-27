<?php

namespace App\Http\Controllers;

use App\Models\Meditation;
use App\Models\SavedMeditation;
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


    $savedMeditation = SavedMeditation::create([
      'user_id' => Auth::id(),
      'meditation_id' => $meditation->id
    ]);

    return response(json_encode([$meditation, $savedMeditation]));
  }
}
