<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name', 'Laravel') }}</title>
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="app">
            <div class="container">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
            </div>
            <router-view></router-view>
        </div>
        <script src="{{ asset('js/app.js') }}" defer></script>
    </body>
</html>
