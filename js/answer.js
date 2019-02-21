// JavaScript Document
alert(0);
var num=3;
var i=19;
//声明计时函数
var intervalid;
intervalid=setTimeout(Timing(),1000);
function Timing(){
	document.getElementById("save_info").innerHTML=i;
	if(i==0){
		//执行隐藏函数
		next();
		//清除计时函数
		clearTimeout(intervalid);
		}
	i--;
}
//执行答题结束操作
function next(){
	//获取展示内容元素对象
	var main=document.getElementById("QuestionBox");
	//判断是否为最后一题
	if(num==0){
		//隐藏倒计时及答题按钮
		document.getElementById("Timinginfo").style.display="none";
		main.innerHTML="答题结束";
		}else{
			//显示下一题
			var content=document.getElementById("question_"+num).innerHTML;
			main.innerHTML=content;
			//重新执行计时
			i=20;
			document.getElementById("save_info").innerHTML=i;
			intervalid=setInterval(Timing(),1000);
		}
		num--;
}