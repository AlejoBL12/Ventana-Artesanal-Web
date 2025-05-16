function previewImage(nb) {        
    var reader = new FileReader();         
    reader.readAsDataURL(document.getElementById('uploadImage'+nb).files[0]);         
    reader.onload = function (e) {             
        document.getElementById('uploadPreview'+nb).src = e.target.result;         
    };     
}


function previewImage(index) {
    const input = document.getElementById('uploadImage' + index);
    const preview = document.getElementById('uploadPreview' + index);

    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result; // Mostrar preview en la misma página
            // Guardar la imagen base64 en localStorage
            localStorage.setItem('imagenProducto', e.target.result);
        }
        reader.readAsDataURL(file);
    }
}


const parametros = new URLSearchParams(window.location.search);
const nombre = parametros.get('nombre');
const descripcion = parametros.get('descripcion');
const categoria = parametros.get('categoria');
const precio = parametros.get('precio');
let imagen = parametros.get('imagen');

if (!imagen) {
    imagen = localStorage.getItem('imagenProducto');
}

const producto = document.getElementById('producto');
producto.innerHTML = 
    `<h1>Tu Producto</h1>
    <div class="subproductos">
        <div class="contenido_producto">
            <img class="img_produc" src="${imagen}" alt="">

            <h3 class="titulo_produc">${nombre}</h3>
            <span>$ ${precio}</span>
            <div class="puntaje">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
            </div>
            <a href="index.html" ><button class="btn_1">Volver</button></a>
        </div>
    </div>`;


    //     `<div class="productos" id="productList">
    //     <article class="producto">
    //         <img src="${imagen}" alt="Imagen del producto"/>
    //         <h3>${nombre}</h3>
    //         <p>Categoría: ${categoria}</p>
    //         <p>Precio: $${precio}</p>
    //         <botto><a href="index.html">Volver</a></botto>
    //     </article>
    // </div>
    // <br><br>`