function click(){
    var account ="",
        password ="";
    account = document.getElementById("account").value;
    password = document.getElementById("password").value;
    if(account != "123"){
        alert("账号错误");
        clearInput("password");
    }else if(password != "123"){
        alert("密码错误");
        clearInput("account");
    }else{
         alert("登陆成功");
    }

function clearInput(id) {
    document.getElementById(id).value = "";
}
