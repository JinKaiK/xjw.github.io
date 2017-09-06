
		 //随机数
		    function Random(min,max){
		        return parseInt(Math.random()*((max+1)-min)+min);
		    }
		//创建一个数组来保存图片
		var arr = [//数组名字
				{'src': "../../images/LY-img/inswedding0.jpg",'uName':'Mine1','from':'../../images/LY-img/au1.jpg','uTitle':'一场由梦而生的 | Cherry',},
				{'src': "../../images/LY-img/inswedding1.jpg",'uName':'Mine1','from':'../../images/LY-img/au2.jpg','uTitle':'巴厘岛宝格丽Bvlgari水台婚礼',},
				{'src': "../../images/LY-img/inswedding2.jpg",'uName':'Mine2','from':'../../images/LY-img/au3.jpg','uTitle':'甜美清新',},
				{'src': "../../images/LY-img/inswedding3.jpg",'uName':'Mine3','from':'../../images/LY-img/au4.jpg','uTitle':'互',},
				{'src': "../../images/LY-img/inswedding4.jpg",'uName':'Mine4','from':'../../images/LY-img/au5.jpg','uTitle':'爱笑的女孩',},
				{'src': "../../images/LY-img/inswedding5.jpg",'uName':'Mine5','from':'../../images/LY-img/au6.jpg','uTitle':'两小无嫌猜',},
				{'src': "../../images/LY-img/inswedding6.jpg",'uName':'Mine6','from':'../../images/LY-img/au1.jpg','uTitle':'面朝大海，春暖花开',},
				{'src': "../../images/LY-img/inswedding7.jpg",'uName':'Mine7','from':'../../images/LY-img/au2.jpg','uTitle':'晶莹水晶教堂婚礼',},
				{'src': "../../images/LY-img/inswedding8.jpg",'uName':'Mine8','from':'../../images/LY-img/au3.jpg','uTitle':'从你的全世界路过',},
				{'src': "../../images/LY-img/inswedding9.jpg",'uName':'Mine9','from':'../../images/LY-img/au4.jpg','uTitle':'文艺清新小白裙，轻礼服午夜巴塞罗那',},
				{'src': "../../images/LY-img/inswedding10.jpg",'uName':'Mine10','from':'../../images/LY-img/au5.jpg','uTitle':'俘获',},
				{'src': "../../images/LY-img/inswedding11.jpg",'uName':'Mine11','from':'../../images/LY-img/au6.jpg','uTitle':'MURREN Garden',},
				{'src': "../../images/LY-img/inswedding12.jpg",'uName':'Mine12','from':'../../images/LY-img/au2.jpg','uTitle':'雅韵',},
				{'src': "../../images/LY-img/inswedding13.jpg",'uName':'Mine13','from':'../../images/LY-img/au1.jpg','uTitle':'富良野鲜花系列婚纱照',},
				{'src': "../../images/LY-img/inswedding14.jpg",'uName':'Mine14','from':'../../images/LY-img/au2.jpg','uTitle':'你是我的小确幸',},
				{'src': "../../images/LY-img/inswedding15.jpg",'uName':'Mine15','from':'../../images/LY-img/au3.jpg','uTitle':'Infinity Times Infinity',},
				{'src': "../../images/LY-img/inswedding16.jpg",'uName':'Mine16','from':'../../images/LY-img/au4.jpg','uTitle':'收获的季节',},
				{'src': "../../images/LY-img/inswedding17.jpg",'uName':'Mine17','from':'../../images/LY-img/au5.jpg','uTitle':'STEFFI DREAM',},
				{'src': "../../images/LY-img/inswedding18.jpg",'uName':'Mine7','from':'../../images/LY-img/au6.jpg','uTitle':'MEET—遇',},
				{'src': "../../images/LY-img/inswedding19.jpg",'uName':'Mine7','from':'../../images/LY-img/au1.jpg','uTitle':'雨落晴好 | 三亚 | 糖果海外婚礼',},
				{'src': "../../images/LY-img/inswedding20.jpg",'uName':'Mine7','from':'../../images/LY-img/au2.jpg','uTitle':'六月的雨 | 三亚 | 糖果海外婚礼',},
				{'src': "../../images/LY-img/inswedding21.jpg",'uName':'Mine7','from':'../../images/LY-img/au3.jpg','uTitle':'婚礼人的婚礼',},
				{'src': "../../images/LY-img/inswedding22.jpg",'uName':'Mine7','from':'../../images/LY-img/au3.jpg','uTitle':'婚礼人的婚礼',},
				{'src': "../../images/LY-img/inswedding23.jpg",'uName':'Mine7','from':'../../images/LY-img/au3.jpg','uTitle':'婚礼人的婚礼',},
				{'src': "../../images/LY-img/inswedding24.jpg",'uName':'Mine7','from':'../../images/LY-img/au3.jpg','uTitle':'婚礼人的婚礼',},
				{'src': "../../images/LY-img/inswedding25.jpg",'uName':'Mine7','from':'../../images/LY-img/au3.jpg','uTitle':'婚礼人的婚礼',},
				{'src': "../../images/LY-img/inswedding26.jpg",'uName':'Mine7','from':'../../images/LY-img/au3.jpg','uTitle':'婚礼人的婚礼',},
				{'src': "../../images/LY-img/inswedding27.jpg",'uName':'Mine7','from':'../../images/LY-img/au3.jpg','uTitle':'婚礼人的婚礼',},
				{'src': "../../images/LY-img/inswedding28.jpg",'uName':'Mine7','from':'../../images/LY-img/au3.jpg','uTitle':'婚礼人的婚礼',},
				{'src': "../../images/LY-img/inswedding29.jpg",'uName':'Mine7','from':'../../images/LY-img/au3.jpg','uTitle':'婚礼人的婚礼',},
				{'src': "../../images/LY-img/inswedding30.jpg",'uName':'Mine7','from':'../../images/LY-img/au3.jpg','uTitle':'婚礼人的婚礼',},
			];
			//console.log(arr[0].src);
			var i = 0;//定义一个变量
			//动态生成图片标签，添加到Li里面
			function create(){//封装一个函数来创建
				//创建一个div标签
				var oDiv = document.createElement("div");
				var oP1 = document.createElement("p");
				var oP2 = document.createElement("p");
				var oImg = new Image();//新建一个图片对象
				//0%12 0/12=0 余0 1/12=0余1 2/12=0余2 12/12=1余0 13/12=1余1
				oImg.alt = '加载失败了~';
				oImg.src = arr[i%arr.length].src;//把数组里面图片的路径赋值给img


				// 瀑布流图片下的头像和文字信息
				oP1.innerHTML='<a href="#"><img src="'+ arr[i%arr.length].from+'" alt="加载失败了"/></a><a href="#">'+arr[i%arr.length].uTitle+'</a><span>'+Random(0,40)+'张图片</span>';

				// 瀑布流底部的三个操作
				oP2.innerHTML='<a href="#">收集</a><a href="#">喜欢</a><a href="#">分享</a>';
				oDiv.style.cssText = "opacity:0;transform:scale(0.5)";
				oDiv.appendChild(oImg);//把图片标签放到div里面

				oDiv.appendChild(oP1);
				oDiv.appendChild(oP2);
				//把div放到高度最小的li里面
				getList($("#myUpload ul li")).append(oDiv);
				oImg.onclick=GoMe;
				// oImg.setAttribute('dataVal','Me'+i);
				oImg.setAttribute('dataVal',i);
				(function(oImg){
					setTimeout(function(){
						oDiv.style.cssText = "opacity:1;transform:scale(1);";
					},10);
				})(oImg)//立马执行
			}




			//create();//调用函数
			//alert(arr.length);
			//封装一个函数来获取高度最小的li
			function getList(obj){
				var length = obj.length;//定义一个变量保存li的列数
				var h = Infinity;//每一列的高度都可以无限高
				var oLi;//定义一个变量来保存符合条件的li列返回出去
				for (var i=0;i<length ;i++ )
				{
					//循环获取每一列的高度来和无限高h作对比 若果小于h加给这个元素添加eq(i)  jq插件里面具体获取某一个元素
					if (obj.eq(i).height() < h)
					{
						h = obj.eq(i).height();
						oLi = obj.eq(i);
					}
				}
				return oLi;
			}
			//封装一个函数来循环动态添加多个图片
			var sum;
			function upload(){//自定的
				i++;
				if(i<12){
					for(;i<12;i++){
						create();
					}
				}else{
					sum = i;
					for (;i<sum+3 ;i++ )
					{
						create();
					}
				}
			}
			upload();

			//判断滚动条的高度，然后动态添加
			var scrollH = '';//文档高度
			var srollT = '';//滚动条高度
			var _height = $(window).height();//获取可视区域的高度
			 var numStart=0;
				window.onscroll=function(){
					myScroll(numStart)
				};

				function myScroll(num){
					$('#LY_insHeader').css({background:'rgba(255,255,255,.6)'});
					scrollH = document.body.scrollHeight||document.documentElement.scrollHeight;//文档高度
					srollT = document.body.scrollTop||document.documentElement.scrollTop;
					if(srollT<=0){
							$('#LY_insHeader').css({background:'#fff'});
					}
					//看得见的可视区域高度加上看不见的滚动条高度之和如果大于文档的高度的话就再添加图片
					if(_height + srollT + 50 > scrollH){  upload();  }
					// console.log($('ul li div').length);
					if($('ul li div').length>num+56) { window.onscroll=null;}
				};

				//浏览更多的button
			$('#getmore').click(function(){
				numStart+=40;
				myScroll(numStart);
				window.onscroll=function(){
					myScroll(numStart)
				};
			});





function GoMe(){
	console.log($(this).next().children('a').text());
	console.log($(this).parent().index());
	console.log($(this).attr('dataVal'));
      window.open('picturesBanner.html','_self');
       var obj={
       				'meSrc':$(this).attr('src'),
                    'test':$(this).next().children('a').text(),
                    'meId':$(this).attr('dataVal')
                };
        window.name=JSON.stringify(obj);
}
