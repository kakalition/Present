<?php

namespace App\Models;

use App\Models\Comment;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Breath extends Model
{
    use HasFactory;

    public function comments() {
        return $this->hasMany(Comment::class);
    }
}
