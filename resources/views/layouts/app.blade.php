<!DOCTYPE html>


<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" value="{{ csrf_token() }}" />

    <title>Vue JS CRUD Operations in Laravel</title>

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">
    <router-view></router-view>

    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>