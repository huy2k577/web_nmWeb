// =========================
// LẤY TOP 6 BÁN CHẠY
// =========================

const featuredProducts =
    [...products]
    .sort((a, b) => b.sold - a.sold)
    .slice(0, 6);


// =========================
// HIỂN THỊ SẢN PHẨM
// =========================

function renderFeaturedProducts() {

    const productList =
        document.getElementById(
            "featured-products"
        );

    if (!productList) return;

    productList.innerHTML = "";


    featuredProducts.forEach(item => {

        const badgeClass =
            item.discount.toLowerCase() === "mới"
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
                            alt="${item.name}"
                        >

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


// =========================
// LOAD
// =========================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderFeaturedProducts();

    }
);