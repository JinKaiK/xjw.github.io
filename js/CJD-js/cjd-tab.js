/**
 * Created by lenovo on 2017/8/22.
 */
$(function(){
    //内容头部文字换页选项卡
    $(".cjd-con-tab-header-left span").click(function(){
        $(this).addClass("cjd-tab-on2").siblings().removeClass("cjd-tab-on2");
        var index=$(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
        $(".cjd-con-tab-img-wrap-wrap > div").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
    });
    //内容底部数字换页选项卡
    $(".cjd-con-tab-num span").click(function(){
        $(this).addClass("cjd-tab-on").siblings().removeClass("cjd-tab-on");
        var index=$(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
        $(".cjd-con-tab-img > ul").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
    });
});
