// 导航
if($('.top_nav li').hasClass('navCur'))
{
	var psoLeft=$('.navCur').position().left;
	$('.top_nav i').stop();
	$('.top_nav i').animate({left:psoLeft+'px'},300);
	$('.top_nav li').mouseenter(function(){
		var psoLeft=$(this).position().left;
		$('.top_nav i').stop();
		$('.top_nav i').animate({left:psoLeft+'px'},300);
	});
	$('.top_nav ul').mouseleave(function(){
		var psoLeft=$('.navCur').position().left;
		$('.top_nav i').stop();
		$('.top_nav i').animate({left:psoLeft+'px'},300);
	});
}

//案例切换
$('.demo_left').click(function(){
	$('.demo_div ul:first').animate({marginLeft:'-1100px'},500,function(){
		$(this).appendTo('.demo_div');
		$(this).css({marginLeft:'0px'});
	});
});
$('.demo_right').click(function(){
	$('.demo_div ul:last').css({marginLeft:'-1100px'});
	$('.demo_div ul:last').prependTo('.demo_div');
	$('.demo_div ul:first').animate({marginLeft:'0px'},500);
});

//渠道
$('.agent_h3 h3').click(function(){
	var num=$(this).index('.agent_h3 h3');
	$('.agent_main').eq(num).show().siblings('.agent_main').hide();
});
$('#form').bind('submit',function(){
	var sheng=$.trim($('#sheng').val());
	var shi=$.trim($('#shi').val());
	var company=$.trim($('#company').val());
	var name=$.trim($('#name').val());
	var tel=$.trim($('#tel').val());
	var zhong=/[\u4e00-\u9fa5]/;
	var shu=/^(\d{11})$/;
	if(sheng=='' || shi=='' || sheng=='请选择省份' || shi=='请选择城市' || company=='' || name=='' || !zhong.test(name) || !shu.test(tel) || tel=='')
	{
		alert('请正确填写信息！');
		return false;
	}
});

//flash
var flash01,flash02;
$('.flash_btn span').click(function(){
	var newNum=$(this).index();
	var oldNum=$('.fla_cur').index();
	if(newNum==oldNum)
	{
		return;
	}
	$(this).addClass('fla_cur').siblings('span').removeClass('fla_cur');
	$('.flash_img li').eq(newNum).fadeIn(2000);
	$('.flash_img li').eq(oldNum).fadeOut(2000);
	$('.flash_con').addClass('flash_conCur').siblings('.flash_con').removeClass('flash_conCur');
	//$('.flash_con *').stop();
	if(newNum>oldNum)
	{
		clearTimeout(flash01);
		clearTimeout(flash02);
		flash01=setTimeout('flashLeftOutA'+oldNum+'()',10);
		flash02=setTimeout('flashLeftIn'+newNum+'()',800);
	}
	else
	{
		clearTimeout(flash01);
		clearTimeout(flash02);
		flash01=setTimeout('flashLeftOutB'+oldNum+'()',10);
		flash02=setTimeout('flashLeftIn'+newNum+'()',800);
	}
});

if($('.top_nav li:first').hasClass('navCur'))
{
	flashDodo=setInterval(flashAutoAA,6000);
}

$('.flash').mouseenter(function(){
	clearInterval(flashDodo);
});

$('.flash').mouseleave(function(){
	flashDodo=setInterval(flashAutoAA,6000);
});

function flashAutoAA(){
	var newNum;
	var lastNum=$('.flash_btn span:last').index('.flash_btn span');
	var oldNum=$('.fla_cur').index('.flash_btn span');
	if(oldNum==lastNum)
	{
		newNum=0;
	}
	else
	{
		newNum=oldNum+1;
	}
	$('.flash_btn span').eq(newNum).addClass('fla_cur').siblings('span').removeClass('fla_cur');
	$('.flash_img li').eq(newNum).fadeIn(2000);
	$('.flash_img li').eq(oldNum).fadeOut(2000);
	$('.flash_con').addClass('flash_conCur').siblings('.flash_con').removeClass('flash_conCur');
	if(newNum>oldNum)
	{
		clearTimeout(flash01);
		clearTimeout(flash02);
		flash01=setTimeout('flashLeftOutA'+oldNum+'()',10);
		flash02=setTimeout('flashLeftIn'+newNum+'()',800);
	}
	else
	{
		clearTimeout(flash01);
		clearTimeout(flash02);
		flash01=setTimeout('flashLeftOutB'+oldNum+'()',10);
		flash02=setTimeout('flashLeftIn'+newNum+'()',800);
	}
}

