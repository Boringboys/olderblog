$(function(){
                var markdown_height = window.innerHeight-document.getElementById('header').offsetHeight;
                document.getElementById('markdown').style.height=markdown_height-50+"px";

                var con=new showdown.Converter();
                var text=$('#markdown-edit').val();
                document.getElementById('inner_main').innerHTML=con.makeHtml(text);
            });

            window.onresize=function(){
                var markdown_height = window.innerHeight-document.getElementById('header').offsetHeight;
                document.getElementById('markdown').style.height=markdown_height-50+"px";
            }

            function textchange(){
                var con=new showdown.Converter();
                var text=$('#markdown-edit').val();
                document.getElementById('inner_main').innerHTML=con.makeHtml(text);
            }
			
			function openbtnonclicked(){
				console.log("点击打开按钮，选择文件");
				document.getElementById('fileselect').click();
				
			}
			
			function savebtnonclicked(){
				console.log(456);
			}
			
			function cleanbtnonclicked(){
				console.log(789);
			}
			
			function fileimport(){
				console.log("文件已选择，导入文件");
				var selectfile = document.getElementById('fileselect').files[0];
				var reader = new FileReader();
				reader.readAsText(selectfile);
				reader.onload = function(){
					console.log(this.result);
					document.getElementById('markdown-edit').value=this.result;
					var con=new showdown.Converter();
					var text=$('#markdown-edit').val();
					document.getElementById('inner_main').innerHTML=con.makeHtml(text);
				}				
			}