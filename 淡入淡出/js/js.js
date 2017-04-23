var slider={
	flashNode:null,//表示最外层div节点
	aLeftNode:null,//表示左边a节点
	aRightNode:null,//表示右边a节点
	lisNode:null,//表示初始状态下li的位置的节点集合
	spansNode:null,//表示span节点的集合
	record:null,//记录span新旧的位置差
	Bool:true,//false动画运行，true动画结束
	sliderSpanBool:true,//false表示正在span按钮节点切换，true表示左右按钮切换
	numMove:0,//需要移动的次数
	Thetimer:null,//记录计时器
	$:function(selector){
		return document.querySelector(selector);
	},
	$$:function(selector){
		return document.querySelectorAll(selector);
	},
	Buttonshows:function(){//功能：左右指示显示显示和隐藏
		var that=this;
		that.flashNode.onmouseenter=function(){
			that.aLeftNode.style.display="";
			that.aRightNode.style.display="";
			clearInterval(that.Thetimer); //清楚自动切换
		};
		that.flashNode.onmouseleave=function(){
			that.aLeftNode.style.display="none";
			that.aRightNode.style.display="none";
			that.Thetimer=setInterval(function(){
			that.aRightNode.onclick();
			},2000);
		}
	},
	Rightlabel:function(){//功能点击右边触发向下淡出
		var _this=this;
		_this.aRightNode.onclick=function(){
			if(_this.Bool){
				_this.sliderSpanBool=true;
				_this.Bool=false;
			_this.Movingobjects(1,0);
			}
		};	
	},
	Movingobjects:function(num,cnum,node){//右边点击触发后触发的递归函数
		var that=this;
		if(num==1){
			node=that.flashNode.querySelectorAll("li")[0];
			if(this.sliderSpanBool){
			var curPos;//表示当前位置
				for(var i=0;i<that.lisNode.length;i++){//循环对li的历遍
					if(that.lisNode[i]===node){
						curPos=i;
						break;
					}
				};
				curPos=curPos==that.lisNode.length-1?0:curPos+1;

				var oldPos;//表示之前位置
				for(var k=0;k<that.spansNode.length;k++){//循环对span的历遍
					if(that.spansNode[k].className=="current"){
						oldPos=k;
						break;
					}
				}
//				console.log(oldPos)
				that.spansNode[curPos].className="current";
				console.log(curPos,oldPos)
				that.spansNode[oldPos].className="";
			}
		}
		num-=0.1;
		if(num>=0){
			
			node.style.opacity=num;
//			console.log(num)
		setTimeout(function(){
				that.Movingobjects(num,cnum,node);
				},50);
		}
		else{//运动结束
			node.parentNode.appendChild(node);
			node.style.display="none";
			that.numMove--;
		if(that.numMove>0){
//			console.log(that.Movingobjects)
			that.Movingobjects(1,0);
		}
		else{
			that.numMove=0;
		}
		}

		
		if(cnum==0){
			nodel=that.flashNode.querySelectorAll("li")[1];
		}
		nodel.style.display="";
		cnum+=0.1;
		
		if(cnum<=1){
			nodel.style.opacity=cnum;
			that.Bool=true;
		}
		
		
	},
		Leftlabel:function(){//功能点击左边触发向上淡出
		var _this=this;
		_this.aLeftNode.onclick=function(){
			_this.sliderSpanBool=true;
			_this.bool=false;
			_this.aLeftNodebjects(1,0);
		};	
	},
	aLeftNodebjects:function(num,cnum,node){//左边点击触发后触发的递归函数
		var that=this;
		if(num==1){
			var lisNode=that.flashNode.querySelectorAll('li');
			node=lisNode[0];//第一个li
			_node=lisNode[lisNode.length-1];
			node.parentNode.insertBefore(_node,node);//将最后一个插入第一个
			if(that.sliderSpanBool)
			{
			var curPos;//当前位置
			for(var i=0;i<that.lisNode.length;i++){
				if(that.lisNode[i]===_node){
					curPos=i;
					
				}
			}
			var oldPos;//表示之前位置
			for(var k=0;k<that.spansNode.length;k++){//循环对span的历遍
					if(that.spansNode[k].className=="current"){
						oldPos=k;
						break;
					}
				}
				that.spansNode[curPos].className="current";
				that.spansNode[oldPos].className="";
			}
		}
		num-=0.1;
		if(num>=0){
			
			node.style.opacity=num;
		setTimeout(function(){
				that.aLeftNodebjects(num,cnum,node);
				},50);
		}
		else{//运动结束
			node.style.display="none";
				that.numMove--;
		if(that.numMove>0){
			that.aLeftNodebjects(1,0);
		}
		else{
			that.numMove=0;
		}
		}
			
		_node.style.display="";
		cnum+=0.1;
		
		if(cnum<=1){
			_node.style.opacity=cnum;
			
		}
	},
	
	Buttontotrigger:function(num){//span的切换
		var that=this;
		for(var i=0;i<that.spansNode.length;i++){
			that.spansNode[i].onclick=function(){
				if(this.className=="current"){//当前span如果有current样式直接跳出
					return;
				};

				var curPos,oldPos;//curPos表示当前位置;oldPos表示之前位置
				for(var k=0;k<that.spansNode.length;k++){
					if(that.spansNode[k]===this){
						curPos=k;
					}
					else if(that.spansNode[k].className=="current"){
						oldPos=k;
					}
				};
				that.spansNode[curPos].className="current";
				that.spansNode[oldPos].className="";
				that.sliderSpanBool=false;
				that.numMove=Math.abs(curPos-oldPos);//储存次数
//					console.log(curPos-oldPos)
				if(curPos-oldPos>0){//right点击效果
					that.Movingobjects(1,0);
				}
				else{//left点击效果
					that.aLeftNodebjects(1,0);
				}
			
		}
			
	}
},
	init:function(){
		var that=this;
		that.flashNode=that.$("#flash");
		that.aLeftNode=that.$("#flash_left");
		that.aRightNode=that.$("#flash_right");
		that.width=that.flashNode.clientWidth;
		that.lisNode=that.$$("#flash li");
		that.spansNode=that.$$("#flash span");
		that.Buttonshows();
		that.Buttontotrigger(10);
		that.Rightlabel();
		that.Leftlabel();
		that.Thetimer=setInterval(function(){
			that.aRightNode.onclick();
		},2000);
	}
};
slider.init();