

// ===========>   头部menu链接
$('.LY_insMenu .item').click(function(){
	// console.log($(this).index());
	$(this).addClass('isme').siblings().removeClass('isme');
	if($(this).index()==1){
		// window.open('works.html','_self',$(this).index());
		 var jsonData={
                           'who':$(this).index(),
                            };
          window.name=JSON.stringify(jsonData);
          window.location='works.html';
	}
		switch($(this).index()){
		case 1:
		var jsonData={'who':$(this).index(), };
          window.name=JSON.stringify(jsonData);
          window.location='works.html';
		break;
		case 2:
		console.log('哈哈');
		break;
		case 3:
		console.log('刚刚');
		break;
	}
})







