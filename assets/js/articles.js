$(function(){
                

    var card_color = ["#FFCCCC","#009966","#CCCC99","#CCCCCC","#99CCFF","#6699CC","#FF33CC"];
   
    console.log(card_color.length);
    console.log(card_color);

    var xmlhttp=new XMLHttpRequest();

    xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                var obj=eval("("+xmlhttp.response+")");
                console.log(obj.length);
                console.log(obj);

                var insert_html = "";
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
                    
                    var color_index = i2%7;

                    insert_html+="<div class=\"card\" onclick=\"goblog(this)\" data-name=\""+obj[i2].firstname+obj[i2].lastname+"\">"+
                                    "<div class=\"cardheader\" style=\"background-color:"+card_color[color_index]+"\">"+
                                            "<h2>"+obj[i2].firstname+"<br/>"+obj[i2].lastname+"</h2>"+
                                            "<p>"+obj[i2].abstract+"</p>"+
                                        "</div>"+
                                        "<div class=\"cardbody\">"+
                                            year+"-"+month+"-"+day+
                                        "</div>"+
                                    "</div>"+
                                    "<hr/>"
                }

                document.getElementById("inner_html").innerHTML=insert_html;
            }
        }
        xmlhttp.open("GET","https://raw.githubusercontent.com/Boringboys/resources/master/markdown/articles.json","true");
        xmlhttp.send();
})

function goblog(id)
{
    var name=id.getAttribute("data-name");
    // console.log(name);
    document.cookie="name="+name;
    // alert(document.cookie);
    window.location.href="generic.html?article="+name;
}