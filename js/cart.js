// ================= CART STORAGE =================
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// ================= FORMAT MONEY =================
function formatVND(value) {
    return value.toLocaleString("vi-VN") + " VND";
}

// ================= RENDER CART =================
function renderCart() {

    const container = document.getElementById("cart-container");
    const totalEl = document.getElementById("cart-total");

    let cart = getCart();

    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = "<p>🛒 Giỏ hàng trống</p>";
        totalEl.innerText = "0 VND";
        return;
    }

    let totalAll = 0;

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;
        totalAll += itemTotal;

        const itemHTML = `
            <div class="cart-item" onclick="goToDetail(${item.id}, '${item.size}', ${item.quantity})">

                <img src="${item.img}" class="cart-img">

                <div class="cart-info">
                    <h3>${item.name}</h3>
                    <p>Size: ${item.size}</p>
                    <p class="price">${formatVND(item.price)}</p>
                </div>

                <div class="cart-qty">
                    <button onclick="event.stopPropagation(); decrease(${index})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="event.stopPropagation(); increase(${index})">+</button>
                </div>

                <div class="cart-total-item">
                    ${formatVND(item.price * item.quantity)}
                </div>

                <button class="delete-btn" onclick="event.stopPropagation(); removeItem(${index})">
                    Xóa
                </button>

            </div>
        `;

        container.innerHTML += itemHTML;
    });

    totalEl.innerText = formatVND(totalAll);
}

// ================= INCREASE =================
function increase(index) {
    let cart = getCart();
    cart[index].quantity += 1;

    saveCart(cart);
    renderCart();
}

// ================= DECREASE =================
function decrease(index) {
    let cart = getCart();

    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        // nếu = 1 mà bấm -, xóa luôn cho UX giống Shopee
        cart.splice(index, 1);
    }

    saveCart(cart);
    renderCart();
}

// ================= REMOVE ITEM =================
function removeItem(index) {
    let cart = getCart();
    cart.splice(index, 1);

    saveCart(cart);
    renderCart();
}

// ================= INIT =================
document.addEventListener("DOMContentLoaded", renderCart);

function goToDetail(id, size, qty) {
    window.location.href =
        `product_details.html?id=${id}&size=${size}&qty=${qty}`;
}