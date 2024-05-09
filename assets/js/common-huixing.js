/*!
 * =====================================================
 * huixing v1.0.0 (17-07-20)
 * author:tanghao
 * =====================================================
 */
var huixing = {
    getUrl:function(){
				if(location.origin.indexOf("data.toroot.cn") != -1){
							return location.origin+ "/approval";
							// return "http://yakok.com:8088/p2p";
				}else{
					return location.origin;
				}
    },
    getImageUrl:function(){
        if(location.origin.indexOf("www.yakok.com") != -1){
            return "http://182.92.225.186:8088/file";
            // return "http://yakok.com:8088/p2p";
        }else{
            return location.origin + "/file";
        }
    },
	init: function(hxOptions) {
		var _huixing = this;
		var defaults = {
			basePath: "../assets", //资源库路径
			inputUp: true, //输入框被弹出键盘遮挡滚动定位,true为滚动，仅在输入框被遮挡情况下使用，同时要加上样式名.up-input
			deceleration: 0.0006, //页面滚动减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			swipeBack: true, //启用右滑关闭功能
			tabNav: 0, //底部导航默认值
			showTabNav: true, //是否显示底部导航
			slider: 0,
			scroll:true,
			htmlMode:true
		};
		var options = $.extend({}, defaults, hxOptions);
		var basePath = options.basePath;
		//输入框键盘遮挡滑动定位
		if(options.inputUp) {
			var u = navigator.userAgent;
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    		
			if(isiOS){
				$("input[type='text']").on("click",function() {
					var $this=$(this);
					var target=this;
					//if($("#upspace").length<=0){
						//$(".mui-scroll").append('<div style="width:100%;height:400px;" id="upspace"></div>');
					//}
					$("body").addClass("inputUpFix");
					setTimeout(function(){target.scrollIntoView(true)},200);
					
					$(".mui-bar-tab").hide();
				}).blur(function(){
					var target=this;
					//$("#upspace").remove();
					$("body").removeClass("inputUpFix");
					//mui('.mui-scroll-wrapper').scroll().reLayout();
					setTimeout(function(){target.scrollIntoView(false)},40);
					$(".mui-bar-tab").show();
				});

			}else{
				$("input[type='text'].up-input").on("click",function() {
					var translateheight = mui('.mui-scroll-wrapper').scroll().y;
					var elemTop = $(this).offset().top;
					var scrollheight = -translateheight + elemTop - 100;
					mui('.mui-scroll-wrapper').scroll().scrollTo(0, -scrollheight);
				});
			}
		}
		//区域滚动速度
		if(options.scroll) {
			mui('.mui-scroll-wrapper').scroll({
				deceleration: options.deceleration, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
				bounce:false
			});
		}
		//MUI初始化
		mui.init({
			swipeBack: options.swipeBack
		});
		mui('.hrefmode').on('tap', 'a', function() {
			document.location.href = this.href;
		});
		//城市索引
		$(".mui-indexed-list-inner ul").css("padding-bottom", $(".indexedHotCity").height() + 50 + "px");
		//头部加载
		if(options.htmlMode){
			if(options.showTabNav) {
				var url = "app-approval-nav.html"
				if(getUserInfo().isApprovalUser){
          url = "app-approval-admin-nav.html"
				}
				$("#navload").load(url, function() {
					_huixing.tabNav(options.tabNav);
				});
			} else {
				$("#navload").remove();
			};
		}
		//轮播图像
		if(options.slider > 0) {
			mui('.mui-slider').slider({
				interval: options.slider //自动轮播周期，若为0则不自动播放，默认为0；
			});
		}
		//复选框列表
		if($(".list-checkbox-group").length>0){
			$(".list-checkbox-group li input").each(function(){
				ifchecked($(this));
			});
			$(".list-checkbox-group li input").click(function(){
				ifchecked($(this));
			});
			function ifchecked(obj){
				if(obj.is(':checked')){
					obj.parents("li").addClass("checked");
				}else{
					obj.parents("li").removeClass("checked");
				}
			}
		}
	},
	listRadio: function(id, fun) {
		if(id != "" && $.type(id) != "undefined") {
			var $this = $("#" + id);
			$this.find("li").on("click", function() {
				$(this).addClass("active").siblings("li").removeClass("active");
				var selectRadioVal = $(this).val();
				if($.type(fun) == "function") {
					fun(selectRadioVal);
				}
			});
		} else {
			$(".list-select-radio.list-select-label").find("li").on("click", function() {
				$(this).addClass("active").siblings("li").removeClass("active");
			});
		}

	},
	listCheckbox: function() {
		$(".list-select-checkbox.list-select-label,.slide-sel-checkbox").on("click", "li",function() {
			if($(this).attr("value") == "all") {
				isActivedAll($(this));
			} else {
				isActived($(this));
			}

			function isActivedAll(obj) {
				if(obj.hasClass("active")) {
					obj.removeClass("active").siblings("li").removeClass("active");
				} else {
					obj.addClass("active").siblings("li").removeClass("active").addClass("active");
				}
			}

			function isActived(obj) {
				if(obj.hasClass("active")) {
					obj.removeClass("active");
					obj.parents("ul").find("li[value='all']").removeClass("active");
				} else {
					obj.addClass("active");
				}
			}

		});
	},
	setHome: function() {
		//首页动画
		setHome();
		$(window).resize(function() {
			setHome();
		});
		$(".new-home .pic-nav-wrap").slideDown();

		function setHome() {
			var winHeight = $(window).height();
			$(".new-home .mui-content").css("height", winHeight);
			if(winHeight <= 480) {
				$(".new-home .mui-content").css("background-position-y", "50%");
			}
		}

	},
	tabNav: function(tabNav) {
		$(".mui-bar-tab").find("a").removeClass("mui-active");
		$(".mui-bar-tab a").eq(tabNav).addClass("mui-active");
		mui('.mui-bar-tab').on('tap', 'a', function() {
            var url = this.href;// + "?r=" + Math.random() ;
            window.setTimeout(function(){
                document.location.href = url;//+ "?r=" + Math.random();
            }, 0)
		});
	},
	//加载中
	dataLoading: function(id) {
		var html;
		if($("#" + id).hasClass("pop-load")) {
			html = '<div id="dataLoading"><div class="pop-modal"></div><img src="' + hxOptions.basePath + '/images/loading.gif"/></div>';
			$("#" + id).append(html);
		} else {
			html = '<div id="dataLoading" class="box-space text-center"><img src="' + hxOptions.basePath + '/images/loading.gif"/></div>';
			$("#" + id).append(html);
		}

	},
	dataLoadingClose: function() {
		$("#dataLoading").remove();
	},
	//删除当前行
	delRow: function(index) {
		$(index).parents("li").remove();
	},
	//折叠区域
	conToggle: function(index) {
		var muiIcon = $(index).find(".mui-icon");
		var wrapID = $(index).parents(".toggle-wrap");
		var dataTargetID = $(index).attr("toggle-target");
		var dataTarget = wrapID.find('[toggle-id="' + dataTargetID + '"]');
		var reverseT= wrapID.find('[toggle-reverse="true"]');
		if(muiIcon.hasClass("mui-icon-arrowdown")) {
			muiIcon.removeClass("mui-icon-arrowdown").addClass("mui-icon-arrowup");
			dataTarget.show();
			reverseT.hide();
		} else if(muiIcon.hasClass("mui-icon-arrowup")) {
			muiIcon.removeClass("mui-icon-arrowup").addClass("mui-icon-arrowdown");
			dataTarget.hide();
			reverseT.show();
		}
	},
	//弹层选择器
	pop: {
		checkboxSubmit: function(index) {
			var elemObj = this.elemObj(index);
			var data = [];
			for(var i = 0; i < elemObj.findName.length; i++) {
				if(elemObj.findName[i].checked) {
					data.push(elemObj.findName[i].value);
				}
			}
			elemObj.fillVal.html(data.join(','));
			elemObj.fillVal.val(data.join(','));
			elemObj.muid.popover('toggle');

		},
		radioSubmit: function(index, success) {
			var elemObj = this.elemObj(index);
			success(elemObj.popname, elemObj.radioChecked);
			elemObj.muid.popover('toggle');
		},
		close: function(index) {
			var elemObj = this.elemObj(index);
			elemObj.muid.popover('toggle');
		},
		checkboxAll: function(index) {
			var elemObj = this.elemObj(index);
			elemObj.findName.prop("checked", true);
		},
		elemObj: function(index) {
			var popname = $(index).parents(".mui-popover").attr("id");
			var elemObj = {
				popname: popname,
				id: $("#" + popname),
				muid: mui("#" + popname),
				findName: $("#" + popname).find("[name=" + popname + "]"),
				fillVal: $('#' + popname + 'Val'),
				radioChecked: $("#" + popname).find("[name=" + popname + "]:checked")
			};
			return elemObj;
		}
	},
	//pingzheng
	listenSwitch: function(id) {
		document.getElementById(id).addEventListener("toggle", function(event) {
			if(event.detail.isActive) {
				$("#" + id + "Content").show();
			} else {
				$("#" + id + "Content").hide();
			}
		});
	},
	//选择日期
	pickerDate: function(options) {
		var nowDate = new Date();
		var nowDateStr = timetoString(nowDate);
		var defaults = {
			defaultDate: nowDateStr
		};
		options = $.extend({}, defaults, options);
		$("#pickerdateVal").html(new FormatDate(options.defaultDate).getMD);
		$("#datepicker").val(options.defaultDate);
		var realVal = $("#datepicker").val();
		var dateRange;
		dateRangePicker();
		dateRange.mOpts.realstartVal = options.defaultDate;

		function dateRangePicker() {
			dateRange = new pickerDateRange('datepicker', {
				aRecent7Days: 'aRecent7DaysID', //最近7天
				isTodayValid: true,
				//startDate: '2016-11-29',
				//endDate : '',
				needCompare: false,
				isSingleDay: true,
				shortOpr: true,
				inputTrigger: 'datepickerTrigger',
				theme: 'ta',
				success: function(obj) {
					realVal = $("#datepicker").val();
					$("#pickerdateVal").html(new FormatDate(obj.startDate).getMD);
				}
			});
		}

		function getDay(date) {
			var week;
			if(date.getDay() == 0) {
				week = "周日";
			}
			if(date.getDay() == 1) {
				week = "周一";
			}
			if(date.getDay() == 2) {
				week = "周二";
			}
			if(date.getDay() == 3) {
				week = "周三";
			}
			if(date.getDay() == 4) {
				week = "周四";
			}
			if(date.getDay() == 5) {
				week = "周五";
			}
			if(date.getDay() == 6) {
				week = "周六";
			}
			return week;
		}

		function FormatDate(date) {
			var getDate = new Date(date);
			var getWeek = getDay(getDate);
			this.getMD = getDate.getMonth() + 1 + '-' + getDate.getDate() + ' ' + getWeek;
		}

		function timetoString(time) {
			var getMonth = time.getMonth() + 1;
			var getDate = time.getDate();
			if(getMonth < 10) {
				getMonth = "0" + getMonth;
			}
			if(getDate < 10) {
				getDate = "0" + getDate;
			}
			return time.getFullYear() + '-' + getMonth + '-' + getDate;
		}
		$("#lastday").on('click', function() {
			lastNextBtn(-1);
			options.lastday({
				clickDate: $("#datepicker").val()
			});
		});
		$("#nextday").on('click', function() {
			lastNextBtn(1);
			options.nextday({
				clickDate: $("#datepicker").val()
			});
		});

		function hourSetZero(date) {
			date.setHours(0);
			date.setMinutes(0);
			date.setSeconds(0);
			date.setMilliseconds(0);
		}
		//前一天后一天操作
		function lastNextBtn(n) {
			var getDate = new Date(realVal);
			hourSetZero(nowDate);
			var opDate = new Date(getDate.getFullYear(), getDate.getMonth(), getDate.getDate() + n);
			hourSetZero(opDate);
			if(opDate.getTime() < nowDate.getTime()) {
				alert("您不能查看昨日的数据");
			} else {
				opDate = timetoString(opDate);
				$("#pickerdateVal").html(new FormatDate(opDate).getMD);

				$("#datepicker,#startDate").val(opDate);

				realVal = $("#datepicker").val();
				dateRange.mOpts.realstartVal = realVal;
			}
		}
	},
	tabPopUp:function(el,fun){
		var layerID;
		mui("#"+el+",."+el).on('tap', 'a', function() {
			var targetid = $(this).attr("data-target");
			tabLayerToggle(targetid);
			if($.type(fun)=="function"){
				fun();
			}
			var tabPopClose=function(targetid){
				layer.close(layerID);
			}
			huixing.tabPopClose=tabPopClose;
			$(window).resize(function() {
			  var newH=getH(targetid);
			  $("[index="+layerID+"]").find(".layermchild").css("height",newH);
			});
		});
		function tabLayerToggle(targetid){
			var h=getH(targetid);
			layerID=layer.open({
				type: 1,
				content: $("#" + targetid).html(),
				anim: 'up',
				style: 'position:fixed; bottom:0; left:0; width: 100%; padding:0; overflow:auto; border:none; height:'+h+'px'
			});
		}
		function getH(targetid){
			$("#" + targetid).css("display","block");
			var h=$("#" + targetid).outerHeight()-8;
			var winh=$(window).height();
			if(h>winh){
				h=winh;
			}
			$("#" + targetid).css("display","none");
			return h
		}
	},
	scrollTop:function(){
		var html='<div class="scrollTop"><div class="scrollbtn" id="scrollbtn" style="display:none"><span class="mui-icon mui-icon-arrowup"></span></div></div>';
		$("body").append(html);
		document.querySelector(".mui-scroll-wrapper").addEventListener("scroll",function(e){
			if(!this.initStartRun){
                this.initStartRun  = 1;
                window.setInterval("huixing.scrollTopRun()", 500);
			} 
		});
	},
	scrollTopRun:function(){
        if (mui('.mui-scroll-wrapper').scroll().y < -200) {
            $("#scrollbtn").show();
            $("#scrollbtn").click(function () {
                mui('.mui-scroll-wrapper').scroll().scrollTo(0, 0, 100);
            });
        } else {
            $("#scrollbtn").hide();
        }
	}
};