<?php

namespace App\Http\Controllers;

use App\Models\Breath;
use App\Models\SavedBreath;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BreathController extends Controller
{
  public function new(Request $request)
  {
    $breath = Breath::create([
      'author_id' => Auth::id(),
      'title' => $request->title,
      'description' => $request->description,
      'interval_json' => $request->intervalJson,
    ]);

    $savedBreath = SavedBreath::create([
      'user_id' => Auth::id(),
      'breath_id' => $breath->id
    ]);

    return response(json_encode([$breath, $savedBreath]));
  }
}
