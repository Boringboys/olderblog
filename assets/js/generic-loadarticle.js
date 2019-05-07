$(function(){
				
				var article_404 ="<P>虽然说十分的抱歉，但是你的请求只引来了一个奇怪的家伙-_-|</p>"+
				"<img src='https://www.boringboys.top/images/img/404/404.jpg' width='95%'>";
				
				var con=new showdown.Converter();
				var xmlhttp=new XMLHttpRequest();
				
				docnum=document.cookie.split("name=")[1].split(";")[0];

				if(docnum){
					xmlhttp.onreadystatechange=function()
					{
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
					xmlhttp.open("GET","https://www.boringboys.top/markdown/"+docnum+".md","true");
					xmlhttp.send();
				}else{
					document.title="404|Boringboys";
					document.getElementById("header_title").innerHTML="<h2>article_404</h2>"+
															"<p>你要看的文章昨天晚上飞走了，先看看别的吧</p>";
					document.getElementById('inner_main').innerHTML=article_404;
				}
			})