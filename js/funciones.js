/*******************************************************************/
/*                JavaScript de la página index                    */
/*           Autor :María Lucia Lopez Lopez                */
/*                 Versión : 1.0 - 01/12/2022                      */
/*******************************************************************/



/*********************** Función menú ******************************/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}