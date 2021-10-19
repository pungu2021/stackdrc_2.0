<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Stackdrc.com</title>
        <meta property="og:title" content="Tous les tutoriels"/>
        <meta property="og:site_name" content="Stackdrc.com"/>
        <meta property="og:language" content="fr"/>
        <meta name="twitter:author" content="@stackdrc"/>
        <link rel="stylesheet" href="{{asset("css/bootstrap.min.css")}}">
        <link rel="stylesheet" href="{{asset("css/app.css")}}">
        <link rel="shortcut icon" href="{{Storage::url("images/logo2.png")}}">
    </head>
    <body >
        <div class="animation-load">
            <figure>
                <img src="{{Storage::url("images/anim3.gif")}}" alt="" class="animation-chargement">
            </figure>
            stackdrc chargement ...
        </div>
         <div class="main">
         <header>
                <figure>
                    <img src="{{Storage::url("images/logo2.png")}}" alt="" class="logo">
                </figure>
                <span class="satckdrc">Stackdrc</span>
                <nav>
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">Tutoriels</a></li>
                        <li><a href="#">Formation</a></li>
                        <li><a href="#">Forum </a></li>
                        <li><a href="#">Apropos</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div class="dark-mode">
                      <form action="" method="GET">
                          @csrf
                          <input type="search" name="key" id="" class="textbox">
                          <button class="search"> <img src="{{Storage::url("images/rec.png")}}" alt="" class="image-recherche"></button>
                      </form>
                    <div class="mode-global">
                           <div class="mode">
                                <img src="{{Storage::url("images/moon.png")}}" alt="" class="dark-image">
                           </div>
                    </div>
                </div>
        </header>
             @yield('index')
         </div>
         <script src="{{asset("js/app.js")}}"></script>
    </body>
</html>
