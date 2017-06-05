var slider={
	divNode:$(".position"),//img大框DIV
	SpanNode:$(".switch span"),//切换图下得到所有SPAN的节点
	positionDIV:$(".position div"),//img下div的集合
	aleft:$(".aleft"),
	aright:$(".aright"),
	liNode:$(".switch-elves ul li"),
	Mobilephonebg:$(".Mobilephonebg"),
	MobilephonebgSPan:$(".Mobilephonebg span"),
	ThevalueofLi:$('.Mobilephone li'),//li
	lileft:$(".lileft"),//左
	liright:$(".liright"),//右
	lileftbottom:$(".leftbottom"),//下左
	lirightbottom:$(".rightbottom"),//下右
	partnerul:$(".partnerul"),//ul
	partnerli:$(".partnerul li:first"),//li第一个
	bool:false,
	Headlinesshow:function(){//功能标题显示
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
	},
	hidden:function(){//功能a显示和隐藏
		var that=this;
		that.divNode.mouseover(function(){
			$(this).children(".aleft,.aright").show();
		})
		that.divNode.mouseout(function(){
			$(this).children(".aleft,.aright").hide();
		})
	},
	fading:function(){//功能淡入淡出
		var that=this;
		that.SpanNode.mouseover(function(){
			if($(this).hasClass("center")){
		 				return;
		 			}
			var curPos=$(this).index();//得到当前位置
		 	var oldPos=$(".Js-slider .center").index();//得到旧的位置 
		 	that.SpanNode.eq(curPos).addClass("center");
		 	that.SpanNode.eq(oldPos).removeClass("center");
		 	that.positionDIV.eq(curPos).fadeIn("slow");
		 	that.positionDIV.eq(oldPos).fadeOut("slow");
		 	console.log(curPos,oldPos)
		})
		that.aleft.click(function(){
			var oldPos=$(".Js-slider .center").index();
		 	var lastPos=that.SpanNode.last().index();
		 	curPos=oldPos!=0?oldPos-1:lastPos;

		 	that.SpanNode.eq(curPos).addClass("center");
		 	that.SpanNode.eq(oldPos).removeClass("center");
		 	that.positionDIV.eq(curPos).fadeIn("slow");
		 	that.positionDIV.eq(oldPos).fadeOut("slow");
		})
		that.aright.click(function(){
			var oldPos=$(".Js-slider .center").index();
		 	var lastPos=that.SpanNode.last().index();
		 	curPos=oldPos!=lastPos?oldPos+1:0;

		 	that.SpanNode.eq(curPos).addClass("center");
		 	that.SpanNode.eq(oldPos).removeClass("center");
		 	that.positionDIV.eq(curPos).fadeIn("slow");
		 	that.positionDIV.eq(oldPos).fadeOut("slow");
		})
		
	},
	Effectmobile:function(){//移动效果
		var that=this;
		that.liNode.mouseenter(function(){
			$(this).animate({width:"380px"},300);
			
		})
		that.liNode.mouseleave(function(){
			console.log(1)
			that.liNode.animate({width:"0px"},300);
			
		})
		
	},
	Moveup:function(){//移动上移动下
		var that=this;
		that.Mobilephonebg.mouseenter(function(){
			that.MobilephonebgSPan.animate({top:"0px"})
			$(this).animate({width:"510px"},300);
			
		})
		that.Mobilephonebg.mouseleave(function(){
			that.MobilephonebgSPan.animate({top:"241px"})
			$(this).animate({width:"491px"},300);
		})
		that.lileft.click(function(){
			var firstPos=$(".Mobilephone li:last");
			$(".Mobilephone").prepend(firstPos);
		
		})
		that.liright.click(function(){
			
			var firstPos=$(".Mobilephone li:first");
			$(".Mobilephone").append(firstPos);
		})
	},
	Switchthepicture:function(){//左移动右移动
		var that=this;
		that.lileftbottom.click(function(){
			that.bool=true;
		if(that.bool==true){
			$(".partnerul li:first").stop().animate({marginLeft:"-191px"},"slow",function(){
				that.partnerul.append($(".partnerul li:first"));
				$(".partnerul li:first").css({marginLeft:"10px"});
				$(".partnerul li:last").css({marginLeft:"0px"});
				that.bool=false;
			});
		}
		})
		that.lirightbottom.click(function(){
			that.partnerul.stop().prepend($(".partnerul li:last"));
			$(".partnerul li:last").css({margin:"0px 0px 0px -2019px"})			
			$(".partnerul li:first").animate({marginLeft:"191px"},"slow",function(){			
				$(".partnerul li:first").css({marginLeft:"11px"});
				$(".partnerul li:last").css({marginLeft:"0px"});
			});
		})
	},
	imgtbg:function(){//返回顶部
		$('.img-tbg').click(function(){
			$("html,body").animate({scrollTop:0},200);
		})
		$(window).scroll(function(){
			var scrollTop=$("html").scrollTop()+$("body").scrollTop();//得到滚动位置
			var wiHeight=$(window).height();//网页可视高度
			var webHeight=$("html").outerHeight();//网页的实际高度
			if(scrollTop>wiHeight){
				$(".img-tbg").fadeIn();
			}
			else{
				$(".img-tbg").fadeOut();
			}
		})
	},
	init:function(){
		var that=this;
		that.Headlinesshow();
		that.hidden();
		that.fading();
		that.Effectmobile();
		that.Moveup();
		that.Switchthepicture();
		that.imgtbg();
	}
};
slider.init();
