/* =====================================
PRODUTOS
===================================== */

const products = [

    {
        id: 1,
        category: "almocos",
        name: "Prato Executivo",
        description: "Arroz, feijão, carne e salada.",
        price: 29.90,
        image: "https://st2.depositphotos.com/4687049/6972/i/950/depositphotos_69724631-stock-photo-dish-with-meat-rice-and.jpg"
    },

    {
        id: 2,
        category: "almocos",
        name: "Parmegiana",
        description: "Filé à parmegiana completo.",
        price: 39.90,
        image: "https://maravilhadesabor.com.br/wp-content/uploads/2023/12/Receita-de-Bife-a-Parmegiana-Como-Fazer-Passo-a-Passo-750x500.jpeg"
    },

    {
        id: 3,
        category: "hamburgueres",
        name: "Cheddar Bacon Burger",
        description: "Hambúrguer artesanal suculento, pão brioche macio, cheddar cremoso e bacon crocante..",
        price: 19.90,
        image: "https://tse3.mm.bing.net/th/id/OIP.A6dlJ0Hf_wdIXBPsh3tEhgHaHa?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 4,
        category: "hamburgueres",
        name: "Classic Salad Burger",
        description: "Hambúrguer artesanal, queijo, alface, tomate e molho especial no pão brioche.",
        price: 17.90,
        image: "https://img.freepik.com/premium-photo/classic-burger-with-beef-patty-cheese-onions-ketchup-tomato-slices-salad-white-backgrou_1011712-151.jpg"
    },

    {
        id: 5,
        category: "porcoes",
        name: "Batata Frita",
        description: "Batatas fritas crocantes por fora e macias por dentro.",
        price: 24.90,
        image: "https://tse1.mm.bing.net/th/id/OIP.TMoerEYJLX9U375AbdAQ6wHaHa?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 6,
        category: "porcoes",
        name: "Calabresa Acebolada na Chapa",
        description: "Calabresa fatiada e grelhada na chapa, acompanhada de cebolas douradas e tempero especial da casa.",
        price: 29.90,
        image: "https://manualdohomemmoderno.com.br/files/2020/05/como-fazer-calabresa-acebolada-na-cachaca-petiscos-pra-fazer-em-casa-como-fazer-calabresa-acebolada-na-cachaca-petiscos-pra-fazer-em-casa.jpg"
    },

    {
        id: 7,
        category: "sobremesas",
        name: "Petit Gateau de Chocolate com Sorvete de Baunilha",
        description: "Bolinho de chocolate quente com recheio cremoso, acompanhado de sorvete de baunilha.",
        price: 18.90,
        image: "https://i.pinimg.com/736x/1a/46/97/1a4697944c30bad6f1d39897be287ffd.jpg"
    }

];

/* =====================================
BEBIDAS
===================================== */

const beverages = [

    {
        id: 101,
        category: "refrigerantes",
        name: "Coca-Cola Original 2 Litros",
        volume: "Refrigerante Coca-Cola bem gelado, refrescante e perfeito para acompanhar seu pedido.",
        price: 12.00,
        image: "https://tse2.mm.bing.net/th/id/OIP.sSWDJSEa49gXIX293RctJQHaHa?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 102,
        category: "refrigerantes",
        name: "Guaraná Antarctica 2 Litros",
        volume: "Refrigerante bem gelado, refrescante e com sabor marcante. Perfeito para acompanhar seu lanche ou refeição.",
        price: 11.00,
        image: "https://tse3.mm.bing.net/th/id/OIP.ogAmil_vCEMGzFlboFJO_gHaHa?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 103,
        category: "sucos",
        name: "Suco Natural 500ml",
        volume: "Suco natural preparado na hora, refrescante e cheio de sabor para acompanhar sua refeição.",
        price: 9.90,
        image: "https://supernossoio.vtexassets.com/arquivos/ids/228652/Suco-Natural-Laranja-500ml.png?v=637934040240670000"
    },

    {
        id: 104,
        category: "energeticos",
        name: "Red Bull Energy Drink 250ml",
        volume: "Bebida energética gelada, com sabor marcante e energia para acompanhar seu dia.",
        price: 14.90,
        image: "https://oechsle.vteximg.com.br/arquivos/ids/1352053-1000-1000/image-33eed28e21fe49e08b7260bb1de448ef.jpg?v=637494728340800000g"
    },

    {
        id: 105,
        category: "agua",
        name: "Água Mineral 500ml",
        volume: "Água mineral bem gelada, leve e refrescante para acompanhar seu pedido.",
        price: 4.50,
        image: "https://thfvnext.bing.com/th/id/R.80253de05c65a4df77fcc4b016a54870?rik=IugBrdugH2Gs0A&pid=ImgRaw&r=0"
    },

    {
        id: 106,
        category: "drinks",
        name: "Caipirinha Tradicional 300ml",
        volume: "Drink preparado com limão fresco, cachaça e açúcar na medida certa. Refrescante e cheio de sabor.",
        price: 19.90,
        image: "https://img.freepik.com/fotos-premium/bebida-de-limao-fresco-com-gelo-isolado-na-superficie-branca-caipirinha_70216-7091.jpg?w=2000"
    }

];

