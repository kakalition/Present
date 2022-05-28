<?php

namespace App\Http\Controllers;

use App\Models\Meditation;
use App\Models\SavedMeditation;
use App\Models\User;
use Illuminate\Cookie\CookieJar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class StubCard
{
  public $title;
  public $tag;
  public $shortDescription;

  function __construct($title, $tag, $shortDescription)
  {
    $this->title = $title;
    $this->tag = $tag;
    $this->shortDescription = $shortDescription;
  }
}

class HomeController extends Controller
{
  public function getAllSaved(Request $request)
  {
    $meditations = User::where('id', Auth::id())
      ->get()[0]
      ->savedMeditation;
    return json_encode([
      'meditations' => $meditations,
      'breaths' => $meditations
    ]);
  }

  public function filter(Request $request)
  {
    $meditations = User::where('id', Auth::id())
      ->get()[0]
      ->savedMeditation;

    $json = null;

    if ($request->query('meditationFilter') == 'true' && $request->query('breathingFilter') == 'true') {
      $json = json_encode([
        'meditations' => $meditations,
        'breaths' => $meditations
      ]);
    } else if ($request->query('meditationFilter') == 'true') {
      $json = json_encode([
        'meditations' => $meditations,
        'breaths' => []
      ]);
    } else if ($request->query('breathingFilter') == 'true') {
      $json = json_encode([
        'meditations' => [],
        'breaths' => $meditations
      ]);
    } else {
      $json = json_encode([
        'meditations' => [],
        'breaths' => []
      ]);
    }

    return $json;
  }

  public function setSessionCookie(Request $request)
  {
    Cookie::queue(
      'session_detail',
      json_encode(['id' => $request->id, 'type' => $request->type]),
      10
    );
  }
}
