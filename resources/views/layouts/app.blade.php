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
        <header class="mb-8 py-6 px-8" style="background: url('https://assets.laracasts.com/images/splash.svg') no-repeat 0 0;">
            <h1>
                <img src="{{ asset('images/logo.svg') }}" alt="Laracasts">
            </h1>
        </header>

        <div class="container px-8 pb-10">
            <main class="flex">
                <aside class="w-64 pt-8">
                    <section class="mb-10">
                        <h5 class="mb-5 uppercase font-bold text-base">The Brand</h5>
                        <ul>
                            <li class="leading-10 text-sm"><router-link class="text-black" to="/" exact>Logo</router-link></li>
                            <li class="leading-10 text-sm"><router-link class="text-black" to="/logo-symbol">Logo Symbol</router-link></li>
                            <li class="leading-10 text-sm"><router-link class="text-black" to="/Colors">Colors</router-link></li>
                            <li class="leading-10 text-sm"><router-link class="text-black" to="/typography">Typography</router-link></li>
                        </ul>
                    </section>

                    <section>
                        <h5 class="mb-5 uppercase font-bold text-base">Doodles</h5>
                        <ul>
                            <li class="leading-10 text-sm"><router-link class="text-black" to="/mascot">Mascot</router-link></li>
                            <li class="leading-10 text-sm"><router-link class="text-black" to="/illustrations">Illustrations</router-link></li>
                            <li class="leading-10 text-sm"><router-link class="text-black" to="/loaders-and-animations">Loaders and Animations</router-link></li>
                            <li class="leading-10 text-sm"><router-link class="text-black" to="/wallpapers">Wallpapers</router-link></li>
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
