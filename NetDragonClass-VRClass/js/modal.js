//显示模态框
function showModal(obj){
//	首先显示遮罩
	$("#background-fex").css("display","block");
	//设置网页不能滚动
	$("body").css("overflow","hidden");
	//显示模态框
	obj.css("display","flex");
}
//隐藏模态框
function hideModal(obj){
	//关闭模态框
	obj.css("display","none");
	//设置网页能滚动
	$("body").css("overflow","auto");
	//关闭遮罩
	$("#background-fex").css("display","none");
}
