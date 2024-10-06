document.getElementById('agregarBtn').addEventListener('click', function() {
    let input = document.getElementById('productoInput');
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
        document.getElementById('listaCompras').appendChild(li);
        input.value = ''; 
    }
});

document.getElementById('agregarBtn2').addEventListener('click', function() {
    let input2 = document.getElementById('productoInput2');
    let producto2 = input2.value;

    if (producto2) {
        let li = document.createElement('li');
        li.textContent = producto2;

        let eliminarBtn2 = document.createElement('button');
        eliminarBtn2.textContent = 'Eliminar';
        eliminarBtn2.addEventListener('click', function() {
            li.remove();
        });

        
        li.addEventListener('click', function() {
            li.classList.toggle('comprado');
        });

        li.appendChild(eliminarBtn2);
        document.getElementById('listaCompras2').appendChild(li);
        input2.value = ''; 
    }
});

document.getElementById('agregarBtn3').addEventListener('click', function() {
    let input3 = document.getElementById('productoInput3');
    let producto3 = input3.value;

    if (producto3) {
        let li = document.createElement('li');
        li.textContent = producto3;

        let eliminarBtn3 = document.createElement('button');
        eliminarBtn3.textContent = 'Eliminar';
        eliminarBtn3.addEventListener('click', function() {
            li.remove();
        });

        
        li.addEventListener('click', function() {
            li.classList.toggle('comprado');
        });

        li.appendChild(eliminarBtn3);
        document.getElementById('listaCompras3').appendChild(li);
        input3.value = ''; 
    }
});

document.getElementById('agregarBtn2').addEventListener('click', function() {
    let input2 = document.getElementById('productoInput2');
    let producto2 = input2.value;

    if (producto2) {
        let li = document.createElement('li');
        li.textContent = producto2;

        let eliminarBtn2 = document.createElement('button');
        eliminarBtn2.textContent = 'Eliminar';
        eliminarBtn2.addEventListener('click', function() {
            li.remove();
        });

        
        li.addEventListener('click', function() {
            li.classList.toggle('comprado');
        });

        li.appendChild(eliminarBtn2);
        document.getElementById('listaCompras2').appendChild(li);
        input2.value = ''; 
    }
});