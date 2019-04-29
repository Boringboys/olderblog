$(function(){
				
				var article_404 ="<P>虽然说十分的抱歉，但是你的请求只引来了一个奇怪的家伙-_-|</p>"+
				"<img src='https://raw.githubusercontent.com/Boringboys/resources/master/img/404.jpg' width='95%'>";
				
				function getPar(par){
					var local_url = document.location.href; 
					var get = local_url.indexOf(par +"=");
					if(get == -1){
						return false;   
					}   
					var get_par = local_url.slice(par.length + get + 1);    
					var nextPar = get_par.indexOf("&");
					if(nextPar != -1){
						get_par = get_par.slice(0, nextPar);
					}
					return get_par;
				}
				
				var txt = getPar("article");
				docnum = decodeURI(txt);
				console.log(docnum);

				var con=new showdown.Converter();
				var xmlhttp=new XMLHttpRequest();
				
			
				if(docnum=='false'||docnum==''){
					docnum=document.cookie.split("name=")[1].split(";")[0];
				}
				
				// alert(docnum);
				xmlhttp.onreadystatechange=function()
				{
					if(xmlhttp.status==404){
						document.title="404|Boringboys";
						document.getElementById("header_title").innerHTML="<h2>article_404</h2>"+
																"<p>你要看的文章昨天晚上飞走了，先看看别的吧</p>";
						document.getElementById('inner_main').innerHTML=article_404;
					}
					if (xmlhttp.readyState==4 && xmlhttp.status==200)
					{
						document.cookie="name="+docnum;
						document.title=docnum+"|Boringboys";
						document.getElementById("header_title").innerHTML="<h2>"+docnum+"</h2>"+
																"<p>少看书，少看书，少看那些没用的书≧▽≦</p>";
						var text=xmlhttp.response;
						document.getElementById('inner_main').innerHTML=con.makeHtml(text);
					}
				}
				xmlhttp.open("GET","https://raw.githubusercontent.com/Boringboys/resources/master/markdown/"+docnum+".md","true");
				xmlhttp.send();

				//点击分享按钮
				$("#share-btn").click(function(){
					$("#share-btn").hide();
					$("#share-icons").show();
				});
				//鼠标离开分享控件区域
				$("#share-area").mouseleave(function(){
					$("#share-icons").hide();
					$("#share-btn").show();
				});
				//点击该区域以外同样触发事件，为优化触屏设备情况
				$("body").bind("click",function(e){
					if($(e.target).closest("#share-area").length==0){
						$("#share-icons").hide();
						$("#share-btn").show();
					}
				})
		});	

		function goshare(id){
			var mytitle = docnum;
			var myurl = window.location.href;
			var mysummary = document.getElementsByTagName('meta')['description'].content;
			var mypic = document.getElementsByTagName('meta')['twitter:image'].content;
			console.log(mytitle,myurl,mysummary,mypic);

			var shareto = id.getAttribute("data-shareto");
			switch (shareto){
			case "weibo":
				window.open("https://service.weibo.com/share/share.php?url="+myurl+"&sharesource=weibo&title="+mytitle+"&pic="+mypic,"_blank","scrollbars=yes,resizable=no,width=700,height=600,left=300,top=100");
				console.log(1);
				break;
			case "qq":
			window.open("https://connect.qq.com/widget/shareqq/index.html?title="+mytitle+"&url="+myurl+"&pics="+mypic+"&summary="+mysummary,"_blank","scrollbars=yes,resizable=no,width=700,height=600,left=300,top=100");
				console.log(2);
				break;
			case "qzone":
				window.open("https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+myurl+"&title="+mytitle+"&desc=我发现了一篇不错的博客，快来看看&summary="+mysummary+"&pics="+mypic,"_blank","scrollbars=yes,resizable=no,width=700,height=600,left=300,top=100");
				console.log(3);
				break;
			case "facebook":
			window.open("https://www.facebook.com/share.php?u="+myurl,"_blank","scrollbars=yes,resizable=no,width=700,height=600,left=300,top=100");
				console.log(4);
				break;
			case "twitter":
			window.open("https://twitter.com/intent/tweet?text=推荐一篇不错的博客&url="+myurl,"_blank","scrollbars=yes,resizable=no,width=700,height=600,left=300,top=100");
				console.log(5);
				break;
			}
		}