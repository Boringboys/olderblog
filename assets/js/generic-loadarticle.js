$(function(){
				
				var article_404 ="<P>你最近好像没有看过这里的文章-_-|</p>"+
				"去我的<a href=\"articles.html\">小抽屉</a>看看吧"+
				"<img src='/images/img/404/404.jpg' width='95%'>";
				
				var con=new showdown.Converter();
				var xmlhttp=new XMLHttpRequest();
				
				if(document.cookie.indexOf("name=")==-1)
				{
					document.getElementById("header_title").innerHTML="<h2>article_404</h2>"+
															"<p>你要看的文章昨天晚上飞走了，先看看别的吧</p>";
					document.getElementById('inner_main').innerHTML=article_404;
				}else{
					docnum=document.cookie.split("name=")[1].split(";")[0];
					xmlhttp.onreadystatechange=function()
					{
						if (xmlhttp.readyState==4 && xmlhttp.status==200)
						{
							document.cookie="name="+docnum;
							document.getElementById("header_title").innerHTML="<h2>"+docnum+"</h2>"+
																	"<p>少看书，少看书，少看那些没用的书≧▽≦</p>";
							var text=xmlhttp.response;
							document.getElementById('inner_main').innerHTML=con.makeHtml(text);
						}
					}
					xmlhttp.open("GET","/markdown/"+docnum+".md","true");
					xmlhttp.send();
				}
			})
