/* =========================================================
   NÂNG NIU MÁI TÓC VIỆT
   script.js

   Chức năng:
   - Dữ liệu 5 sản phẩm
   - Tìm kiếm
   - Lọc danh mục
   - Hiển thị sản phẩm
   - Chi tiết sản phẩm
   - Slide sản phẩm
   - Giỏ hàng
   - Tăng / giảm số lượng
   - LocalStorage
   - Tổng tiền
   - Đặt hàng
   - Responsive menu
   - Toast thông báo
========================================================= */

"use strict";


/* =========================================================
   1. DỮ LIỆU SẢN PHẨM
========================================================= */

const products = [

    {
        id: "goi-buoi-500",

        name: "Dầu gội Bưởi Cocoon 500ml",

        price: 388000,

        category: "Dầu gội",

        image:
            "https://image.cocoonvietnam.com/uploads/IMG_5252_8f3fe2deab.jpg",

        badge: "Bán chạy",

        description:
            "Dầu gội Bưởi dạng gel trong mờ, mang hương tinh dầu bưởi thơm mát và hỗ trợ làm sạch, chăm sóc tóc.",

        tags: [
            "dau goi",
            "buoi",
            "cocoon",
            "500ml",
            "tinh dau buoi"
        ],

        dosage: "Từ 1–2 lần nhấn",

        texture:
            "Dạng gel trong mờ",

        scent:
            "Mùi tinh dầu bưởi thơm mát",

        origin:
            "Việt Nam",

        notes:
            "Tránh dùng vùng mắt, chỉ dùng ngoài da.",

        usage: [
            "Thoa sản phẩm lên tóc ướt và tạo bọt.",
            "Mát-xa nhẹ nhàng từ gốc đến ngọn, sau đó gội sạch.",
            "Sử dụng hằng ngày để có kết quả tốt nhất. Tránh tiếp xúc với mắt."
        ],

        ingredients: [

            {
                name: "Tinh dầu bưởi",

                description:
                    "Trích ly từ vỏ bưởi, chứa nhiều limonene; theo thông tin sản phẩm, thành phần này hỗ trợ chăm sóc da đầu và tóc, đồng thời có đặc tính kháng khuẩn và chống oxy hóa."
            },

            {
                name: "Xylishine™",

                description:
                    "Chiết xuất từ tảo nâu Pelvetia canaliculata và đường tự nhiên trong gỗ, hỗ trợ dưỡng ẩm và giúp tóc trông bóng mượt."
            },

            {
                name: "Vitamin B5 (D-panthenol)",

                description:
                    "Hỗ trợ dưỡng tóc và duy trì độ ẩm lâu dài, giúp giảm cảm giác khô xơ và tăng vẻ bóng khỏe."
            },

            {
                name: "Axít amin",

                description:
                    "Hỗ trợ giữ ẩm, củng cố cấu trúc tóc, bảo vệ màu và cải thiện bề mặt tóc."
            }

        ]

    },


    {
        id: "goi-buoi-310",

        name: "Dầu gội bưởi 310ml",

        price: 200000,

        category: "Dầu gội",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaO9qvYFAEuGH2AkFhsus8McXksD5--YRyhFYcsqTdwg&s=10",

        badge: "",

        description:
            "Phiên bản 310ml nhỏ gọn, tiện lợi cho nhu cầu chăm sóc tóc hằng ngày với hương tinh dầu bưởi thơm mát.",

        tags: [
            "dau goi",
            "buoi",
            "310ml",
            "cocoon"
        ],

        dosage: "Từ 1–2 lần nhấn",

        texture:
            "Dạng gel trong mờ",

        scent:
            "Mùi tinh dầu bưởi thơm mát",

        origin:
            "Việt Nam",

        notes:
            "Tránh dùng vùng mắt, chỉ dùng ngoài da.",

        usage: [
            "Thoa sản phẩm lên tóc ướt và tạo bọt.",
            "Mát-xa nhẹ nhàng từ gốc đến ngọn, sau đó gội sạch.",
            "Sử dụng hằng ngày để có kết quả tốt nhất. Tránh tiếp xúc với mắt."
        ],

        ingredients: [

            {
                name: "Tinh dầu bưởi",

                description:
                    "Trích ly từ vỏ bưởi, chứa nhiều limonene và được sử dụng để hỗ trợ chăm sóc da đầu, mái tóc."
            },

            {
                name: "Xylishine™",

                description:
                    "Hỗ trợ dưỡng ẩm và cải thiện vẻ bóng mượt cho mái tóc."
            },

            {
                name: "Vitamin B5",

                description:
                    "Giúp duy trì độ ẩm và hỗ trợ tóc mềm mại hơn."
            },

            {
                name: "Axít amin",

                description:
                    "Hỗ trợ giữ ẩm, củng cố cấu trúc tóc và cải thiện bề mặt tóc."
            }

        ]

    },


    {
        id: "refill-buoi",

        name: "Túi Refill dầu gội bưởi",

        price: 310000,

        category: "Dầu gội",

        image:
            "https://cdn.hstatic.net/products/1000006063/new_project_4f782c61380f46bc8013b609d3849d29_1024x1024.jpg",

        badge: "Refill",

        description:
            "Túi refill dầu gội bưởi, phù hợp để bổ sung sản phẩm vào chai đang sử dụng và thuận tiện cho việc chăm sóc tóc hằng ngày.",

        tags: [
            "refill",
            "tui refill",
            "dau goi",
            "buoi",
            "cocoon"
        ],

        dosage: "Từ 1–2 lần nhấn",

        texture:
            "Dạng gel trong mờ",

        scent:
            "Mùi tinh dầu bưởi thơm mát",

        origin:
            "Việt Nam",

        notes:
            "Tránh dùng vùng mắt, chỉ dùng ngoài da.",

        usage: [
            "Rót sản phẩm từ túi refill vào chai dầu gội đang sử dụng.",
            "Khi dùng, thoa sản phẩm lên tóc ướt và tạo bọt.",
            "Mát-xa nhẹ nhàng từ gốc đến ngọn rồi gội sạch."
        ],

        ingredients: [

            {
                name: "Tinh dầu bưởi",

                description:
                    "Trích ly từ vỏ bưởi, chứa limonene và góp phần hỗ trợ chăm sóc da đầu, tóc."
            },

            {
                name: "Xylishine™",

                description:
                    "Chiết xuất từ tảo nâu và đường tự nhiên, hỗ trợ dưỡng ẩm và tăng vẻ bóng mượt."
            },

            {
                name: "Vitamin B5",

                description:
                    "Hỗ trợ dưỡng tóc và duy trì độ ẩm lâu dài."
            },

            {
                name: "Axít amin",

                description:
                    "Hỗ trợ giữ ẩm và củng cố cấu trúc tóc."
            }

        ]

    },


    {
        id: "xa-buoi-310",

        name: "Dầu xả Bưởi Cocoon 310ml",

        price: 388000,

        category: "Dầu xả",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTToPG_yudvoDtXvIjkh-42g8gBg6_rNUnREextcb85SNZAT1Ao3bdoyw&s=10",

        badge: "",

        description:
            "Dầu xả Bưởi dạng kem đặc màu trắng ngà, hỗ trợ dưỡng ẩm và chăm sóc phần thân tóc sau khi gội.",

        tags: [
            "dau xa",
            "buoi",
            "310ml",
            "cocoon"
        ],

        dosage: "Từ 1–2 lần nhấn",

        texture:
            "Kem đặc màu trắng ngà",

        scent:
            "Mùi tinh dầu bưởi thơm mát",

        origin:
            "Việt Nam",

        notes:
            "Tránh dùng vùng mắt, chỉ dùng ngoài da.",

        usage: [
            "Sau khi gội tóc với Dầu Gội Bưởi, thoa sản phẩm lên tóc ướt.",
            "Mát-xa nhẹ nhàng lên thân tóc.",
            "Sau đó xả sạch lại với nước. Sử dụng hằng ngày để có kết quả tốt nhất."
        ],

        ingredients: [

            {
                name: "Tinh dầu bưởi",

                description:
                    "Chiết xuất từ vỏ bưởi, mang lại mùi hương đặc trưng và hỗ trợ chăm sóc da đầu, tóc."
            },

            {
                name: "Xylishine™",

                description:
                    "Hỗ trợ dưỡng ẩm và giúp tóc trông bóng mượt hơn."
            },

            {
                name: "Vitamin B5 (D-panthenol)",

                description:
                    "Hỗ trợ dưỡng tóc, duy trì độ ẩm và giúp tóc mềm mại hơn."
            },

            {
                name: "Axít amin",

                description:
                    "Hỗ trợ giữ ẩm, củng cố cấu trúc và cải thiện bề mặt tóc."
            }

        ]

    },


    {
        id: "combo-buoi-310",

        name: "Combo dầu gội xả Bưởi Cocoon 310mlx2",

        price: 590000,

        category: "Bộ đôi dầu gội và dầu xả",

        image:
            "https://oharabeauty.com/wp-content/uploads/2024/02/dau-xa-cocoon-buoi-cung-cap-duong-chat-do-am-310ml-2.png",

        badge: "Bộ đôi",

        description:
            "Bộ đôi gồm dầu gội và dầu xả Bưởi 310ml, phù hợp cho quy trình chăm sóc tóc trọn vẹn.",

        tags: [
            "combo",
            "bo doi",
            "dau goi",
            "dau xa",
            "buoi",
            "310ml"
        ],

        dosage: "Từ 1–2 lần nhấn mỗi sản phẩm",

        texture:
            "Gel trong mờ + kem trắng ngà",

        scent:
            "Mùi tinh dầu bưởi thơm mát",

        origin:
            "Việt Nam",

        notes:
            "Tránh dùng vùng mắt, chỉ dùng ngoài da.",

        usage: [
            "Bước 1: Thoa dầu gội lên tóc ướt, tạo bọt và mát-xa nhẹ nhàng từ gốc đến ngọn, sau đó gội sạch.",
            "Bước 2: Sau khi gội, thoa dầu xả lên thân tóc ướt, mát-xa nhẹ nhàng rồi xả sạch với nước.",
            "Có thể sử dụng hằng ngày để có kết quả tốt nhất. Tránh tiếp xúc với mắt."
        ],

        ingredients: [

            {
                name: "Tinh dầu bưởi",

                description:
                    "Thành phần nổi bật được trích ly từ vỏ bưởi, mang lại hương thơm đặc trưng và hỗ trợ chăm sóc tóc."
            },

            {
                name: "Xylishine™",

                description:
                    "Hỗ trợ dưỡng ẩm và tăng vẻ bóng mượt cho mái tóc."
            },

            {
                name: "Vitamin B5",

                description:
                    "Hỗ trợ duy trì độ ẩm và chăm sóc tóc mềm mại."
            },

            {
                name: "Axít amin",

                description:
                    "Hỗ trợ giữ ẩm, củng cố cấu trúc và bảo vệ bề mặt tóc."
            }

        ]

    }

];


