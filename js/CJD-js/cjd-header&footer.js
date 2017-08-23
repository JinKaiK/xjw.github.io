/**
 * Created by lenovo on 2017/8/20.
 */
//遮罩
$('.cjd-register').click( function () {
    $(".cjd-header-mask").css({display:"block"});
    $('.cjd-header-reg').css({display:"block"});
});
$('.cjd-login').click ( function () {
    $(".cjd-header-mask").css({display:"block"});
    $('.cjd-header-login').css({display:"block"});
});
$(".cjd-header-mask").click ( function () {
    this.style.display="";
    $('.cjd-header-reg').css({display: ""});
    $('.cjd-header-login').css({display:""});
});
$(".cjd-mask-no i").click ( function () {
    $(".cjd-header-mask").css({display:""});
    $('.cjd-header-reg').css({display: ""});
    $('.cjd-header-login').css({display:""});
});

//选项卡
var oHTBa = document.querySelectorAll("#cjd-header-tab-left a");
// var oHTBa=oHTB.children;
for(var i=0;i<oHTBa.length;i++){
    oHTBa[i].index=i;
    oHTBa[i].onclick=function(){
        for(var i=0;i<oHTBa.length;i++){
            oHTBa[i].className="";
            oHTBa[i].style.color="#666666";
            oHTBa[0].children[0].src="../../images/CJD-img/header-idea1.png";
            oHTBa[1].children[0].src="../../images/CJD-img/header-sercice1.png";
            oHTBa[2].children[0].src="../../images/CJD-img/header-article1.png"
        }
        this.className="cjd-header-tab-style";
        this.style.color="#FF7066";
        if(this.index==0){
            oHTBa[0].children[0].src="../../images/CJD-img/header-idea2.png";
        }else if(this.index==1){
            oHTBa[1].children[0].src="../../images/CJD-img/header-sercice2.png"
        }else {
            oHTBa[2].children[0].src="../../images/CJD-img/header-article2.png"
        }
    }
}

//导航
$(".cjd-header-nav li").click ( function () {
    $(this).css({background:"#FF7066"}).siblings().css({background:'none'})
});
