
//点击新建作品按钮显示模态框
$(document).on("click","#create-works",function(){
	$("#background-fex").css("z-index","0");
	showModal($("#modal-main"));
})

$(document).on("click",".closeModal",function(){
//	console.log($(this).parents(".modal-submit"));
	hideModal($(this).parents(".modal-submit"))
})
$(document).on("click","#ip-image",function(){
	$("#ipf-image").click();
})
//验证是否为图片格式
$(document).on("change","#ipf-image",function(){
	console.log($(this).val());
	var isImg=false;
	filename=$(this).val().split('\\');
	filename=filename[filename.length-1];
	console.log(filename);
	imgstr=["png","jpg"];
	for(var i in imgstr){
		var index=filename.indexOf(imgstr[i]);
		console.log(index)
		if(index>=0){
			$("#ip-image").val(filename);
			isImg=true;
		}
	}
	if(!isImg){
		alert("上传的不是支持的图片格式");
		$("#ip-image").val("");
	}
})