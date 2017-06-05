//首部显示
$('.options li,.options dt').mouseover(function(){
			if(this.nodeName=="DT"){
				$(this).children("a").addClass("navDtcur")
			}
			$(this).children(".search ,.search-ul").show();
		})
$('.options li,.options dt').mouseout(function(){
			if(this.nodeName=="DT"){
				$(this).children("a").removeClass("navDtcur")
			}
			$(this).children(".search ,.search-ul").hide();
		})
//指示栏切换
$(".introduce li").click(function(){
	if($(this).hasClass("introducebg")){
		 				return;
		 			}
			var curPos=$(this).index();//得到当前位置
		 	var oldPos=$(".Js-slider .introducebg").index();//得到旧的位置 
		 	$(".introduce li").eq(curPos).addClass("introducebg");
		 	$(".introduce li").eq(oldPos).removeClass("introducebg");
})
//返回顶部
$('.img-tbg').click(function(){
			$("html,body").animate({scrollTop:0},200);
		})
		$(window).scroll(function(){
			var scrollTop=$("html").scrollTop()+$("body").scrollTop();//得到滚动位置
			var wiHeight=$(window).height();//网页可视高度
			var webHeight=$("html").outerHeight();//网页的实际高度
			
			console.log(scrollTop,wiHeight)
			if(scrollTop>wiHeight/2){
				
				$(".img-tbg").fadeIn();
			}
			else{
				$(".img-tbg").fadeOut();
			}
		})
