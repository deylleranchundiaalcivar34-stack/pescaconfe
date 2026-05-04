const params = new URLSearchParams(window.location.search);

const categoria = params.get("cat") || "";
const subcategoria = params.get("sub") || "";

let productos = [];
let paginaActual = 1;
const porPagina = 6;

// ================= INICIO =================
document.addEventListener("DOMContentLoaded", () => {

    if (typeof products === "undefined") {
        console.error("❌ products.js no cargado");
        return;
    }

    inicializar();
});

// ================= INICIALIZAR =================
function inicializar() {

    const priceRange = document.getElementById("priceRange");
    const priceValue = document.getElementById("priceValue");

    if (priceRange) {
        priceRange.addEventListener("input", () => {
            priceValue.innerText = "$" + priceRange.value;
            aplicarFiltros();
        });
    }

    const minInput = document.getElementById("minPrice");
    const sortInput = document.getElementById("sortPrice");

    if (minInput) minInput.addEventListener("input", aplicarFiltros);
    if (sortInput) sortInput.addEventListener("change", aplicarFiltros);

    aplicarFiltros();
}

// ================= FILTRADO BASE =================
function filtrarBase() {

    if (!Array.isArray(products)) return [];

    let lista = products;

    // 🔥 SOLO filtra si viene categoría
    if (categoria) {
        lista = lista.filter(p =>
            (p.category || "").toLowerCase() === categoria.toLowerCase()
        );
    }

    // 🔥 subcategoría solo si existe
    if (subcategoria) {
        lista = lista.filter(p =>
            (p.subcategory || "").toLowerCase().includes(subcategoria.toLowerCase())
        );
    }

    return lista;
}

// ================= APLICAR FILTROS =================
function aplicarFiltros() {

    let lista = filtrarBase();

    // ===== precio =====
    const min = parseFloat(document.getElementById("minPrice")?.value) || 0;
    const max = parseFloat(document.getElementById("priceRange")?.value) || 1000;

    lista = lista.filter(p => p.price >= min && p.price <= max);

    // ===== orden =====
    const sort = document.getElementById("sortPrice")?.value || "default";

    if (sort === "asc") {
        lista.sort((a, b) => a.price - b.price);
    }

    if (sort === "desc") {
        lista.sort((a, b) => b.price - a.price);
    }

    productos = lista;
    paginaActual = 1;

    render();
    renderPaginacion();

    // ===== título =====
    let titulo = categoria;

    if (subcategoria) {
        titulo += " / " + subcategoria;
    }

    const tituloEl = document.getElementById("categoria-titulo");
    if (tituloEl) {
        tituloEl.innerText = titulo.toUpperCase();
    }
}

// ================= RENDER PRODUCTOS =================
function render() {

    const cont = document.getElementById("productos-categoria");
    if (!cont) return;

    cont.innerHTML = "";

    const inicio = (paginaActual - 1) * porPagina;
    const pagina = productos.slice(inicio, inicio + porPagina);

    if (pagina.length === 0) {
        cont.innerHTML = `
            <div class="col-12 text-center text-muted">
                No hay productos disponibles
            </div>
        `;
        return;
    }

    pagina.forEach(p => {

        const img = p.images ? p.images[0] : p.img;

        cont.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="product-card">

                <img src="${img}" class="w-100">

                <div class="p-2">
                    <span class="text-muted">${p.subcategory || ""}</span>
                    <h5>${p.name}</h5>
                    <p class="text-success">$${p.price.toFixed(2)}</p>

                    <a href="producto.html?id=${p.id}" class="btn btn-outline-primary btn-sm w-100">
                        Ver producto
                    </a>
                </div>

            </div>
        </div>
        `;
    });
}

// ================= PAGINACIÓN =================
function renderPaginacion() {

    const cont = document.getElementById("paginacion");
    if (!cont) return;

    cont.innerHTML = "";

    const total = Math.ceil(productos.length / porPagina);

    for (let i = 1; i <= total; i++) {

        cont.innerHTML += `
        <button class="btn btn-sm ${i === paginaActual ? 'btn-primary' : 'btn-outline-primary'}"
            onclick="cambiarPagina(${i})">
            ${i}
        </button>
        `;
    }
}

function cambiarPagina(n) {
    paginaActual = n;
    render();
    renderPaginacion();
}