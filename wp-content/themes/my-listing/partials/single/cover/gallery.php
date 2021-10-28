<?php


// If there are no gallery images, check if there's a cover image, or a default cover image available.
// Use the empty template if listing gallery isn't available.
if ( ! ( $gallery = $listing->get_field( 'gallery' ) ) ) {
    return require locate_template( 'partials/single/cover/image.php' );
}
///$ar=$listing->get_field();
//var_dump($ar);
// Overlay options.
function freme_yutuber($url) {
	$parsedUrl = parse_url($url);
	# extract query string
	parse_str(@$parsedUrl['query'], $queryString);
	$youtubeId = @$queryString['v'] ?? substr(@$parsedUrl['path'], 1);
  
	return "https://youtube.com/embed/{$youtubeId}";
  }
$overlay_opacity = c27()->get_setting( 'single_listing_cover_overlay_opacity', '0.5' );
$overlay_color   = c27()->get_setting( 'single_listing_cover_overlay_color', '#242429' );
$image_size      = count( $gallery ) === 1 ? 'full' : 'large';
$link_tour= $listing->get_field( 'video_url' );
$link_video= $listing->get_field( 'yutuver' );
 $link_visao_rua= $listing->get_field( 'viso-da-rua' );
$visa=explode('"',$link_visao_rua);
//var_dump($visa);
//exit();
//echo $visa[1];
?>
 <style>
    #preview-frame {width: 100%;}</style>
      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
      <script>
         //function to fix height of iframe!
         var calcHeight = function() {
           //var headerDimensions = 0; //$('#header-bar').height();
           $('#preview-frame').width($(window).width());
         }
         
         $(document).ready(function() {
           calcHeight();
         }); 
         
         $(window).resize(function() {
           calcHeight();
         }).load(function() {
           calcHeight();
         });
      </script>
  
    
  
<section class="featured-section profile-cover featured-section-gallery profile-cover-gallery">
<?
 if(isset( $link_tour)&& ( $link_tour!='')){?>
<div class="header-gallery-carousel photoswipe-gallery owl-carousel zoom-gallery">
<?
if(!isset($_GET['r'])){?>
	
	<iframe id="preview-frame"    src="<?=$link_tour;?>" 
 name="preview-frame" frameborder="0" noresize="noresize" style="height: 512px;">
      </iframe> 
	
	<?} else {	
	
switch($_GET['r'])
{
    case 1 :  //////exibir tour ?>
    <iframe id="preview-frame"    src="<?=$link_tour;?>" 
 name="preview-frame" frameborder="0" noresize="noresize" style="height: 512px;">
      </iframe> 
    <?  break;
    case 2 : 
       ?> <iframe id="preview-frame"    src="<?=freme_yutuber($link_video);?>" 
	   name="preview-frame" frameborder="0" noresize="noresize" style="height: 512px;">
			</iframe> <?
    break;
    case 3:
//////caregar galeria//////

foreach ( $gallery as $gallery_image ): ?>
	<?php if ( $image = c27()->get_resized_image( $gallery_image, 'full' ) ): ?>

		<a class="item photoswipe-item"	
			href="<?php echo esc_url( c27()->get_resized_image( $gallery_image, 'full' ) ? : $image ) ?>"
			style="background-image: url(<?php echo esc_url( $image ) ?>);"
			>
			<div class="overlay"
				 style="background-color: <?php echo esc_attr( $overlay_color ); ?>;
						opacity: <?php echo esc_attr( $overlay_opacity ); ?>;"
				>
			</div>
		</a>

	<?php endif ?>
<?php endforeach;
    break;

	case 4: ?>
		<iframe id="preview-frame"    src="<?=$visa[1];?>" 
	   name="preview-frame" frameborder="0" noresize="noresize" style="height: 512px;">
			</iframe>
   <?	break;

    default: "echo nenhum";
}} 
?>
	
	
  </div>
	<?} else{ ?>  





		
    <div class="header-gallery-carousel photoswipe-gallery owl-carousel zoom-gallery">
        <?php foreach ( $gallery as $gallery_image ): ?>
        	<?php if ( $image = c27()->get_resized_image( $gallery_image, 'full' ) ): ?>

        		<a class="item photoswipe-item"	
        			href="<?php echo esc_url( c27()->get_resized_image( $gallery_image, 'full' ) ? : $image ) ?>"
        			style="background-image: url(<?php echo esc_url( $image ) ?>);"
        			>
        			<div class="overlay"
        				 style="background-color: <?php echo esc_attr( $overlay_color ); ?>;
                        		opacity: <?php echo esc_attr( $overlay_opacity ); ?>;"
                        >
                    </div>
        		</a>

        	<?php endif ?>
        <?php endforeach ?>
    </div> <? } 


	
	?>