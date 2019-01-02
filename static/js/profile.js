function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

var tokenString = getCookie("jwt_token");
var token = jwt_decode(tokenString);

var loggedIn = document.getElementById("logged-in");
var notLoggedIn = document.getElementById("not-logged-in");
var userName = document.getElementById("user-name");
var userPicture = document.getElementById("user-picture");
var loginBtn = document.getElementById("login-btn");

// depending if we have a jwt token, we will display the name and the
// picture of the user
if (Object.keys(token).length > 0) {
    var name = token["name"];
    var names = name.split(" ");
    if (names.length > 0){
        userName.text = names[0];
    } else {
        userName.text = name;
    }
    if (token["picture"] != undefined){
      userPicture.src = token["picture"];
    }
    loggedIn.classList.remove("d-none");
    notLoggedIn.classList.add("d-none");
}