//get the clock type
var clocktype = document.getElementById("clock-type");

function initAnalog() {
  var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();
  var aguja = [ //calculo los angulos de cada aguja en degrees
    { manecilla: 'hours', degree: (hours * 30) + (minutes / 2)},
    {manecilla: 'minutes', degree: (minutes * 6)},
    {manecilla: 'seconds', degree: (seconds * 6)}];
  var elemento;
  for (var j = 0; j < aguja.length; j++) { //en cada loop se calcula el angulo
    elemento = document.querySelectorAll('.' + aguja[j].manecilla);
    for (var k = 0; k < elemento.length; k++) {
        elemento[k].style.webkitTransform = 'rotateZ('+ aguja[j].degree +'deg)';
        elemento[k].style.transform = 'rotateZ('+ aguja[j].degree +'deg)';
        if (aguja[j].manecilla === 'minutes') {
          elemento[k].parentNode.setAttribute('data-second-degree', aguja[j + 1].degree);
        }
    }
  }
}
clocktype.addEventListener('change',changeClock);

function changeClock(){
  var type = clocktype.options[clocktype.selectedIndex].text;
  var analogo = document.getElementById("analogo");
  var digital = document.getElementById("digital");
  var hr = document.getElementById("hr");
  var mn = document.getElementById("mn");
  var sg = document.getElementById("sg");
  var hrs = document.getElementById("hrs");
  var min = document.getElementById("min");

  if (type == "Analog") {
    initAnalog();
    analogo = "";
    hr="";
    mn="";
    sg="";
    digital.className += "hidden";
    hrs.className += "hidden";
    min.className += "hidden";
  }
  else{
    initDigital();
    digital = "";
    hrs="";
    min="";
    hr.className += "hidden";
    mn.className += "hidden";
    sg.className += "hidden";
    analogo.className += "hidden";
  }
}
function initDigital(){
  var date = new Date;
  var sec = date.getSeconds();
  var min = date.getMinutes();
  var hour = date.getHours();

  var secdig = document.getElementById("sdig");
  secdig.innerHTML = sec;
  var mindig = document.getElementById("mdig");
  mindig.innerHTML = min;
  var hourdig = document.getElementById("hdig");
  hourdig.innerHTML = hour;
}
//inicializo el reloj
setInterval(changeClock,1000);