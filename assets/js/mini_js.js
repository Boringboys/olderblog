        window.onload=init;
		function init() {
			var box=document.getElementById('mini_box');
            var btn=document.getElementById('mini_button');


            var abc=document.getElementById("main");///////将文章第一个标签填写在main处

			var speed=20;//速度
			var timer,timer2;
			//鼠标点击事件
			btn.onclick=function(){
				 clearInterval(timer2);//清除定时器
				 timer2=setInterval(moveLeft,50);
                 btn.style.display="none";
			};

            //鼠标在按钮上方，按钮出现
            btn.onmousemove=function(){
                clearInterval(timer);
                timer=setInterval(btn_display,50);
            }  

            //鼠标离开按钮上方
            btn.onmouseleave=function(){
                clearInterval(timer);
                timer=setInterval(un_btn_display,50);
            }


			//鼠标离开弹窗
			box.onmouseleave=function(){
				 clearInterval(timer2);
				 timer2=setInterval(moveRight,50);
                 btn.style.display="inline-block";
			};

            //按钮加深
            function btn_display(){
                var arl=btn.style.opacity;
                if(arl>=1){
                    clearInterval(timer);
                }else{
                    btn.style.opacity=Number(arl)+0.2;
                }
            }

            //按钮复原
            function un_btn_display(){
                var arl=btn.style.opacity;
                if(arl<=0.2){
                    clearInterval(timer);
                }else{
                    btn.style.opacity=Number(arl)-0.2;
                }
            }

            //向左移动
			function moveLeft(){	
				var r=document.documentElement.clientWidth-box.offsetLeft;//右边距		
                var arl=box.style.opacity;	
				if(r>=320){
					clearInterval(timer2);
				}else{
					box.style.right=r-300+speed+'px';
                    box.style.opacity=Number(arl)+0.1;
				}
			}
 
			//滑块移动
			function moveRight(){
				var r=document.documentElement.clientWidth-box.offsetLeft;//边距
                var arl=box.style.opacity;
				if(r<=0){
					clearInterval(timer2);//停止
				}else{
					box.style.right=r-300-speed+'px';	//移动
                    box.style.opacity=Number(arl)-0.1;
				}
				
            }
            set_TOC(abc);//如果文章是异步加载，须让此函数在文章加载后执行
		}
