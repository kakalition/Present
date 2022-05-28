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
    $interval_json = json_encode([
      'repetition' => $request->repetition,
      'inhale' => $request->inhale,
      'holdInhale' => $request->holdInhale,
      'exhale' => $request->exhale,
      'holdExhale' => $request->holdExhale,
    ]);

    $breath = Breath::create([
      'author_id' => Auth::id(),
      'title' => $request->title,
      'description' => $request->description,
      'interval_json' => $interval_json,
    ]);

    $savedBreath = SavedBreath::create([
      'user_id' => Auth::id(),
      'breath_id' => $breath->id
    ]);

    return response(json_encode([$breath, $savedBreath]));
  }
}
