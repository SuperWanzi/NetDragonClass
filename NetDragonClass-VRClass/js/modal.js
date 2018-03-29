//显示模态框
function showModal(obj){
//	首先显示遮罩
	$("#background-fex").css("display","block");
	//设置网页不能滚动
	$("body").css("overflow","hidden");
	//显示模态框
	obj.css("display","flex");
}
