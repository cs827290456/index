var hxingInit = {
	tabnav: 0
};
(function($, mui) {
    /**
     * 日期格式转换
     * @param format
     * @returns
     */
    Date.prototype.format = function (format) {

        if (this == "Invalid Date") {
            console.warn("无效日期");
            return "";
        }
        var o = {
            "M+": this.getMonth() + 1, //month
            "d+": this.getDate(), //day
            "h+": this.getHours(), //hour
            "m+": this.getMinutes(), //minute
            "s+": this.getSeconds(), //second
            "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
            "S": this.getMilliseconds() //millisecond
        };
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    };

    //除法函数，用来得到精确的除法结果
//说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
//调用：accDiv(arg1,arg2)
//返回值：arg1除以arg2的精确结果
    function accDiv(arg1, arg2) {
        var t1 = 0, t2 = 0, r1, r2;
        try {
            t1 = arg1.toString().split(".")[1].length
        } catch (e) {
        }
        try {
            t2 = arg2.toString().split(".")[1].length
        } catch (e) {
        }
        with (Math) {
            r1 = Number(arg1.toString().replace(".", ""));
            r2 = Number(arg2.toString().replace(".", ""));
            return (r1 / r2) * pow(10, t2 - t1);
        }
    }

//给Number类型增加一个div方法，调用起来更加方便。
    Number.prototype.div = function (arg) {
        return accDiv(this, arg);
    };
//乘法函数，用来得到精确的乘法结果
//说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
//调用：accMul(arg1,arg2)
//返回值：arg1乘以arg2的精确结果
    function accMul(arg1, arg2) {
        var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
        try {
            m += s1.split(".")[1].length
        } catch (e) {
        }
        try {
            m += s2.split(".")[1].length
        } catch (e) {
        }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    }

//给Number类型增加一个mul方法，调用起来更加方便。
    Number.prototype.mul = function (arg) {
        return accMul(arg, this);
    };
//加法函数，用来得到精确的加法结果
//说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
//调用：accAdd(arg1,arg2)
//返回值：arg1加上arg2的精确结果
    function accAdd(arg1, arg2) {
        var r1, r2, m;
        try {
            r1 = arg1.toString().split(".")[1].length
        } catch (e) {
            r1 = 0
        }
        try {
            r2 = arg2.toString().split(".")[1].length
        } catch (e) {
            r2 = 0
        }
        m = Math.pow(10, Math.max(r1, r2));
        return (arg1 * m + arg2 * m) / m;
    }

//给Number类型增加一个add方法，调用起来更加方便。
    Number.prototype.add = function (arg) {
        return accAdd(arg, this);
    }
//减法函数
    function accSub(arg1, arg2) {
        var r1, r2, m, n;
        try {
            r1 = arg1.toString().split(".")[1].length
        } catch (e) {
            r1 = 0
        }
        try {
            r2 = arg2.toString().split(".")[1].length
        } catch (e) {
            r2 = 0
        }
        m = Math.pow(10, Math.max(r1, r2));
        //last modify by deeka
        //动态控制精度长度
        n = (r1 >= r2) ? r1 : r2;
        return ((arg2 * m - arg1 * m) / m).toFixed(n);
    }

///给number类增加一个sub方法，调用起来更加方便
    Number.prototype.sub = function (arg) {
        return accSub(arg, this);
    };

	// $(document).ready(function () {
	// 	$("#navload").load(ctx + "/mobile/toNav.do");
	// });
	$(function () {
		//加上up-input样式防止手机键盘挡住输入框
		$("input[type='text'].up-input").on('click',function(){
			var translateheight=$(this).parents(".mui-scroll").css("transform").split(",")[5].split(")")[0];
			var elemTop = $(this).offset().top;
			var scrollheight = -parseInt(translateheight) + elemTop - 160;
			// console.log(elemTop + "," + translateheight + "," + scrollheight);
			// $(this).parents(".mui-scroll").attr("style", "-webkit-transform:translateY(-" + scrollheight + "px);-webkit-transition-duration:.3s");
			mui('.mui-scroll-wrapper').scroll().scrollTo(0, - scrollheight);
		})
	});

	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0006 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
	mui('.hrefmode').on('tap','a',function(){document.location.href=this.href;});
	$(".toggleCollapse .toggle-btn").on("click",function(){
		$(this).parents(".toggleCollapse").find(".toggle-collapse-content").toggle()
	})	
	$.fn.loadingData={
			open:function(id){
				var html='<div id="dataLoading" class="box-space text-center"><img src="'+ context +'/view/hxtx/mobile/assets/images/loading.gif"/></div>';
				$("#"+id).append(html)
			},
			close:function(id){
				$("#dataLoading").remove()
			}
		}
	$.fn.loadingData4el={
			open:function(el){
				var html='<div id="dataLoading4el" class="box-space text-center"><img src="'+ context +'/view/hxtx/mobile/assets/images/loading.gif"/></div>';
				$(el).append(html)
			},
			close:function(el){
				$("#dataLoading4el").remove()
			}
		}

    $.subPage = function(opts){
        var defaults = {
            url:'',   /*页面地址，必传*/
            select:null, /*选择后的回调函数，必传*/
            pageId:'subPage' + new Date().getTime(), /*页面的ID，最好是传*/
            multiSelect:false /*是否多选，默认false*/
        };
        opts = $.extend(defaults, opts);
        opts.type = opts.multiSelect? 'checkbox':'radio';
        var myPage = $('#' + opts.pageId);
        if(myPage.size() === 0){
            var subPage = '<div class="mySubPage rollIn animated" id="' + opts.pageId+'" style="display: none"></div>';
            $('body').append(subPage);
            myPage = $('#' + opts.pageId);
        }
        myPage.load(opts.url,  function(){
            $(this).show();
        }).off('click').on('click', '.btn-select', function(){
            var selectedData = [];
            myPage.find(':' + opts.type + ':checked').each(function(){
                selectedData.push($(this).data('json'))
            });
            opts.select(selectedData);
            myPage.hide()
        });
        $('body').on('click','.mySubPage .mui-icon-arrowleft',function(){
            $(this).closest('.mySubPage').hide();
        })
        return myPage;

    }
})(jQuery, mui);


