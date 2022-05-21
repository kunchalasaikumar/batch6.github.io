const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});
function signup()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("password").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("please enter user name.");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
		}
		else if(pwd.length < 8)
		{
			alert("Password should be minimum of 8 characters");
		}
		else
		{
      alert("You are successfully signed in");
		}
    localStorage.setItem("user-name",uname);
    localStorage.setItem("password",pwd);
	}
  function login()
  {
    var uname1 = document.getElementById("email1").value;
	var pwd1 = document.getElementById("password1").value;
    var uname=localStorage.getItem("user-name");
    var pwd=localStorage.getItem("password");
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(uname1 =='')
	{
		alert("please enter user name.");
	}
	else if(pwd1 =='')
	{
        alert("enter the password");
	}
    else if(uname === uname1 && pwd === pwd1)
    {
        alert("You are successfully logged in");
    }
    else
    {
        alert("Invalid username or password");
    }
  }
function SaveItem() {
			
	var name = document.forms.ShoppingList.name.value;
	var data = document.forms.ShoppingList.data.value;
	localStorage.setItem(name, data);
	doShowAll();
	
}

function ModifyItem() {
	var name1 = document.forms.ShoppingList.name.value;
	var data1 = document.forms.ShoppingList.data.value;
			if (localStorage.getItem(name1) !=null)
			{
			  localStorage.setItem(name1,data1);
			  document.forms.ShoppingList.data.value = localStorage.getItem(name1);
			}
		
	
	doShowAll();
}
function RemoveItem() {
	var name = document.forms.ShoppingList.name.value;
	document.forms.ShoppingList.data.value = localStorage.removeItem(name);
	doShowAll();
}

function ClearAll() {
	localStorage.clear();
	doShowAll();
} 
function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr><th>Item</th><th>Value</th></tr>\n";
		var i = 0;
		
		for (i = 0; i <= localStorage.length-1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
					+ localStorage.getItem(key) + "</td></tr>\n";
		}
		if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot save shopping list as your browser does not support HTML 5');
	}
}
function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		return true;
	} else {
			return false;
	}
}