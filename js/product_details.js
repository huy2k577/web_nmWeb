// ================= PRODUCTS =================
const products = [

    {
        id: 1,
        name: "Air Jordan 1 Retro High (Đỏ)",
        brand: "Air Jordan",
        sizes: [40, 41, 42, 43],
        price: 3500000,
        oldPrice: 4200000,
        rating: 4.8,
        reviews: 46,
        sold: 150,
        img: "./img/index/Air Jordan 1 Retro High.png",
        discount: "-17%",
        description:
            "Air Jordan 1 Retro High mang lại cảm giác êm ái và hỗ trợ bật nhảy cực tốt."
    },

    {
        id: 2,
        name: "Nike LeBron 20 (Đỏ)",
        brand: "Nike",
        sizes: [41, 42, 43, 44],
        price: 4800000,
        oldPrice: 0,
        rating: 4.9,
        reviews: 189,
        sold: 320,
        img: "./img/index/Nike LeBron 20 ( Đỏ).png",
        discount: "Mới",
        description:
            "Nike LeBron 20 sử dụng Zoom Air hỗ trợ tăng tốc và đổi hướng nhanh."
    },

    {
        id: 3,
        name: "Nike KD 16 (Đen)",
        brand: "Nike",
        sizes: [39, 40, 41, 42],
        price: 4200000,
        oldPrice: 4800000,
        rating: 4.7,
        reviews: 530,
        sold: 850,
        img: "./img/index/Nike KD 16 (Đen).png",
        discount: "-13%",
        description:
            "Nike KD 16 hỗ trợ bám sân cực tốt và di chuyển linh hoạt."
    },

    {
        id: 4,
        name: "Nike Air Jordan 'Kobe Bryant' Pack (Trắng)",
        brand: "Air Jordan",
        sizes: [40, 41, 42],
        price: 4048000,
        oldPrice: 4600000,
        rating: 4.9,
        reviews: 78,
        sold: 210,
        img: "./img/index/Nike Air Jordan 'Kobe Bryant' Pack (Trắng).png",
        discount: "-12%",
        description:
            "Phiên bản Kobe Bryant Pack nổi bật với thiết kế cao cấp và độ bám sân cực tốt."
    },

    {
        id: 5,
        name: "Adidas Harden Vol.6 Pink GW9033 (Hồng)",
        brand: "Adidas",
        sizes: [38, 39, 40, 41],
        price: 2450000,
        oldPrice: 0,
        rating: 4.8,
        reviews: 61,
        sold: 450,
        img: "./img/index/Adidas Harden Vol.6 Pink GW9033 (Hồng).png",
        discount: "Mới",
        description:
            "Adidas Harden Vol.6 đem lại cảm giác êm chân và hỗ trợ step-back cực tốt."
    },

    {
        id: 6,
        name: "Under Armour Curry 13 XIII Goat (Tím)",
        brand: "Under Armour",
        sizes: [41, 42, 43],
        price: 4790000,
        oldPrice: 0,
        rating: 4.8,
        reviews: 51,
        sold: 120,
        img: "./img/index/Under Armour Curry 13 XIII Goat (Tím).png",
        discount: "Mới",
        description:
            "Curry 13 XIII Goat hỗ trợ di chuyển nhanh và bám sân vượt trội."
    },

    {
        id: 7,
        name: "Nike Zoom Freak 5 (Xanh)",
        brand: "Nike",
        sizes: [38, 39, 40],
        price: 3990000,
        oldPrice: 4500000,
        rating: 4.7,
        reviews: 144,
        sold: 390,
        img: "./img/index/Nike Zoom Freak 5 (Xanh).png",
        discount: "-11%",
        description:
            "Nike Zoom Freak 5 mang lại cảm giác linh hoạt và hỗ trợ bật nhảy mạnh mẽ."
    },

    {
        id: 8,
        name: "Adidas Dame 8 (Cam)",
        brand: "Adidas",
        sizes: [40, 41, 42],
        price: 3290000,
        oldPrice: 0,
        rating: 4.6,
        reviews: 88,
        sold: 270,
        img: "./img/index/Adidas Dame 8 (Cam).png",
        discount: "Mới",
        description:
            "Adidas Dame 8 có thiết kế nổi bật cùng đệm Bounce Pro cực êm."
    },

    {
        id: 9,
        name: "Puma MB.03 LaMelo Ball (Xanh Lá)",
        brand: "Puma",
        sizes: [42, 43, 44],
        price: 4550000,
        oldPrice: 5000000,
        rating: 4.9,
        reviews: 230,
        sold: 610,
        img: "./img/index/Puma MB.03 LaMelo Ball (Xanh Lá).png",
        discount: "-9%",
        description:
            "Puma MB.03 LaMelo Ball có thiết kế cá tính cùng độ đàn hồi cao."
    },

    {
        id: 10,
        name: "ANTA KT 9 Klay Thompson (Trắng Xanh)",
        brand: "ANTA",
        sizes: [39, 40, 41, 42],
        price: 3850000,
        oldPrice: 0,
        rating: 4.8,
        reviews: 119,
        sold: 340,
        img: "./img/index/ANTA KT 9 Klay Thompson (Trắng Xanh).png",
        discount: "Mới",
        description:
            "ANTA KT 9 hỗ trợ ổn định cổ chân và phù hợp cho shooting guard."
    }

];


