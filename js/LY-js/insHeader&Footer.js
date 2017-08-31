

// ===========>   头部menu链接
$('.LY_insMenu .item a').click(function(){
	// console.log($(this).index());
	$(this).addClass('isme').parent('li').siblings().children('a').removeClass('isme');
})







