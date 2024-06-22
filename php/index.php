<?php

$url = $_SERVER['REQUEST_URI'];
$path = str_replace('/php/', '', $url);

$key = str_replace(
    '.html',
    '',
    $path
);

$content = file_get_contents('/static/' . $path);

header('Surrogate-Key: php-' . $key . ' ' . $key);
header('Cache-Control: max-age=300, public');

echo $content;