/* =====================================
ELEMENTOS
===================================== */

const productsGrid =
    document.getElementById("productsGrid");

const drinksGrid =
    document.getElementById("drinksGrid");

const cartCount =
    document.getElementById("cartCount");

const cartItems =
    document.getElementById("cartItems");

const subtotalElement =
    document.getElementById("subtotal");

const totalElement =
    document.getElementById("total");

const cartDrawer =
    document.getElementById("cartDrawer");

const overlay =
    document.getElementById("overlay");

/* =====================================
LOCAL STORAGE
===================================== */

let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

/* =====================================
FORMATADOR
===================================== */

function formatPrice(value) {

    return value.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}

/* =====================================
RENDER PRODUTOS
===================================== */

function renderProducts(list) {

    productsGrid.innerHTML = "";

    list.forEach(product => {

        productsGrid.innerHTML += `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<div class="product-content">

<h3>${product.name}</h3>

<p>${product.description}</p>

<span class="price">
${formatPrice(product.price)}
</span>

<button
class="add-cart"
onclick="addToCart(${product.id}, false)">

Adicionar ao Carrinho

</button>

</div>

</div>

`;

    });

}

/* =====================================
RENDER BEBIDAS
===================================== */

function renderDrinks(list) {

    drinksGrid.innerHTML = "";

    list.forEach(drink => {

        drinksGrid.innerHTML += `

<div class="product-card">

<img src="${drink.image}" alt="${drink.name}">

<div class="product-content">

<h3>${drink.name}</h3>

<p>${drink.volume}</p>

<span class="price">
${formatPrice(drink.price)}
</span>

<button
class="add-cart"
onclick="addToCart(${drink.id}, true)">

Adicionar ao Carrinho

</button>

</div>

</div>

`;

    });

}

/* =====================================
ADICIONAR
===================================== */

function addToCart(id, isDrink) {

    const source =
        isDrink ? beverages : products;

    const item =
        source.find(p => p.id === id);

    const exists =
        cart.find(
            product => product.id === id
        );

    if (exists) {

        exists.quantity++;

    } else {

        cart.push({

            ...item,

            quantity: 1

        });

    }

    saveCart();

}

/* =====================================
REMOVER
===================================== */

function decreaseItem(id) {

    const item =
        cart.find(
            product => product.id === id
        );

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product => product.id !== id
            );

    }

    saveCart();

}

/* =====================================
AUMENTAR
===================================== */

function increaseItem(id) {

    const item =
        cart.find(
            product => product.id === id
        );

    item.quantity++;

    saveCart();

}

/* =====================================
TOTAL
===================================== */

function getTotal() {

    return cart.reduce(

        (total, item) =>

            total + item.price * item.quantity

        , 0);

}

/* =====================================
SALVAR
===================================== */

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCart();

}

/* =====================================
ATUALIZAR
===================================== */

