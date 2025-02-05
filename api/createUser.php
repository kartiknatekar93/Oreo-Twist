<?php
header("Access-Control-Allow-Origin: " . "*");
require_once ('/home/newsfeedsmartapp/public_html/libs2/functions.php');
$obj = new Functions("dubai");

function isMobile() {
    return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
}

$key = $obj->getToken(15,20);
$device = "web";
$source = $_POST['source'];

if (isMobile()) {
    $device = "mobile";
}

$uid = $obj->createUser("Oreo_Twist", $device, array('source' => $source, 'encryptkey' => substr($key,3,8), 'language' => $_POST['language'], 'utm_source' => $_POST['utm_source']));
echo json_encode(array('uid' => $uid, 'game_key' => $key));
