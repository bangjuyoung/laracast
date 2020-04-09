<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:400,700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="font-sans">
    <div id="app">
        <div class="container mx-auto">
            <header class="mb-8 py-6">
                <h1>
                    <img src="{{ asset('images/logo.svg') }}" alt="Laracasts">
                </h1>
            </header>

            <main class="flex">
                <aside class="w-1/5">
                    <section class="mb-8">
                        <h5 class="mb-3 uppercase font-bold">The Brand</h5>
                        <ul>
                            <li class="leading-10 text-sm"><router-link class="text-black" to="/">Logo</router-link></li>
                            <li class="leading-10 text-sm"><router-link class="text-black" to="/about">Logo Symbol</router-link></li>
                            <li class="leading-10 text-sm"><router-link class="text-black" to="/about">Colors</router-link></li>
                            <li class="leading-10 text-sm"><router-link class="text-black" to="/about">Typography</router-link></li>
                        </ul>
                    </section>

                    <section>
                        <h5 class="mb-3 uppercase font-bold">Doodles</h5>
                        <ul>
                            <li class="leading-10 text-sm"><router-link class="text-black" to="/">Mascot</router-link></li>
                            <li class="leading-10 text-sm"><router-link class="text-black" to="/about">Illustrations</router-link></li>
                            <li class="leading-10 text-sm"><router-link class="text-black" to="/about">Loaders and Animations</router-link></li>
                            <li class="leading-10 text-sm"><router-link class="text-black" to="/about">Wallpapers</router-link></li>
                        </ul>
                    </section>
                </aside>

                <div class="primary flex-1">
                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</body>
</html>
