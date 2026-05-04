document.addEventListener("DOMContentLoaded", () => {

    const breadcrumb = document.getElementById("breadcrumb");
    if (!breadcrumb) return;

    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));

    const path = window.location.pathname.split("/").pop();

    let html = `
        <li class="breadcrumb-item">
            <a href="index.html">Inicio</a>
        </li>
    `;

    if (path === "producto.html" && id && typeof products !== "undefined") {

        const producto = products.find(p => Number(p.id) === id);

        if (producto) {

            html += `
                <li class="breadcrumb-item">
                    <a href="categorias.html">${producto.category}</a>
                </li>
                <li class="breadcrumb-item active">
                    ${producto.name}
                </li>
            `;
        }
    }

    breadcrumb.innerHTML = html;
});