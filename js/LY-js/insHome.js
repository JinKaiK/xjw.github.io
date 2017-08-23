

$('#LY_insHeader>div>h1 button').click(function(){
	document.body.style.overflow = 'hidden';
     $(this).addClass('activeMe').siblings().removeClass('activeMe');
     $('body').append('<div class="show"><div class="hidden"><img src="images/hidenLogo.png"><h1>使用第三方登录</h1><ul><li></li><li></li><li></li></ul></div></div>');

     $('.show').click(function(e){
     	var e=event||window.event;
     	var target=e.target||e.srcElement;
     	if(target.className=='show'){
     		$('.show').css({display:'none'});
     	}
     })
});










