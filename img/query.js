//分页插件

(function($){
	var ms = {
		init:function(obj,args){
			return (function(){
				ms.fillHtml(obj,args);
				ms.bindEvent(obj,args);
			})();
		},
		//填充html
		fillHtml:function(obj,args){
			return (function(){
				obj.empty();
				//如果只有一页则不用显示
				if(args.pageCount <= 1)
					return;
					

				//上一页
				if(args.current > 1){
					obj.append('<li><a href="javascript:;" class="prev"><span>上一页</span></a></li>');
				}else{
					obj.remove('.prev');
					obj.append('<li><a class="prev"><span class="disabled">上一页</span></a></li>');
				}
				//中间页码
				if(args.current != 1 && args.current >= 4 && args.pageCount != 4){
					obj.append('<li><a href="javascript:;" class="tcdNumber"><span>'+1+'</span></a></li>');
				}
				if(args.current-2 > 2 && args.current <= args.pageCount && args.pageCount > 5){
					obj.append('<li><span>...</span></li>');
				}
				var start = args.current -2,end = args.current+2;
				if((start > 1 && args.current < 4)||args.current == 1){
					end++;
				}
				if(args.current > args.pageCount-4 && args.current >= args.pageCount){
					start--;
				}
				for (;start <= end; start++) {
					if(start <= args.pageCount && start >= 1){
						if(start != args.current){
							obj.append('<li><a href="javascript:;" class="tcdNumber"><span>'+ start +'</span></a></li>');
						}else{
							obj.append('<li><a class="current"><span>'+ start +'</span></a></li>');
						}
					}
				}
				if(args.current + 2 < args.pageCount - 1 && args.current >= 1 && args.pageCount > 5){
					obj.append('<li><span>...</span></li>');
				}
				if(args.current != args.pageCount && args.current < args.pageCount -2  && args.pageCount != 4){
					obj.append('<li><a href="javascript:;" class="tcdNumber"><span>'+args.pageCount+'</span></a></li>');
				}
				//下一页
				if(args.current < args.pageCount){
					obj.append('<li><a href="javascript:;" class="next"><span>下一页</span></a></li>');
				}else{
					obj.remove('.next');
					obj.append('<li><a><span class="disabled">下一页</span></a></li>');
				}
			})();
		},
		//绑定事件
		bindEvent:function(obj,args){
			return (function(){
				obj.on("click","a.tcdNumber",function(){
					var current = parseInt($(this).text());
					ms.fillHtml(obj,{"current":current,"pageCount":args.pageCount});
					if(typeof(args.backFn)=="function"){
						args.backFn(current);
					}
				});
				//上一页
				obj.on("click","a.prev",function(){
					var current = parseInt(obj.find("li a.current span").text());
					if(current <= 1)
						return false;
					ms.fillHtml(obj,{"current":current-1,"pageCount":args.pageCount});
					if(typeof(args.backFn)=="function"){
						args.backFn(current-1);
					}
				});
				//下一页
				obj.on("click","a.next",function(){
					var current = parseInt(obj.find("li a.current span").text());
					ms.fillHtml(obj,{"current":current+1,"pageCount":args.pageCount});
					if(typeof(args.backFn)=="function"){
						args.backFn(current+1);
					}
				});
			})();
		}
	}
	$.fn.createPage = function(options){
		var args = $.extend({
			pageCount : 10,
			current : 1,
			backFn : function(){}
		},options);
		ms.init(this,args);
	}
})(jQuery);