/* =========================================================
   2. CONFIG
========================================================= */

const STORAGE_KEY = "nangNiuMaiTocVietCart";


/* =========================================================
   3. STATE
========================================================= */

let cart = loadCart();

let currentCategory = "all";

let currentSearch = "";

let toastTimer = null;


/* =========================================================
   4. DOM
========================================================= */

const productGrid =
    document.getElementById("productGrid");

const emptyProducts =
    document.getElementById("emptyProducts");

const categoryFilter =
    document.getElementById("categoryFilter");

const productSearch =
    document.getElementById("productSearch");

const cartToggle =
    document.getElementById("cartToggle");

const cartClose =
    document.getElementById("cartClose");

const cartDrawer =
    document.getElementById("cartDrawer");

const cartOverlay =
    document.getElementById("cartOverlay");

const cartItems =
    document.getElementById("cartItems");

const cartEmpty =
    document.getElementById("cartEmpty");

const cartTotal =
    document.getElementById("cartTotal");

const cartCount =
    document.getElementById("cartCount");

const productModal =
    document.getElementById("productModal");

const modalBody =
    document.getElementById("modalBody");

const modalClose =
    document.getElementById("modalClose");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");

const orderForm =
    document.getElementById("orderForm");

const formMessage =
    document.getElementById("formMessage");

