



		 //随机数
		    function Random(min,max){
		        return parseInt(Math.random()*((max+1)-min)+min);
		    }
		//创建一个数组来保存图片
		var arr = [//数组名字
				{'src': "../../images/LY-img/works0.jpg",'name':'Mine1','from':'../../images/LY-img/au1.jpg','utitle':'一场由梦而生的 | Cherry',},
				{'src': "../../images/LY-img/works1.jpg",'name':'Mine1','from':'../../images/LY-img/au2.jpg','utitle':'巴厘岛宝格丽Bvlgari水台婚礼',},
				{'src': "../../images/LY-img/works2.jpg",'name':'Mine2','from':'../../images/LY-img/au3.jpg','utitle':'甜美清新',},
				{'src': "../../images/LY-img/works3.jpg",'name':'Mine3','from':'../../images/LY-img/au4.jpg','utitle':'互',},
				{'src': "../../images/LY-img/works4.jpg",'name':'Mine4','from':'../../images/LY-img/au5.jpg','utitle':'爱笑的女孩',},
				{'src': "../../images/LY-img/works5.jpg",'name':'Mine5','from':'../../images/LY-img/au6.jpg','utitle':'两小无嫌猜',},
				{'src': "../../images/LY-img/works6.jpg",'name':'Mine6','from':'../../images/LY-img/au1.jpg','utitle':'面朝大海，春暖花开',},
				{'src': "../../images/LY-img/works7.jpg",'name':'Mine7','from':'../../images/LY-img/au2.jpg','utitle':'晶莹水晶教堂婚礼',},
				{'src': "../../images/LY-img/works8.jpg",'name':'Mine8','from':'../../images/LY-img/au3.jpg','utitle':'从你的全世界路过',},
				{'src': "../../images/LY-img/works9.jpg",'name':'Mine9','from':'../../images/LY-img/au4.jpg','utitle':'文艺清新小白裙，轻礼服午夜巴塞罗那',},
				{'src': "../../images/LY-img/works10.jpg",'name':'Mine10','from':'../../images/LY-img/au5.jpg','utitle':'俘获',},
				{'src': "../../images/LY-img/works11.jpg",'name':'Mine11','from':'../../images/LY-img/au6.jpg','utitle':'MURREN Garden',},
				{'src': "../../images/LY-img/works12.jpg",'name':'Mine12','from':'../../images/LY-img/au2.jpg','utitle':'雅韵',},
				{'src': "../../images/LY-img/works13.jpg",'name':'Mine13','from':'../../images/LY-img/au1.jpg','utitle':'富良野鲜花系列婚纱照',},
				{'src': "../../images/LY-img/works14.jpg",'name':'Mine14','from':'../../images/LY-img/au2.jpg','utitle':'你是我的小确幸',},
				{'src': "../../images/LY-img/works15.jpg",'name':'Mine15','from':'../../images/LY-img/au3.jpg','utitle':'Infinity Times Infinity',},
				{'src': "../../images/LY-img/works16.jpg",'name':'Mine16','from':'../../images/LY-img/au4.jpg','utitle':'收获的季节',},
				{'src': "../../images/LY-img/works17.jpg",'name':'Mine17','from':'../../images/LY-img/au5.jpg','utitle':'STEFFI DREAM',},
				{'src': "../../images/LY-img/works18.jpg",'name':'Mine7','from':'../../images/LY-img/au6.jpg','utitle':'MEET—遇',},
				{'src': "../../images/LY-img/works19.jpg",'name':'Mine7','from':'../../images/LY-img/au1.jpg','utitle':'雨落晴好 | 三亚 | 糖果海外婚礼',},
				{'src': "../../images/LY-img/works20.jpg",'name':'Mine7','from':'../../images/LY-img/au2.jpg','utitle':'六月的雨 | 三亚 | 糖果海外婚礼',},
				{'src': "../../images/LY-img/works21.jpg",'name':'Mine7','from':'../../images/LY-img/au3.jpg','utitle':'婚礼人的婚礼',},
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
				oP1.innerHTML='<a href="#"><img src="'+ arr[i%arr.length].from+'" alt="加载失败了"/></a><a href="#">'+arr[i%arr.length].name+'</a><span>'+Random(0,40)+'张图片</span>';

				// 瀑布流底部的三个操作
				oP2.innerHTML='<a href="#">收集</a><a href="#">喜欢</a><a href="#">分享</a>';
				oDiv.style.cssText = "opacity:0;transform:scale(0.5)";
				oDiv.appendChild(oImg);//把图片标签放到div里面
				oDiv.appendChild(oP1);
				oDiv.appendChild(oP2);
				//把div放到高度最小的li里面
				getList($("#myUpload ul li")).append(oDiv);
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



