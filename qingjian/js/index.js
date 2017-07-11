var mySwiper = new Swiper ('.swiper-container', {
	 		direction: 'vertical',
		  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
//		    console.log(swiper,11);
		    
		  }, 
		  onSlideChangeEnd: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
//		    console.log(swiper,22);
		    
		  } 

		 
		  
	 });
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
//      mousewheelControl: true
    });
function loadNum(){//做网页进度条
	var imgNodes=document.querySelectorAll("img");
	var fixedNodes=document.querySelector(".fixed");

	var allNum=imgNodes.length;//总数量
	var num=0;//当前img加载的数量

	function fixedHide(){
		num++;
		fixedNodes.innerHTML=Math.floor(num/allNum*100)+"%";
		if(num>=allNum){
			fixedNodes.style.display="none";
		}
	}

	for(var i=0;i<imgNodes.length;i++){
		if(imgNodes[i].complete){
			fixedHide();
		}
		else{
			imgNodes[i].onload=function(){
				//console.log("onload",allNum,num);
				fixedHide();
			}
		}
	}
}
loadNum();