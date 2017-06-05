window.requestAnimFrame = (function(){
   return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60);};})();
var bird={
		canvasNode:document.querySelector('#canvas'),
		num:0,
		size:0,
		ctx:null,
		birdImg:new Image(),
		tPipeImg:new Image(),
		bPipeImg:new Image(),
		srueImgLoadState:0,//当srueImgLoadState值为3时表示3张图都加载完毕
		move:0,//移动距离
		oldWinW:null,//记录旧的可视宽度
		oldWinH:null,//记录旧的可视高度
		everyMove:0.2,//控制下坠速度的;//此值可调节下坠速度，上升位置
		birdDownSpeed:0,//鸟下坠的单位速度
		birdUpBool:false,//true表示鸟向上飞
		birdUpInitSpeed:8,//初始速度;//此值可调节,上升位置
		birdUpSpeed:null,//向上飞速度的速度
		birdUrl:'img/3.gif',
		birdW:null,//鸟的宽
		birdH:null,//鸟的高
		birdX:null,//鸟的坐标x
		birdY:null,//鸟的坐标y
		tPipeUrl:"img/1.png",
		bPipeUrl:"img/2.png",
		pipeDistance:100,//每组管道间距
		pipeObjArr:[],/*管道对象关集合
						[
							{tX:0,tY:0,tH:0,tW:0,bX:0,bY:0,bH:0,bW:0},
							{tX:0,tY:0,tH:0,tW:0,bX:0,bY:0,bH:0,bW:0}
						]*/
		srueImgLoad:function(){//保证三张图的加载完毕
			var _this=this;
			_this.birdImg.src=_this.birdUrl;
			_this.tPipeImg.src=_this.tPipeUrl;
			_this.bPipeImg.src=_this.bPipeUrl;

			_this.birdImg.onload=function(){
				_this.srueImgLoadState++;
			}
			_this.tPipeImg.onload=function(){
				_this.srueImgLoadState++;
			}
			_this.bPipeImg.onload=function(){
				_this.srueImgLoadState++;
			}
		},
		collide:function(json){//碰撞检测;json表示一对管道的数据
			var _this=this;
			var dieDistance=5;//微调距离
			
			if(_this.birdX+_this.birdW-dieDistance>=json.tX && _this.birdX-json.tW+dieDistance<=json.tX){//表示管子跟鸟在同一个平面
				_this.num+=1;
				
				if(_this.num%24==0){
					_this.size+=1;
				console.log(_this.size)
				
				}
				if(_this.birdY>=json.tH-dieDistance && _this.birdY<=json.bY-_this.birdH+dieDistance){//安全				

				}
				else{//撞到了
					alert("死了");
					window.location.reload();
				}
					
			}
		},
		birdEle:function(){//鸟元素
			var _this=this;
			var imgNode=new Image();
			imgNode.src=_this.birdImg.src;
			
			var winH=document.documentElement.clientHeight;
			var winW=document.documentElement.clientWidth;
			_this.ctx.font="40px Arial";
			_this.ctx.fillText("得分"+_this.size,10,50);
			_this.birdW=imgNode.width;
			_this.birdH=imgNode.height;

			if(!_this.birdY)//给鸟第一次赋值x,y坐标
			{
				_this.birdX=Math.round(winW/10);
				_this.birdY=Math.round((winH-imgNode.height)/2)
			}

			if(_this.birdUpBool)//向上飞
			{
				if(!_this.birdUpSpeed){
					_this.birdUpSpeed=_this.birdUpInitSpeed;
				}
				_this.birdDownSpeed=0;
				_this.birdY=_this.birdY-_this.birdUpSpeed;
				_this.birdUpSpeed-=_this.everyMove;
				if(_this.birdUpSpeed<=0){
					_this.birdUpBool=false;
				}
			}
			else{//自由落体
				_this.birdUpSpeed=null;
				_this.birdY=_this.birdY+_this.birdDownSpeed;
			}

			_this.ctx.drawImage(imgNode,_this.birdX,_this.birdY,imgNode.width,imgNode.height);//绘制鸟
			
		},
		pipeEle:function(){//新增管子元素
			var _this=this;
			var tPipeNode=new Image();//下管道
			var bPipeNode=new Image();//上管道
			tPipeNode.src=_this.tPipeImg.src;
			bPipeNode.src=_this.bPipeImg.src;

			var winW=document.documentElement.clientWidth;
			var winH=document.documentElement.clientHeight;

			var minDistance=Math.round(winH/5);//最小距离
			var maxDistance=Math.round(winH/2);//最大距离
			var distance=Math.round(Math.random()*(maxDistance-minDistance)+minDistance);//随机的距离
			var randomNum=Math.floor(Math.random()*7+2)/10;//0.2-0.8范围
			var tH=Math.round((winH-distance)*randomNum);//上管道高度
			var bH=winH-distance-tH;//下管道高度
			var tX=bX=winW;
			var tY=0;//上管道Y坐标
			var bY=tH+distance;//下管道Y坐标


			
			var tW=bW=tPipeNode.width;
			//上管道
			_this.ctx.drawImage(tPipeNode,0,tPipeNode.height-tH,tW,tH,tX,tY,tW,tH);

			//下管道
			_this.ctx.drawImage(bPipeNode,0,0,bW,bH,bX,bY,bW,bH);
			//添加数据
			_this.pipeObjArr.push({tX:tX,tY:tY,tH:tH,tW:tW,bX:bX,bY:bY,bH:bH,bW:bW});
			
		},
		pipeMoveEle:function(json,pos,speed){//管道移动;//json管道的数据；pos管道对应在数组中的位置；speed管道移动速度
			var _this=this;

			var winW=document.documentElement.clientWidth;
			var winH=document.documentElement.clientHeight;
			var dValueX=0;//缩小屏幕得到的差值,水平
			var dValueY=0;//缩小屏幕得到的差值,垂直
			if(winW!=_this.oldWinW){
				dValueX=winW-_this.oldWinW;
			}
			if(winH!=_this.oldWinH){
				dValueY=winH-_this.oldWinH;
			}

			var tPipeNode=new Image();//下管道
			var bPipeNode=new Image();//上管道
			tPipeNode.src=_this.tPipeImg.src;
			bPipeNode.src=_this.bPipeImg.src;

			//目的：间距保持不变，如何重绘上下管道；条件：得到缩小的距离dValueY；
			var tX=bX=json.tX+dValueX-speed
			var tH=json.tH+dValueY/2;
			var bH=json.bH+dValueY/2;
			var tY=json.tY;
			var bY=tH+(json.bY-json.tH);//(json.bY-json.tH)上下管道不变的间距
			var tW=bW=json.tW;

			//console.log(json.bH,bH,json.tH,tH)

			//上管道
			_this.ctx.drawImage(tPipeNode,0,tPipeNode.height-tH,tW,tH,tX,tY,tW,tH);

			//下管道
			_this.ctx.drawImage(bPipeNode,0,0,bW,bH,bX,bY,bW,bH);

			//更新数据
			_this.pipeObjArr[pos]={tX:tX,tY:tY,tH:tH,tW:tW,bX:bX,bY:bY,bH:bH,bW:bW};
		},
		canvasResize:function(){//让canvas与窗口保持一样大小
			var _this=this;

			var winW=document.documentElement.clientWidth;
			var winH=document.documentElement.clientHeight;

			_this.canvasNode.width=winW;
			_this.canvasNode.height=winH;
			
			if(!_this.oldWinW){//第一次记录oldWinW的值
				_this.oldWinW=winW;
				_this.oldWinH=winH;
			}
		},
		actionUp:function(){//鸟向上飞
			var _this=this;
			document.onkeydown=function(e){
				var event=window.event || e;
				var keyCode=event.keyCode || event.which;
				event.preventDefault();
				if(keyCode==32){//空格
					_this.birdUpBool=true;
				}
			}

			document.documentElement.onclick=function(){
				_this.birdUpBool=true;
			}
			document.documentElement.ontouchstart=function(){
				_this.birdUpBool=true;
			}
		},
		render:function(){//动画函数
			var _this=this;

			if(_this.srueImgLoadState<3){//状态值小于3表示图片没加载完毕
				return;
			}

			_this.ctx.clearRect(0,0,_this.canvasNode.width,_this.canvasNode.height);
			
			_this.birdEle();//画鸟
			//console.log(_this.pipeObjArr.length);

			//console.log(_this.move);
			//一定距离之后，新增一组管道
			if(_this.move%_this.pipeDistance==0){
				_this.pipeEle();//新增一组管道
				
			}
			
			//删除不在范围内的多余数据
			if(_this.pipeObjArr.length>0 && _this.pipeObjArr[0].tX<-_this.pipeObjArr[0].tW){
				_this.pipeObjArr.shift();
			}
			//重绘管道，让其看起来在动
			for(var i=0;i<_this.pipeObjArr.length;i++){
				//重绘管道
				_this.pipeMoveEle(_this.pipeObjArr[i],i,4);

				//碰撞检测
				_this.collide(_this.pipeObjArr[i]);

				//在重绘最后一个完成后更新可视宽高
				if(i==_this.pipeObjArr.length-1){
					var winW=document.documentElement.clientWidth;
					var winH=document.documentElement.clientHeight;
					_this.oldWinW=winW;
					_this.oldWinH=winH;
				}
			}

			_this.move++;
			_this.birdDownSpeed+=_this.everyMove;
		},
		animloop:function(){//循环，按浏览器频率更新
			var _this=this;
			(function animloop(){ 
				requestAnimFrame(animloop);
				_this.render(); 
			})();
		},
		init:function(){
			var _this=this;
			_this.ctx=_this.canvasNode.getContext("2d");
			
			_this.canvasResize();//让canvas与浏览器大小一致

			window.onresize=function(){//让canvas与浏览器大小一致
				_this.canvasResize();
			}

			_this.srueImgLoad();//确保图片有缓存

			_this.actionUp();//鸟向上飞

			_this.animloop();//做动画
		}
	};
bird.init();
