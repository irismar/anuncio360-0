<?php

if ( ! ( $phone = $listing->get_field('phone') ) ) {
	return;
}




$link = trim(  $phone );
?>






<li id="<?php echo esc_attr( $action['id'] ) ?>" class="<?php echo esc_attr( $action['class'] ) ?>">
    <a href="<?php echo" https://api.whatsapp.com/send?phone=55".$link."&text=ol%C3%A1%20vi%20seu%20anúncio%20no%20site%20anuncio360.com%20e%20gostaria%20de%20saber%20mais" ?>" rel="nofollow">
    	
    	<span style="font-size: 24px; margin:10px;" class="fab fa-whatsapp "></span><?echo " ";?><span></span>Contato
    </a>
</li>
<?
if ( !  ( $preco = $listing->get_field('preo')  ) ) {
	return;
}

?>
<li id="<?php echo esc_attr( $action['id'] ) ?>" class="<?php echo esc_attr( $action['class'] ) ?>">
    <a href="#" >
    	
    	<span style="font-size: 24px; margin:10px;" class="	far fa-money-bill-alt "></span><span><?echo "R$ " . number_format($preco,2,",",".");  ?> </span>
    </a>
</li>