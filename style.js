let producto = ""

let resultado = 0

let costo = 0

let rta = ""



function introduccion() {
    alert("Bienvenidos a error clothes")
}

introduccion();

while (rta != "salir"){

    producto = prompt("¿Que deseas compar? (¿Buzo, Remera, Riñonera?)")

    costo = Number(prompt("Indique el costo de dicho producto"))

    resultado = resultado + costo

    rta = prompt("Si desea seguir comprando (Escriba 'si') \n\n¿Desea salir?(Escriba 'salir').").toLowerCase()

    alert("Su compra es de $ " + resultado)

}



if (resultado <= 6000 ){
    alert("Muchas gracias! Tienes un 5% de descuento en tu proxima compra!")
}else if (resultado <= 15000){
    alert("Muchas gracias! Tienes un 10% de descuento en tu proxima compra!")
}else if (resultado <= 30000){
    alert("Muchas gracias! Tienes un 20% de descuento en tu proxima compra!")
}else if (resultado > 50000){
    alert("Muchas gracias! Tienes un 25% de descuento en tu proxima compra!")
}else{
    alert("Muchas gracias!")
}