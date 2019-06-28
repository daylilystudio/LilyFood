$(document).ready(function() {
//漢堡選單滑出
	$('.menu_block button').click(function(event) {
		$('.menu_block .menu_frame .menu').toggleClass('menu_show');
	});



//捲軸往下時 選單固定在上
	$(document).scroll(function(){
		if( $(document).scrollTop()>20 ){
			$('.menu_block').css({
				'position': 'fixed',
				'background-color': '#fff',
				'border-bottom': '1px solid #CCC'
			});
			$('.menu_block .menu_frame .menu li a').css({
				'color': '#000',
			});
		}else{
			$('.menu_block').css({
				'position': 'absolute',
				'background-color': 'transparent',
				'border-bottom': '0px'
			});
			$('.menu_block .menu_frame .menu li a').css({
				'color': '#fff',
			});
		}
	});



//回頂部
	$('.top').hide();
	$(document).scroll(function(){
		if( $(document).scrollTop()>500 ){
			$('.top').fadeIn();
		}else{
			$('.top').fadeOut();
		}
	});

	$('.top').click(function(){
		$('html,body').animate({'scrollTop' : '0px'} , 1000);
	});



//選單連結滑動效果
	$('#menu_special').click(function(){
		event.preventDefault();
		$('html,body').animate({'scrollTop' : $('#special').offset().top} , 1000);
	});
	$('#menu_chef').click(function(){
		event.preventDefault();
		$('html,body').animate({'scrollTop' : $('#chef').offset().top} , 1000);
	});
	$('#menu_map').click(function(){
		event.preventDefault();
		$('html,body').animate({'scrollTop' : $('#map').offset().top} , 1000);
	});



//登入註冊表單 滑入滑出
	$('#register_button').click(function(event) {
		event.preventDefault();
		$('#register').slideToggle('500');
	    $('#login').slideToggle('100');
	
	});

});