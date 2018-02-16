function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
        {
            case "Febrero":
            alert ("este mes tiene 28 dias");
             break
             case "Enero":
             case "Marzo":
             case "mayo":
             case "julio":
             case "Agosto":
             case "Octubre":
             case "Diciembre":
            alert ("este mes tiene 31 dias");
            break
            default:
            alert ("este mes tiene 30 dias");
            break
            }


//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN