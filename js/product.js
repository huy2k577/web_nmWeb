// ================= BIẾN CẤU HÌNH CHUNG =================
const CURRENCY = "VND";


// ================= FORMAT GIÁ =================
function formatPrice(price) {

    return price.toLocaleString(
        "vi-VN"
    ) + ` ${CURRENCY}`;

}


// ================= DANH SÁCH SẢN PHẨM =================
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
        discount: "-17%"
    },

    {
        id: 2,
        name: "Nike LeBron 20 ( Đỏ)",
        brand: "Nike",
        sizes: [41, 42, 43, 44],
        price: 4800000,
        oldPrice: 0,
        rating: 4.9,
        reviews: 189,
        sold: 320,
        img: "./img/index/Nike LeBron 20 ( Đỏ).png",
        discount: "mới"
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
        discount: "-13%"
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
        discount: "-12%"
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
        discount: "mới"
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
        discount: "mới"
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
        discount: "-11%"
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
        discount: "mới"
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
        discount: "-9%"
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
        discount: "mới"
    }

];


// ================= HIỂN THỊ SẢN PHẨM =================
function renderProducts(data) {

    const productList =
        document.getElementById(
            "product-list"
        );

    if (!productList) return;

    productList.innerHTML = "";


    // ===== KHÔNG CÓ SẢN PHẨM =====
    if (data.length === 0) {

        productList.innerHTML = `
            <h2 class="empty-product">
                Không tìm thấy sản phẩm
            </h2>
        `;

        return;

    }


    // ===== RENDER =====
    data.forEach(item => {

        const badgeClass =
            item.discount === "mới"
            ? "badge-new"
            : "badge-discount";

        productList.innerHTML += `

            <div class="product-card">

                <a
                href="product_details.html?id=${item.id}"
                class="product-link">

                    <div class="card-image-wrap">

                        <span class="badge ${badgeClass}">
                            ${item.discount}
                        </span>

                        <img
                        src="${item.img}"
                        alt="${item.name}">

                    </div>

                    <div class="card-info">

                        <h4 class="product-title">
                            ${item.name}
                        </h4>

                        <p class="brand-text">
                            Hãng: ${item.brand}
                        </p>

                        <p class="sold-text">
                            Đã bán: ${item.sold}
                        </p>

                        <div class="product-rating">

                            <i class="fas fa-star"></i>

                            <span class="rating-value">
                                ${item.rating}
                            </span>

                            <span class="reviews-count">
                                (${item.reviews})
                            </span>

                        </div>

                        <div class="product-price">

                            <span class="price-current">
                                ${formatPrice(item.price)}
                            </span>

                            ${
                                item.oldPrice > 0
                                ?
                                `
                                <span class="price-old">
                                    ${formatPrice(item.oldPrice)}
                                </span>
                                `
                                :
                                ""
                            }

                        </div>

                    </div>

                </a>

            </div>

        `;

    });

}


// ================= FILTER =================
function filterProducts() {

    // ===== GIÁ =====
    const checkedPrice =
        document.querySelector(
            '.price-filter input:checked'
        );

    const priceValue =
        checkedPrice
        ? checkedPrice.value
        : null;


    // ===== HÃNG =====
    const checkedBrand =
        document.querySelector(
            '.brand-filter input:checked'
        );

    const brandValue =
        checkedBrand
        ? checkedBrand.value
        : null;


    // ===== SIZE =====
    const checkedSize =
        document.querySelector(
            '.size-filter input:checked'
        );

    const sizeValue =
        checkedSize
        ? parseInt(checkedSize.value)
        : null;


    // ===== FILTER =====
    const filteredProducts =
        products.filter(product => {

            const productPrice =
                product.price;


            // ===== LỌC GIÁ =====
            let matchPrice = true;

            if (priceValue) {

                switch (priceValue) {

                    case "under-500":

                        matchPrice =
                            productPrice < 500000;

                        break;

                    case "over-500":

                        matchPrice =
                            productPrice >= 500000;

                        break;

                    case "over-1000":

                        matchPrice =
                            productPrice >= 1000000;

                        break;

                    case "over-2000":

                        matchPrice =
                            productPrice >= 2000000;

                        break;

                    case "over-3000":

                        matchPrice =
                            productPrice >= 3000000;

                        break;

                }

            }


            // ===== LỌC HÃNG =====
            let matchBrand = true;

            if (brandValue) {

                matchBrand =
                    product.brand === brandValue;

            }


            // ===== LỌC SIZE =====
            let matchSize = true;

            if (sizeValue) {

                matchSize =
                    product.sizes.includes(
                        sizeValue
                    );

            }


            return (
                matchPrice &&
                matchBrand &&
                matchSize
            );

        });


    renderProducts(filteredProducts);

}


// ================= CHECKBOX 1 LỰA CHỌN =================
function setupSingleCheckbox() {

    const groups = [

        ".price-filter",
        ".brand-filter",
        ".size-filter"

    ];


    groups.forEach(groupClass => {

        const group =
            document.querySelector(
                groupClass
            );

        if (!group) return;


        const checkboxes =
            group.querySelectorAll(
                'input[type="checkbox"]'
            );


        checkboxes.forEach(item => {

            item.addEventListener(
                "change",
                function () {

                    if (this.checked) {

                        checkboxes.forEach(box => {

                            if (box !== this) {

                                box.checked =
                                    false;

                            }

                        });

                    }

                    filterProducts();

                }
            );

        });

    });

}


// ================= SẮP XẾP =================
function setupSortEvents() {

    // ===== BÁN CHẠY =====
    const bestSellerBtn =
        document.getElementById(
            "btn-best-seller"
        );

    if (bestSellerBtn) {

        bestSellerBtn.addEventListener(
            "click",
            function () {

                const sortedProducts =
                    [...products].sort(
                        (a, b) =>
                            b.sold - a.sold
                    );

                renderProducts(
                    sortedProducts
                );

            }
        );

    }


    // ===== GIÁ =====
    const sortPrice =
        document.getElementById(
            "sort-price"
        );

    if (sortPrice) {

        sortPrice.addEventListener(
            "change",
            function () {

                let sortedProducts =
                    [...products];


                // ===== CAO -> THẤP =====
                if (
                    this.value ===
                    "cao-thap"
                ) {

                    sortedProducts.sort(
                        (a, b) =>
                            b.price - a.price
                    );

                }


                // ===== THẤP -> CAO =====
                else if (
                    this.value ===
                    "thap-cao"
                ) {

                    sortedProducts.sort(
                        (a, b) =>
                            a.price - b.price
                    );

                }


                renderProducts(
                    sortedProducts
                );

            }
        );

    }

}


// ================= LOAD =================
document.addEventListener(
    "DOMContentLoaded",
    function () {

        // render lần đầu
        renderProducts(products);

        // setup checkbox
        setupSingleCheckbox();

        // setup sort
        setupSortEvents();

    }
);