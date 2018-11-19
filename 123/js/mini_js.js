        window.onload=init;
		function init() {
			var box=document.getElementById('mini_box');
            var btn=document.getElementById('mini_button');
            // var abc=document.getElementById("main");
            var myVideo=document.getElementById("music_play");
            var audio_btn=document.getElementById("audio_btn");

            var deg=0;
            var Ispaly=false;
			var speed=20;//速度
            var timer,timer2,time3;
            //播放/暂停音乐
            audio_btn.onclick=function(){
                if(Ispaly){
                    pauseVid();
                    audio_btn.style.background="rgba(100,0,0,0.5)";
                    clearInterval(time3);
                    Ispaly=false;
                }else{
                    playVid();
                    audio_btn.style.background="rgba(0,100,100,0.5)";
                    time3=setInterval(xuanzhuan,50);
                    // xuanzhuan();
                    Ispaly=true;
                }
            }

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

            //按钮旋转
            function xuanzhuan(){
                if(deg>=360){
                    deg-=353;
                }else{
                    deg+=7;
                }
                audio_btn.style.webkitTransform = "rotate("+deg+"deg)";
                audio_btn.style.mozTransform =  "rotate("+deg+"deg)";
                audio_btn.style.msTransform =  "rotate("+deg+"deg)";
                audio_btn.style.oTransform =  "rotate("+deg+"deg)";
                audio_btn.style.transform =  "rotate("+deg+"deg)";
            }

            //播放
            function playVid()
            {
                myVideo.play();
            }
            //暂停
            function pauseVid()
            {
                myVideo.pause();
            }

            // set_TOC(abc);
			
		}