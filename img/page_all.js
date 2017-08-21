$(function(){

	//用户收集，load more
	var page_works = 1;
	var page_teams = 1;
	var page_articles = 1;
	$(".js_more").click(function() {
		var type =  $(this).data("type");
		if(type === 'work')
			ajaxMorePage($(this).data("href"), $(this).data("type"), page_works++);
		else if(type === 'team')
			ajaxMorePage($(this).data("href"), $(this).data("type"), page_teams++);
		else if(type === 'article')
			ajaxMorePage($(this).data("href"), $(this).data("type"), page_articles++);
		return false;
	});

	var user_collect_page = 1;
	$(".user_collect_more").click(function() {
		var type =  $(this).data("type");
		if(type === 'work')
			ajaxUserCollMorePage($(this).data("href"), $(this).data("type"), page_works++);
		else if(type === 'team')
			ajaxUserCollMorePage($(this).data("href"), $(this).data("type"), page_teams++);
		else if(type === 'article')
			ajaxUserCollMorePage($(this).data("href"), $(this).data("type"), page_articles++);
		return false;
	});


	/*右侧right_bar*/
	scrollChange();
    $(window).scroll(function(e){
        scrollChange(e)
    });
	function scrollChange(){
		var _sTop = $(window).scrollTop();
		if( _sTop < 300 ){
			$("#js_bar_gotop").hide();
		} else {
			$("#js_bar_gotop").show();
		}
		
		var _sPage = $(document).height()-(_sTop+$.windowHeight());
		if( $("#js_loading").length>0&&_sPage<300 ){ //如果这个页面有分页，并且已经拉到页面底部
			//console.info("ajaxPage正式启动~");
			//$("#js_page_loading").show();
			if(page<20){
				ajaxPage("/user/login?page=",page);
			} else {
				$("#js_loading").hide();
				$("#js_more_index").css("display","inline-block");
			}
		}
	}

    $("#js_bar_gotop").click(function(){
        if($.browser.safari) {
            $("body").animate({
                scrollTop:0
            },150);
        } else{
            $("html").animate({
                scrollTop:0
            },150);
        }
        return false;
    });
	
	$("#js_bar_tel, #js_bar_app, #js_bar_weixin").hover(function(e) {
		$("#js_right_bar span").eq($(this).index()).show();;
	},function(){
		$("#js_right_bar span").eq($(this).index()).hide();;
	});
	$("#js_right_bar span").hover(function(e) {
		$(this).show();;
	},function(){
		$(this).hide();;
	});
	


	$("img.pic").each(function(index, element) {
		$(this).error(function(){
			$(this).attr('src',"/img/default.png");
		})
	});
	$("img.face, img.sj_logo").each(function(index, element) {
		$(this).error(function(){
			$(this).attr('src',"/img/default_user.png");
		})
	});

	/*top 和 search*/
	$("#js_search_type, #js_search_type_chose").hover(function(e) {
		$("#js_search_type_chose").show();
	},function(){
		$("#js_search_type_chose").hide();
	});
	
	$("#js_search_type_chose a").click(function(e) {
		$("#js_search_type").text($(this).text());
		$("#js_search_type").text($(this).text());
		$("#js_search_type_chose").hide();
		return false;
	});
	
	$("#js_topsearch_input").keydown(function(e) {
        if (e.which == 13) {
			var type = $("#js_search_type").text();
			var $form = $("#js_topsearch_form");
			if(type == "商家")
				$form.attr("action", "/partners/filter/search/lists");
			else
				$form.attr("action", "/posts/filter/search");

			$form.submit();
        }
    });
	
	$("#js_topsearch_form").submit(function(e) {
		/**/
		if( $.trim($("#js_topsearch_input").val())==""){
			console.info($(this));
			//alert("关键词不能为空");
			return false;
		}
		
	});
	
	/**/
	$("._app").click(function(e) {
		$("#js_bindweixin_bg, #js_bindweixin").show();
		return false;
	});
	
	$("#js_bindweixin_bg, #js_closed_bindweixin").click(function(e) {
		$("#js_bindweixin_bg, #js_bindweixin").hide();
		return false;
	});
	
	
	/*加载更多评论*/
	$("#js_more_comment_click").click(function(e) {
		$(this).html('<img src="/img/ajax-loader.gif">给力加载中..');

		var type = $("#comments_type").val();
		var target_id = $("#comments_target_id").val();
		if(!type || !target_id)
			return false;

		var url;
		if(type == 'work')
			url = '/post/'+ target_id +'/comments';
		else if(type == 'vendor')
			url = '/v/'+ target_id +'/comments';
		else if(type == 'article')
			url = '/article/'+ target_id +'/comments';
		else
			return false;
		ajaxCommentPage(url, theCommentPage);
		return false;
	});
	
	
	/*login验证及提交*/
	/*登录*/
	$("#js_loginbtn").live("click",function(){
		if(!!$.trim($("#js_login_phone").val()).match(/^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/) == false) {
			getLoginError("请填写正确的手机号码！");
		} else if( $.trim($("#js_login_psd").val())=="" ){
			getLoginError("密码不能为空！");
		} else {
			var params = {
				user : $.trim($("#js_login_phone").val()),
				password :  $.trim($("#js_login_psd").val())
			};
			$.ajax({
				url : '/user/login',
				data : params,
				type : 'post',
				jsonp : "callback",
				success : function(data, textStatus){
					//登陆成功
					if(data.status === 0){
						var href = data.re_url;
						if(self == parent){ //刷新本页面
							window.location.href = href;
						} else { //刷新父页面
							parent.window.location.href = href;
						}
					}
					//登录出错
					else {
						getLoginError(data.message);
					}
				},
				fail : function(XMLHttpRequest, textStatus, errorThrown){
					console.error(textStatus);
				}
			});
		}
		return false;
	});
	
	/*注册*/
	$("#js_regbtn").live("click",function(){
		if(!!$.trim($("#js_reg_phone").val()).match(/^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/) == false) {
			getLoginError("请填写正确的手机号码！");
		} else if( $.trim($("#js_reg_cord").val())=="" ){
			getLoginError("验证码不能为空！");
		} else if( $.trim($("#js_reg_psd").val())=="" ){
			getLoginError("密码不能为空！");
		} else {
			//正式提交注册
			var params = {
				user : $.trim($("#js_reg_phone").val()),
				code : $.trim($("#js_reg_cord").val()),
				password : $.trim($("#js_reg_psd").val())
			};
			$.post('/user/regist', params, function(data){
				if(data.status == 0){
					//dialogLogin(params.phone);
					var href = data.re_url;
					if(self == parent){ //刷新本页面
						window.location.href = href;
					} else { //刷新父页面
						parent.window.location.href = href;
					}
				} else {
					getLoginError(data.message);
				}
			});
		}
		return false;
	});

	//发送验证码锁
	send_reg_code_done = true;
	/*注册-发送验证码*/
	$("#js_send_regcord").live("click",function(){
		if(!!$.trim($("#js_reg_phone").val()).match(/^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/) == false ) {
			getLoginError("请填写正确的手机号码！");
		} else if($(this).hasClass("code_none")){
			return false;
		} else {
			if(!send_reg_code_done)
				return false;

			send_reg_code_done = false;

			//发送验证码
			$.ajax({
				url: "/user/reg_valid_code",
				type: 'GET',
				dataType: 'json',
				//dataType: 'html',
				data: {
					phone: $("#js_reg_phone").val()
				},
				success: function (j) {
					console.info(j);
					if (1) {
						$("#js_send_regcord").addClass("code_none").html("<b id='js_times'>60</b> 秒后重新获取");
						smscodeTime($("#js_send_regcord"));
					} else {
						alert(j.msg);
					}
				},
				complete: function () {
					send_reg_code_done = true;
				}
			});
		}
		return false;
	});

	/*作品询价*/
	$("#js_feiyong_btn").live("click",function(){
		if(!!$.trim($("#js_feiyong_phone").val()).match(/^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/) == false) {
			getLoginError("请填写正确的手机号码！");
		} else if( $.trim($("#js_feiyong_phone_cord").val())=="" ){
			getLoginError("验证码不能为空！");
		} else if( $.trim($("#js_feiyong_name").val())=="" ){
			getLoginError("联系人不能为空！");
		} else {
			//正式提交注册
			var params = {
				username : $.trim($("#js_feiyong_name").val()),
				phone : $.trim($("#js_feiyong_phone").val()),
				code : $.trim($("#js_feiyong_phone_cord").val()),
				wid : $.trim($("#js_feiyong_wid").val()),
				tid : $.trim($("#js_feiyong_tid").val()),
				wname : $.trim($("#js_feiyong_wname").val())
			};
			if($("#js_feiyong_uid").val())
				params.uid = $.trim($("#js_feiyong_uid").val());

			$.ajax({
				url : "/user/queryprice",
				type : "POST",
				dataType: "json",
				data : params,
				success: function(data){
					if(typeof data === "string")
						data = JSON.parse(data);
					if(data.status !== 0){
						getLoginError(data.message);
					} else {
						closedDialog();
						alert('已向商家发送咨询信息，商家会尽快回复！');
					}
				}
			});
		}
		return false;
	});
	/*作品询价-发送验证码*/
	$("#js_send_feiyong_phone").live("click",function(){
		if(!!$.trim($("#js_feiyong_phone").val()).match(/^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/) == false ) {
			getLoginError("请填写正确的手机号码！");
		} else if($(this).hasClass("code_none")){
			return false;
		} else {
			//发送验证码
			$.ajax({
				url: "/user/query_price_valid_code",
				type: 'GET',
				dataType: 'json',
				//dataType: 'html',
				data: {
					phone: $("#js_feiyong_phone").val()
				},
				success: function (j) {
					console.info(j);
					if (1) {
						$("#js_send_feiyong_phone").addClass("code_none").html("<b id='js_times'>60</b> 秒后重新获取");
						smscodeTime($("#js_send_feiyong_phone"));
					} else {
						alert(j.msg);
					}
				},
				complete: function () {
				}
			});
		}
		return false;
	});
	
	

	
	/*找回密码*/
	$("#js_forgetbtn").live("click",function(){
		if(!!$.trim($("#js_forget_phone").val()).match(/^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/) == false) {
			getLoginError("请填写正确的手机号码！");
		} else if( $.trim($("#js_forget_cord").val())=="" ){
			getLoginError("验证码不能为空！");
		} else if( $.trim($("#js_forget_psd").val())=="" ){
			getLoginError("密码不能为空！");
		} else {
			var params = {
				phone : $.trim($("#js_forget_phone").val()),
				password : $.trim($("#js_forget_psd").val()),
				code : $.trim($("#js_forget_cord").val())
			};
			$.post('/user/forgetpwd', params, function(data){
				if(data.status === 0){
					window.location.href = '/user/login';
				} else {
					getLoginError(data.message);
				}
			});
		}
		return false;
	});

	send_forget_code_done = true;
	/*找回密码-发送验证码*/
	$("#js_send_forgetcord").live("click",function(){
		if(!!$.trim($("#js_forget_phone").val()).match(/^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/) == false ) {
			getLoginError("请填写正确的手机号码！");
		} else if($(this).hasClass("code_none")){
			return false;
		} else {
			if(!send_forget_code_done)
				return false;
			send_forget_code_done = false;

			//发送验证码
			$.ajax({
				url: "/user/pwd_valid_code",
				type: 'GET',
				//dataType: 'json',
				dataType: 'html',
				data: {
					phone: $("#js_forget_phone").val()
				},
				success: function (j) {
					console.info(j);
					if (1) {
						$("#js_send_forgetcord").addClass("code_none").html("<b id='js_times'>60</b> 秒后重新获取");
						smscodeTime($("#js_send_forgetcord"));
					} else {
						alert(j.msg);
					}
				},
				complete: function () {
					send_forget_code_done = true;
				}
			});
		}
		return false;
	});

	/*绑定手机*/
	$("#js_mysetting_phone_btn").live("click",function(){
		if(!!$.trim($("#js_mysetting_phone").val()).match(/^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/) == false) {
			getLoginError("请填写正确的手机号码！");
		} else if( $.trim($("#js_mysetting_phone_cord").val())=="" ){
			getLoginError("验证码不能为空！");
		} else if( $.trim($("#js_mysetting_phone_psd").val())=="" ){
			getLoginError("密码不能为空！");
		}else {
			var phone = $.trim($("#js_mysetting_phone").val());
			var code = $.trim($("#js_mysetting_phone_cord").val());
			var passwd = $.trim($("#js_mysetting_phone_psd").val());
			var data = {
				phone : phone,
				code : code,
				passwd : passwd
			}
			$.ajax({
				url: "/user/bind",
				type : "POST",
				jsonp: "callback",
				data : data,
				success : function(data){
					if(data.status === 0){
						window.location.href = '/';
					} else {
						getLoginError(data.message);
					}
				}
			});
			//$.get("/user/bind?phone="+phone+"&code="+code, function(data, status){
			//	if(data.status === 0){
			//		window.location.href = '/';
			//	} else {
			//		getLoginError(data.message);
			//	}
			//});
		}
		return false;
	});

	send_bind_phone_code_done = true;
	/*绑定手机-发送验证码*/
	$("#js_send_mysetting_phone").live("click",function(){
		if(!!$.trim($("#js_mysetting_phone").val()).match(/^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/) == false ) {
			getLoginError("请填写正确的手机号码！");
		} else if($(this).hasClass("code_none")){
			return false;
		} else {
			if(!send_bind_phone_code_done)
				return false;
			send_bind_phone_code_done = false;
			//发送验证码
			$.ajax({
				url: "/user/bindphone_valid_code",
				type: 'GET',
				//dataType: 'json',
				dataType: 'html',
				data: {
					uid : $.trim($("#bindphone_userid").val()),
					phone: $("#js_mysetting_phone").val()
				},
				success: function (j) {
					console.info(j);
					if (1) {
						$("#js_send_mysetting_phone").addClass("code_none").html("<b id='js_times'>60</b> 秒后重新获取");
						smscodeTime($("#js_send_mysetting_phone"));
					} else {
						alert(j.msg);
					}
				},
				complete: function () {
					send_bind_phone_code_done = true;
				}
			});
		}
		return false;
	});
	/*发送短信验证码60秒计时*/
	function smscodeTime(obj) {
		//每1秒执，并命名计时器名称为timeA 
		$('body').everyTime('1s', 'timeA', function () {
			if (parseInt($("#js_times").text()) == 0) {
				$('body').stopTime('timeA');
				obj.removeClass("code_none").html("重新发送验证码");
				return;
			} else {
				$("#js_times").text(parseInt($("#js_times").text()) - 1);
			}
		});
	}

	/*修改密码*/
	$("#js_mysetting_password_btn").live("click",function(){
		if( $.trim($("#js_old_psd").val())=="" ){
			getLoginError("旧密码不能为空！");
		} else if( $.trim($("#js_new_psd").val())=="" ){
			getLoginError("新密码不能为空！");
		} else {
			//正式提交修改密码
			$.ajax({
				url: "/user/modifypwd",
				type: 'POST',
				dataType: 'html',
				data: {
					uid : $.trim($("#mod_pwd_userid").val()),
					oldpassword: $.trim($("#js_old_psd").val()),
					newpassword: $.trim($("#js_new_psd").val())
				},
				success: function (data) {
					var resp = JSON.parse(data);
					if(resp.status == "0") {
						location.reload();
					} else{
						getLoginError(resp.message);
					}
				},
				complete: function () {
				}
			});
		}
		return false;
	});

	$("#js_login_form input").live("focusin",function(){
		console.info("focusin");
		CancelgetLoginError();
	});

	var coll_lock = 0;
	$("a.collection").live("click",function(){
		if(coll_lock == 1){
			return false;
		}

		coll_lock = 1;
		var obj = $(this);
		var work_id = obj.data("id");
		var type = obj.data('type');
		var pin_url = '', unpin_url;

		if(type == 'work'){
			pin_url = "/posts/"+work_id+"/pin";
			unpin_url = "/posts/"+work_id+"/unpin";
		} else if(type == 'vendor'){
			pin_url = "/partners/"+work_id+"/pin";
			unpin_url = "/partners/"+work_id+"/unpin";
		} else if(type =='article'){
			pin_url = "/articles/"+work_id+"/pin";
			unpin_url = "/articles/"+work_id+"/unpin";
		} else {
			coll_lock = 0;
			return false;
		}
		if(obj.hasClass("collection_current")){ //取消收藏
			$.ajax({
				url: unpin_url,
				type: 'GET',
				dataType: 'html',
				success: function (data) {
					if(typeof data == 'string')
						data = JSON.parse(data);
					if(data.status == 0){
						obj.removeClass("collection_current").find("b").text("");
						var val = parseInt(obj.find('span').text());
						val = (val-1)>0 ? val-1 : 0;
						obj.find('span').text(val);
					}
					//用户未登陆，不能收藏或者取消收藏
					else if(data.status === 4){
						showLogin('/user/login');
					}
					else{
						alerts(data.message,1500);
					}
				},
				complete: function () {
					coll_lock = 0;
				}
			});			
		} else { //收藏
			$.ajax({
				url: pin_url,
				type: 'GET',
				dataType: 'html',
				success: function (data) {
					if(typeof data == 'string')
						data = JSON.parse(data);
					if(data.status == 0){
						obj.addClass("collection_current").find("b").text("已");
						var val = parseInt(obj.find('span').text());
						obj.find('span').text(val+1);
					}
					//用户未登陆，不能收藏或者取消收藏
					else if(data.status === 4){
						showLogin('/user/login');
					}
					else {
						alerts(data.message,1500);
					}
				},
				complete: function () {
					coll_lock = 0;
				}
			});			
		}
		return false;
	});
	
	
});


