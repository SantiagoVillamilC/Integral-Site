//DARKMODE

const bdark = document.querySelector('#switch');
const body = document.querySelector('body');

load();

bdark.addEventListener('click', e => {
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'));

    // if (modeIcon.src.endsWith("luna.png")) {
    //     modeIcon.src = "assets/sol.png";
    // } else {
    //     modeIcon.src = "assets/luna.png";
    // }
});

function load() {
    const darkmode = localStorage.getItem('darkmode');

    if (!darkmode) {
        store('false');
        // modeIcon.src = "assets/luna.png";
    } else if (darkmode == 'true') {
        body.classList.add('darkmode');
        // modeIcon.src = "assets/sol.png";
    }
};

function store(value) {
    localStorage.setItem('darkmode', value);
};

// function calcular() {
//     var cantidadUnidades = parseFloat(document.getElementById('cantidadUnidades').value);
//     var tiempoDias = parseFloat(document.getElementById('tiempoDias').value);
//     var tasaDisminucion = parseFloat(document.getElementById('tasaDisminucion').value);
//     var diasCalculo = parseFloat(document.getElementById('diasCalculo').value);

//     // Asegurarse de que todos los campos están llenos y son números válidos
//     if (isNaN(cantidadUnidades) || isNaN(tiempoDias) || isNaN(tasaDisminucion) || isNaN(diasCalculo)) {
//         alert("Por favor, rellena todos los campos con números válidos.");
//         return;
//     }

//     // Implementación de la ecuación integral definida
//     var a = cantidadUnidades / tiempoDias;  // Calcula 'a' basado en las unidades vendidas y el tiempo transcurrido
//     var b = tasaDisminucion;  // La tasa de disminución por día

//     // Calcula la integral desde m hasta n (tiempoDias hasta tiempoDias + diasCalculo)
//     var resultado = 0;

// 	for (var t = tiempoDias; t <= tiempoDias + diasCalculo; t++) {
//         resultado += (a - b * t) * (tiempoDias + diasCalculo - tiempoDias) / diasCalculo;
// 	}

// 	// alert("El resultado es: " + resultado.toFixed(2));
//     document.getElementById('resultado').innerText = "Resultado: " + resultado.toFixed(2);
// }


function calcular() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const m = parseFloat(document.getElementById('m').value);
    const n = parseFloat(document.getElementById('n').value);

    if (isNaN(a) || isNaN(b) || isNaN(m) || isNaN(n)) {
        alert("Por favor, ingresa valores válidos");
        return;
    }

    //Aparecer seccion de resultados
    var cuadro = document.getElementById("respuestas");
    if (cuadro.style.display === "none" || cuadro.style.display === "") {
        cuadro.style.display = "block";
    } 
    // else {
    //     cuadro.style.display = "none";
    // }

    // Implementar la lógica para calcular la integral basada en la ecuación
    const resultado = (a * n - 0.5 * b * n * n) - (a * m - 0.5 * b * m * m);

    document.getElementById('resultado').innerText = resultado.toFixed(0);
    document.getElementById('disminucionUnidades').innerText = b.toFixed(0);
    document.getElementById('unidadesVendidas').innerText = a.toFixed(0);
    document.getElementById('dias').innerText = n.toFixed(0);

    document.getElementById('resultado2').innerText = resultado.toFixed(0);
    document.getElementById('disminucionUnidades2').innerText = b.toFixed(0);
    document.getElementById('unidadesVendidas2').innerText = a.toFixed(0);
    document.getElementById('dias2').innerText = n.toFixed(0);

    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('m').value = '';
    document.getElementById('n').value = '';

    a.focus();

    

    
}

// var copy = document.querySelector(".scroll-slide").cloneNode(true);
// document.querySelector('.scroll').appendChild(copy);