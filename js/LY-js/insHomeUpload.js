
			//创建一个数组来保存图片
			var arr = [//数组名字
				{src : "../../images/LY-img/inspiration_home_ts1.jpg",name:'Mine1',msg:'AAAAAAAA'},
				{src : "../../images/LY-img/inspiration_home_ts1.jpg",name:'Mine1',msg:'AAAAAAAA'},
				{src : "../../images/LY-img/inspiration_home_ts2.jpg",name:'Mine2',msg:'BBB'},
				{src : "../../images/LY-img/inspiration_home_ts3.jpg",name:'Mine3',msg:'CCC'},
				{src : "../../images/LY-img/inspiration_home_ts4.jpg",name:'Mine4',msg:'EEE'},
				{src : "../../images/LY-img/inspiration_home_ts5.jpg",name:'Mine5',msg:'FFFFF'},
				{src : "../../images/LY-img/inspiration_home_ts6.jpg",name:'Mine6',msg:'KKKK'},
				{src : "../../images/LY-img/inspiration_home_ts7.jpg",name:'Mine7',msg:'UYYTTTTT'},
				{src : "../../images/LY-img/inspiration_home_ts8.jpg",name:'Mine8',msg:'JFHGFHGF'},
				{src : "../../images/LY-img/inspiration_home_ts9.jpg",name:'Mine9',msg:'FDGFD'},
				{src : "../../images/LY-img/inspiration_home_ts10.jpg",name:'Mine10',msg:'AAAAAAAA'},
				{src : "../../images/LY-img/inspiration_home_ts12.jpg",name:'Mine11',msg:'BBB'},
				{src : "../../images/LY-img/inspiration_home_ts11.jpg",name:'Mine12',msg:'CCC'},
				{src : "../../images/LY-img/inspiration_home_ts13.jpg",name:'Mine13',msg:'EEE'},
				{src : "../../images/LY-img/inspiration_home_ts14.jpg",name:'Mine14',msg:'FFFFF'},
				{src : "../../images/LY-img/inspiration_home_ts15.jpg",name:'Mine15',msg:'KKKK'},
				{src : "../../images/LY-img/inspiration_home_ts16.jpg",name:'Mine16',msg:'UYYTTTTT'},
				{src : "../../images/LY-img/inspiration_home_ts17.jpg",name:'Mine17',msg:'UYYTTTTT'},
				{src : "../../images/LY-img/inspiration_home_ts18.jpg",name:'Mine7',msg:'UYYTTTTT'},
				{src : "../../images/LY-img/inspiration_home_ts19.jpg",name:'Mine7',msg:'UYYTTTTT'},
				{src : "../../images/LY-img/inspiration_home_ts20.jpg",name:'Mine7',msg:'UYYTTTTT'},
				{src : "../../images/LY-img/inspiration_home_ts21.jpg",name:'Mine7',msg:'UYYTTTTT'}
			];
			//console.log(arr[0].src);
			var i = 0;//定义一个变量
			     var op=0,me;
			//动态生成图片标签，添加到Li里面
			function create(){//封装一个函数来创建
				//创建一个div标签
				var oDiv = document.createElement("div");
				var oH = document.createElement("h2");
				var oP = document.createElement("p");
				var oImg = new Image();//新建一个图片对象
				//0%12 0/12=0 余0 1/12=0余1 2/12=0余2 12/12=1余0 13/12=1余1
				oImg.alt = '加载失败了~';
				oImg.src = arr[i%arr.length].src;//把数组里面图片的路径赋值给img
				oH.innerHTML= arr[i%arr.length].name;
				oP.innerHTML= arr[i%arr.length].msg;
				oDiv.style.cssText = "opacity:0;transform:scale(0.5)";
				oDiv.appendChild(oImg);//把图片标签放到div里面
				oDiv.appendChild(oH);//把图片标签放到div里面
				oDiv.appendChild(oP);//把图片标签放到div里面
				//把div放到高度最小的li里面
				getList($("#insHome_myUpload ul li")).append(oDiv);
				(function(oImg){
					setTimeout(function(){
						oDiv.style.cssText = "opacity:1;transform:scale(1);";
					},100);
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
			// $(function(){
				var _height = $(window).height();//获取可视区域的高度
				window.onscroll=function(){
						$('#LY_insHeader').css({background:'rgba(255,255,255,.6)'});
					scrollH = document.body.scrollHeight||document.documentElement.scrollHeight;//文档高度
					srollT = document.body.scrollTop||document.documentElement.scrollTop;
					if(srollT<=0){
							$('#LY_insHeader').css({background:'#fff'});
					}
					//看得见的可视区域高度加上看不见的滚动条高度之和如果大于文档的高度的话就再添加图片
					if(_height + srollT + 50 > scrollH){  upload();  }
					// console.log($('ul li div').length);
					if($('ul li div').length>56) { window.onscroll=null;}
				};
			// });
