$(function(){
	$(".city a").click(function(){
		$(this).addClass("city-bg").siblings().removeClass("city-bg")
	});
	$(".case-img-tab li").click(function(){
		$(this).addClass("case-img-table-color").siblings().removeClass("case-img-table-color")
	});
	$(".case-img-right a").click(function(){
		$(this).addClass("case-img-right-color").siblings().removeClass("case-img-right-color")
	});
	$(".color-class li").click(function(){
		$(this).addClass("color-class-bg").siblings().removeClass("color-class-bg")
	});
})