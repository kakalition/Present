<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SavedBreath extends Model
{
    use HasFactory;

  protected $fillable = ['user_id', 'breaths_id'];
}
