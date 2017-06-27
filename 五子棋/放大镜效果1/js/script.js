var magnifier={
	$:function(selector){
		return document.querySelector(selector);
	},
	$$:function(selector){
		return document.querySelectorAll(selector);
	},
	mouseEnterSlider:function(lisNode,bigImgNode,middleImgNode){//功能：图片切换;lisNode表示li节点集合;bigImgNode表示大图节点；middleImgNode表示中图节点
		for(var i=0;i<lisNode.length;i++){

			lisNode[i].onmouseenter=function(){
				if(this.className=="main_imgCur"){
					return;
				}

				var imgNode=this.getElementsByTagName("img")[0];//得到鼠标移上去li中的img节点//this.querySelector("img");
				var smallSrc=imgNode.src;//imgNode.getAttribute("src");//得到小图的图片地址；返回类型字符串

				var _Pos=smallSrc.lastIndexOf("_");//得到最后一个_位置
				var smallSrcBeforeStr=smallSrc.slice(0,_Pos);//得到图片地址前面部分；不包括_符号
				var pointPos=smallSrc.lastIndexOf(".");//得到后缀点的位置
				var smallSrcAfterStr=smallSrc.slice(pointPos);//得到图片的后缀；是包括点的

				var middleSrc=smallSrcBeforeStr+"_m"+smallSrcAfterStr;//中图的地址
				var bigSrc=smallSrcBeforeStr+"_b"+smallSrcAfterStr;//大图的地址

				//console.log(middleSrc,bigSrc);
				middleImgNode.src=middleSrc;//middleImgNode.setAttribute("src",middleSrc);
				bigImgNode.src=bigSrc;

				for(var k=0;k<lisNode.length;k++){
					if(lisNode[k].className=="main_imgCur"){
						lisNode[k].className="";
						break;
					}
				};

				this.className="main_imgCur";
			};
		};
	},
	mouseMove:function(){
		
	},
	init:function(){//初始化
		var that=this;
		var lisNode=that.$$("#smallUl li");
		var bigImgNode=that.$("#bigImg");
		var middleImgNode=that.$("#middleDiv img");

		that.mouseEnterSlider(lisNode,bigImgNode,middleImgNode);
	}
};

magnifier.init();