const orderSummaryItems =
    document.getElementById("orderSummaryItems");

const orderSummaryTotal =
    document.getElementById("orderSummaryTotal");

const orderSummaryCount =
    document.getElementById("orderSummaryCount");

const summaryEmpty =
    document.getElementById("summaryEmpty");

const mainNav =
    document.getElementById("mainNav");

const menuToggle =
    document.getElementById("menuToggle");

const goToOrder =
    document.getElementById("goToOrder");

const emptyCartProductLink =
    document.getElementById("emptyCartProductLink");


/* =========================================================
   5. TIỆN ÍCH
========================================================= */

function formatPrice(price) {

    return Number(price).toLocaleString("vi-VN") + " VNĐ";

}


function normalizeText(value) {

    return String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .toLowerCase()
        .trim();

}


function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   6. LOCAL STORAGE
========================================================= */

function loadCart() {

    try {

        const saved =
            localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return [];
        }

        const parsed =
            JSON.parse(saved);

        if (!Array.isArray(parsed)) {
            return [];
        }

        return parsed.filter(item =>
            item &&
            typeof item.id === "string" &&
            Number(item.quantity) > 0
        );

    } catch (error) {

        console.warn(
            "Không thể đọc giỏ hàng:",
            error
        );

        return [];
    }

}


