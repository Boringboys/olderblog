// 找到下一个h标签
function next_h(node){
    var n = node.nextElementSibling;
    while(n !== null){
        if(n.nodeName.length === 2 && n.nodeName.toLowerCase()[0] === "h"){
            break;
        }
        else{
            n = n.nextElementSibling;
        }
    }
    return n;  // null或<h?>
}
function get_indentattion(n){
    indentation = "&nbsp&nbsp&nbsp";
    r = "";
    for (var i=0;i<n-1;i++){ 
        r += indentation;
    }
    return r + "&nbsp&nbsp";
}

// 扫描目录输出目录信息
function output_TOC(t){
    // 参数t为第一个h标签
    var html = "";  //待会的sidebar内容

    var line = get_indentattion(Number(t.nodeName[1])) + "<a href=\"#" + t.id +"\" class=\"a_list\">" + t.textContent + "</a><br>\n";
    html += line;
    t = next_h(t);
    while(t!== null){
        line = get_indentattion(Number(t.nodeName[1])) + "<a href=\"#" + t.id +"\"class=\"a_list\">" + t.textContent + "</a><br>\n";
        html += line;
        t = next_h(t);
    }
    return html;
}

// 将已知的目录信息进行提取，设置到右侧导航栏
function set_TOC(m){
    // 参数m为内容区域
    // 侧边栏
    t = m.firstElementChild; // 内容区域的第一个元素节点（一般是h标签）
    html = output_TOC(t);
    
    var sdbar = document.getElementById("mini_list");  // 侧边栏
    if(sdbar === null){
        setTimeout(() => {
            set_TOC(m); // 递归调用自我
        }, 1000);
    }
    else{
        sdbar.innerHTML = html;
    }
}

