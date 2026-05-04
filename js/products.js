// ================= BASE DE DATOS =================
const products = [
    {
        id: 1,
        name: "Carrete Spinning Penn Battle IV 5000",
        price: 190.00,
        category: "Carretes",
        subcategory: "Spinning",
        images: [
            "img/productos/carretes/penn_battle_iv_5000.jpg",
            "img/productos/carretes/penn_battle_iv_5000_2.jpg",
            "img/productos/carretes/penn_battle_iv_5000_3.png"
        ]
    },
    {
        id: 2,
        name: "Carrete Spinning Okuma Cedros 8000",
        price: 198.00,
        category: "Carretes",
        subcategory: "Spinning",
        images: [
            "img/productos/carretes/okuma_cedros_8000.png",
            "img/productos/carretes/okuma_cedros_8000_2.png",
            "img/productos/carretes/okuma_cedros_8000_3.png",
            "img/productos/carretes/okuma_cedros_8000_4.png"
        ]
    },
    {
        id: 3,
        name: "Carrete Spinning Penn Battle III DX 3000",
        price: 180.00,
        category: "Carretes",
        subcategory: "Spinning",
        images: [
            "img/productos/carretes/penn_battle_iii_dx_3000.jpg",
            "img/productos/carretes/penn_battle_iii_dx_3000_2.jpg",
            "img/productos/carretes/penn_battle_iii_dx_3000_3.jpg"
        ]
    },
    {
        id: 4,
        name: "Carrete Spinning Rapala Shadow 6000",
        price: 48.00,
        category: "Carretes",
        subcategory: "Spinning",
        images: [
            "img/productos/carretes/rapala_shdow_6000.png",
            "img/productos/carretes/rapala_shdow_6000_2.png",
            "img/productos/carretes/rapala_shdow_6000_3.png"
        ]
    },
    {
        id: 5,
        name: "Carrete Casting Marine Caster Power Plus",
        price: 120.00,
        category: "Carretes",
        subcategory: "Casting",
        images: [
            "img/productos/carretes/marine_caster_power_plus.jpg",
            "img/productos/carretes/marine_caster_power_plus_2.png",
            "img/productos/carretes/marine_caster_power_plus_3.png"
        ]
    },
    {
        id: 6,
        name: "Caña Trolling Penn Mariner III (80-200lb)",
        price: 110.00,
        category: "Cañas",
        subcategory: "Trolling",
        description: `
            Caña diseñada para trolling de alta resistencia, ideal para pesca en mar abierto.
            Fabricada con materiales reforzados para máxima durabilidad.`,
        additionalInfo: {
            largo: ["1.60 mts", "1.83 mts", "1.95 mts", "2.13 mts"],
            libras: ["10-20 LBS", "15-30 LBS", "20-40 LBS"],
            material: "Carbono reforzado",
            accion: "Media - Pesada"
        },
        images: [
            "img/productos/cañas/penn_mariner_iii.png",
            "img/productos/cañas/penn_mariner_iii_2.png",
            "img/productos/cañas/penn_mariner_iii_3.png"
        ]
    },
    {
        id: 7,
        name: "Caña Popping Metaloid Bahía",
        price: 148.00,
        category: "Cañas",
        subcategory: "Popping",
        images: [
            "img/productos/cañas/metaloid_bahia.png",
            "img/productos/cañas/metaloid_bahia_2.png",
        ]
    },
    {
        id: 8,
        name: "Caña Casting Marine Evolution GT2",
        price: 97.50,
        category: "Cañas",
        subcategory: "Casting",
        images: [
            "img/productos/cañas/marine_gt2.png",
            "img/productos/cañas/marine_gt2_2.png",
        ]
    },
    {
        id: 9,
        name: "Señuelo Hook Jerk Minnow 105",
        price: 12.50,
        category: "Señuelos",
        subcategory: "parario",
        description: `
            Señuelo infalible con colores Matador* , para especies, Róbalo, Corvina, sabalo, dorado, cubo, etc.., ...Especies para mar o río. Disponible en  nuestra tienda, producto orignal y garantizado.`,
        images: [
            "img/productos/señuelos/jerk_minnow_110.jpg",
            "img/productos/señuelos/jerk_minnow_110_2.jpg",
            "img/productos/señuelos/jerk_minnow_110_3.jpg",
        ]
    },
    {
        id: 10,
        name: "Señuelo Daiwa Samurai Jig",
        price: 7.50,
        category: "Señuelos",
        subcategory: "Jigs",
        description: `
            'El diseño de su cabeza es más estrecho para acentuar su acción lateral en las animaciones. La parte central se ha adelgazado para mejorar la distancia de lance. Un robusto anzuelo triple equipa el señuelo en la parte trasera y un assist simple equipa la parte delantera del jig.`,
        images: [
            "img/productos/señuelos/daiwa_samurai_jig.jpg",
            "img/productos/señuelos/daiwa_samurai_jig_2.jpeg",
        ]
    },
    {
        id: 11,
        name: "Señuelo Hook Edge Minnow 130",
        price: 12.00,
        category: "Señuelos",
        subcategory: "parario",
        description: `
            'Perfil alargado y aerodinámico, con un babero transparente para el movimiento de natación y ojos 3D.`,
        images: [
            "img/productos/señuelos/edge_minnow.jpg",
            "img/productos/señuelos/edge_minnow_2.jpg",
            "img/productos/señuelos/edge_minnow_3.jpg",
            "img/productos/señuelos/edge_minnow_4.jpg",
        ]
    },
    {
        id: 12,
        name: "Señuelo Hook Jerk Minnow 140",
        price: 14.00,
        category: "Señuelos",
        subcategory: "paramar",
        description: `
            'Los señuelos JERK MINNOW 140 Es sin duda una de las mejores minnows del mercado latinoamericano y el mundo. Nuestros señuelos HOOK FISHING TACKLE, viene de acuerdo al modelo y tamaño, con anzuelos VMC y OWNER, más unas argollas planas para mayor resistencia a las batallas con las diferentes especies a capturar.`,
        images: [
            "img/productos/señuelos/jer_minnow_140.jpg",
            "img/productos/señuelos/jer_minnow_140_2.jpg",
        ]
    },
    {
        id: 13,
        name: "Señuelo Hook Bunker Jerk 160",
        price: 14.50,
        category: "Señuelos",
        subcategory: "paramar",
        description: `
            'Modelo ideal para la pesca de grandes depredadores en agua salada y agua dulce. Su peso, acción y Balines internos, permiten lances muy largos, movimientos erráticos y ataques fuertes.`,
        images: [
            "img/productos/señuelos/bunker_jerk_160.jpg",
        ]
    },
    {
        id: 14,
        name: "Señuelo Vense Popper Juggernaut 90",
        price: 16.00,
        category: "Señuelos",
        subcategory: "parario",
        description: `
            'El popper Juggernaut es un señuelo con una cara de copa especial y un diseño de labios profundos para más ruido bajo el agua y acción saltada.`,
        images: [
            "img/productos/señuelos/popper_vense_90.jpg",
            "img/productos/señuelos/popper_vense_90_1.jpg",
            "img/productos/señuelos/popper_vense_90_2.jpg",
            "img/productos/señuelos/popper_vense_90_3.jpg",
            "img/productos/señuelos/popper_vense_90_4.jpg",
        ]
    },
    {
        id: 15,
        name: "Señuelo Spinnerbait Bass Pro Shops Muskie Angler",
        price: 11.00,
        category: "Señuelos",
        subcategory: "parario",
        description: `
            'Estos spinners contrarrotativas únicas en su tipo brindan un aspecto y vibración diferentes.`,
        images: [
            "img/productos/señuelos/spinnerbait.jpg",
            "img/productos/señuelos/spinnerbait_2.jpg",
            "img/productos/señuelos/spinnerbait_3.jpg",
            "img/productos/señuelos/spinnerbait_4.jpg",
        ]
    },
    {
        id: 16,
        name: "Carrete Spinning Shimano Sienna 2000",
        price: 64.00,
        category: "Carretes",
        subcategory: "Spinning",
        description: `
            'El SIENNA es un carrete giratorio completo que es popular en todo el mundo. Es una opción ideal para el pescador que recién está comenzando a pescar pero aún quiere pescar con un carrete confiable.`,
        images: [
            "img/productos/carretes/shimano.jpg",
            "img/productos/carretes/shimano_2.jpg",
        ]
    },
    {
        id: 17,
        name: "Carrete Spinning Shimano Catana 2500HG",
        price: 111.00,
        category: "Carretes",
        subcategory: "Spinning",
        description: `
            'El modelo Catana es desde hace muchos años el carrete de bobina fija más vendido de Shimano en Europa. Y eso no es coincidencia: el Catana es fuerte, sólido y fiable durante años, mientras que el precio es muy competitivo.`,
        images: [
            "img/productos/carretes/catana.jpg",
            "img/productos/carretes/catana_2.jpg",
        ]
    },
    {
        id: 18,
        name: "Jersey Explorer Ilustración Marlin",
        price: 35.00,
        category: "Indumentaria",
        subcategory: "Jersey",
        description: `
            'Prendas pertenecientes a la EDICIÓN 2024, son elaboradas con materiales de excelente calidad preparadas para utilizarse en los ambientes más extremos con nuestras prendas ergonómicas diseñadas para la prácticas de la pesca.`,
        images: [
            "img/productos/indumentaria/jersey_marlin.jpg",
            "img/productos/indumentaria/jersey_marlin_2.jpg",
            "img/productos/indumentaria/jerser_marlin_3.jpg",
        ]
    },
    {
        id: 19,
        name: "Jersey Explorer Ilustración Dorado",
        price: 35.00,
        category: "Indumentaria",
        subcategory: "Jersey",
        description: `
            'Prendas pertenecientes a la EDICIÓN 2024, son elaboradas con materiales de excelente calidad preparadas para utilizarse en los ambientes más extremos con nuestras prendas ergonómicas diseñadas para la prácticas de la pesca.`,
        images: [
            "img/productos/indumentaria/jersey_dorado.jpg",
            "img/productos/indumentaria/jersey_dorado_2.jpg",
        ]
    },
    {
        id: 20,
        name: "Jersey Explorer Ilustración Wahoo",
        price: 35.00,
        category: "Indumentaria",
        subcategory: "Jersey",
        description: `
            'Prendas pertenecientes a la EDICIÓN 2024, son elaboradas con materiales de excelente calidad preparadas para utilizarse en los ambientes más extremos con nuestras prendas ergonómicas diseñadas para la prácticas de la pesca.`,
        images: [
            "img/productos/indumentaria/jersey_wahoo.jpg",
            "img/productos/indumentaria/jersey_wahoo_2.jpg",
        ]
    },
    {
        id: 21,
        name: "Jersey Explorer Ilustración Cascabel",
        price: 35.00,
        category: "Indumentaria",
        subcategory: "Jersey",
        description: `
            'Prendas pertenecientes a la EDICIÓN 2024, son elaboradas con materiales de excelente calidad preparadas para utilizarse en los ambientes más extremos con nuestras prendas ergonómicas diseñadas para la prácticas de la pesca.`,
        images: [
            "img/productos/indumentaria/jersey_cascabel.jpg",
            "img/productos/indumentaria/jersey_cascabel_2.jpg",
        ]
    },
];