var ajaxPageLock = 1; //分页锁
//	var page = 1;
function ajaxMorePage(url, type, page){
	if (ajaxPageLock != 1) {
		//console.info('请慢一点，服务器很慢的！[锁]');
		return false;
	}
	ajaxPageLock = 0;

	var appended_obj ;
	if(type === 'work')
		appended_obj = $(".works ul");
	else if(type === 'team')
		appended_obj = $(".teams ul");
	else if(type === 'article')
		appended_obj = $(".articles ul");

	$.ajax({
		url : url,
		data : {page : page, uid: $("#userid").val()},
		type : 'GET',
		jsonp : "callback",
		success : function(data){
			if(data.status==0 && data.data.length>0){
//					page++;
				var text = '';
				for(var i= 0; i<data.data.length; i++) {
//						console.info(type);
					var post = data.data[i];
					if(type === 'work') {
						text += '<li><a href="/post/'+ post._id +'"><img src="'+ post.cover.image_url +'!720x440" class="pic"></a>';
						text += '<p class="title">';
						text += '<a href="/post/'+post._id+'">'+post.title+'</a>';
						text += '<span><i></i></span></p><p class="info">';
						text += '<a href="/v/'+post.user._id+'">'+post.user.name+'</a>';
						text += '<span class="place_span">'+post.user.location+'</span></p></li>';
					} else if(type === 'team') {
						text += '<li><a href="/v/'+post._id+'"><img src="'+post.cover.image_url+'!720x440" class="pic"></a>';
						text +='<p class="info"><a href="/v/'+post._id+'">'+post.name+'</a>';
						text += '<span class="place_span"'+post.location.name+'</span></p></li>';
					} else if(type === 'article') {
						text += '<li><a href="/article/'+post._id+'"><img src="'+post.cover.image_url+'!720x440" class="pic"></a>';
						text += '<p class="title"><a href="/article/'+post._id+'">'+post.title+'</a>';
						text += '<span><i></i></span></p>';
						text += '<p class="info"><a href="/v/'+post.writer._id+'">'+post.writer.name+'</a>';
						text += '<span class="place_span">'+post.category+'文章</span></p></li>';
					}
				}
				appended_obj.append($(text));
			} else if(data.data.length==0){
				if(type === 'work')
					$(".works ._waterfall_footer").html('<span>没有更多了</span>');
				else if(type === 'team')
					$(".teams ._waterfall_footer").html('<span>没有更多了</span>');
				else if(type === 'article')
					$(".articles ._waterfall_footer").html('<span>没有更多了</span>');
			} else {
				//console.info("服务器错误");
			}
		},
		complete: function () {
			ajaxPageLock = 1;
		}
	});
}

