﻿# anuncio360
 <script  src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
  var $=jQuery;
 
  $(function(){ 
    $(window).scroll(function(){           

      if ($(window).scrollTop() >= $(document).height() - 1000) {
             
        document.getElementById("link").click(); 
             
        console.log('rolou');

           }
           console.log($(window).scrollTop());
           console.log($(window).height());
           console.log($(document).height());
          
       });
     
});
</script>
