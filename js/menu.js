// JavaScript Document
//下拉菜单设置
// var tt=false,mcurrent;//前一个变量用于设置定时器，后一个变量表示当前对象
// function setMenu(){
// 	if(!document.getElementsByTagName) return ;
// 	var items=document.getElementsByTagName("li");
// 	for(var ff=0;ff<items.length;ff++){
// 		if(items[ff].className!="menu") continue;
// 		thelink = findChild(items[ff],"A");
// 		thelink.onmouseover=showMenu;
// 		thelink.onmouseout=starTimers;
// 		if(ul=findChild(items[ff],"ul")){
// 			ul.style.display="none";
// 			for(var j=0;j<ul.childNodes.length;j++){
// 				ul.childNodes[j].onmouseover=resetTimers;
// 				ul.childNodes[j].onmouseout=startTimers;
// 			}
// 		}
// 	}
// }
// function findChild(obj,tag){
// 	var cn=obj.childNodes;
// 	for(var k=0;k<cn.length;k++){
// 		if(cn[k].nodeName==tag) return cn[k];
// 	}
// 	return false;
// }
// function showMenu(e){
// 	if(!e) {var e=window.event;}
// 	thislink=(e.target)?e.target:e.srcElement;
// 	resetTimers();
// 	if(mcurrent) hideMenu(current);
// 	thislink=thislink.parentNode;
// 	mcurrent=thislink;
// 	ul=findChild(thislink,"UL");
// 	if(!ul) return ;
// 	ul.style.display="block";
// }
// function hideMenu(thelink){
// 	ul=findChild(thelink,"UL");
// 	if(!ul) return ;
// 	ul.style.display="none";
// }
// function resetTimers(){
// 	if(tt) window.clearTimeout(tt);
// }
// function startTimers(){
// 	tt=window.setTimeout("hideMenu(mcurrent)",200);
// }
// setMenu();


/*轮播*/
window.onload = function(){
	/*隐藏/显示前进、后退图标*/
	let picSrc=["image/&gp=0.jpg","image/93.jpg","image/39.jpg"];
	let banner = document.getElementsByClassName('banner');
	banner[0].onmouseover = function(){
		clearInterval(timer);
		banner[0].children[1].style.display = 'block';
		banner[0].children[2].style.display = 'block';
	}

	banner[0].onmouseout = function (){
		banner[0].children[1].style.display = 'none';
		banner[0].children[2].style.display = 'none';
		disPic();
	}

	/*单击前进、后退事件*/
	banner[0].children[1].onclick = function() {
		clearInterval(timer);
		let img_src = banner[0].children[0].getAttribute('src');
		img_src = img_src.match(/[0-9]+\.[a-z]+/)[0];
		switch(img_src){
			case '0.jpg':img.src = picSrc[2];break;
			case '93.jpg':img.src = picSrc[0];break;
			case '39.jpg':;img.src = picSrc[1];break;
			default:;
		}
	}

	banner[0].children[2].onclick = function() {
		clearInterval(timer);
		let img_src = banner[0].children[0].getAttribute('src');
		img_src = img_src.match(/[0-9]+\.[a-z]+/)[0];
		switch(img_src){
			case '0.jpg':img.src = picSrc[1];break;
			case '93.jpg':img.src = picSrc[2];break;
			case '39.jpg':;img.src = picSrc[0];break;
			default:;
		}
	}

	/*轮播*/
	let timer = null;
	function disPic(){
		timer = setInterval(function (){
			let img_src = banner[0].children[0].getAttribute('src');
			img_src = img_src.match(/[0-9]+\.[a-z]+/)[0];
			switch(img_src){
				case '0.jpg':img.src = picSrc[1];break;
				case '93.jpg':img.src = picSrc[2];break;
				case '39.jpg':;img.src = picSrc[0];break;
				default:;
			}
		},2000);
	}
	disPic();

	/*下拉菜单*/
	function pulls(){
		let pull = document.getElementsByClassName('m');
		let ch = document.getElementsByClassName('ch');

		pull[0].onmouseover = function(){
			ch[0].style.display = 'block';
		}

		pull[0].onmouseout = function (){
			ch[0].style.display = 'none';
		}
	}
	pulls();

}