document.addEventListener("click", function(e) {
    if (e.target.classList.contains("view-product")) {
        const id = e.target.dataset.id;

        const producto = productos.find(p => p.id == id);

        localStorage.setItem("productoSeleccionado", JSON.stringify(producto));
    }
});