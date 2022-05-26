<?php

namespace App\Models;

use App\Models\MeditationComment;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meditation extends Model
{
  use HasFactory;

  protected $fillable = ['author_id', 'name', 'file_path', 'short_description'];

  public function author()
  {
    return $this->belongsTo(User::class, 'author_id');
  }

  public function comments()
  {
    return $this->hasMany(MeditationComment::class);
  }
}
