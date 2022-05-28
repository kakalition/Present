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

  public function setSessionCookie(Request $request)
  {
    Cookie::queue(
      'session_detail',
      json_encode(['id' => $request->id, 'type' => $request->type]),
      10
    );
  }

  public function stub(Request $request)
  {

    $filterBreathing = function ($stubCard) {
      return $stubCard->tag == 'Breathing';
    };

    $filterMeditation = function ($stubCard) {
      return $stubCard->tag == 'Meditation';
    };

    $stubArray = array();
    array_push($stubArray, new StubCard("Calmness 1", "Breathing", "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt."));
    array_push($stubArray, new StubCard("Calmness 2", "Breathing", "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt."));
    array_push($stubArray, new StubCard("Calmness 3", "Breathing", "3 Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt."));
    array_push($stubArray, new StubCard("Calmness 4", "Breathing", "4 Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt."));
    array_push($stubArray, new StubCard("Calmness 5", "Breathing", "5 Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt."));
    array_push($stubArray, new StubCard("Body Scan 1", "Meditation", "1 Lorem ipsum dolor, consectetur adipiscing elit, sed do eiusmod tempor incididunt."));
    array_push($stubArray, new StubCard("Body Scan 2", "Meditation", "2 Lorem ipsum sit amet, consectetur, sed do eiusmod tempor incididunt."));
    array_push($stubArray, new StubCard("Body Scan 3", "Meditation", "3 Lorem dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt."));
    array_push($stubArray, new StubCard("Body Scan 4", "Meditation", "4 ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt."));
    array_push($stubArray, new StubCard("Body Scan 5", "Meditation", "5 Lorem ipsum dolor sit amet, consectetur adipiscing, sed do eiusmod tempor."));

    $result = null;

    if ($request->query('meditationFilter') == 'true' && $request->query('breathingFilter') == 'true') {
      $result = $stubArray;
    } else if ($request->query('meditationFilter') == 'true') {
      $result = array_filter($stubArray, $filterMeditation);
    } else if ($request->query('breathingFilter') == 'true') {
      $result = array_filter($stubArray, $filterBreathing);
    } else {
      $result = [];
    }

    if ($request->query('isDescending') == 'true') {
      $result = array_reverse($result);
    }

    return json_encode($result);
  }
}
