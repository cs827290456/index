// var hxingInit
// hxingInit = {
// 	tabnav: 0
// };
// (function($, mui) {
// 	$(document).ready(function() {
// 		$("#navload").load("nav.html");
// 		$(".translateScroll input[type='text']").click(function() {
// 			var translateheight = $(this).parents(".mui-scroll").css("transform").split(",")[5].split(")")[0];
// 			var elemTop = $(this).offset().top
// 			var scrollheight = -parseInt(translateheight) + elemTop - 160
// 			mui('.mui-scroll-wrapper').scroll().scrollTo(0,-scrollheight,0);
// 		})
// 	})
// 	mui('.mui-scroll-wrapper').scroll({
// 		deceleration: 0.0006 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
// 	});
// 	$(".toggleCollapse .toggle-btn").on("click", function() {
// 		$(this).parents(".toggleCollapse").find(".toggle-collapse-content").toggle()
// 	})
// 	$(".datepicker").on("click", function() {
// 		$(".mui-dtpicker").next(".mui-backdrop").css("z-index", "9999");
// 	})
// 	$(".mui-indexed-list-inner ul").css("padding-bottom", $(".indexedHotCity").height() + 50 + "px")
// 	$.fn.loadingData={
// 			open:function(id){
// 				var html='<div id="dataLoading" class="box-space text-center"><img src="../../assets/images/loading2.gif"/></div>';
// 				$("#"+id).html(html)
// 			},
// 			close:function(){
// 				$("#dataLoading").remove()
// 			}
// 		}
// })(jQuery, mui);