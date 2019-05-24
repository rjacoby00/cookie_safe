var former = console.log;
submit_button = document.getElementById('submit');
console.log = function(msg){
    former(msg);  //maintains existing logging via the console.
    $("#mylog").append("<div>" + msg + "</div>");
}

window.onerror = function(message, url, linenumber) {
    console.log("JavaScript error: " + message + " on line " + 
            linenumber + " for " + url);
}

function logCookies(cookies) {
  document.getElementById("text_imput").value = document.cookie;
}

console.log(submit_button);

submit_button.addEventListner('click', function(event){
  document.getElementById("text_imput").value = "Can't click that!";
  event.preventDefault();
}, false);