var ajaxUserCollPageLock = 1; //分页锁
//	var page = 1;
function ajaxUserCollMorePage(url, type, page){
	if (ajaxUserCollPageLock != 1) {
		//console.info('请慢一点，服务器很慢的！[锁]');
		return false;
	}
	ajaxUserCollPageLock = 0;

	var appended_obj ;
	if(type === 'work')
		appended_obj = $(".works ul");
	else if(type === 'team')
		appended_obj = $(".teams ul");
	else if(type === 'article')
		appended_obj = $(".articles ul");

	$.ajax({
		url : url,
		data : {page : page, uid: $("#userid").val()},
		type : 'GET',
		jsonp : "callback",
		success : function(data){
			if(data.status==0 && data.data.length>0){
//					page++;
				var text = '';
				for(var i= 0; i<data.data.length; i++) {
//						console.info(type);
					var post = data.data[i];
					if(type === 'work') {
						text += '<li><a href="/post/'+ post._id +'" class="like_pic"><img src="'+ post.cover.image_url +'!720x440" class="pic"></a>';
						text += '<a href="/post/'+post._id+'" class="like_title">'+post.title+'</a>';
						text += '<span><a href="#" class="unpin" data-href="/posts/'+post._id+'/unpin" class="like_del">取消收藏</a></span></li>';
					} else if(type === 'team') {
						text += '<li><a href="/v/'+post._id+'"  class="like_pic"><img src="'+post.cover.image_url+'!720x440" class="pic"></a>';
						text += '<a href="/v/'+post._id+'" class="like_title">'+post.name+'</a>';
						text += '<span>'+post.location.name+'&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" class="unpin" data-href="/partners/'+post._id+'/unpin" class="like_del">取消关注</a></span></li>';
					} else if(type === 'article') {
						text += '<li><a href="/article/'+post._id+'" class="like_pic"><img src="'+post.cover.image_url+'!720x440"></a>';
						text += '<a href="/article/'+post._id+'" class="like_title">'+post.title+'</a>';
						text += '<span><a href="#" class="unpin" data-href="/articles/'+post._id+'/unpin" class="like_del">取消收藏</a></span></li>';
					}
				}
				appended_obj.append($(text));
			} else if(data.data.length==0){
				if(type === 'work')
					$(".works ._waterfall_footer").html('<span>没有更多了</span>');
				else if(type === 'team')
					$(".teams ._waterfall_footer").html('<span>没有更多了</span>');
				else if(type === 'article')
					$(".articles ._waterfall_footer").html('<span>没有更多了</span>');
			} else {
				//console.info("服务器错误");
			}
		},
		complete: function () {
			ajaxUserCollPageLock = 1;
		}
	});
}

