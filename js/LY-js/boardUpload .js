

// ==============================    这是灵感板的瀑布流


		 //随机数
		    function Random(min,max){
		        return parseInt(Math.random()*((max+1)-min)+min);
		    }
		// //创建一个数组来保存图片
		var arr = [//数组名字
				{'src': [ '../../images/LY-img/BC_1_pic (1).jpg','../../images/LY-img/BC_1_pic (2).jpg',
							'../../images/LY-img/BC_1_pic (3).jpg','../../images/LY-img/BC_1_pic (4).jpg',
							'../../images/LY-img/BC_1_pic (5).jpg' ],

				'name':'Mine1',
				'from':'../../images/LY-img/au1.jpg',
				'utitle':'一场由梦而生的 | Cherry',},
				{'src':[ '../../images/LY-img/BC_2_pic (1).jpg','../../images/LY-img/BC_2_pic (2).jpg',
							'../../images/LY-img/BC_2_pic (3).jpg','../../images/LY-img/BC_2_pic (4).jpg',
							'../../images/LY-img/BC_2_pic (5).jpg' ],

				'name':'Mine1',
				'from':'../../images/LY-img/au2.jpg',
				'utitle':'巴厘岛宝格丽Bvlgari水台婚礼',},
				{'src': [ '../../images/LY-img/BC_3_pic (1).jpg','../../images/LY-img/BC_3_pic (2).jpg',
							'../../images/LY-img/BC_3_pic (3).jpg','../../images/LY-img/BC_3_pic (4).jpg',
							'../../images/LY-img/BC_3_pic (5).jpg' ],

				'name':'Mine2',
				'from':'../../images/LY-img/au3.jpg',
				'utitle':'甜美清新',},
				{'src': [ '../../images/LY-img/BC_4_pic (1).jpg','../../images/LY-img/BC_4_pic (2).jpg',
							'../../images/LY-img/BC_4_pic (3).jpg','../../images/LY-img/BC_4_pic (4).jpg',
							'../../images/LY-img/BC_4_pic (5).jpg' ],

				'name':'Mine3',
				'from':'../../images/LY-img/au4.jpg',
				'utitle':'互',},
				{'src': [ '../../images/LY-img/BC_5_pic (1).jpg','../../images/LY-img/BC_5_pic (2).jpg',
							'../../images/LY-img/BC_5_pic (3).jpg','../../images/LY-img/BC_5_pic (4).jpg',
							'../../images/LY-img/BC_5_pic (5).jpg' ],

				'name':'Mine4',
				'from':'../../images/LY-img/au5.jpg',
				'utitle':'爱笑的女孩',},
				{'src':[ '../../images/LY-img/BC_6_pic (1).jpg','../../images/LY-img/BC_6_pic (2).jpg',
							'../../images/LY-img/BC_6_pic (3).jpg','../../images/LY-img/BC_6_pic (4).jpg',
							'../../images/LY-img/BC_6_pic (5).jpg' ],

				'name':'Mine5',
				'from':'../../images/LY-img/au6.jpg',
				'utitle':'两小无嫌猜',},
				{'src': [ '../../images/LY-img/BC_7_pic (1).jpg','../../images/LY-img/BC_7_pic (2).jpg',
							'../../images/LY-img/BC_7_pic (3).jpg','../../images/LY-img/BC_7_pic (4).jpg',
							'../../images/LY-img/BC_7_pic (5).jpg' ],

				'name':'Mine6',
				'from':'../../images/LY-img/au1.jpg',
				'utitle':'面朝大海，春暖花开',},
				{'src': [ '../../images/LY-img/BC_8_pic (1).jpg','../../images/LY-img/BC_8_pic (2).jpg',
							'../../images/LY-img/BC_8_pic (3).jpg','../../images/LY-img/BC_8_pic (4).jpg',
							'../../images/LY-img/BC_8_pic (5).jpg' ],

				'name':'Mine7',
				'from':'../../images/LY-img/au2.jpg',
				'utitle':'晶莹水晶教堂婚礼',},
				{'src': [ '../../images/LY-img/BC_9_pic (1).jpg','../../images/LY-img/BC_9_pic (2).jpg',
							'../../images/LY-img/BC_9_pic (3).jpg','../../images/LY-img/BC_9_pic (4).jpg',
							'../../images/LY-img/BC_9_pic (5).jpg' ],

				'name':'Mine8',
				'from':'../../images/LY-img/au3.jpg',
				'utitle':'从你的全世界路过',},
				{'src': [ '../../images/LY-img/BC_10_pic (1).jpg','../../images/LY-img/BC_10_pic (2).jpg',
							'../../images/LY-img/BC_10_pic (3).jpg','../../images/LY-img/BC_10_pic (4).jpg',
							'../../images/LY-img/BC_10_pic (5).jpg' ],

				'name':'Mine9',
				'from':'../../images/LY-img/au4.jpg',
				'utitle':'文艺清新小白裙，轻礼服午夜巴塞罗那',},
				{'src': [ '../../images/LY-img/BC_11_pic (1).jpg','../../images/LY-img/BC_11_pic (2).jpg',
							'../../images/LY-img/BC_11_pic (3).jpg','../../images/LY-img/BC_11_pic (4).jpg',
							'../../images/LY-img/BC_11_pic (5).jpg' ],

				'name':'Mine9',
				'from':'../../images/LY-img/au4.jpg',
				'utitle':'文艺清新小白裙，轻礼服午夜巴塞罗那',},
				{'src': [ '../../images/LY-img/BC_12_pic (1).jpg','../../images/LY-img/BC_12_pic (2).jpg',
							'../../images/LY-img/BC_12_pic (3).jpg','../../images/LY-img/BC_12_pic (4).jpg',
							'../../images/LY-img/BC_12_pic (5).jpg' ],

				'name':'Mine9',
				'from':'../../images/LY-img/au4.jpg',
				'utitle':'文艺清新小白裙，轻礼服午夜巴塞罗那',},
			];


			function create(){
					for(var s=0;s<arr.length;s++){
							$('#myBoard ul li').html();
							// var picSRC = arr[s]['src'];
							// 	console.log(picSRC);
							// 	for(var q=0;q<picSRC.length;q++){
							// 			var me=picSRC[q];
							// 			console.log(me);

							// }
					}

				// oImg.src = arr[i%arr.length].src;//把数组里面图片的路径赋值给img

				// 图片下的头像和文字信息
				oP1.innerHTML='<a href="#"><img src="'+ arr[i%arr.length].from+'" alt="加载失败了"/></a><a href="#">'+arr[i%arr.length].name+'</a><span>'+Random(0,40)+'张图片</span>';
				oP2.innerHTML='<a href="#">收集</a><a href="#">喜欢</a><a href="#">分享</a>';
				}


			upload();










