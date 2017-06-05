//获取元素节点
var jsDiv = document.getElementById("playground");
var jsSnack = document.getElementById("snack");
var jsFood = document.getElementById("food");
var jsBody = document.getElementById("playground");
var jsScore = document.getElementById("score");
//设置全局变量
var timer; //创建定时器为全局变量
setInterval(eat, 10); //检测位置碰撞，并且吃掉食物；
var srr = []; //记录蛇行动的位置
var num = 0; //记录数组的长度
var playgroundWidth=jsBody.clientWidth;
var playgroundheight=jsBody.clientHeight;
var jsSnackBody; //么米吃掉一个食物，蛇的身体
var jsFoodWidth=jsFood.clientWidth;
var snackWidth=snack.clientWidth;
//左-------》对应的ASCII码值是 37；
//上-------》对应的ASCII码值是 38；
//右-------》对应的ASCII码值是 39；
//下-------》对应的ASCII码值是 40；
//开始游戏
document.onkeydown = function(e) {
	var evt = e || window.event;
	switch(evt.keyCode) {
		//向左移动
		case 37:
			clearInterval(timer);
			if(jsSnack.offsetLeft!=1 || jsSnack.offsetTop!=0){
				console.log(jsSnack.offsetTop)
			timer = window.setInterval(runLeft, 10)
			}

		function runLeft() {
				if(jsSnack.offsetLeft > 0) {
//					console.log(jsSnack.offsetLeft)
					jsSnack.style.left = jsSnack.offsetLeft - 1 + "px";
					jsSnack.style.top = jsSnack.offsetTop + "px";
					//记录小蛇的位置
					srr.push([jsSnack.offsetLeft, jsSnack.offsetTop]);
					num++; //记录数组的长度
				}
			}
			break;
			
			//向上移动
		case 38:
			clearInterval(timer);
			console.log()
			if(jsSnack.offsetLeft!=1 || jsSnack.offsetTop!=0){
			timer = window.setInterval(runTop, 10);
			}
			function runTop() {
				if(jsSnack.offsetTop > 0) {
					jsSnack.style.top = jsSnack.offsetTop - 1 + "px";
					jsSnack.style.left = jsSnack.offsetLeft + "px";
					//记录小蛇的位置
					
					srr.push([jsSnack.offsetLeft, jsSnack.offsetTop]);
//					console.log(srr)
					num++; //记录数组的长度
				}
			}

			break;
			//向右移动
		case 39:
			clearInterval(timer);
			if(jsSnack.offsetLeft!=1 || jsSnack.offsetTop!=0){
			timer = window.setInterval(runRight, 10);
			}
			function runRight() {
				if(jsSnack.offsetLeft + jsSnack.offsetWidth <= playgroundWidth) {
					jsSnack.style.left = jsSnack.offsetLeft + 1 + "px";
					jsSnack.style.top = jsSnack.offsetTop + "px";
					//记录小蛇的位置
					srr.push([jsSnack.offsetLeft, jsSnack.offsetTop]);
					num++; //记录数组的长度
				}
			}
			break;
			//向下移动    
		case 40:
			clearInterval(timer);
			if(jsSnack.offsetLeft!=1 || jsSnack.offsetTop!=0){
			timer = window.setInterval(runBottom, 10);
			}
			function runBottom() {
				if(jsSnack.offsetTop + jsSnack.offsetHeight <= playgroundheight) {
//					console.log(jsSnack.offsetLeft) 
					jsSnack.style.top = jsSnack.offsetTop + 1 + "px";
					jsSnack.style.left = jsSnack.offsetLeft + "px";
					//记录小蛇的位置
					srr.push([jsSnack.offsetLeft, jsSnack.offsetTop]);
					num++; //记录数组的长度
				}
			}
			break;
	}
}

 //食物随机出现
function Pos(){
    jsFood.style.left=parseInt(Math.random() * (playgroundWidth - jsFoodWidth ))/100 + "rem";
    jsFood.style.top=parseInt(Math.random() * (playgroundheight - jsFoodWidth ))/100  + "rem";
}
Pos();


function eat(){
    rectangleCrashExamine(jsSnack,jsFood);
    function rectangleCrashExamine(obj1, obj2) {
        var obj1Left = obj1.offsetLeft;
        var obj1Width = obj1.offsetLeft + obj1.offsetWidth;
        var obj1Top = obj1.offsetTop;
        var obj1Height = obj1.offsetTop + obj1.offsetHeight;
        var obj2Left = obj2.offsetLeft;
        var obj2Width = obj2.offsetLeft + obj2.offsetWidth;
        var obj2Top = obj2.offsetTop;
        var obj2Height = obj2.offsetTop + obj2.offsetHeight;
        //检测碰撞
        //碰撞检测原理：
            //蛇在实物的左边、右边、上边、下边的时候，说明没有发生碰撞，那么我们取反，就说明发生碰撞
        if ( !(obj1Left > obj2Width || obj1Width < obj2Left || obj1Top > obj2Height || obj1Height < obj2Top) ) {
            //碰撞后身体
            jsSnackBody = document.createElement("div");
            jsSnackBody.setAttribute("class","body");
            jsBody.appendChild(jsSnackBody);
            Pos();//怪物的位置随机变换
          setInterval(follow,10);//身体跟随的定时器
        }
    }
}
 function follow(){
    //检查一共添加了多少身体
    var bodyNum = document.getElementsByClassName("body");
//  console.log(bodyNum)
    //记录得分
    jsScore.innerHTML = bodyNum.length;
    //蛇每次移动1个像素，那么新的身体应该跟随在当前数组的倒数第20个数组的位置;依次加等;
    var place = 0 ;
    for( var i = 0 ; i<bodyNum.length ; i++){
//  	console.log(snackWidth)
        place += snackWidth/2;
//      bodyNum[i].style.left=srr[num-place][0] + 'px';
//      bodyNum[i].style.top=srr[num-place][1] + 'px';    
    }
}