function getLoginError(txt){
	$("#js_error_txt").text(txt);
}
function CancelgetLoginError(txt){
	$("#js_error_txt").text("");
}

function changeProv(){
	var p_id = parseInt($("#province").val());
	if(!p_id)
		return true;
	$.get('/user/cities?pid='+p_id, function(data, status){
		if(status == "success"){
			$("#city").empty().append("<option>市/地区</option>");
			for(var i=0; i<data.length; i++)
				$("#city").append("<option value="+data[i].id+">"+data[i].city+"</option>")
		}
	})
}

function submit_info(){
	$("#location").val($("#province option:selected").text()
		+ '-' + $("#city option:selected").text());
	$("#my_info_form").submit();
}


function tougao(){
	window.location.href = admin_site_url + '/posts/add/start';
    /*$.get('/user/tougao', function(data){
        if(data.status === 0){
			window.location.href = admin_site_url + '/posts/add/start';
            //window.location.href = "http://admin.likewed.com/posts/add/start";
        }
        //未登陆
        else if(data.status === 4){
			dialogLogin(passport_site_url + '/phone/login');
            //dialogLogin("http://passport.likewed.com/phone/login");
        }
        //登陆，但不是商家
        else if(data.status === 2){
            dialogTougao();
        } else {
            return false;
        }
    });*/
}

