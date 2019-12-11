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