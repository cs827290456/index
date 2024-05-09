/**
 *  公共上传图片拆件
    需要调整，之前的他妈的太难用了

 */

var CommUploadImg = {
    index: 1,
    initEvent: function (opts) {
        var that = this;
        that.opts = opts;
        var from_id = this.opts.from;
        var button_id = this.opts.button;

        $("body").on('tap', "#" + button_id, function (e) {
            var bthis = $(this);
            // $("#upFileBaseInfo").val(bthis.attr("imgType"));
            $("#imgType_file").val(bthis.attr("imgType"));
            $("#fileType_file").val(bthis.attr("fileType"));
            var index = that.index++
            var input_img_id = "img_" + index;
            that.indexImgId = input_img_id;
            that.index = index;
            that.eventId = $(this).attr("id");
            var input_img_name = that.opts.name
            // if (from_id === 'submitInfoStep2') { //第二步
            //     var id = bthis.attr("id");
            //     input_img_id = "img_" + id;
            //     input_img_name = "img" + id;
            // }
            if ($("#"+input_img_id).length > 0) { //存在了
                $("#"+input_img_id).attr("name", input_img_name);
            }else{
                $("#" + from_id).append('<input onchange="CommUploadImg.onchange(this)" data-index="'+ index +'"  id="' + input_img_id + '" name="' + input_img_name + '" type="file" accept="image/*"/>');
            }
            fileElem = document.getElementById("" + input_img_id);
            if(fileElem){
                fileElem.click();
            }
            console.log("eeeeeeeeeeeeeeeeeee11" +11 + "==" + bthis.attr("imgType"))
            if(e){
                console.log("eeeeeeeeeeeeeeeeeee")
                e.preventDefault();
            }
        });
        //alert(4)
    },
    success: function (data) {
        console.log("===上传文件信息===>>>>>>")
        console.log(data)
        if(data.code == "0000") {
            $("#" + this.indexImgId).remove()
            //this.opts.success(data.data.imgUrl, this.index)
            this.opts.success(data)
        }else if(data.code == "1111"){
            mui.toast(data.msg);
            window.setTimeout(function(){
              location = "login.html";
            },
            666)
            return;
        }else{
            mui.toast(data.msg);
        }
    },
    onchange:function(obj) {
        console.log("-----------onchange-------------------"+this.opts.from)
        //alert(">>>>" + $("#"+this.opts.from).attr("action"))
        $("#"+this.opts.from).submit();
    }
}