function logout(){
	var href = "/user/logout";
	var loc = window.location.pathname;

	$.get(href, function(data){
		if(data.status == 0){
			if(/^\/user([.*])*/.test(loc))
				window.location.href = '/';
			else{
				location.reload();
			}
		}
		else
			alert('退出失败，请重试！');
	});
}

function showMap(lat, lng, name, address){
	dialogShowMap();

	lat = parseFloat(lat); lng = parseFloat(lng);
	var map = new AMap.Map('container',{
		zoom: 15,
		center: [lng,lat]
	});

	var marker = new AMap.Marker({
		position: [lng, lat],
		map:map
	});

	var infowindow = new AMap.InfoWindow({
		content: '<h1>'+ name +'</h1><div>'+ address + '</div>',
		offset: new AMap.Pixel(0, -30),
		size:new AMap.Size(230,0)
	});

	infowindow.open(map,new AMap.LngLat(lng, lat));

	var clickHandle = AMap.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker.getPosition())
	})
}


/*ajax分页*/
var ajaxCommentPageLock = 1; //分页锁
var theCommentPage=1; //页数
function ajaxCommentPage(url,page) {
	console.info(url);
	console.info(page);
	if (ajaxCommentPageLock != 1) {
        return false;
    }
    ajaxCommentPageLock = 0;

    $.ajax({
        url: url + '?page='+theCommentPage,
        type: 'GET',
        dataType: 'html',
        success: function(j) {
			if(typeof j === 'string') {
				try {
					j = JSON.parse(j);
				} catch(e) {
					console.info("服务器异常了！");
					console.info(j.message);
					return ;
				}
			}
			if(j.status==0){
				theCommentPage++;
				var html = '';

				for(var i=0; i< j.data.length; i++) {
					var com = j.data[i];
					html += '<li><img class="pic" src="' +com.user.logo_url+ '!180x180">' +
						'<p class="p1">' + com.user.name+ '<span>发布于' +com.create_at+ '</span></p>' +
						'<p class="p2">' +com.content.text+ '</p></li>';
				}
				if(html==""){
					$("#js_more_comment_click").html("&nbsp;");
				} else {
					$(html).appendTo("#js_ajaxcommentpage_box");
					$("#js_more_comment_click").html("<font>查看更多</font>");
				}
			} else {
				console.info("服务器异常了！");
				console.info(j.message);
			}
        },
        complete: function() {
            ajaxCommentPageLock = 1;
        }
    });
}


