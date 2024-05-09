//公共方法区域
function getVesrsion(url_){
    var v = null;
    var url = location+"";
    if(url_){
        url = url_;
    }
    url = url.replace("an-work", "an_work").replace("wbw-work", "wbw_work").replace("work-list", "work_list", "");//过滤多的信息
    if(url.indexOf("-")!=-1) {
        var vstr = url.split("-")[1];
        if(vstr.indexOf("/")!=-1){
            return vstr.split("/")[0];
        }
    }
    return v;
}
//----------------

// function getWorkEvent(){
//     return JSON.parse(workGet("event"));
// }

// function setWorkEvent(){
//     return workSet("event", 0);
// }

// function workEvent(fn, args){
//     var e = {fn:fn.toString(),args:JSON.stringify(args)}
//     workSet("event", JSON.stringify(e))
// }

function workSet(k, v) {
    localStorage.setItem(k, v);
}

function workGet(k) {
    var v = localStorage.getItem(k)
    return v == "null" ? null : v;
}

function setWorkName(name) {
    $("#work_name").html(name)
}

function showInfo(info) {
    layer.open({
        content: info
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    })
}

function getTreeAllData() {
    var data_ = workGet("DATA");
    var arr = JSON.parse(data_);
    var x = getTreeArr(arr)
    //console.log(x)
    return x;
}
function getTreeArr(arr, a) {
    if(!a){
        a =  new Array();
    }
    for(i in arr){
        var item = arr[i];
        if(item.children){
            a.push({
                id:item.id,
                data:item.data,
                name:item.name,
                pId:item.pId,
                tId:item.tId,
                icon:item.icon,
                children:true});
            getTreeArr(item.children, a);
        }else{
            a.push({
                id:item.id,
                data:item.data,
                name:item.name,
                pId:item.pId,
                tId:item.tId,
                icon:item.icon,
                children:false});
        }
    }
    return a;
}

(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);

function colseHtml(d){
    // var data = {a:1,b:2}
    // workEvent( function (d) {
    //     layer.closeAll()
    // } , data)
    closeView();
}

function showInfo2(info) {
    console.log("提示信息:" + info)
    showInfo(info);
}

function getCommInfo(info, desc) {
    var html = " <section class=\"data-null\">\n" +
        "                    <div class=\"box-space info-feedback\">\n" +
        "<!--                        <p><span class=\"feedback-success icon-tips-feedback\"></span></p>-->\n" +
        "                        <p><span class=\"feedback-warning icon-tips-feedback\"></span></p>\n" +
        "                        <p>"+ info +"</p>\n" +
        "                        <p><span class=\"gray\">"+ (desc || "") +"</span></p>\n" +
        "                    </div>\n" +
        "                </section>"
    return html;
}


function androidGoBack(){
    //androidGoBack 从上面一个个关闭的
    console.log(">>>>>>>>>>>>>>");
    try{
        var len = wins.length-1;
        for(var i=len; len>=0 ;len--){
            var item = wins[len];
            console.log(len,item, item.close);
            if(!item.close){
               item.close = true;
               layer.close(item.index);
               return item.index;
            }
        }
    }catch (e) {
        console.log(e);
        return null;
    }
    return null;

    // var leng = $(".layui-m-layer").length;
    // layer.closeAll();
    // return leng;
}

function logErrInfo(info){
    var arr_ = workGet("LOG")||"[]";
    var arr = JSON.parse(arr_);
    arr.push(info);
    workSet("LOG", JSON.stringify(arr));
}
