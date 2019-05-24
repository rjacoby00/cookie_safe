var former = console.log;
console.log = function(msg){
    former(msg);  //maintains existing logging via the console.
    $("#mylog").append("<div>" + msg + "</div>");
}

window.onerror = function(message, url, linenumber) {
    console.log("JavaScript error: " + message + " on line " + 
            linenumber + " for " + url);
}

function logCookies(cookies) {
  document.getElementById("text_imput").value = cookies;
}

var gettingAll = cookies.getAll({});
gettingAll.then(logCookies);

console.log("test");

document.getElementById('submit').addEventListner('click', function(event){
  document.getElementById("text_imput").value = "Can't click that!";
  event.preventDefault();
}, false);
