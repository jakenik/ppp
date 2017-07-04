window.alert = function(str)  
        {  //更换alert原型
         var alertFram = document.createElement("DIV");  
         alertFram.id="alertFram";  
         alertFram.style.position = "absolute";
         alertFram.style.width = "84px"; 
         alertFram.style.height = "37px"; 
         alertFram.style.left = "50%";  
         alertFram.style.top = "50%";  
         alertFram.style.marginLeft = "-42px";  
         alertFram.style.marginTop = "-18px";   
         alertFram.style.background = "#737373";  
         alertFram.style.textAlign = "center";  
         alertFram.style.lineHeight = "37px"; 
         alertFram.style.color = "#fff";
         alertFram.style.borderRadius = "5px";
         alertFram.style.fontSize = "12px";
         alertFram.style.zIndex = "99999";
         alertFram.innerHTML=str;    
         document.body.appendChild(alertFram);  
         alertFram.focus();
         setTimeout(function a(){
         	document.querySelector("#alertFram").parentNode.removeChild(document.querySelector("#alertFram"));
         },1500);
        }