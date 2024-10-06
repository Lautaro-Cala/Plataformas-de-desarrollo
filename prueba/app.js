function agregarProducto(dia, inputId, listaId) {
    document.getElementById(dia).addEventListener('click', function() {
        let input = document.getElementById(inputId);
        let producto = input.value;

        if (producto) {
            let li = document.createElement('li');
            li.textContent = producto;

            let eliminarBtn = document.createElement('button');
            eliminarBtn.textContent = 'Eliminar';
            eliminarBtn.addEventListener('click', function() {
                li.remove();
            });

            li.addEventListener('click', function() {
                li.classList.toggle('comprado');
            });

            li.appendChild(eliminarBtn);
            document.getElementById(listaId).appendChild(li);
            input.value = '';
        }
    });
}

// Aplicamos la función a cada día
agregarProducto('agregarBtn', 'productoInput', 'listaCompras');
agregarProducto('agregarBtn2', 'productoInput2', 'listaCompras2');
agregarProducto('agregarBtn3', 'productoInput3', 'listaCompras3');
agregarProducto('agregarBtn4', 'productoInput4', 'listaCompras4');
agregarProducto('agregarBtn5', 'productoInput5', 'listaCompras5');
agregarProducto('agregarBtn6', 'productoInput6', 'listaCompras6');
agregarProducto('agregarBtn7', 'productoInput7', 'listaCompras7');