function saveCart() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(cart)
        );

    } catch (error) {

        console.warn(
            "Không thể lưu giỏ hàng:",
            error
        );

    }

}


/* =========================================================
   7. TÌM SẢN PHẨM
========================================================= */

function getProduct(productId) {

    return products.find(
        product => product.id === productId
    );

}


function getCartQuantity() {

    return cart.reduce(
        (total, item) =>
            total + Number(item.quantity),
        0
    );

}


function getCartTotal() {

    return cart.reduce(
        (total, item) => {

            const product =
                getProduct(item.id);

            if (!product) {
                return total;
            }

            return total +
                product.price *
                Number(item.quantity);

        },
        0
    );

}


/* =========================================================
   8. RENDER PRODUCTS
========================================================= */

function getFilteredProducts() {

    const search =
        normalizeText(currentSearch);

    return products.filter(product => {

        const matchesCategory =
            currentCategory === "all" ||
            product.category === currentCategory;

        if (!matchesCategory) {
            return false;
        }

        if (!search) {
            return true;
        }

        const searchableText = normalizeText(
            [
                product.name,
                product.category,
                product.description,
                ...(product.tags || [])
            ].join(" ")
        );

        return searchableText.includes(search);

    });

}


function renderProducts() {

    const filteredProducts =
        getFilteredProducts();

    productGrid.innerHTML = "";

    if (filteredProducts.length === 0) {

        emptyProducts.classList.add("show");

        return;
    }

    emptyProducts.classList.remove("show");


    filteredProducts.forEach(
        (product, index) => {

            const card =
                document.createElement("article");

            card.className = "product-card";

            if (index === 4) {
                card.classList.add("product-card-wide");
            }

            card.innerHTML = `

                <div
                    class="product-image"
                    data-image-wrapper
                >

                    ${
                        product.badge
                            ? `
                                <span class="product-badge">
                                    ${escapeHTML(product.badge)}
                                </span>
                              `
                            : ""
                    }

                    <span class="product-category">
                        ${escapeHTML(product.category)}
                    </span>

                    <img
                        src="${product.image}"
                        alt="${escapeHTML(product.name)}"
                        loading="lazy"
                        decoding="async"
                    >

                </div>


                <div class="product-content">

                    <button
                        type="button"
                        class="product-title"
                        data-action="details"
                        data-product-id="${product.id}"
                    >
                        ${escapeHTML(product.name)}
                    </button>


                    <p class="product-description">
                        ${escapeHTML(product.description)}
                    </p>


                    <div class="product-bottom">

                        <strong class="product-price">
                            ${formatPrice(product.price)}
                        </strong>


                        <div class="product-actions">

                            <button
                                type="button"
                                class="product-action-button"
                                data-action="details"
                                data-product-id="${product.id}"
                            >
                                Chi tiết
                            </button>

                            <button
                                type="button"
                                class="product-action-button add"
                                data-action="add"
                                data-product-id="${product.id}"
                            >
                                + Giỏ hàng
                            </button>

                        </div>

                    </div>

                </div>
            `;

            productGrid.appendChild(card);

        }
    );


    setupImageFallbacks();

}


