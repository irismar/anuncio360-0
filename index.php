<?php
/**
 * Front to the WordPress application. This file doesn't do anything, but loads
 * wp-blog-header.php which does and tells WordPress to load the theme.
 *
 * @package WordPress
 */

/**
 * Tells WordPress to load the WordPress theme and output it.
 *
 * @var bool
 */


if(isset($_GET)){
  $_SERVER["REQUEST_URI"];
  $montar_url= explode('/',$_SERVER["REQUEST_URI"]);
 
    $url2= $montar_url[1];
  
$server = 'localhost';
$user = 'root';
$pwd = '';
$db = 'base';
$mysqli = new mysqli($server, $user, $pwd, $db);
if (mysqli_connect_errno()) trigger_error(mysqli_connect_error()); $sql = "SELECT user_login FROM wp_users  WHERE user_login='$url2' LIMIT 1";
$result= $mysqli->query($sql);
$row = $result->fetch_assoc();
if($row!=NULL){
 $row['user_login']; ?> <script>
window.location.href = "https://anuncio360.com/author/<?= $row['user_login'];?>";
</script> <?

exit();
}
}

define( 'WP_USE_THEMES', true );

/** Loads the WordPress Environment and Template */
require __DIR__ . '/wp-blog-header.php';
