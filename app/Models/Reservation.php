<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }

    public function room()
    {
        return $this->belongsTo(\App\Models\Room::class);
    }

    protected $fillable = [
        'user_id',
        'room_id',
        'start_time',
        'end_time'
    ];
}
