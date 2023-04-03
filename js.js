const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const mult = document.getElementById('mult');
const dividir = document.getElementById('dividir');

function mostrarDatos(datos){
    const div_resultado = document.getElementById('resultado');
    const titulo = document.createElement('h1');
    titulo.className = 'text-center';
    titulo.innerHTML = "Resultado";
    const resul = document.createElement('p');
    resul.className = "text-center mt-1";
    resul.innerHTML = "El resultado es <strong>" +datos+ "</strong>";
    div_resultado.insertBefore(resul, div_resultado.firstChild);
    div_resultado.insertBefore(titulo, div_resultado.firstChild);
}


sumar.addEventListener('click',
    async (event)=>{        
        event.preventDefault();
        const numero_1 = parseFloat(document.getElementById('num1').value);
        const numero_2 = parseFloat(document.getElementById('num2').value);
        const respuesta = await fetch('http://localhost:3000/sumar', 
        {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({numero_1, numero_2})
        }); 
        const datos = await respuesta.json();
        mostrarDatos(datos);
    }
)
restar.addEventListener('click',
    async (event)=>{        
        event.preventDefault();
        const numero_1 = parseFloat(document.getElementById('num1').value);
        const numero_2 = parseFloat(document.getElementById('num2').value);
        const respuesta = await fetch('http://localhost:3000/restar', 
        {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({numero_1, numero_2})
        }); 
        const datos = await respuesta.json();
        mostrarDatos(datos);
    }
)
mult.addEventListener('click',
    async (event)=>{        
        event.preventDefault();
        const numero_1 = parseFloat(document.getElementById('num1').value);
        const numero_2 = parseFloat(document.getElementById('num2').value);
        const respuesta = await fetch('http://localhost:3000/multiplicar', 
        {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({numero_1, numero_2})
        }); 
        const datos = await respuesta.json();
        mostrarDatos(datos);
    }
)
dividir.addEventListener('click',
    async (event)=>{        
        event.preventDefault();
        const numero_1 = parseFloat(document.getElementById('num1').value);
        const numero_2 = parseFloat(document.getElementById('num2').value);
        const respuesta = await fetch('http://localhost:3000/dividir', 
        {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({numero_1, numero_2})
        }); 
        const datos = await respuesta.json();
        mostrarDatos(datos);
    }
)