/* =========================================================
   9. IMAGE FALLBACK
========================================================= */

function setupImageFallbacks() {

    const images =
        productGrid.querySelectorAll(
            ".product-image img"
        );

    images.forEach(image => {

        image.addEventListener(
            "error",
            function () {

                const wrapper =
                    this.closest(
                        "[data-image-wrapper]"
                    );

                this.classList.add("is-error");

                if (wrapper) {
                    wrapper.classList.add(
                        "image-fallback"
                    );
                }

            },
            {
                once: true
            }
        );

    });

}


/* =========================================================
   10. FILTER
========================================================= */

function setCategory(category) {

    currentCategory = category;

    const buttons =
        categoryFilter.querySelectorAll(
            ".filter-button"
        );

    buttons.forEach(button => {

        const active =
            button.dataset.category === category;

        button.classList.toggle(
            "active",
            active
        );

    });

    renderProducts();

}


/* =========================================================
   11. PRODUCT DETAIL
========================================================= */

function openProductModal(productId) {

    const product =
        getProduct(productId);

    if (!product) {
        return;
    }


    const ingredientsHTML =
        product.ingredients
            .map(ingredient => `
                <article class="modal-ingredient">

                    <h4>
                        ${escapeHTML(ingredient.name)}
                    </h4>

                    <p>
                        ${escapeHTML(ingredient.description)}
                    </p>

                </article>
            `)
            .join("");


    const usageHTML =
        product.usage
            .map(
                (step, index) => `
                    <div class="modal-usage-step">

                        <span class="modal-usage-number">
                            ${index + 1}
                        </span>

                        <p>
                            ${escapeHTML(step)}
                        </p>

                    </div>
                `
            )
            .join("");


    modalBody.innerHTML = `

        <div class="modal-product-grid">


            <!-- ẢNH SẢN PHẨM -->

            <div class="modal-product-image">

                <img
                    src="${product.image}"
                    alt="${escapeHTML(product.name)}"
                >

            </div>


            <!-- THÔNG TIN -->

            <div class="modal-product-info">

                <span class="modal-category">
                    ${escapeHTML(product.category)}
                </span>


                <h2 id="modalProductName">
                    ${escapeHTML(product.name)}
                </h2>


                <div class="modal-product-price">
                    ${formatPrice(product.price)}
                </div>


                <p class="modal-product-description">
                    ${escapeHTML(product.description)}
                </p>


                <div class="modal-highlights">

                    <div class="modal-highlight">

                        <span>
                            Lượng dùng
                        </span>

                        <strong>
                            ${escapeHTML(product.dosage)}
                        </strong>

                    </div>


                    <div class="modal-highlight">

                        <span>
                            Kết cấu
                        </span>

                        <strong>
                            ${escapeHTML(product.texture)}
                        </strong>

                    </div>


                    <div class="modal-highlight">

                        <span>
                            Mùi hương
                        </span>

                        <strong>
                            ${escapeHTML(product.scent)}
                        </strong>

                    </div>


                    <div class="modal-highlight">

                        <span>
                            Xuất xứ
                        </span>

                        <strong>
                            ${escapeHTML(product.origin)}
                        </strong>

                    </div>

                </div>


                <!-- CÁCH DÙNG -->

                <section class="modal-section">

                    <h3 class="modal-section-title">
                        Cách sử dụng
                    </h3>

                    ${usageHTML}

                </section>


                <!-- THÀNH PHẦN -->

                <section class="modal-section">

                    <h3 class="modal-section-title">
                        Thành phần nổi bật
                    </h3>

                    <div class="modal-ingredients">

                        ${ingredientsHTML}

                    </div>

                </section>


                <!-- LƯU Ý -->

                <section class="modal-section">

                    <div class="modal-note">

                        <strong>
                            Lưu ý:
                        </strong>

                        ${escapeHTML(product.notes)}

                    </div>

                </section>


                <div class="modal-action">

                    <button
                        type="button"
                        class="button button-primary button-full"
                        data-modal-add="${product.id}"
                    >
                        Thêm vào giỏ hàng
                        <span>→</span>
                    </button>

                </div>

            </div>

        </div>
    `;


    productModal.classList.add("is-open");

    productModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add("no-scroll");

}


