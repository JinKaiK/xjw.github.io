


//   遮罩  .。。。





//    灵感首页banner  焦点
$('.ins_banner_msg .focus').append('<li></li><li></li><li></li><li></li><li></li><li></li><li></li>');
var msgs=['华丽梦幻的卡塔尔王室婚礼',
          '呵呵呵',
          '是看见啊放假，',
          '呵呵呵呵',
          '一样一样',
          '斤斤计较',
          '好V观察观察'];


var ind=0;
var bannerPlay;
 $('.ins_banner_msg .focus li').eq(0).addClass('ck');
 $('.ins_banner_msg p').text(msgs[0]);
$('#LY_insBanner .ins_banner img').eq(0).addClass('showme');


$('.ins_banner_msg .focus li').click(function(){
     // console.log($(this).index());
     $(this).addClass('ck').siblings().removeClass('ck');
     $('#LY_insBanner .ins_banner img').eq($(this).index()).addClass('showme').siblings().removeClass('showme');
     $('.ins_banner_msg p').text(msgs[$(this).index()]);
});

  // $('#LY_insBanner .ins_banner img').click(function(){
  //    console.log($(this).index())
  // });

  playBanner();
  function playBanner(){
      bannerPlay=setInterval(function(){
          // console.log(ind);
           ind++;
           if(ind>=msgs.length){ind=0}
          $('.ins_banner_msg .focus li').eq(ind).addClass('ck').siblings().removeClass('ck');
          $('#LY_insBanner .ins_banner img').eq(ind).addClass('showme').siblings().removeClass('showme');
          $('.ins_banner_msg p').text(msgs[ind]);
          },1500);
  }
    $('.ins_banner').mouseover(function(){
         clearInterval(bannerPlay);
    });
    $('.ins_banner').mouseout(function(){
         playBanner();
    })


// 推荐灵感板
var recomArr=[
          {'imgSrc':'../../images/LY-img/recommend1.jpg','retitle':'背景','con':'16个收集,4个人喜欢','author':'FraiyC'},
          {'imgSrc':'../../images/LY-img/recommend2.jpg','retitle':'百花绿叶茶艺','con':'16个收集,4个人喜欢','author':'Lime'},
          {'imgSrc':'../../images/LY-img/recommend3.jpg','retitle':'HTML','con':'16个收集,4个人喜欢','author':'Black'},
          {'imgSrc':'../../images/LY-img/recommend4.jpg','retitle':'Javascript','con':'16个收集,4个人喜欢','author':'Deeppink'},
          {'imgSrc':'../../images/LY-img/recommend5.jpg','retitle':'Python','con':'16个收集,4个人喜欢','author':'Purple'},
     ];

/************************  这是ES6的模板字符串写法,IE不支持   **********************/
// recomArr.map(function(item,k){
//      $('.recommondList').append(`<li>
//                <img src=${item.imgSrc} alt="加载失败了">
//               <h2>${item.title}</h2>
//                <p class="re_msg_title">${item.con}</p>
//                <p class="re_msg_con">by<a href="#">${item.author}</a></p>
//          </li>`);
// });

/********************** 这是ES6的模板字符串,IE不支持   *************************/


/********************** 这是js普通写法,但是浏览器不能正常解析换行   *************************/
 // for(var i=0;i<recomArr.length;i++){
 //       console.log(recomArr[i].retitle);
 //       recomArr[i].index=i;
 //       var x=document.createElement('li');
 //         x.innerHTML='<img src="'+recomArr[i].imgSrc+'" alt="加载失败了">'+
 //              +' <h2>'+recomArr[i].retitle+'</h2>'+
 //              +' <p class="re_msg_title">'+recomArr[i].con+'</p>'+
 //               +'<p class="re_msg_con">by<a href="#">'+recomArr[i].author+'</a></p>';
 //               // 有换行的地方会在页面显示NaN,可咋整
 //          // x.innerHTML='<h2>'+recomArr[i].retitle+'</h2>';     //没有换行可以正常识别
 //         document.getElementById('recommondList').appendChild(x);
 // }
/********************** 这是js普通写法,但是浏览器不能正常解析换行   *************************/



/********************** 这样写可以   *************************/
for(var i=0;i<recomArr.length;i++){
       console.log(recomArr[i].retitle);
       recomArr[i].index=i;
       var x=document.createElement('li');
         x.innerHTML='<img src="'+recomArr[i].imgSrc+'" alt="加载失败了"><h2>'+recomArr[i].retitle+'</h2> <p class="re_msg_title">'+recomArr[i].con+'</p><p class="re_msg_con">by<a href="#">'+recomArr[i].author+'</a></p>';
          // x.innerHTML='<h2>'+recomArr[i].retitle+'</h2>';
         document.getElementById('recommondList').appendChild(x);
 }
/********************** 这样写可以     *************************/



//   达人推荐
var DRrecomArr=[
          {'imgSrc':'../../images/LY-img/da1.jpg','drtitle':'背景','con':'16个收集,4个人喜欢','author':'FraiyC'},
          {'imgSrc':'../../images/LY-img/da2.jpg','drtitle':'百花绿叶茶艺','con':'16个收集,4个人喜欢','author':'Lime'},
          {'imgSrc':'../../images/LY-img/da3.jpg','drtitle':'HTML','con':'16个收集,4个人喜欢','author':'Black'},
          {'imgSrc':'../../images/LY-img/da4.jpg','drtitle':'Javascript','con':'16个收集,4个人喜欢','author':'Deeppink'},
          {'imgSrc':'../../images/LY-img/da5.jpg','drtitle':'Python','con':'16个收集,4个人喜欢','author':'Purple'},
           {'imgSrc':'../../images/LY-img/da6.jpg','drtitle':'Python','con':'16个收集,4个人喜欢','author':'Six'},
     ];



// DRrecomArr.map(function(item,k){
//      $('.DR_rec').append('<li>'+
//                +'<img src="'+item.imgSrc+'" alt="加载失败了">'+
//               +' <div class="right">'+
//               +' <h2>'+item.drtitle+'</h2>'+
//               +' <p class="re_msg_title">'+item.con+'</p>'+
//               +' <p class="re_msg_con">by<a href="#">'+item.author+'</a></p>'+
//                +'</div>'+
//               +' <p class="noti">关注</p>'+
//              +'</li>')
// });




for(var i=0;i<DRrecomArr.length;i++){
       console.log(DRrecomArr[i].retitle);
       DRrecomArr[i].index=i;
       var x=document.createElement('li');
         x.innerHTML='<img src="'+DRrecomArr[i].imgSrc+'" alt="加载失败了"><h2>'+DRrecomArr[i].drtitle+'</h2> <p class="re_msg_title">'+DRrecomArr[i].con+'</p><p class="re_msg_con">by<a href="#">'+DRrecomArr[i].author+'</a></p><p class="noti">+关注</p>';
          // x.innerHTML='<h2>'+recomArr[i].retitle+'</h2>';
         document.getElementById('DR_rec').appendChild(x);
 }
