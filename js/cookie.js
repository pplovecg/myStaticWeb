/*创建和存储cookie*/
function setCookie(c_name,value,expiredays){//创建一个可在cookie变量中存储访问者姓名的函数
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);//将天数转换为日期
	document.cookie=c_name+"="+escape(value)+((expiredays==null)?" ":";expires="+exdate.toGMTString());//将cookie值名称等存入    document.cookie对象
	}
function getCookie(c_name){//创建函数老检查是否已经设置cookie
	if(document.cookie.length>0){//首先检查document.cookie对象中是否有cookie，如果有，那么会继续检查我们指定的cookie是否已经存储，如果
									//找到了所需cookie，就返回值，否则返回空字符串
		c_start=document.cookie.indexOf(c_name+"=");
		if(c_start!=-1){
			c_start=c_start+c_name.length+1;
			c_end=document.cookie.indexOf(";",c_start);
			if(c_end==-1){
				c_end=document.cookie.length;
				}
			return unescape(document.cookie.substring(c_start,c_end));
			}
		}
	}
function checkCookie(){//如果cookie已经设置，则显示欢迎词，否则显示提示框来要求用户输入名字
	var username=getCookie('username');
	if(username!=null&&username!=""){
		alert("welcome again"+username+"!");
		}
	else{
		username=prompt("Please enter your name:","");
		if(username!=null&&username!=""){
			setCookies("username",username,365);

			}

		}

	}