function logCookies(cookies) {
  document.getElementById("text_imput").value = cookies;
}

var gettingAll = browser.cookies.getAll({});
gettingAll.then(logCookies);

document.getElementById('submit').addEventListner('click', function(event){
  document.getElementById("text_imput").value = "Can't click that!";
  event.preventDefault();
}, false);
