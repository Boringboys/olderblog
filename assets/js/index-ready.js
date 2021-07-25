$(function(){
					var xmlhttp=new XMLHttpRequest();

					xmlhttp.onreadystatechange=function()
						{
							if (xmlhttp.readyState==4 && xmlhttp.status==200)
							{
								var obj=eval("("+xmlhttp.response+")");
								console.log(obj.length);
								console.log(obj);
								for(var i=0;i<obj.length&&i<9;i++)
								{
									var i2=obj.length-i-1;
									var time=obj[i2].update;
									var SS=   time%100;
									var MM=   time%10000-SS;
									var HH=   time%1000000-MM-SS;
									var day=  time%100000000-HH-MM-SS;
									var month=time%10000000000-day-HH-MM-SS;
									var year= time%100000000000000-month-day-HH-MM-SS;
									SS=SS;
									MM=MM/100;
									HH=HH/10000;
									day=day/1000000;
									month=month/100000000;
									year=year/10000000000;
									
									document.getElementById("md"+(i+1)).innerHTML="<div data-name="+obj[i2].firstname+obj[i2].lastname+" style=\"cursor:pointer\" onclick=\"goblog(this)\">"+
																				"<h2>"+obj[i2].firstname+"<br/>"+
																				obj[i2].lastname+
																				"</h2>"+
																				"<p>"+obj[i2].abstract+"</p>"+
																				"<p>归档于："+year+"-"+month+"-"+day+"</p>"
																				"</div>";
								}

							}
						}
						xmlhttp.open("GET","/markdown/articles.json","true");
						xmlhttp.send();
				})
				
				function goblog(id)
				{
					var name=id.getAttribute("data-name");
					// console.log(name);
					document.cookie="name="+name;
					// alert(document.cookie);
					window.location.href="article/"+name;
				}