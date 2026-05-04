function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

window.syncCartUI = function () {

    let count = 0;
    let subtotal = 0;

    cart.forEach(item => {
        count += item.qty;
        subtotal += item.price * item.qty;
    });

    // badge navbar
    const cartCount = document.getElementById("cart-count");
    if (cartCount) cartCount.innerText = count;

    // si existe renderCart lo ejecuta
    if (typeof renderCart === "function") {
        renderCart();
    }
};

document.addEventListener("DOMContentLoaded", () => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    

    const cartCount = document.getElementById("cart-count");
    const cartItemsContainer =
    document.getElementById("cart-items") ||
    document.getElementById("cart-items-offcanvas");
    const cartTotal = document.getElementById("cart-total");

    // ================= CARGAR ENVÍO GUARDADO =================
    const savedEnvio = localStorage.getItem("tipoEnvio");

    if (savedEnvio) {
        const radio = document.querySelector(`input[name="envio"][value="${savedEnvio}"]`);
        if (radio) radio.checked = true;
    }

    // ================= AGREGAR =================
    document.querySelectorAll(".add-cart").forEach(btn => {
        btn.addEventListener("click", () => {

            const card = btn.closest(".product-card");

            const name = card.querySelector("h5").innerText;

            let priceText = card.querySelector(".price").innerText;
            priceText = priceText.replace("$", "").split(" ")[0];

            const price = parseFloat(priceText);
            const img = card.querySelector("img").src;

            addToCart({ name, price, img, qty: 1 });
        });
    });

    


    // ================= FUNCIONES =================

    function getProductImage(product) {
    if (product.images && product.images.length > 0) {
        return product.images[0]; // 👈 primera imagen
    }
    return product.img;
}
    function addToCart(product) {
    const existing = cart.find(p => p.name === product.name);

    if (existing) {
        existing.qty++;
    } else {
        cart.push(product);
    }

    saveCart();
    renderCart();

    emitCartUpdate(); // 🔥 IMPORTANTE
}

    window.removeFromCart = function(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
    emitCartUpdate(); // 🔥
}

    window.changeQty = function(index, amount) {
    cart[index].qty += amount;

    if (cart[index].qty <= 0) {
        removeFromCart(index);
        return;
    }

    saveCart();
    renderCart();
    emitCartUpdate(); // 🔥
}

window.addEventListener("storage", () => {
    syncCartUI();
});

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // ================= ENVÍO =================
    function calcularEnvio() {

        const metodo = localStorage.getItem("tipoEnvio") || "retiro";

        if (metodo === "retiro") return 0;

        let tieneCaña = cart.some(p => p.name.toLowerCase().includes("caña"));
        let tieneCarrete = cart.some(p => p.name.toLowerCase().includes("carrete"));

        if (tieneCaña) return 8.50;
        if (tieneCarrete) return 6.50;

        return 6.50;
    }

    // ================= RENDER =================
    window.renderCart = function () {

        let subtotal = 0;
        let count = 0;

        cart.forEach(item => {
            subtotal += item.price * item.qty;
            count += item.qty;
        });

        let envio = calcularEnvio();
        let total = subtotal + envio;

        // contador navbar
        if (cartCount) cartCount.innerText = count;

        // lista productos
        if (cartItemsContainer) {

            cartItemsContainer.innerHTML = "";

            cart.forEach((item, index) => {

                const subtotalItem = item.price * item.qty;

                cartItemsContainer.innerHTML += `
                    <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">

                        <img src="${item.img}" width="60">

                        <div class="flex-grow-1 ms-2">
                            <p class="mb-0">${item.name}</p>

                            <small>
                                $${item.price} x ${item.qty}
                            </small>

                            <div class="fw-bold text-success">
                                $${subtotalItem.toFixed(2)}
                            </div>
                        </div>

                        <div class="d-flex align-items-center">
                            <button class="btn btn-sm btn-outline-secondary me-1"
                                onclick="changeQty(${index}, -1)">-</button>

                            <span>${item.qty}</span>

                            <button class="btn btn-sm btn-outline-secondary ms-1"
                                onclick="changeQty(${index}, 1)">+</button>
                        </div>

                        <button class="btn btn-sm btn-danger ms-2"
                            onclick="removeFromCart(${index})">
                            <i class="bi bi-trash"></i>
                        </button>

                    </div>
                `;
            });
        }

        // total
        if (cartTotal) cartTotal.innerText = total.toFixed(2);

        // envío
        const envioSpan = document.getElementById("envio");
        if (envioSpan) envioSpan.innerText = envio.toFixed(2);
    }

    // ================= CAMBIO ENVÍO =================
    document.addEventListener("change", (e) => {
        if (e.target.name === "envio") {

            localStorage.setItem("tipoEnvio", e.target.value);

            renderCart();
        }
    });

    // ================= OFFCANVAS =================
    const carritoCanvas = document.getElementById("carrito");

    if (carritoCanvas) {
        carritoCanvas.addEventListener("show.bs.offcanvas", () => {
            syncCartUI();
        });
    }

    // INIT
    renderCart();
});

function activarBotonesCarrito() {

    document.querySelectorAll(".add-cart").forEach(btn => {

        btn.addEventListener("click", () => {

            const id = btn.dataset.id;

            const product = products.find(p => p.id == id);

            if (!product) return;

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            const existing = cart.find(p => p.name === product.name);

            if (existing) {
                existing.qty += 1;
            } else {
                cart.push({
                    name: product.name,
                    price: product.price,
                    img: product.images ? product.images[0] : product.img,
                    qty: 1
                });
            }

            localStorage.setItem("cart", JSON.stringify(cart));

            if (typeof renderCart === "function") renderCart();
        });

    });
}

// ================= SINCRONIZACIÓN ENTRE PESTAÑAS =================
window.addEventListener("storage", (e) => {

    // Solo reaccionamos si cambia el carrito o envío
    if (e.key === "cart" || e.key === "tipoEnvio") {

        // recargar carrito desde localStorage
        cart = JSON.parse(localStorage.getItem("cart")) || [];

        // volver a renderizar UI
        renderCart();
    }
});

function syncCartUI() {
    const cart = getCart();

    let count = 0;

    cart.forEach(item => count += item.qty);

    const cartCount = document.getElementById("cart-count");
    if (cartCount) cartCount.innerText = count;

    renderCart();
}

// ================= EVENTO GLOBAL DE SINCRONIZACIÓN =================
function emitCartUpdate() {
    window.dispatchEvent(new Event("cartUpdated"));
}