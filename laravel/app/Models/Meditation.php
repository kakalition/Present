<?php

namespace App\Models;

use App\Models\Comment;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meditation extends Model
{
  use HasFactory;

  public function author()
  {
    return $this->belongsTo(User::class, 'author_id');
  }

  public function comments()
  {
    return $this->hasMany(Comment::class);
  }
}
