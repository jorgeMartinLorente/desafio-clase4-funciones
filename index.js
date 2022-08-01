

const precioSinEnvio = 15000;
let costoDeEnvio = 0;
let precioConEnvio;


function calcularEnvio (zonaDeEnvio = prompt("Escriba la provincia donde vive para calcular la zona de envio").toUpperCase()){

    switch (zonaDeEnvio){
        case "BUENOS AIRES":
            costoDeEnvio=0;
            console.log("tu zona no tiene envio");
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
        case "CORDOBA":
            costoDeEnvio=1000;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
        case "MISIONES":  
            costoDeEnvio=1500;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
        case "CORRIENTES":
            costoDeEnvio=1300;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
        case "FORMOSA": 
            costoDeEnvio=1600;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
        case "SANTA FE":
            costoDeEnvio=1550;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
        case "JUJUY": 
            costoDeEnvio=1900;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
        case "TUCUMAN":
            costoDeEnvio=1800;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
        case "MENDOZA":  costoDeEnvio=1500;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
        case "SANTIAGO DEL ESTERO":  
            costoDeEnvio=1800;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
        case "SAN LUIS":
            costoDeEnvio=1650;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
        case "ENTRE RIOS":  
            costoDeEnvio=1200;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
        case "SALTA":
            costoDeEnvio=1800;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
        case "RIO NEGRO":
            costoDeEnvio=1850;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
        case "CATAMARCA":  
            costoDeEnvio=1950;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
        case "CHACO":
            costoDeEnvio=1300;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
      case "LA RIOJA":
            costoDeEnvio=1600;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
      case "SAN JUAN":
            costoDeEnvio=1600;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
      case "CHUBUT":
            costoDeEnvio=1300;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
      case "LA PAMPA":
            costoDeEnvio=1850;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
      case "NEUQUEN":
            costoDeEnvio=1700;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
      case "SANTA CRUZ":
            costoDeEnvio=2100;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
      case "TIERRA DEL FUEGO":
            costoDeEnvio=2300;
            console.log("tu zona tiene un costo de envio adicional de $"+costoDeEnvio);
            precioConEnvio = precioSinEnvio+costoDeEnvio;
            console.log("el costo total de tu compra es "+precioConEnvio);
            break
    default :
            console.log("la provincia ingresada no existe")
    }
}
