$('.nav-link').on('click', function(){
	$(this).addClass('active').siblings().removeClass('active');
});

$(window).scroll(function(){

	if($(window).scrollTop() > 50)
	{
		$('.jumbotron-img').css({'transform': 'rotateZ(-10deg) scale(1.1)'});
	} 
	else
	{
		$('.jumbotron-img').css({'transform': 'rotateZ(-40deg) scale(1)'});
	}

	if($(window).scrollTop() > 100)
	{
		$('.section-img').css({'opacity': '1'});
		$('.section-title').css({'opacity': '1'});
		$('.section-text').css({'opacity': '1'});
	} else
	{
		$('.section-img').css({'opacity': '0'});
		//$('.section-title').css({'opacity': '0'});
		//$('.section-text').css({'opacity': '0'});
	}


});