function flashLeftOutA0(){
	$('.flash_con1_text1').stop(false,true).animate({left:'180px'},200,function(){
		$('.flash_con1_text1').stop(false,true).animate({left:'-200px',opacity:0},300);
		$('.flash_con1_nav').stop(false,true).fadeOut('slow');
		$('.flash_con1_text2').stop(false,true).animate({left:'140px'},200,function(){
			$('.flash_con1_text2').stop(false,true).animate({left:'-200px',opacity:0},300,function(){
				$('.flash_con1_tel').stop(false,true).animate({right:'-100px'},200,function(){
					$('.flash_con1_tel').stop(false,true).animate({right:'1500px',opacity:0},600);
				});
			});
		});
	});
}

function flashLeftOutB0(){
	$('.flash_con1_tel').stop(false,true).animate({right:'60px'},200,function(){
		$('.flash_con1_tel').stop(false,true).animate({right:'-1000px',opacity:0},400,function(){
			$('.flash_con1_nav').stop(false,true).fadeOut('slow');
			$('.flash_con1_text2').stop(false,true).animate({left:'60px'},200,function(){
				$('.flash_con1_text2').stop(false,true).animate({left:'2000px',opacity:0},600);
				$('.flash_con1_text1').stop(false,true).animate({left:'60px'},200,function(){
					$('.flash_con1_text1').stop(false,true).animate({left:'2000px',opacity:0},600);
				});
			});
		});
	});
}
function flashLeftIn0(){
	$('.flash_con1_text1').stop(false,true).animate({left:'121px',opacity:1},500);
	$('.flash_con1_text2').stop(false,true).animate({left:'118px',opacity:1},500);
	$('.flash_con1_tel').stop(false,true).animate({right:'16px',opacity:1},800);
	$('.flash_con1_nav').stop(false,true).fadeIn('slow');
}


function flashLeftOutA1(){
	$('.flash_con2_text1').stop(false,true).animate({left:'270px'},200,function(){
		$('.flash_con2_text1').stop(false,true).animate({left:'-1200px',opacity:0},500);
		$('.flash_con2_text2').stop(false,true).animate({left:'24px'},200,function(){
			$('.flash_con2_text2').stop(false,true).animate({left:'-1200px',opacity:0},500);
		});
		$('.flash_con2_tel').stop(false,true).animate({right:'-100px'},200,function(){
			$('.flash_con2_tel').stop(false,true).animate({right:'3500px',opacity:0},800);
		});
	});
}
function flashLeftOutB1(){
	$('.flash_con2_tel').stop(false,true).animate({right:'60px'},200,function(){
		$('.flash_con2_tel').stop(false,true).animate({right:'-1000px',opacity:0},400,function(){
			$('.flash_con2_text2').stop(false,true).animate({left:'60px'},200,function(){
				$('.flash_con2_text2').stop(false,true).animate({left:'2000px',opacity:0},600);
			});
			$('.flash_con2_text1').stop(false,true).animate({left:'80px'},200,function(){
				$('.flash_con2_text1').stop(false,true).animate({left:'2000px',opacity:0},600);
			});
		});
	});
}
function flashLeftIn1(){
	$('.flash_con2_text1').stop(false,true).animate({left:'168px',opacity:1},800);
	$('.flash_con2_tel').stop(false,true).animate({right:'8px',opacity:1},800);
	$('.flash_con2_text2').stop(false,true).animate({left:'162px',opacity:1},800);
}


function flashLeftOutA2(){
	$('.flash_con3_text1').stop(false,true).animate({left:'270px'},200,function(){
		$('.flash_con3_text1').stop(false,true).animate({left:'-1200px',opacity:0},300);
		$('.flash_con3_text2').stop(false,true).animate({left:'24px'},200,function(){
			$('.flash_con3_text2').stop(false,true).animate({left:'-1200px',opacity:0},400);
		});
		$('.flash_con3_tel').stop(false,true).animate({right:'-100px'},200,function(){
			$('.flash_con3_tel').stop(false,true).animate({right:'3500px',opacity:0},600);
		});
	});
}
function flashLeftOutB2(){
	$('.flash_con3_tel').stop(false,true).animate({right:'60px'},200,function(){
		$('.flash_con3_tel').stop(false,true).animate({right:'-1000px',opacity:0},400,function(){
			$('.flash_con3_text2').stop(false,true).animate({left:'60px'},200,function(){
				$('.flash_con3_text2').stop(false,true).animate({left:'2000px',opacity:0},600);
			});
			$('.flash_con3_text1').stop(false,true).animate({left:'80px'},200,function(){
				$('.flash_con3_text1').stop(false,true).animate({left:'2000px',opacity:0},600);
			});
		});
	});
}
function flashLeftIn2(){
	$('.flash_con3_text1').stop(false,true).animate({left:'168px',opacity:1},500);
	$('.flash_con3_tel').stop(false,true).animate({right:'8px',opacity:1},500);
	$('.flash_con3_text2').stop(false,true).animate({left:'162px',opacity:1},500);
}


