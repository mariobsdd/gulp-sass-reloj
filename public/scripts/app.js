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
//inicializo el reloj analogico
function changeClock(){
  var type = clocktype.options[clocktype.selectedIndex].text;
  alert(type);

  if (type == "Digital") {
    var kind = document.getElementById("clock-digital");
  }
}
initAnalog();

function initDigital{
  var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();
  
}