function addDay(dt, day){
    var a = new Date(dt);
    a = a.valueOf();
    a = a + day * 24 * 60 * 60 * 1000;
    return new Date(a)
}

function commDate(str){
    return new Date(str.replace(/-/g, '/'))
}


var MemoryUtil  = {
    setMemory: function (name, value) {
        return localStorage.setItem(name, value);
    }, getMemory: function (name) {
        return localStorage.getItem(name);
    }, setSession: function (key, value) {
        sessionStorage.setItem(key, value)
    }, getSession: function (key) {
        return sessionStorage.getItem(key)
    }
}

function loading(){
    var html = '<div class="mui-backdrop-new" id="sysloading" style="margin-top: 0px;opacity:10;color: red;vertical-align: middle;text-align:center;line-height: '+ $(window).height() +'px;">' +
        //'<center>加载中...</center>' +
        '<center>&nbsp;<img src="../assets/images/loading.gif"/>&nbsp;</center>' +
        '</div>'
    $(document.body).append(html)
}

function closeLoading(){
    $("#sysloading").remove();
}

function getQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

function getProjectInfo() {
    if(location.origin.indexOf("data.toroot.cn") != -1 || location.origin.indexOf("localhost") != -1 || location.origin.indexOf("192.168") != -1){
        return "/approval"
    }else{
        return "";
    }
}

//上传文件
function submitFileDataByMUI(script,json, callback){
    var  serverURL = getProjectInfo() + "/" + script;
    console.log("mui--submitFileDataByMUI--serverURL="+ serverURL)
    loading();
    $.ajax({
        //url:'http://localhost:8899/approval/api/approval/upfile.do', /*接口域名地址*/
        url: serverURL,
        type:'post',
        data: json,
        contentType: false,
        processData: false,
        success:function(res){
            closeLoading();
            /*
            console.log(res);
            console.log(res.code == "0000");
            if(res.code == "0000" && res.data){
                $("#" + res.data.id + "_value").val(res.data.value);
                $("#" + res.data.id + "_info").html("上传成功");
            }else{
                $("#" + res.data.id + "_value").val("");
                $("#" + res.data.id + "_info").html("文件清空");
            }
            */
            callback(res)
        },
        error:function(xhr,type,errorThrown){
            closeLoading();
        }
    })
}

