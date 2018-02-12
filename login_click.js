function click(){
    var account ="",
        password ="";
    account = document.getElementById("account").value;
    password = document.getElementById("password").value;
    if(account == "123" && password == "123"){
        alert("登陆成功");        
    }else{
        alert("登陆失败");
        }
    }
