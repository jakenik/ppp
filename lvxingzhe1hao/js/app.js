(function(){//img自适应
	var width=$(".head-bg").outerWidth();
	var imgwidth2=$(".aobout-head-bg-img").outerWidth();
	var windowwidth=$(window).width();
	var height=$(window).height();
	function size(){
		var winwidth1=$(window).width();
		var num1=-(width-winwidth1)/2.5;
		$(".head").css({height:height})
		$(".head-bg").css({transform:"translateX("+num1+"px)",height:height})
		$(".bussiness-li img").css({transform:"translateX("+num1+"px)",height:height})
		//关于我们的背景变化
		$(".about-kong").css({height:height});
		if(windowwidth<1025 && windowwidth>414){
			var num2=-(imgwidth2-winwidth1)
			$(".aobout-head-bg-img").css({transform:"translateX("+num2+"px)",height:height})
		}
		else{
		var num2=-(imgwidth2-winwidth1)/2
		}
		$(".aobout-head-bg-img").css({transform:"translateX("+num2+"px)",height:height})
		//设置第二块固定视图的高度
		$(".jsheight").css({height:height})
		//设置视频
		$(".fixed-video-main").css({height:height*0.6,width:windowwidth*0.8});
		var videowidth=$(".fixed-video-main").width();
		var videoheight=$(".fixed-video-main").height();
		$(".fixed-video-main").css({marginTop:-(videoheight/2)+"px"})
		$(".fixed-video-main").css({marginLeft:-(videowidth/1.75)+"px"})
	};
	size();	
	$(window).resize(function(){//屏幕变化时候触发
	var winwidth=$(window).width();
	var height2=$(window).height();
	var num=-(width-winwidth)/2.5;
	$(".head").css({height:height2})
	$(".head-bg").css({transform:"translateX("+num+"px)",height:height2})
	$(".bussiness-li img").css({transform:"translateX("+num+"px)",height:height2})
	$(".fixed-video-main").css({height:height*0.3,width:windowwidth});
	//关于我们的背景变化
	$(".about-kong").css({height:height2});
		if(winwidth<1025 && winwidth>414){
			var num2=-(imgwidth2-winwidth)
			$(".aobout-head-bg-img").css({transform:"translateX("+num2+"px)",height:height2})
		}
		else{
		var num2=-(imgwidth2-winwidth)/2
		$(".aobout-head-bg-img").css({transform:"translateX("+num2+"px)",height:height2})
		}
	//设置第二块固定视图的高度
		$(".jsheight").css({height:height2})
	//设置视频
		$(".fixed-video-main").css({height:height2*0.6,width:winwidth*0.8});
		var videowidth=$(".fixed-video-main").width();
		var videoheight=$(".fixed-video-main").height();
		$(".fixed-video-main").css({marginTop:-(videoheight/2)+"px"})
		$(".fixed-video-main").css({marginLeft:-(videowidth/2)+"px"})
		if(winwidth>930){
			$(".position-div").removeClass("myframesinit");
			$(".position-div").removeClass("myframesout");
		}
	})
	$(window).scroll(function(){//滚动条移动时候触发 使其视察效果
		var winH=$(window).height();
		var scrollTop=$('html').scrollTop()+$('body').scrollTop();
		var num=winH-scrollTop;
		if(num>=0)
		{
			$('.head-div').css({height:num+"px"});
		}
		else
		{
			$('.head-div').css({height:"0px"});
		}
	})
})();
var josn={
	bool:false,
	boolnum:1,
	fadeOut:function(){//功能视频的淡入淡出
		$(".index-middle-div-i").click(function(){
			$(".fixed-video").fadeIn(400);
		})
		$(".fixed-video-xx").click(function(){
			$(".fixed-video").fadeOut(400);
		})
	},
	Switch:function(){
		var _this=this;
		if(_this.boolnum==1){
			$(".bussiness-li li").eq(0).fadeOut(500);
			$(".bussiness-li li").eq(1).fadeIn(1000);
			_this.boolnum=2;
		}
		else if(_this.boolnum==2){
			$(".bussiness-li li").eq(1).fadeOut(500);
			$(".bussiness-li li").eq(2).fadeIn(1000);
			_this.boolnum=3;
		}
		else if(_this.boolnum==3){
			$(".bussiness-li li").eq(2).fadeOut(500);
			$(".bussiness-li li").eq(0).fadeIn(1000);
			_this.boolnum=1;
		}
	},
	init:function(){
		var _this=this;
		_this.fadeOut();
		setInterval(function(){
		    _this.Switch();
		},3000);
		$(".head-position-div").click(function(){//功能菜单栏出来和隐藏
			if(_this.bool==false){
				
				$(".head-ul").removeClass("myframesout");
				$(".head-ul").addClass("myframesinit");
				_this.bool=true;
				if($(window).width()<931){
					$(".cloth").css({display:"block"});
					$(".position-div").removeClass("myframesout");$(".position-div").addClass("myframesinit");
					$(".cloth").click(function(){
						console.log(1)
						$(".position-div").removeClass("myframesinit");$(".position-div").addClass("myframesout");
						_this.bool=false;
						$(".cloth").css({display:"none"});
					})
				}
			}
			else{
				$(".head-ul").removeClass("myframesinit");
				$(".head-ul").addClass("myframesout");
				_this.bool=false;
				if($(window).width()<931){
					$(".cloth").css({display:"block"});
					$(".position-div").removeClass("myframesinit");$(".position-div").addClass("myframesout");
				}
			}
		})
	}
}
josn.init();