function submitDataByMUI(script, json, callback){
    var serverURL = huixing.getUrl() + "/api.do";
    //var serverURL = "approval/api/approval/saveAppOrder.do";// huixing.getUrl() + "/api.do";
    //http://localhost:8899/approval/approval/api/approval/saveAppOrder.do
    //http://localhost:8899/approval/
    //serverURL = "/approval/" + script;
    serverURL = getProjectInfo() + "/" + script;
      // if(location.origin.indexOf("data.toroot.cn") != -1 || location.origin.indexOf("localhost") != -1 || location.origin.indexOf("192.168.1") != -1){
      //   serverURL = "/approval/" + script;
      // }if(location.origin.indexOf("data.toroot.cn") != -1 || location.origin.indexOf("localhost") != -1 || location.origin.indexOf("192.168.1") != -1){
    //       //   serverURL = "/approval/" + script;
    //       // }
    console.log("mui--ajax--serverURL="+ serverURL)
    loading();
    console.log("mui--ajax222")
    mui.ajax(serverURL,{
        data: json,// {data:JSON.stringify(json)},
        dataType:'json',//服务器返回json格式数据
        type:'post',//HTTP请求类型
        timeout:10000,//超时时间设置为10秒；
        // headers:{'Content-Type':'application/json'},
        success:function(data){
            //服务器返回响应，根据响应结果，分析是否登录成功；
            console.log("mui--ajaxok.....")
            closeLoading();
            if(!data){
                showSystemInfo("服务器处理失败请稍后重试");
                return;
            }
            if(data.code != "0000"){
                showSystemInfo(data.msg);
                if(data.code == "2323"){
                    location = "app-login.html"
                }
                return;
            }
            if(data.data &&  data.data.auto_update_user_info){
                console.log("-------auto_update_user_info---------");
                saveUserInfo(data.data.auto_update_user_info)
            }
            if(callback){
                callback(data);
            }
            // if(!data){
            //     showSystemInfo("服务器处理失败请稍后重试");
            //     return;
            // }
            // console.log(data);
            // if(data.errorMsg){
            //     // mui.alert(data.errorMsg);
            //     showSystemInfo(data.errorMsg)
            //     if(data.fun){
            //         window.setTimeout(function(){
            //             eval(data.fun);
            //         }, 666)
            //     }
            // }else{
            //     if(callback){
            //         if(data.code == "0000"){
            //             callback(data);
            //         }else{
            //             // mui.alert("服务器处理失败，请稍后重试!")
            //             showSystemInfo("服务器处理失败，请稍后重试!");
            //         }
            //     }
            // }
        },
        error:function(xhr,type,errorThrown){
            closeLoading();
            console.log(type);
            if("timeout" == type){
                // mui.alert("访问服务器失败请稍后重试!!!")
                showSystemInfo("访问服务器超时请稍后重试!!!");
            }else{
                showSystemInfo("访问服务器失败请稍后重试!!!");
            }
        }
    });
}

function showSystemInfo(msg){
    mui.alert(msg)
    //layer.open({title:"提示",content:msg});
}

function submitData(script, json, callback){
    if(script){
        json["script"] = script;
    }
    submitDataByMUI(script, json, callback);
    // submitDataByJQ(script, json, callback);
}

function submitDataByJQ(serverURL, json, callback){
    loading();
    $.ajax({
        url:serverURL,// "http://localhost:8888/api.do",
        type: 'post',
        dataType: 'json',
        data: {data:JSON.stringify(json)},
        success: function (data) {
            closeLoading();
            //console.log( data);
            if(callback){
                callback(data);
            }
        }
    })
}

function saveUserInfo(info){
    localStorage.setItem("app_user_info", JSON.stringify(info||{}))
}

function getUserInfo(){
  // id: 1
  // passRand: null
  // passWord: null
  // status: 1
  // userMobile: "888888"
  // userName: "888888"
  return JSON.parse(localStorage.getItem("app_user_info") || "{}")
}

function getUserNameInfo(){
    var user = JSON.parse(localStorage.getItem("app_user_info") || "{}");
    if(user.userInfo && user.userInfo.userName){
        return user.userInfo.userName;
    }
    return null;
}

function getOrderLogsInfo(logs, order, divId, id) {
    if(logs && logs.length >0){
        if(divId){
            $("#" + divId).show();
        }
        var logsHtml = "<li class='active'>"+ order.oCreateUser +"发起申请</li>";
        for(l in logs){
            var date = logs[l].cdate;
            logsHtml += "<li>"+ logs[l].info +"["+ date.substr(5,2)+"月" +　date.substr(8,2) +"日"+ date.substr(11,5)+"]"+"</li>"
        }
        $("#" + id).html(logsHtml);
    }
}