// ================= FORMAT =================
function formatPrice(price) {
    return price.toLocaleString("vi-VN") + " VND";
}

// ================= GET PARAMS =================
const params = new URLSearchParams(window.location.search);

const productId = parseInt(params.get("id"));
const selectedSize = params.get("size");
const selectedQty = parseInt(params.get("qty"));

// ================= FIND PRODUCT =================
const product = products.find(item => item.id === productId);

if (!product) {
    alert("Không tìm thấy sản phẩm");
    window.location.href = "product.html";
}

// ================= RENDER =================
function renderProduct() {

    document.getElementById("detail-image").src = product.img;
    document.getElementById("detail-image").alt = product.name;

    document.getElementById("detail-brand").innerText = product.brand;
    document.getElementById("detail-name").innerText = product.name;

    document.getElementById("detail-rating").innerText =
        `${product.rating} (${product.reviews} đánh giá)`;

    document.getElementById("detail-price").innerText =
        formatPrice(product.price);

    document.getElementById("detail-description").innerText =
        product.description;

    document.getElementById("detail-discount").innerText =
        product.discount;

    const oldPrice = document.getElementById("detail-old-price");

    if (product.oldPrice > 0) {
        oldPrice.innerText = formatPrice(product.oldPrice);
    } else {
        oldPrice.style.display = "none";
    }

    updateTotalPrice();
    renderSizes();
    renderThumbnails();
}

// ================= SIZE =================
function renderSizes() {

    const sizeList = document.querySelector(".size-list");
    sizeList.innerHTML = "";

    product.sizes.forEach((size, index) => {

        sizeList.innerHTML += `
            <button class="size-btn ${index === 0 ? "active" : ""}">
                ${size}
            </button>
        `;
    });

    setupSizeButtons();

    // ================= AUTO SELECT SIZE FROM CART =================
    if (selectedSize) {
        setTimeout(() => {
            document.querySelectorAll(".size-btn").forEach(btn => {
                btn.classList.remove("active");
                if (btn.innerText == selectedSize) {
                    btn.classList.add("active");
                }
            });
        }, 0);
    }
}

