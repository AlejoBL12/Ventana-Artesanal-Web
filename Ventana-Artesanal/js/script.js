function previewImage(nb) {        
    var reader = new FileReader();         
    reader.readAsDataURL(document.getElementById('uploadImage'+nb).files[0]);         
    reader.onload = function (e) {             
        document.getElementById('uploadPreview'+nb).src = e.target.result;         
    };     
}

const parametros = new URLSearchParams(window.location.search);
const nombre = parametros.get('nombre');
const descripcion = parametros.get('descripcion');
const categoria = parametros.get('categoria');
const precio = parametros.get('precio');
const imagen = parametros.get('imagen');

const producto = document.getElementById('producto');
producto.innerHTML = 
    `<div class="productos" id="productList">
        <article class="producto">
            <img src="${imagen}"  />
            <h3>${nombre}</h3>
            <p>Categoría: ${categoria}</p>
            <p>Precio: $${precio}</p>
            <botto><a href="index.html">Volver</a></botto>
        </article>
    </div>
    <br><br>`;