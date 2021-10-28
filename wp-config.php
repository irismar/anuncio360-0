<?php

/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the installation.

 * You don't have to use the web site, you can copy this file to "wp-config.php"

 * and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * MySQL settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://wordpress.org/support/article/editing-wp-config-php/

 *

 * @package WordPress

 */



// ** MySQL settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define( 'DB_NAME', 'base' );



/** MySQL database username */

define( 'DB_USER', 'root' );



/** MySQL database password */

define( 'DB_PASSWORD', '' );



/** MySQL hostname */

define( 'DB_HOST', 'localhost' );



/** Database charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8mb4' );



/** The database collate type. Don't change this if in doubt. */

define( 'DB_COLLATE', '' );



/**#@+

 * Authentication unique keys and salts.

 *

 * Change these to different unique phrases! You can generate these using

 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.

 *

 * You can change these at any point in time to invalidate all existing cookies.

 * This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define( 'AUTH_KEY',         'ut;L),as2%C@T.5E,L|:+[<Fzu/Q2Tcr%Vsk)sNEInhmF`{NKewa {|^{Fj^+^}f' );

define( 'SECURE_AUTH_KEY',  'NL:I7$*Ss%Na=Gf6TI[~HEX<1k3y /`+@9C@0c}sLStG0ZX0V1HM,Y,w~37K1ocW' );

define( 'LOGGED_IN_KEY',    '9j&}8#.jxzs*qoLa.K+w=dNsG0#W{{$.V1Kp|V83RH(l/&mr`eJkgGucJ `AQYv~' );

define( 'NONCE_KEY',        'qfd|f}/2p0c:L}*k8{T E$><f%X/=I;IT8@P5KR3rYt&IW/6;//gEsWt:>zDC+qk' );

define( 'AUTH_SALT',        'Jil>I?{^4#XLI{=M$_n&L(Ndu@__{8|8z&f  ww_b.b)CLrE9H)O%98P1tkT>]0K' );

define( 'SECURE_AUTH_SALT', 'MXn 7&`s/%9|Q9Y(t>yD fL7!]F{/qm>?~oF)?)pWo]10EW87]CSOXaga5FPeR8z' );

define( 'LOGGED_IN_SALT',   '2U_ZJM>iq*owZ/Uj:Dt^a} c9scZE8/=QxX`biccX%6-E>Pt-WHz#x#fq GT 5*k' );

define( 'NONCE_SALT',       '?XQp2f- N`THofib~z=;01wWeL2/c0TnR=u ==UJZzre~.w;?Fw5%??Ne j!Ol{}' );



/**#@-*/



/**

 * WordPress database table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix = 'wp_';



/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the documentation.

 *

 * @link https://wordpress.org/support/article/debugging-in-wordpress/

 */

define( 'WP_DEBUG', false );



/* Add any custom values between this line and the "stop editing" line. */







/* That's all, stop editing! Happy publishing. */



/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', __DIR__ . '/' );

}



/** Sets up WordPress vars and included files. */

require_once ABSPATH . 'wp-settings.php';

