$(document).ready(function(){

	
	name();



	$(function(){
		$(window).scroll(function() {

		var top = $(document).scrollTop();
		if (top < 150) $("#fix_menu").css({top: '0', position: 'relative', background: 'white'});
		else $("#fix_menu").css({top: '0', position: 'fixed', background: '#e5f5fc'});

		});
	});
    

//Nav  


   		$('.menu-trigger').click(function(){
   			$('nav ul').slideToggle(500);
   		});

	
});



		function name(){
				$('.cv').animate({ top: '+=150px'}, 1000 );
		};




