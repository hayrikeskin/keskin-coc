<?php
header('Content-Type: text/html; charset=UTF-8');

$clan = $_GET['clan'];
if ($clan == "") {
  $clan = "#8L000CQ8";
}

$token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjhiMDljOWNhLTcyYzYtNDdlMC1hYmJiLWE1YThlNWZjNjc1NCIsImlhdCI6MTYxMzE5OTY5Mywic3ViIjoiZGV2ZWxvcGVyL2QxNGExY2IxLWZlYmEtMDM5OC03NWU2LWZkNGVjMjcwMzhkMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjkxLjE4NC4wLjI1IiwiODIuMTczLjM5LjI0OCIsIjE3OC4yMzEuNjIuMTE0Il0sInR5cGUiOiJjbGllbnQifV19.V3a1VjS71sByOK4XcmcZxdWMwQSmdzqUcSkVJEeBuTUQIho5tqdfbzMfKanV2d3xj54aJtII90PmLg0Owh4uzQ";

$url = "https://api.clashofclans.com/v1/clans/" . urlencode($clan);

$ch = curl_init($url);

$headr = array();
$headr[] = "Accept: application/json";
$headr[] = "Authorization: Bearer ".$token;

curl_setopt($ch, CURLOPT_HTTPHEADER, $headr);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 

$res = curl_exec($ch);

echo $res;
?>