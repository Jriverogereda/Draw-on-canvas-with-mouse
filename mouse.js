
  var botonColor = document.getElementById("colorLienzo");
  var botonColor = document.getElementById("colorcito");
  var botonGrosor = document.getElementById("grosorcito");
  var reset = document.getElementById ("botonReset");
  var cuadrito = document.getElementById("area_de_dibujo");
  var lienzo = cuadrito.getContext("2d");
  reset.addEventListener("click", limpiarLienzo);
  botonColor.addEventListener("click", seleccionaColor);


var accion= false,
    antiguoX = 0,
    nuevoX = 0,
    antiguoY = 0,
    nuevoY = 0,
    punto = false;

var color = "red",
     y = 2;



         //agregamos los manejadores de eventos, 1 por cada accion del mouse.

    cuadrito.addEventListener("mousemove", function (ev) {
        coordenadaxy("move", ev)
    }, false);
   cuadrito.addEventListener("mousedown", function (ev) {
        coordenadaxy("down", ev)
    }, false);
    cuadrito.addEventListener("mouseup", function (ev) {
        coordenadaxy("up", ev)
    }, false);
    cuadrito.addEventListener("mouseout", function (ev) {
        coordenadaxy("out", ev)
    }, false);

function limpiarLienzo(){
console.log({ cuadrito, lienzo })
}

function seleccionaColor(){
alert("eso");
}


        // declarar la funcion para dibujar los pixeles.

    function dibujar() {
        lienzo.beginPath();
        lienzo.moveTo(antiguoX, antiguoY);
        lienzo.lineTo(nuevoX, nuevoY);
        lienzo.strokeStyle = color;
        lienzo.lineJoin = lienzo.lineCap = 'round';
        lienzo.lineWidth = 2;
        lienzo.stroke();
        lienzo.closePath();
    }




// funcion para encontrar el punto donde esta el mouse

    function coordenadaxy(click, ev) {
        if (click == "down") {
            antiguoX = nuevoX;
            antiguoY = nuevoY;
            nuevoX = ev.clientX - cuadrito.offsetLeft;
            nuevoY = ev.clientY - cuadrito.offsetTop;
            accion = true;
            punto = true;
            if (punto) {
                lienzo.beginPath();
                lienzo.fillStyle = color;
                lienzo.fillRect(nuevoX, nuevoY, 2, 2);
                lienzo.lineJoin = lienzo.lineCap = "round";
                lienzo.closePath();
                punto = false;
            }
        }
        if (click == "move") {
            if (accion) {// si el mouse se mueve la accion esta en true y se ejecuta la funcion dibujar
                antiguoX = nuevoX;
                antiguoY = nuevoY;
                nuevoX = ev.clientX - cuadrito.offsetLeft;
                nuevoY = ev.clientY - cuadrito.offsetTop;
                dibujar();
            }
          }
        if (click == "up" || click == "out") {
            accion = false;  // si se levanta el click del mouse la accion pasa a false
          }

        }
