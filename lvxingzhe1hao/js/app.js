(function(){//img自适应
	var width=$(".head-bg").outerWidth();
	var imgwidth2=$(".aobout-head-bg-img").outerWidth();
	function size(){
		var windowwidth=$(window).width();
		var height=$(window).height();
		
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
		$(".cloth").height($("body").outerHeight())	
		//品牌世界弹窗
		$('.Brandworld-Box').height($('.Brandworld').height())	
	};
	size();	
	$(window).resize(function(){//屏幕变化时候触发
		size();
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

//产品中心
var Productcenterresize=function (){
//		$(".Productcenter").height($(window).height())
		if($(window).width()<371){
			$(".Productcenter-body-div2").width(($(window).width()-$(".Productcenter-body-div").width())-2+"px");
			$('.Productcenter-body-div2-div').height($('.Productcenter-body-div').height()+"px")
			$('.Productcenter-body-div2-div').css({marginTop:"0px"})
		}
		else{
			$(".Productcenter-body-div2").removeAttr("style");
			$('.Productcenter-body-div2-div').height($('.Productcenter-body-div').height()-30+"px")
			$('.Productcenter-body-div2-div').css({marginTop:"30px"})
		}
	}
	Productcenterresize();
	$(window).resize(function(){//屏幕变化时候触发
		Productcenterresize();
		Productcenterjson.width();
		var width=($('.Productcenter-Box').width()-$('.Productcenter-Box-img').width())/2;
		$('.Productcenter-Box-left').css({width:width+"px"});$('.Productcenter-Box-right').css({width:width+"px"});
	})
	$('.Productcenter-body-div2 li').on("mouseover touchstart",function(){
		$(this).find('span').stop();
		$(this).find('span').animate({bottom:"0%"})
	})
	$('.Productcenter-body-div2 li').on("mouseout touchend",function(){
		$(this).find('span').stop();
		$(this).find('span').animate({bottom:"-23%"})
	})
	var Productcenterjson={
		num:null,
		numwidth:null,
		src:0,
		click:function(){//左右切换
			var _this=this;
			$('.Productcenter-Box-right-a').click(function(){//右边
				var current=$('.positionjs').width();//当前
				for (var i=0;i<$('.Productcenter-Box-img-hidden img').length;i++){
					if($('.Productcenter-Box-img-hidden img').eq(i).is(".positionjs")==true){
						if(_this.src<$('.Productcenter-Box-img-hidden img').length-1){
							_this.src=i+1;
//							console.log(_this.src,$('.Productcenter-Box-img-hidden img').length)
						$('.Productcenter-Box-img-hidden img').eq(_this.src).addClass('positionjs');
						}
						else{
							_this.src=0;
							$('.Productcenter-Box-img-hidden img').eq(_this.src).addClass('positionjs');
						}
						$('.Productcenter-Box-img-hidden img').eq(i).removeClass('positionjs');
						break;
					}
				}
				var width=($('.Productcenter-Box').width()-$('.positionjs').width())/2;
				if(_this.src==0){
					_this.numwidth=0;	
				}
				else{
					_this.numwidth=_this.numwidth+current;
				}
				$('.Productcenter-Box-img-hidden').animate({marginLeft:-_this.numwidth+"px"});
				$('.Productcenter-Box-img').width($('.positionjs').width());
				$('.Productcenter-Box-img').css({marginLeft:-$('.Productcenter-Box-img').width()/2+"px"});
				$('.Productcenter-Box-left').animate({width:width+"px"});$('.Productcenter-Box-right').animate({width:width+"px"});
				
			});
			$('.Productcenter-Box-left-a').click(function(){//左边
				var current=$('.positionjs').width();//当前
				for (var i=0;i<$('.Productcenter-Box-img-hidden img').length;i++){
					if($('.Productcenter-Box-img-hidden img').eq(i).is(".positionjs")==true){
						if(_this.src>0){
							_this.src=i-1;
						$('.Productcenter-Box-img-hidden img').eq(_this.src).addClass('positionjs');
						}
						else{
							_this.src=$('.Productcenter-Box-img-hidden img').length-1;
							$('.Productcenter-Box-img-hidden img').eq(_this.src).addClass('positionjs');
						}
						$('.Productcenter-Box-img-hidden img').eq(i).removeClass('positionjs');
						break;
					}
				}
				if(_this.src!=$('.Productcenter-Box-img-hidden img').length-1){	
					_this.numwidth=_this.numwidth-$('.positionjs').width();
				}
				else{
					for(var i=0; i<$('.Productcenter-Box-img-hidden img').length-1;i++){
						_this.numwidth=_this.numwidth+$('.Productcenter-Box-img-hidden img').eq(i).width();
					}
				}
				
				var width=($('.Productcenter-Box').width()-$('.positionjs').width())/2;
				$('.Productcenter-Box-img-hidden').animate({marginLeft:-_this.numwidth+"px"});
				$('.Productcenter-Box-img').width($('.positionjs').width());
				$('.Productcenter-Box-img').css({marginLeft:-$('.Productcenter-Box-img').width()/2+"px"});
				$('.Productcenter-Box-left').animate({width:width+"px"});$('.Productcenter-Box-right').animate({width:width+"px"});
				
			})
		},
		img:function(){//点击图片撤销弹窗
			$('.Productcenter-Box-img-hidden img').click(function(){
				$('.Productcenter-Box-img').width("0px");
				$('.Productcenter-Box-left').animate({width:"50%"});$('.Productcenter-Box-right').animate({width:"50%"},function(){
					$('.Productcenter-Box').fadeOut("slow",function(){
						$('.Productcenter-body-div2-cloth').animate({bottom:"-100%"})
					});
				});
			})
		},
		width:function(){//可视图片的宽度
			$('.Productcenter-Box-img').width($('.positionjs').width());
			$('.Productcenter-Box-img').css({marginLeft:-$('.Productcenter-Box-img').width()/2+"px"});
		},
		Boxwidth:function(){
			var _this=this;
			for(var i=0;i<$('.Productcenter-Box-img-hidden img').length;i++){//给img的父节点设置宽度
				_this.num=_this.num+$('.Productcenter-Box-img-hidden img').eq(i).width();
				$('.Productcenter-Box-img-hidden').width(_this.num+1)
			}
		},
		init:function(){
			var _this=this;
			_this.width();
			_this.click();
			_this.img();
			_this.Boxwidth();
		}
	}
	Productcenterjson.init();
	$('.Productcenter-body-div2 li').on("click",function(){//点击后弹出的效果
		var url=$(this).attr('link');
		console.log(url)
		$.ajax({
			type:"get",
			url:url,
			async:true,
			dataType:'json',
			success:function(json){
					console.log(url)
				var imgs=json.imgs;
				for(var i=0;i<imgs.length;i++){
				$('.Productcenter-Box-img-hidden img').eq(i).attr({src:imgs[i]})
				}
			},
			error:function(){
				
			}
		});
		$('.Productcenter-body-div2-cloth').animate({bottom:"0%"},function(){	
			$('.Productcenter-Box').css({display:'block'});
			Productcenterjson.width();Productcenterjson.Boxwidth();
			var width=($('.Productcenter-Box').width()-$('.Productcenter-Box-img').width())/2;
			$('.Productcenter-Box-left').animate({width:width+"px"});$('.Productcenter-Box-right').animate({width:width+"px"});
			
			
		})
	})
	$('.Productcenter-body-div div').click(function(){
		if($('.Productcenter-Box').css("display")=='block'){
			$('.Productcenter-Box-img').width("0px");
			$('.Productcenter-Box-left').animate({width:"50%"});$('.Productcenter-Box-right').animate({width:"50%"},function(){
				$('.Productcenter-Box').fadeOut("slow",function(){
					$('.Productcenter-body-div2-cloth').animate({bottom:"-100%"})
				});
			});
		}
	})
