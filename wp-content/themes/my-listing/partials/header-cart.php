<?php

/**

 * Template for displaying a cart icon and

 * contents count in site header.

 *

 * @since 1.7.1

 */



if ( ! defined( 'ABSPATH' ) ) {

	exit;

}



if ( ! class_exists( 'WC_Widget_Cart' ) ) {

	return false;

}



$cart_count = WC()->cart->get_cart_contents_count();

?>


