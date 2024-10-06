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

document.getElementById('agregarBtn4').addEventListener('click', function() {
    let input4 = document.getElementById('productoInput4');
    let producto4 = input4.value;

    if (producto4) {
        let li = document.createElement('li');
        li.textContent = producto4;

        let eliminarBtn4 = document.createElement('button');
        eliminarBtn4.textContent = 'Eliminar';
        eliminarBtn4.addEventListener('click', function() {
            li.remove();
        });

        
        li.addEventListener('click', function() {
            li.classList.toggle('comprado');
        });

        li.appendChild(eliminarBtn4);
        document.getElementById('listaCompras4').appendChild(li);
        input4.value = ''; 
    }
});

document.getElementById('agregarBtn5').addEventListener('click', function() {
    let input5 = document.getElementById('productoInput5');
    let producto5 = input5.value;

    if (producto5) {
        let li = document.createElement('li');
        li.textContent = producto5;

        let eliminarBtn5 = document.createElement('button');
        eliminarBtn5.textContent = 'Eliminar';
        eliminarBtn5.addEventListener('click', function() {
            li.remove();
        });

        
        li.addEventListener('click', function() {
            li.classList.toggle('comprado');
        });

        li.appendChild(eliminarBtn5);
        document.getElementById('listaCompras5').appendChild(li);
        input5.value = ''; 
    }
});

document.getElementById('agregarBtn6').addEventListener('click', function() {
    let input6 = document.getElementById('productoInput6');
    let producto6 = input6.value;

    if (producto6) {
        let li = document.createElement('li');
        li.textContent = producto6;

        let eliminarBtn6 = document.createElement('button');
        eliminarBtn6.textContent = 'Eliminar';
        eliminarBtn6.addEventListener('click', function() {
            li.remove();
        });

        
        li.addEventListener('click', function() {
            li.classList.toggle('comprado');
        });

        li.appendChild(eliminarBtn6);
        document.getElementById('listaCompras6').appendChild(li);
        input6.value = ''; 
    }
});

document.getElementById('agregarBtn7').addEventListener('click', function() {
    let input7 = document.getElementById('productoInput7');
    let producto7 = input7.value;

    if (producto7) {
        let li = document.createElement('li');
        li.textContent = producto7;

        let eliminarBtn7 = document.createElement('button');
        eliminarBtn7.textContent = 'Eliminar';
        eliminarBtn7.addEventListener('click', function() {
            li.remove();
        });

        
        li.addEventListener('click', function() {
            li.classList.toggle('comprado');
        });

        li.appendChild(eliminarBtn7);
        document.getElementById('listaCompras7').appendChild(li);
        input7.value = ''; 
    }
});