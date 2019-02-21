// JavaScript Document
function saveform(form){
	var check=true;
	var info=document.getElementById("save_info");//获取提示信息对象
	var loginname=form.form_loginname.value;//得到用户名信息
	var username=form.form_username.value;//得到姓名信息
	var password=form.form_password.value;//得到密码值
	var confirmpassword=form.form_checkpassword.value;//得到确认密码值
	var email=form.form_email.value;//得到密码值
	var usertel=form.form_tel.value;//得到电话
	var userdate=form.form_date.value;//得到日期
	
	info.innerHTML="";//清空提示信息
	if(loginname=="")//验证用户名
	{
		info.innerHTML="用户名不能为空";
		return false;
	}else{
		if(!checkloginname(loginname)){
			info.innerHTML="用户名只能为英文字符、数字";
			return false;}
			}
	if(username=="")//验证姓名
	{
		info.innerHTML="姓名不能为空";
		return false;
	}
	var checkpasswordinfo=checkpassword(password,confirmpassword);//验证密码
	if(checkpasswordinfo!="success")
	{
		info.innerHTML=checkpasswordinfo;
		return false;
	}
	if(email!=""&&!checkemail(email))//验证邮箱
	{
		info.innerHTML="邮箱格式错误，请重新填写";
		return false;
	}
	if(usertel!=""&&!checktel(usertel))//验证手机
	{
		info.innerHTML="手机格式错误，请重新填写";
		return false;
	}
	if(userdate=="")//验证出生日期
	{
		info.innerHTML="出生日期不能为空";
		return false;
	}else if(userdate!=""&&!checkdate(userdate)){
		info.innerHTML="出生日期格式错误，请重新填写";
		return false;
		}
	return true;//全部验证成功，返回true
}
//验证用户名只能是英文、数字的检查函数
function checkloginname(name){
	var regu="^[A-Za-z0-9]+$";
	var re=new RegExp(regu);
	return re.test(name);
	}
//验证密码的检查函数
function checkpassword(password,confirmpassword)
{
	var info="success";
	if(password==""||confirmpassword=="")
	{
		info="密码/确认密码不能为空";
	}else{
		if(password!=confirmpassword){
			info="密码/确认密码请保持一致"
			}
		}
	return info;
}
//验证邮箱的检查函数
function checkemail(email){
	var regu="^([\.a-zA-z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-z0-9_-])+";
	var re=new RegExp(regu);
	return re.test(email);
	}
//验证手机的检查函数
function checktel(tel){
	var regu="^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}|17[0-9]{9}$";
	var re=new RegExp(regu);
	return re.test(tel);
	}
//验证出生日期的检查函数
function checkdate(date){
	return (new Date(date).getDate()==date.substring(date.length-2));
	}