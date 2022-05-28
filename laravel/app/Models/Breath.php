<?php

namespace App\Models;

use App\Models\BreathComment;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Breath extends Model
{
  use HasFactory;

  protected $fillable = ['author_id', 'title', 'description', 'interval_json'];

  public function author()
  {
    return $this->belongsTo(User::class, 'author_id');
  }

  public function comments()
  {
    return $this->hasMany(BreathComment::class);
  }
}