// ================= SIZE CLICK =================
function setupSizeButtons() {

    const sizeButtons = document.querySelectorAll(".size-btn");

    sizeButtons.forEach(button => {
        button.addEventListener("click", function () {

            sizeButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
}

// ================= THUMBNAIL =================
function renderThumbnails() {
    const thumbnailList = document.querySelector(".thumbnail-list");
    thumbnailList.innerHTML = "";
}

// ================= PRICE =================
function updateTotalPrice() {

    const quantity = parseInt(document.getElementById("quantity-input").value);

    const total = quantity * product.price;

    document.getElementById("total-price").innerText =
        formatPrice(total);
}

// ================= QUANTITY =================
function setupQuantity() {

    const minusBtn = document.getElementById("minus-btn");
    const plusBtn = document.getElementById("plus-btn");
    const quantityInput = document.getElementById("quantity-input");

    // ================= AUTO SET QTY FROM CART =================
    if (selectedQty) {
        quantityInput.value = selectedQty;
    }

    plusBtn.addEventListener("click", function () {
        quantityInput.value = parseInt(quantityInput.value) + 1;
        updateTotalPrice();
    });

    minusBtn.addEventListener("click", function () {

        let quantity = parseInt(quantityInput.value);

        if (quantity > 1) {
            quantity--;
            quantityInput.value = quantity;
            updateTotalPrice();
        }
    });

    quantityInput.addEventListener("input", function () {

        if (quantityInput.value < 1 || quantityInput.value === "") {
            quantityInput.value = 1;
        }

        updateTotalPrice();
    });
}

// ================= BUTTONS =================
function setupButtons() {

    const addCartBtn = document.querySelector(".add-cart-btn");
    const buyBtn = document.querySelector(".buy-btn");
    const quantityInput = document.getElementById("quantity-input");

    function showToast(message) {
        let toast = document.createElement("div");
        toast.className = "cart-toast";
        toast.innerText = message;

        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add("show"), 10);

        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }

    addCartBtn.addEventListener("click", function () {

        const quantity = parseInt(quantityInput.value);
        const sizeBtn = document.querySelector(".size-btn.active");

        if (!sizeBtn) {
            showToast("Vui lòng chọn size!");
            return;
        }

        const size = sizeBtn.innerText;

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const index = cart.findIndex(item =>
            item.id === product.id && item.size === size
        );

        if (index !== -1) {
            cart[index].quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                img: product.img,
                size: size,
                quantity: quantity
            });
        }

        cart = cart.map(item => ({
            ...item,
            total: item.price * item.quantity
        }));

        localStorage.setItem("cart", JSON.stringify(cart));

        showToast("Đã thêm vào giỏ hàng");

        setTimeout(() => {
            window.location.href = "cart.html";
        }, 600);
    });

    
}
// ================= CHECKOUT POPUP =================
function setupCheckout() {
    
    const modal = document.getElementById("checkout-modal");

    const buyBtn = document.querySelector(".buy-btn");
    const closeBtn = document.getElementById("close-checkout");
    const confirmBtn = document.getElementById("confirm-buy");

    if (!modal || !buyBtn || !closeBtn || !confirmBtn) {
        console.error("Checkout missing elements", {
            modal, buyBtn, closeBtn, confirmBtn
        });
        return;
    }

    buyBtn.addEventListener("click", () => {

        // ===== LẤY THÔNG TIN TỪ ACCOUNT =====
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

        if (currentUser) {
            document.getElementById("cus-name").value = currentUser.fullName || "";
        }

        modal.classList.remove("hidden");
    });
    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });

    confirmBtn.addEventListener("click", () => {

        const name = document.getElementById("cus-name").value;
        const phone = document.getElementById("cus-phone").value;
        const payment = document.getElementById("payment-method").value;

        if (!name || !phone) {
            alert("Nhập thiếu thông tin");
            return;
        }

        alert(`OK mua hàng: ${name} - ${phone} - ${payment}`);

        modal.classList.add("hidden");
    });
}
// ================= INIT =================
document.addEventListener("DOMContentLoaded", function () {

    renderProduct();
    setupQuantity();
    setupButtons();
    setupCheckout();
    

});