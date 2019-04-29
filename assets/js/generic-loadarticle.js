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
				var docnum = decodeURI(txt);
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
			});	