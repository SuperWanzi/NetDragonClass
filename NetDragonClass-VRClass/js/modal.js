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
}

var authorData=["李明","张三丰","吴老二","李四","周杰伦","斯琴","王小二"];
var author=[];

function showSelect(){
	$("#dataAuthor").html("");$("#selectAuthor").html("");
	var dataAuthor=document.getElementById("dataAuthor");
	var selectAuthor=document.getElementById("selectAuthor");
//	console.log("do it1")
	for(var i in authorData){
		var option=document.createElement('option');
		option.value=authorData[i];
		option.innerHTML=authorData[i];
		dataAuthor.appendChild(option);
//		console.log("do it2")
	}
	for(var i in author){
		var option=document.createElement('option');
		option.value=author[i];
		option.innerHTML=author[i];
		selectAuthor.appendChild(option);
	}
}

function printAuthor(){
	$(".input-author").html("");
	var authorlist=document.getElementsByClassName("input-author")[0];
	for(var i in author){
		var authorItem=document.createElement("div");
		authorItem.className="author-item";
		
		var spanname=document.createElement("span");
		spanname.className="author-name";
		spanname.innerHTML=author[i];
		authorItem.appendChild(spanname);
		var spanico=document.createElement("span");
		spanico.className="fa fa-times remove-authot";
		authorItem.appendChild(spanico);
		
		authorlist.appendChild(authorItem);
	}
}