/* =========================================================
   12. CLOSE PRODUCT MODAL
========================================================= */

function closeProductModal() {

    productModal.classList.remove(
        "is-open"
    );

    productModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "no-scroll"
    );

}


/* =========================================================
   13. ADD TO CART
========================================================= */

function addToCart(productId, quantity = 1) {

    const product =
        getProduct(productId);

    if (!product) {
        return;
    }


    const existing =
        cart.find(
            item => item.id === productId
        );


    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({
            id: productId,
            quantity: quantity
        });

    }


    saveCart();

    renderCart();

    renderOrderSummary();

    showToast(
        `${product.name} đã được thêm vào giỏ hàng.`
    );

}


/* =========================================================
   14. CHANGE QUANTITY
========================================================= */

function changeQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            cartItem =>
                cartItem.id === productId
        );

    if (!item) {
        return;
    }


    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                cartItem =>
                    cartItem.id !== productId
            );

    }


    saveCart();

    renderCart();

    renderOrderSummary();

}


/* =========================================================
   15. REMOVE ITEM
========================================================= */

function removeFromCart(productId) {

    const product =
        getProduct(productId);

    cart =
        cart.filter(
            item =>
                item.id !== productId
        );

    saveCart();

    renderCart();

    renderOrderSummary();

    if (product) {

        showToast(
            `${product.name} đã được xóa khỏi giỏ hàng.`
        );

    }

}


/* =========================================================
   16. RENDER CART
========================================================= */

function renderCart() {

    const quantity =
        getCartQuantity();

    const total =
        getCartTotal();


    cartCount.textContent =
        quantity;


    cartTotal.textContent =
        formatPrice(total);


    if (cart.length === 0) {

        cartItems.innerHTML = "";

        cartItems.style.display = "none";

        cartEmpty.classList.add(
            "is-visible"
        );

    } else {

        cartEmpty.classList.remove(
            "is-visible"
        );

        cartItems.style.display = "block";


        cartItems.innerHTML =
            cart
                .map(item => {

                    const product =
                        getProduct(item.id);

                    if (!product) {
                        return "";
                    }


                    return `

                        <article class="cart-item">

                            <div class="cart-item-image">

                                <img
                                    src="${product.image}"
                                    alt="${escapeHTML(product.name)}"
                                >

                            </div>


                            <div class="cart-item-info">

                                <span class="cart-item-name">
                                    ${escapeHTML(product.name)}
                                </span>

                                <div class="cart-item-price">
                                    ${formatPrice(product.price)}
                                </div>


                                <div class="cart-item-controls">

                                    <div class="quantity-control">

                                        <button
                                            type="button"
                                            class="quantity-button"
                                            data-cart-action="decrease"
                                            data-product-id="${product.id}"
                                            aria-label="Giảm số lượng"
                                        >
                                            −
                                        </button>

                                        <span class="quantity-value">
                                            ${item.quantity}
                                        </span>

                                        <button
                                            type="button"
                                            class="quantity-button"
                                            data-cart-action="increase"
                                            data-product-id="${product.id}"
                                            aria-label="Tăng số lượng"
                                        >
                                            +
                                        </button>

                                    </div>


                                    <button
                                        type="button"
                                        class="remove-item"
                                        data-cart-action="remove"
                                        data-product-id="${product.id}"
                                    >
                                        Xóa
                                    </button>

                                </div>

                            </div>

                        </article>

                    `;

                })
                .join("");

    }

}


/* =========================================================
   17. CART DRAWER
========================================================= */