document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("productos-destacados");

    if (!contenedor) return;

    // puedes limitar cuantos mostrar
    const destacados = products.slice(0, 21);

    destacados.forEach(product => {

        contenedor.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="product-card">

                <div class="product-img">
                    <img src="${product.images ? product.images[0] : product.img}" alt="">
                    
                    <button class="add-cart">
                        <i class="bi bi-cart-plus"></i>
                    </button>
                </div>

                <div class="product-info">
                    <span class="category">${product.category}</span>
                    <h5>${product.name}</h5>
                    <p class="price">$${product.price.toFixed(2)}</p>

                    <a href="producto.html?id=${product.id}" 
                       class="btn btn-outline-primary btn-sm">
                        Ver producto
                    </a>
                </div>

            </div>
        </div>
        `;
    });

    // 🔥 IMPORTANTE: reactivar botones carrito
    setTimeout(() => {
    activarBotonesCarrito();
}, 100);

});





// ================= BUSCADOR =================
function buscarProducto(e) {
    e.preventDefault();

    const input = document.getElementById("search-input").value.toLowerCase().trim();

    if (!input) return;

    // 🔥 ahora buscamos varios resultados
    const resultados = products.filter(p =>
        p.name.toLowerCase().includes(input)
    );

    // guardar resultados en localStorage
    localStorage.setItem("busqueda", JSON.stringify(resultados));
    localStorage.setItem("query", input);

    // redirigir a página de resultados
    window.location.href = "busqueda.html";
}

function getProductImage(product) {
    if (product.images && product.images.length > 0) {
        return product.images[0];
    }
    return product.img || "img/default.png";
}

const breadcrumb = document.getElementById("breadcrumb");

if (breadcrumb && productoActual) {
    breadcrumb.innerHTML = `
        <li class="breadcrumb-item"><a href="index.html">Inicio</a></li>
        <li class="breadcrumb-item">${productoActual.category}</li>
        <li class="breadcrumb-item active">${productoActual.name}</li>
    `;
}