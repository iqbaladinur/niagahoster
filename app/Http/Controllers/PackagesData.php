<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Storage;

class PackagesData extends Controller
{
    public function index()
    {
        $arrayList = Storage::disk('local')->get('data/packages.json');
        return json_decode($arrayList, true);
    }
}