function openCart() {

    cartDrawer.classList.add(
        "is-open"
    );

    cartDrawer.setAttribute(
        "aria-hidden",
        "false"
    );

    cartOverlay.classList.add(
        "is-visible"
    );

    cartOverlay.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "no-scroll"
    );

}


function closeCart() {

    cartDrawer.classList.remove(
        "is-open"
    );

    cartDrawer.setAttribute(
        "aria-hidden",
        "true"
    );

    cartOverlay.classList.remove(
        "is-visible"
    );

    cartOverlay.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "no-scroll"
    );

}


/* =========================================================
   18. ORDER SUMMARY
========================================================= */

function renderOrderSummary() {

    const quantity =
        getCartQuantity();

    const total =
        getCartTotal();


    orderSummaryCount.textContent =
        `${quantity} sản phẩm`;


    orderSummaryTotal.textContent =
        formatPrice(total);


    if (cart.length === 0) {

        orderSummaryItems.innerHTML = "";

        orderSummaryItems.style.display =
            "none";

        summaryEmpty.style.display =
            "flex";

        return;
    }


    summaryEmpty.style.display =
        "none";

    orderSummaryItems.style.display =
        "block";


    orderSummaryItems.innerHTML =
        cart
            .map(item => {

                const product =
                    getProduct(item.id);

                if (!product) {
                    return "";
                }


                const subtotal =
                    product.price *
                    item.quantity;


                return `

                    <article class="summary-product">

                        <div class="summary-product-image">

                            <img
                                src="${product.image}"
                                alt="${escapeHTML(product.name)}"
                            >

                        </div>


                        <div>

                            <div class="summary-product-name">
                                ${escapeHTML(product.name)}
                            </div>

                            <div class="summary-product-meta">
                                ${item.quantity} × ${formatPrice(product.price)}
                            </div>

                        </div>


                        <strong class="summary-product-price">
                            ${formatPrice(subtotal)}
                        </strong>

                    </article>

                `;

            })
            .join("");

}


/* =========================================================
   19. TOAST
========================================================= */

function showToast(message) {

    toastMessage.textContent =
        message;

    toast.classList.add(
        "show"
    );


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2800
        );

}


/* =========================================================
   20. MOBILE MENU
========================================================= */

function toggleMobileMenu() {

    const isOpen =
        mainNav.classList.toggle(
            "is-open"
        );

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

}


function closeMobileMenu() {

    mainNav.classList.remove(
        "is-open"
    );

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

}


/* =========================================================
   21. ORDER
========================================================= */

function validatePhone(phone) {

    const cleaned =
        phone.replace(/\s+/g, "");

    return /^(0|\+84)[0-9]{9,10}$/.test(
        cleaned
    );

}


function generateOrderCode() {

    const date =
        new Date();

    const year =
        date.getFullYear();

    const month =
        String(
            date.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            date.getDate()
        ).padStart(2, "0");

    const random =
        Math.floor(
            1000 +
            Math.random() * 9000
        );


    return `NNMTV-${year}${month}${day}-${random}`;

}


function handleOrderSubmit(event) {

    event.preventDefault();


    formMessage.textContent = "";

    formMessage.classList.remove(
        "success"
    );


    if (cart.length === 0) {

        formMessage.textContent =
            "Vui lòng thêm ít nhất một sản phẩm vào giỏ hàng.";

        document
            .getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });

        return;
    }


    const customerName =
        document
            .getElementById("customerName")
            .value
            .trim();


    const customerPhone =
        document
            .getElementById("customerPhone")
            .value
            .trim();


    const customerAddress =
        document
            .getElementById("customerAddress")
            .value
            .trim();


    if (!customerName) {

        formMessage.textContent =
            "Vui lòng nhập họ và tên.";

        return;
    }


    if (!validatePhone(customerPhone)) {

        formMessage.textContent =
            "Số điện thoại chưa đúng định dạng.";

        return;
    }


    if (!customerAddress) {

        formMessage.textContent =
            "Vui lòng nhập địa chỉ nhận hàng.";

        return;
    }


    const orderCode =
        generateOrderCode();

    const total =
        getCartTotal();


    formMessage.textContent =
        `Đặt hàng thành công. Mã đơn: ${orderCode}. Tổng tiền: ${formatPrice(total)}.`;

    formMessage.classList.add(
        "success"
    );


    showToast(
        `Đặt hàng thành công — ${orderCode}`
    );


    cart = [];

    saveCart();

    renderCart();

    renderOrderSummary();


    orderForm.reset();


    setTimeout(
        () => {

            formMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        },
        100
    );

}