//提示框及登陆
$('.top_login').click(function(){
	$('.loginMain').slideToggle();
});
$('.login_xx').click(function(){
	$('.loginMain').slideToggle();
});
$('.login_aa a:first,.register_aa a:first').click(function(){
	$('.loginMain').slideToggle();
	$('.regMain').slideToggle();
});
$('.reg_xx').click(function(){
	$('.regMain').slideToggle();
});

//输入框文
$("input[focucmsg]").each(function(){
	if($(this).val() == '')
	{
		$(this).val($(this).attr("focucmsg"));
	}
	$(this).focus(function(){
		if($(this).val() == $(this).attr("focucmsg")) {
			$(this).val('');
			$(this).val('').css("color","#7c7c7c");
		}
	});
	$(this).blur(function(){
	   if(!$(this).val()){
		  $(this).val($(this).attr("focucmsg"));
		  $(this).val($(this).attr("focucmsg"));
		  $(this).css("color","#c2c2c2");
		}
	 });
});
//密码文字
	$('.password span').click(function(){
	   $(this).hide();
	   $(this).siblings('.pass').focus();
	   $(this).siblings('.pass').css('color','#7c7c7c');
	});
	$('.pass').blur(function(){
		var pass=$.trim($(this).val());
		var pass_span=$(this).siblings('span');
		if(pass=='' || pass==$.trim(pass_span.html()))
		{
		  pass_span.show();
		}
	});
	
	//登录判断
	$('#login').bind('submit',function(){
		var email=$.trim($('#email').val());
		var password=$.trim($('#password').val());
		var pattern = /^[a-z A-Z 0-9 _]+@[a-z A-Z 0-9 _]+(\.[a-z A-Z 0-9 _]+)+(\,[a-z A-Z 0-9 _]+@[a-z A-Z 0-9 _]+(\.[a-z A-Z 0-9 _]+)+)*$/;
		if(email=='' || email=='输入你的邮箱' || password=='')
		{
		  $('.login_wrong').html('请填写完内容').show();
		  return false;
		}
		else if(email!='' && !pattern.test(email)) {
		  $('.login_wrong').html('邮箱格式不对').show();
		  return false;
		} 
		else if(pattern.test(email) && password != ""){
		  $('.login_wrong').hide();
		  return true;
		}
	});
	
	
	//注册判断
	var reg=1;
	$('#reg_email').blur(function(){
		var reg_email=$.trim($(this).val());
		var reg_pattern = /^[a-z A-Z 0-9 _]+@[a-z A-Z 0-9 _]+(\.[a-z A-Z 0-9 _]+)+(\,[a-z A-Z 0-9 _]+@[a-z A-Z 0-9 _]+(\.[a-z A-Z 0-9 _]+)+)*$/;
		if(reg_email!='' && !reg_pattern.test(reg_email))
		{
		  $(this).siblings('.register_wrong').html('邮箱格式不对').show();
		  reg=0;
		}
	});
	$('#reg_password1').blur(function(){
		var reg_password1=$.trim($(this).val());
		if(reg_password1.length<=6)
		{
		  $(this).siblings('.register_wrong').html('密码需大于6位').show();
		  reg=0;
		}
	});
	$('#reg_password2').blur(function(){
		var reg_password1=$.trim($('#reg_password1').val());
		var reg_password2=$.trim($(this).val());
		if(reg_password1.length>=6 && reg_password1!=reg_password2)
		{
		  $('#reg_password1').siblings('.register_wrong').html('密码不一致').show();
		  reg=0;
		}
	});
	$('#register').bind('submit',function(){
		var reg_email=$.trim($('#reg_email').val());
		var reg_password1=$.trim($('#reg_password1').val());
		var reg_password2=$.trim($('#reg_password2').val());
		if(reg==0 || reg_email=='' ||reg_email=='输入你的邮箱' || reg_password1=='' || reg_password2=='')
		{
		  return false;
		}
	});
	
	
	
//招聘
$('.recruitment_main li em').click(function(){
	$(this).parents('li').toggleClass('re_cur');
	$(this).siblings('p').slideToggle();
});