//制保留2位小数，如：2，会在2后面补上00.即2.00
function toDecimal2(x) {
      var f = parseFloat(x);
      if (isNaN(f)) {
        return false;
      }
      var f = Math.round(x*100)/100;
      var s = f.toString();
      var rs = s.indexOf('.');
      if (rs < 0) {
        rs = s.length;
        s += '.';
      }
      while (s.length <= rs + 2) {
        s += '0';
      }
      return s;
}

//商品，客户账期
function getDeductionRate32(form, zq) {
    var deductionRate = {
        number: toDecimal2(0),
        info : null
    }

    if(form){
        var storageInfo = 0;
        if(form.storageInfo == "冷链"){
            storageInfo = 1;
        }
        var taxRate = 0;
        if(form.taxRate == "3"){
            taxRate = 3;
        }
        if(form.payType == "提前付款"){
            var customerCycle =  parseFloat(form.customerCycle||0)
            var payAdvanceMonth = parseFloat(form.payAdvanceMonth||0)
            var value  =  customerCycle - payAdvanceMonth + 3 + storageInfo + taxRate
            deductionRate.number = toDecimal2((1 - (value)/100)*100)
            deductionRate.info = "公式:客户账期-付款方式+配送+存储方式+税率<br>数值:" + customerCycle + "-" + payAdvanceMonth + "+3+" + storageInfo+ "+"  + taxRate + "=" + value;
            return deductionRate;
        }else if(form.payType == "到款付款"){
            var value  =  3 + storageInfo + taxRate
            deductionRate.info = "公式:配送费+存储方式+税率<br>数值:" + "3+" + storageInfo+ "+"  + taxRate + "=" + value;
            deductionRate.number =  toDecimal2((1 - (value)/100) *100);
            return deductionRate;
        }else{
            deductionRate.info = "垫资付款,暂无计算公式默认为:0.00%"
            return deductionRate;
        }
    }

    return deductionRate;
}

function getDeductionRate3(form) {
  /**
   提前付款计算 =
   1 - (客户账期 - 付款方式 + 配送费 + 存储方式 + 税率)/100

   提前付款计算公式：
   示例 1
   客户账期  10个月
   付款方式  提前2个月
   配送费    3 (固定)
   存储方式  冷链1 常温0
   税率     16%  (只有3%的情况才加)
   最后得出  核定扣率(3) =  1-(10-2 +3 +1+ 0)/100

   到款付款 ：
   计算公式 =配送费+存储方式+税率
   */
    var deductionRate = {
        number: toDecimal2(0),
        info : null
    }
    if(form){

        var postPoint = 3; //配送费
        if(form.number2){
            postPoint = parseFloat(form.number2);
        }

        var storageInfo = 0;
        if(form.storageInfo == "冷链"){
            storageInfo = 1;
        }
        var taxRate = 0;
        if(form.taxRate == "3"){
            taxRate = 3;        //税
        }
        if(form.payType == "提前付款"){
            var customerCycle =  parseFloat(form.customerCycle||0)
            var payAdvanceMonth = parseFloat(form.payAdvanceMonth||0)
            var number1 = parseFloat(form.number1||0)
            var value  =  toDecimal2((customerCycle - payAdvanceMonth) *(1-number1) + postPoint + storageInfo + taxRate)
            //console.log(form)
            //console.log(form.numer1)
            //console.log( parseFloat(form.number||0))
            //console.log(value)
            deductionRate.number = toDecimal2((1 - (value)/100)*100)
            deductionRate.info = "公式:(客户账期-付款方式)*优惠利息+配送+存储方式+税率<br>数值:(" + customerCycle + "-" + payAdvanceMonth +")*(1-" + number1 + ")+"+ postPoint + "+" + storageInfo+ "+"  + taxRate + "=" + value;
            return deductionRate;
        }else if(form.payType == "到款付款"){
            var value  =  postPoint + storageInfo + taxRate
            deductionRate.info = "公式:配送费+存储方式+税率<br>数值:" + postPoint +"+" + storageInfo+ "+"  + taxRate + "=" + value;
            deductionRate.number =  toDecimal2((1 - (value)/100) *100);
          return deductionRate;
        }else{
            deductionRate.info = "垫资付款,暂无计算公式默认为:0.00%"
            return deductionRate;
        }
    }else{
        return deductionRate;
    }
} 
