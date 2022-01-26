function login() {

    var uname = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    if (uname == "Iamac" && pass == "1234") {
        location.assign("http://127.0.0.1:5500/page.html")
    }
    else {
        window.alert("login failed")
    }

}