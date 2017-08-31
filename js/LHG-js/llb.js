//window.onload=function(){
//	alert(innerWidth)
//	var Focus=document.querySelector(".focus"),
//
//	    Lb=Focus.querySelector(".lb"),
//	    LbLi=Lb.querySelectorAll("li"),
//	    dot=Focus.querySelector(".dot"),
//	    dotLi=dot.querySelectorAll("li");
//	    var imgIndex=0,
//	        dotIndex=0;
//	    function initCss(){
//	    	Lb.style.marginLeft=0+"px";
//	    	Lb.style.width=1980*LbLi.length+"px";
//	    	dotLi[0].className="on";
//	    };
//	    initCss();
//	    function nobg(){
//	    	for (var i = 0; i < dotLi.length; i++) {
//	    		if (dotLi[i].className="on") {
//                   dotLi[i].className="";
//	    		};
//	    	};
//	    };
//	    var everymove=4,
//	        moveNum=0,
//	        lastNum=0,
//	        stopAnimate="",
//	        flag=true;
//  function animation(margin,everymove){
//  	moveNum=Math.abs(margin/everymove);
//  	stopAnimate=setInterval(function(){
//           if (lastNum>=moveNum) {
//           	clearInterval(stopAnimate);
//           	lastNum=-1;
//           	flag=true;
//               return;
//           };
//           Lb.style.marginLeft=parseInt(Lb.style.marginLeft)+everymove+"px";
//           lastNum++;
//  	},1)
//  };
//  var timer="";
// function autoplay(){
//  	timer=setInterval(function(){
//  		Lb.style.marginLeft=parseInt(Lb.style.marginLeft)-200+"px";
//  	},100)
//  };
//  
//
//	for (var i = 0; i < dotLi.length; i++){
//		    dotLi[i].index=i;
//		  	dotLi[i].onclick=function(){
//             if (flag) {
//             	flag=false;
//             	nobg();
//             this.className="on";
//             if (this.index-dotIndex>=0) {
//             	
//var margin=innerWidth*Math.abs(this.index-dotIndex);
//            	animation(margin,-everymove);
//            }else{
//             	var margin=innerWidth*Math.abs(this.index-dotIndex);
//             	animation(margin,everymove);
//             }
//             dotIndex=this.index;
//            imgIndex=dotIndex;
//             };
//		  	}
//		  };	  

//$('.focus lb li .dot li').click(function(){
//	$('.focus lb li').eq($(this).index()).stop().animate({':'100%'},200)
//})
//
//}

//按钮1
function icon1(){
	blayer_content1.style.display='block';
	blayer_content2.style.display='none';
	
	
	js_btab2.style.opacity='0.5';
	js_btab1.style.opacity='1';
}
//按钮2
function icon2(){
	blayer_content1.style.display='none';
	blayer_content2.style.display='block';
	
	
	js_btab1.style.opacity='0.5';
	js_btab2.style.opacity='1';
	js_btab2.style.color='#ff7066';
	js_btab1.style.color='#666666';
}
//----------------------------------------------
//找商家  tab



function icon3(){
	alert(1)
	LHG_wrappe_b.style.display='block';
	LHG_wrappe_c.style.display='none';
	LHG_wrappe_d.style.display='none';
	
	
	
	js_btab2.style.opacity='0.5';
	js_btab1.style.opacity='1';
}









function icon4(){
	alert(2)
	LHG_wrappe_b.style.display='none';
	LHG_wrappe_c.style.display='none';
	LHG_wrappe_d.style.display='none';
	js_btab1.style.opacity='0.5';
	js_btab2.style.opacity='1';
	js_btab2.style.color='#ff7066';
	js_btab1.style.color='#666666';
}





function icon5(){
	alert(3)
LHG_wrappe_b.style.display='none';
	LHG_wrappe_c.style.display='none';
	LHG_wrappe_d.style.display='blovk';
	js_btab1.style.opacity='0.5';
	js_btab2.style.opacity='1';
	js_btab2.style.color='#ff7066';
	js_btab1.style.color='#666666';
}