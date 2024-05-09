/**
 *  基于html独立组件封装
 *  a.由多个页面构成
 *  b.页面间可以自由通信
 *  1.加载html组件，提供初始数据传递方法
 *  2.html组件回调方法的实现
 */
/**
 * 页面初始监听
 */
window.addEventListener('message',function(e){
    console.log(location.href, e);
    if(e.data){
        var data = JSON.parse(e.data);
        if(data.fun){
            eval("("+data.fun +")");
        }
    }
},false);
var wins = [];
var id__ = "view-wbw-";
function openView(obj){
    //from从哪里调用过来的
    obj.from = obj.from || getViewVid();
    opView(function (obj) {
        console.log("---openView2--",obj)
        openView_(obj)
    }, obj)
    //-------------没有缓存函数
}
function openView_(json){
    var from = json.from || "index";
    if(document.getElementById(id__ + json.vid)){
        console.warn("已经存在iframe[vid="+ json.vid +"]")
        return
    }
    var url = json.url;
    var hv = json.h || 0;
    if(hv <0){
        hv = $(document).height()-Math.abs(json.h);
    }else if (hv == 0){
        hv = $(document).height();
    }else{
        hv = json.h;
    }

    if(url.indexOf("?")!=-1){
        url = url+"&from="+ from +"&vid="+ json.vid
    }else{
        url = url+"?from="+ from +"&vid="+ json.vid
    }
    var html ="<iframe src='"+ url +"' id='"+ id__ + json.vid +"' onload='overLoadinInfo(\""+ json.vid +"\")'  frameborder=\"0\" scrolling=\"no\" style=\"width:100%;height:"+ hv +"px;\">";
    var index = layer.open({
        type: 1
        , content: html
        , anim: 'up',
        shade: json.shade || 0,
        style: json.style || 'position:fixed; width: 100%; bottom:0; left:0;padding:0px 0; border:none;height: '+ hv +'px;',
        //style: 'position:fixed;  width: 90%; top:0; right:0;;padding:0px 0; border:none;'
        //style: 'position:fixed; bottom:0; left:0; width: 100%; height: '+ hv +'px; pa_dding:0px 0; bo_rder:none;'
    });
    wins.push({url:url,vid:json.vid,index:index,call:json.call, data: json.data});
    //给他发个消息
}

//获取视图的vid
function getViewVid(url) {
    var url = url || location.href+"";
    if(url.indexOf("?")!=-1){
        url = url.split("?")[0]
    }
    var us = url.split("/");
    //from从哪里调用过来的
    return us[us.length-1].split(".html")[0];
}

function overLoadinInfo(vid) {
    console.log(vid,"加载完成")
    var data = {};
    for (i in wins) {
        if(vid == wins[i].vid && !wins[i].close) {//找出哪个视图的回调
            data = wins[i].data;
        }
    }
    opView(vid, function (obj) {
        if(typeof(onloadView)=="function") {
            onloadView(obj)
        }else{
            console.warn( getViewVid()+":没有提供[onloadView]初始方法!!!")
        }
    }, data)
}

/**
 * 关闭视图
 * @param vid 图标识
 */
function closeView(vid) {
    var vid = vid || getVid();
    opView(function (obj) {
        closeView_(obj.vid);
    },{vid:vid})
}

function refashView(vid) {
    opView(vid || getFrom(),function () {
        location.reload();
    })
}

function closeView_(url) {
   // url = url || getVid();
    for (i in wins){
        // console.log(wins[i])
        if(url.url == wins[i].url || url == wins[i].url || url == wins[i].vid) {
            layer.close(wins[i].index);
            wins[i].close = true;
        }
    }
}

/**
 * 组件完成通知方法
 * @param data 组件返回完成的界面
 */
function notifyView(data) {
    var vid = getVid()
    var from = getFrom()
    opView(function (obj) {
        //closeView(obj.vid);
        console.log(obj)
        //var data = {test:1,test2:2,r:"html1" +Math.random()};
        for (i in wins) {
            //console.log("-------successView__--------", obj.from, wins[i].vid)
            if(obj.vid == wins[i].vid) {//找出哪个视图的回调
                //console.log("info",obj.from, wins[i].call, obj)
                opView(obj.from, wins[i].call, obj.data)
            }
        }
    },{vid:vid, from: from, data: data})
}

/**
 * 将方法变成字符串
 * @param json
 * @returns {{call}|*}
 */
function viewFunToString(json) {
    json = json || {};
    for(i in json){
        if(typeof(json[i]) == "function"){
            json.call = json[i].toString()
        }
    }
    if(!json.call){
        json.call = function () {
            console.warn("没有回调方法!!!")
        }.toString()
    }
    return json;
}

/**
 * 操作视图方法
 * @param vid
 * @param fun
 * @param json
 */

function opView(vid, fun, json){
    if(typeof(vid) == "function"){
        fun = viewFunToString(fun);
        openFun_(vid, fun)
    }else{
        openFun_(function (fun) {
            var oo = {
                fun: fun.fun
            }
            console.log("--111-1--", fun.vid)
            if(document.getElementById(id__ + fun.vid)) {
                console.log("--111-2--", fun.vid)
                document.getElementById(id__ + fun.vid).contentWindow.postMessage(JSON.stringify(oo), '*');
            }else{
                if(fun.vid == "index"){
                    window.parent.postMessage(JSON.stringify(oo),'*');
                }else{
                    //window.parent.postMessage(JSON.stringify(oo),'*');
                    console.warn("viewid["+ fun.vid +"]不存在，回调执行失败!!!")
                }
            }
        },{vid: vid,fun:  fun.toString()+"("+ JSON.stringify(json) +")"})
    }
}
function openFun_(fun, json) {
    var obj = {
        type:"x",
        fun:fun.toString()+"("+ JSON.stringify(json) +")"
    }
    window.parent.postMessage(JSON.stringify(obj),'*');
}

function getVid() {
    return getQueryString_("vid");
}

function getFrom() {
    return getQueryString_("from");
}

function getQueryString_(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}