/* =========================================================
   22. EVENT - PRODUCT
========================================================= */

productGrid.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-action]"
            );

        if (!button) {
            return;
        }


        const action =
            button.dataset.action;

        const productId =
            button.dataset.productId;


        if (action === "details") {

            openProductModal(productId);

        }


        if (action === "add") {

            addToCart(productId);

        }

    }
);


/* =========================================================
   23. EVENT - FILTER
========================================================= */

categoryFilter.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                ".filter-button"
            );

        if (!button) {
            return;
        }


        setCategory(
            button.dataset.category
        );

    }
);


/* =========================================================
   24. EVENT - SEARCH
========================================================= */

productSearch.addEventListener(
    "input",
    event => {

        currentSearch =
            event.target.value;

        renderProducts();

    }
);


/* =========================================================
   25. EVENT - CART
========================================================= */

cartToggle.addEventListener(
    "click",
    openCart
);


cartClose.addEventListener(
    "click",
    closeCart
);


cartOverlay.addEventListener(
    "click",
    closeCart
);


cartItems.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-cart-action]"
            );

        if (!button) {
            return;
        }


        const action =
            button.dataset.cartAction;

        const productId =
            button.dataset.productId;


        if (action === "increase") {

            changeQuantity(
                productId,
                1
            );

        }


        if (action === "decrease") {

            changeQuantity(
                productId,
                -1
            );

        }


        if (action === "remove") {

            removeFromCart(
                productId
            );

        }

    }
);


/* =========================================================
   26. EVENT - MODAL
========================================================= */

modalClose.addEventListener(
    "click",
    closeProductModal
);


productModal.addEventListener(
    "click",
    event => {

        if (
            event.target.matches(
                "[data-modal-close]"
            )
        ) {

            closeProductModal();

        }

    }
);


modalBody.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-modal-add]"
            );

        if (!button) {
            return;
        }


        const productId =
            button.dataset.modalAdd;


        addToCart(productId);

        closeProductModal();

        openCart();

    }
);


/* =========================================================
   27. EVENT - ORDER
========================================================= */

orderForm.addEventListener(
    "submit",
    handleOrderSubmit
);


/* =========================================================
   28. EVENT - MOBILE MENU
========================================================= */

menuToggle.addEventListener(
    "click",
    toggleMobileMenu
);


mainNav.addEventListener(
    "click",
    event => {

        const link =
            event.target.closest("a");

        if (link) {
            closeMobileMenu();
        }

    }
);


/* =========================================================
   29. CART -> ORDER
========================================================= */

goToOrder.addEventListener(
    "click",
    () => {

        closeCart();

        setTimeout(
            () => {

                document
                    .getElementById("order")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            },
            100
        );

    }
);


emptyCartProductLink.addEventListener(
    "click",
    () => {

        closeCart();

    }
);


/* =========================================================
   30. ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }


        if (
            productModal.classList.contains(
                "is-open"
            )
        ) {

            closeProductModal();

        }


        if (
            cartDrawer.classList.contains(
                "is-open"
            )
        ) {

            closeCart();

        }


        closeMobileMenu();

    }
);


/* =========================================================
   31. CLICK OUTSIDE MOBILE NAV
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !mainNav.classList.contains(
                "is-open"
            )
        ) {
            return;
        }


        const clickedInsideNav =
            mainNav.contains(event.target);

        const clickedMenuButton =
            menuToggle.contains(event.target);


        if (
            !clickedInsideNav &&
            !clickedMenuButton
        ) {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   32. INITIALIZE
========================================================= */

function initialize() {

    renderProducts();

    renderCart();

    renderOrderSummary();

}


initialize();
