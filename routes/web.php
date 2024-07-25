<?php

use Illuminate\Support\Facades\Route;

route::view('/{path?}', 'welcome')
->where('path','.*');