function updateCart() {

    cartCount.textContent =
        cart.reduce(
            (total, item) =>
                total + item.quantity
            , 0);

    if (cart.length === 0) {

        cartItems.innerHTML =

            '<p class="empty-cart">Seu carrinho está vazio</p>';

        subtotalElement.textContent =
            "R$ 0,00";

        totalElement.textContent =
            "R$ 0,00";

        return;

    }

    cartItems.innerHTML = "";

    cart.forEach(item => {

        cartItems.innerHTML += `

<div class="cart-product">

<h4>${item.name}</h4>

<p>
${formatPrice(item.price)}
</p>

<div class="quantity-controls">

<button
onclick="decreaseItem(${item.id})">

*

</button>

<span>
${item.quantity}
</span>

<button
onclick="increaseItem(${item.id})">

*

</button>

</div>

</div>

`;

    });

    subtotalElement.textContent =
        formatPrice(getTotal());

    totalElement.textContent =
        formatPrice(getTotal());

}

/* =====================================
CATEGORIAS
===================================== */

document
    .querySelectorAll(".category-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".category-btn")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                const category =
                    button.dataset.category;

                if (category === "all") {

                    renderProducts(products);

                    return;

                }

                const filtered =
                    products.filter(
                        item =>
                            item.category === category
                    );

                renderProducts(filtered);

            });

    });

/* =====================================
FILTRO BEBIDAS
===================================== */

document
    .querySelectorAll(".drink-filter")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const category =
                    button.dataset.drink;

                if (category === "all") {

                    renderDrinks(beverages);

                    return;

                }

                const filtered =
                    beverages.filter(
                        drink =>
                            drink.category === category
                    );

                renderDrinks(filtered);

            });

    });

/* =====================================
DRAWER
===================================== */

document
    .getElementById("cartButton")
    .addEventListener(
        "click",
        () => {

            cartDrawer.classList.add("open");
            overlay.classList.add("active");

        });

document
    .getElementById("closeCart")
    .addEventListener(
        "click",
        closeCart
    );

overlay.addEventListener(
    "click",
    closeCart
);

function closeCart() {

    cartDrawer.classList.remove("open");
    overlay.classList.remove("active");

}

/* =====================================
CHECKOUT
===================================== */

const paymentMethod =
    document.getElementById(
        "paymentMethod"
    );

const changeField =
    document.getElementById(
        "changeField"
    );

paymentMethod.addEventListener(
    "change",
    () => {

        changeField.style.display =

            paymentMethod.value === "Dinheiro"
                ?
                "block"
                :
                "none";

    });

changeField.style.display =
    "none";

/* =====================================
ABRIR CHECKOUT
===================================== */

document
    .getElementById("openCheckout")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById("checkout")
                .scrollIntoView({

                    behavior: "smooth"

                });

            closeCart();

        });

/* =====================================
WHATSAPP
===================================== */

document
.getElementById("checkoutForm")
.addEventListener(
"submit",
function(event){

    event.preventDefault();


    if(cart.length === 0){

        alert("Adicione produtos ao carrinho.");
        return;

    }


    const customerName =
    document.getElementById("customerName").value;


    const customerPhone =
    document.getElementById("customerPhone").value;


    const customerAddress =
    document.getElementById("customerAddress").value;


    const customerNumber =
    document.getElementById("customerNumber").value;


    const customerDistrict =
    document.getElementById("customerDistrict").value;


    const customerComplement =
    document.getElementById("customerComplement").value;


    const payment =
    document.getElementById("paymentMethod").value;


    const changeFor =
    document.getElementById("changeFor").value;



    let message =

`Olá! Gostaria de fazer um pedido no Burguer Artesanal.

Pedido:

`;



    cart.forEach(item => {

        message +=
`• ${item.quantity}x ${item.name} — ${formatPrice(item.price * item.quantity)}
`;

    });



    message +=

`
Total do pedido: ${formatPrice(getTotal())}

Dados do cliente:

Nome: ${customerName}
Telefone: ${customerPhone}

Endereço de entrega:

Rua: ${customerAddress}, Nº ${customerNumber}
Bairro: ${customerDistrict}
Complemento: ${customerComplement}

Forma de pagamento:
${payment}
`;



    if(payment === "Dinheiro"){

        message +=

`
Troco para: ${changeFor}
`;

    }



    message +=

`
Obrigado! Aguardo a confirmação do pedido.
`;



    const whatsappURL =

    `https://api.whatsapp.com/send/?phone=5511939324422&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;



    window.open(
        whatsappURL,
        "_blank"
    );


});

/* =====================================
INICIALIZAÇÃO
===================================== */

renderProducts(products);

renderDrinks(beverages);

updateCart();
