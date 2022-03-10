const app = document.getElementById('app');
const numero = document.getElementById('numero');
const mostrar = document.getElementById('mostrar');
const bienvenidos = document.getElementById|('bienvenidos');


function printImage(numero){
    app.innerHTML = `<img src="./img/${numero}.jpg" />`
}


mostrar.addEventListener('click',e =>{
    e.preventDefault();

    app.removeChild(app.firstChild);

    const image = parseInt(numero.value);

    switch (image) {
        case 1:
            printImage(1);
            break;
        case 2:
            printImage(2);
            break;
        case 3:
            printImage(3);
            break;
        case 4:
            printImage(4);
            break;
        case 5:
            printImage(5);
            break;
        case 6:
            printImage(6);
            break;
        case 7:
            printImage(7);
            break;
        case 8:
            printImage(8);
            break;
        case 9:
            printImage(9);
            break;
        case 10:
            printImage(10);
            break;
        default:
            app.innerHTML = "<p>Coloca un numero del 1 al 10</p>"
            break;
    }

})