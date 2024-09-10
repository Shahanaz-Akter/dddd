<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Laravel + Inertia.js + React</title>
    @vite('resources/js/app.jsx')
</head>
<body>
    <div id="app" data-page="{{ json_encode($page) }}"></div>
</body>
</html>
