showSelect();
printAuthor();
//点击新建作品按钮显示模态框
$(document).on("click","#create-works",function(){
	$("#background-fex").css("z-index","0");
	showModal($("#modal-main"));
})

$(document).on("click",".closeModal",function(){
//	console.log($(this).parents(".modal-submit"));
	var obj=$(this).parents(".modal-submit");
	hideModal(obj);
//	console.log(obj.attr("id"));
	if(obj.attr("id")=="modal-author"){
		$("#background-fex").css("z-index","0");
	}else{
		//设置网页能滚动
		$("body").css("overflow","auto");
		//关闭遮罩
		$("#background-fex").css("display","none");
	}
	
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

$(document).on("click","#add-author",function(){
	//调整遮罩层位置
	$("#background-fex").css("z-index","2");
	showModal($("#modal-author"));
})

$(document).on("click","#btn-add",function(){
	var index=-1;
	for(var i in authorData){
		if($("#dataAuthor").val().indexOf(authorData[i])>=0){
			index=i;
		}
	}
	if(index>=0){
		author.push(authorData[index]);
		authorData.splice(index,1);
		showSelect();
	}
	else{
		alert("没有选择或者为空");
	}
	
})

$(document).on("click","#btn-remove",function(){
	var index=-1;
	for(var i in author){
		if($("#selectAuthor").val().indexOf(author[i])>=0){
			index=i;
		}
	}
	if(index>=0){
		authorData.push(author[index]);
		author.splice(index,1);
		showSelect();
	}else{
		alert("没有选择或者为空");
	}
	
})

$(document).on("click","#add-confirm",function(){
	printAuthor();
	$(this).parents(".modal-submit").find(".closeModal").click();
})

$(document).on("click","#fm-submit",function(){
	$(this).parents(".modal-submit").find(".closeModal").click();
})

$(document).on("click",".remove-authot",function(){
	
	var index=-1;
	for(var i in author){
		if($(this).prev().text().indexOf(author[i])>=0){
			index=i;
		}
	}
	if(index>=0){
		authorData.push(author[index]);
		author.splice(index,1);
		showSelect();
		printAuthor();
	}else{
		alert("没有选择或者为空");
	}
})
