/*
1. Módulo de Tesorería: Pago de Permisos (Cálculos y Retorno)
El vecino ingresa el monto de su permiso de circulación para saber cuánto pagará tras el descuento municipal.

Lógica: Si el monto es mayor a $70.000, el descuento es del 15%. Si es menor, es del 5%.

Regla: La Función Principal debe mostrar el total a pagar con un signo de peso ($).
*/
function descuento(monto) {
    if (monto > 7000) {
        return monto * 0.15;
    } else {
        return monto * 0.05;
    }
}

function pagoPermiso() {
    const container = document.getElementById("containerPermiso");
    const resultado = document.getElementById("resultadoPermiso");
    const input = document.getElementById("inputMonto");
    let monto = Number(input.value);
    let descuento = descuento(monto);
    let totalAPagar = monto - descuento;
    resultado.textContent = `Total a pagar: ${totalAPagar}`;
    input.value = "";
    container.classList.remove("d-none");
}

/*
2. Módulo de Salud: Fila de Vacunación (Arreglos y Prioridad)
Gestión de nombres en la fila de espera del consultorio local.

Lógica: * Botón Normal: Agrega el nombre al final de la lista (push).
Botón Urgencia: Agrega el nombre al inicio de la lista (unshift).

Regla: El resultado debe mostrarse como una lista ordenada en el HTML. <ol>
*/

let filaVacunacion = [];
function lista() {
    const lista = document.getElementById("listaVacunacion");
    const container = document.getElementById("containerVacunacion");

    lista.innerHTML = "";
    for (let i = 0; i < filaVacunacion.length; i++) {
        lista.innerHTML += `<li>${filaVacunacion[i]}</li>`;
    }
    container.classList.remove("d-none");
}

function agregarNormal() {
    const input = document.getElementById("inputNombre");
    let nombre = input.value;

    if (nombre !== "") {
        filaVacunacion.push(nombre);
        input.value = "";
        lista();
    } else {
        alert("El nombre no puede estar vacio.")
    }
}

function urgencia() {
    const input = document.getElementById("inputNombre");
    let nombre = input.value;

    if (nombre !== "") {
        filaVacunacion.unshift(nombre);
        input.value = "";
        lista();
    } else {
        alert("El nombre no puede estar vacio.")
    }
}


/*
3. Módulo de Subsidios: Buscador de Beneficiarios (Ciclos e If)
Verificar si un RUT o nombre está en el listado de entrega de beneficios.

Lógica: Tener un arreglo con al menos 6 nombres. Usar un ciclo for para buscar si el dato ingresado existe en la lista.

Regla: La función debe devolver "Beneficiario Verificado" o "No registrado".
*/

function buscadorBeneficiarios() {
    enlistados = ["Mariano", "22986172-7", "Dany"]
    if (enlistado)
}