/* =========================================================
   NÂNG NIU MÁI TÓC VIỆT
   script.js

   Chức năng:
   - Dữ liệu 5 sản phẩm
   - Hiển thị sản phẩm
   - Lọc sản phẩm
   - Tìm kiếm
   - Chi tiết sản phẩm
   - Giỏ hàng
   - Tăng giảm số lượng
   - LocalStorage
   - Đặt hàng
   ========================================================= */


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

        shortDescription:
            "Dầu gội dạng gel trong mờ với mùi tinh dầu bưởi thơm mát, phù hợp cho chu trình chăm sóc tóc hằng ngày.",

        tags: [
            "dầu gội",
            "dầu gội bưởi",
            "bưởi",
            "cocoon",
            "500ml",
            "gội đầu",
            "tinh dầu bưởi"
        ],

        detail: {

            dosage:
                "Từ 1–2 lần nhấn",

            texture:
                "Dạng gel trong mờ",

            scent:
                "Mùi tinh dầu bưởi thơm mát",

            notes:
                "Tránh dùng vùng mắt, chỉ dùng ngoài da",

            origin:
                "Việt Nam",

            usage: [

                {
                    title: "Gội đầu",

                    text:
                        "Thoa sản phẩm lên tóc ướt và tạo bọt, mát-xa nhẹ nhàng từ gốc đến ngọn, sau đó gội sạch."
                },

                {
                    title: "Sử dụng hằng ngày",

                    text:
                        "Có thể sử dụng hằng ngày để duy trì chu trình chăm sóc tóc. Tránh tiếp xúc với mắt."
                }

            ],

            ingredients: [

                {
                    name: "Tinh dầu bưởi",

                    text:
                        "Trích ly từ vỏ bưởi, chứa limonene. Theo mô tả sản phẩm, thành phần này hỗ trợ chăm sóc da đầu và mái tóc."
                },

                {
                    name: "Xylishine™",

                    text:
                        "Chiết xuất từ tảo nâu Pelvetia canaliculata và đường tự nhiên trong gỗ, hỗ trợ dưỡng ẩm, phục hồi và tăng độ bóng cho tóc."
                },

                {
                    name: "Vitamin B5 (D-panthenol)",

                    text:
                        "Hỗ trợ dưỡng tóc, duy trì độ ẩm, giảm cảm giác tóc khô xơ và giúp tóc trông mềm mại, bóng hơn."
                },

                {
                    name: "Axít amin",

                    text:
                        "Hỗ trợ dưỡng ẩm, củng cố cấu trúc tóc, bảo vệ màu và chăm sóc bề mặt tóc."
                }

            ]

        }

    },


    {
        id: "goi-buoi-310",

        name: "Dầu gội bưởi 310ml",

        price: 200000,

        category: "Dầu gội",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaO9qvYFAEuGH2AkFhsus8McXksD5--YRyhFYcsqTdwg&s=10",

        shortDescription:
            "Phiên bản dầu gội bưởi 310ml với kết cấu gel trong mờ và mùi tinh dầu bưởi thơm mát.",

        tags: [
            "dầu gội",
            "dầu gội bưởi",
            "bưởi",
            "310ml",
            "cocoon",
            "tinh dầu bưởi"
        ],

        detail: {

            dosage:
                "Từ 1–2 lần nhấn",

            texture:
                "Dạng gel trong mờ",

            scent:
                "Mùi tinh dầu bưởi thơm mát",

            notes:
                "Tránh dùng vùng mắt, chỉ dùng ngoài da",

            origin:
                "Việt Nam",

            usage: [

                {
                    title: "Gội đầu",

                    text:
                        "Thoa sản phẩm lên tóc ướt và tạo bọt, mát-xa nhẹ nhàng từ gốc đến ngọn, sau đó gội sạch."
                },

                {
                    title: "Sử dụng hằng ngày",

                    text:
                        "Sử dụng hằng ngày để có kết quả tốt nhất. Tránh tiếp xúc với mắt."
                }

            ],

            ingredients: [

                {
                    name: "Tinh dầu bưởi",

                    text:
                        "Trích ly từ vỏ bưởi, chứa limonene, hỗ trợ chăm sóc da đầu và mái tóc."
                },

                {
                    name: "Xylishine™",

                    text:
                        "Chiết xuất từ tảo nâu Pelvetia canaliculata và đường tự nhiên trong gỗ, hỗ trợ dưỡng ẩm và tăng độ bóng cho tóc."
                },

                {
                    name: "Vitamin B5 (D-panthenol)",

                    text:
                        "Hỗ trợ dưỡng tóc, duy trì độ ẩm và giúp tóc trông mềm mại, bóng hơn."
                },

                {
                    name: "Axít amin",

                    text:
                        "Hỗ trợ dưỡng ẩm, củng cố cấu trúc tóc và chăm sóc bề mặt tóc."
                }

            ]

        }

    },


    {
        id: "refill-buoi",

        name: "Túi Refill dầu gội bưởi",

        price: 310000,

        category: "Dầu gội",

        image:
            "https://cdn.hstatic.net/products/1000006063/new_project_4f782c61380f46bc8013b609d3849d29_1024x1024.jpg",

        shortDescription:
            "Túi refill dầu gội bưởi, thuận tiện bổ sung vào chai đang sử dụng và tiếp tục chu trình chăm sóc tóc.",

        tags: [
            "refill",
            "túi refill",
            "dầu gội",
            "dầu gội bưởi",
            "bưởi",
            "310ml",
            "cocoon"
        ],

        detail: {

            dosage:
                "Từ 1–2 lần nhấn",

            texture:
                "Dạng gel trong mờ",

            scent:
                "Mùi tinh dầu bưởi thơm mát",

            notes:
                "Tránh dùng vùng mắt, chỉ dùng ngoài da",

            origin:
                "Việt Nam",

            usage: [

                {
                    title: "Gội đầu",

                    text:
                        "Thoa sản phẩm lên tóc ướt và tạo bọt, mát-xa nhẹ nhàng từ gốc đến ngọn, sau đó gội sạch."
                },

                {
                    title: "Tiện lợi với dạng refill",

                    text:
                        "Dùng để bổ sung dầu gội vào chai đang sử dụng. Có thể sử dụng hằng ngày và tránh tiếp xúc với mắt."
                }

            ],

            ingredients: [

                {
                    name: "Tinh dầu bưởi",

                    text:
                        "Trích ly từ vỏ bưởi, chứa limonene và hỗ trợ chăm sóc da đầu, mái tóc."
                },

                {
                    name: "Xylishine™",

                    text:
                        "Chiết xuất từ tảo nâu Pelvetia canaliculata và đường tự nhiên trong gỗ, hỗ trợ dưỡng ẩm và tăng độ bóng."
                },

                {
                    name: "Vitamin B5 (D-panthenol)",

                    text:
                        "Hỗ trợ dưỡng tóc, duy trì độ ẩm và chăm sóc tóc."
                },

                {
                    name: "Axít amin",

                    text:
                        "Hỗ trợ dưỡng ẩm, củng cố cấu trúc tóc và chăm sóc bề mặt tóc."
                }

            ]

        }

    },


    {
        id: "xa-buoi-310",

        name: "Dầu xả Bưởi Cocoon 310ml",

        price: 388000,

        category: "Dầu xả",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTToPG_yudvoDtXvIjkh-42g8gBg6_rNUnREextcb85SNZAT1Ao3bdoyw&s=10",

        shortDescription:
            "Dầu xả dạng kem đặc màu trắng ngà, dùng sau dầu gội để chăm sóc phần thân và ngọn tóc.",

        tags: [
            "dầu xả",
            "dầu xả bưởi",
            "bưởi",
            "310ml",
            "cocoon",
            "tinh dầu bưởi"
        ],

        detail: {

            dosage:
                "Từ 1–2 lần nhấn",

            texture:
                "Dạng kem đặc màu trắng ngà",

            scent:
                "Mùi tinh dầu bưởi thơm mát",

            notes:
                "Tránh dùng vùng mắt, chỉ dùng ngoài da",

            origin:
                "Việt Nam",

            usage: [

                {
                    title: "Sau khi gội",

                    text:
                        "Sau khi gội tóc với Dầu Gội Bưởi, thoa sản phẩm lên tóc ướt."
                },

                {
                    title: "Mát-xa và xả sạch",

                    text:
                        "Mát-xa nhẹ nhàng lên thân tóc, sau đó xả sạch lại với nước. Sử dụng hằng ngày để có kết quả tốt nhất."
                }

            ],

            ingredients: [

                {
                    name: "Tinh dầu bưởi",

                    text:
                        "Trích ly từ vỏ bưởi, chứa limonene, hỗ trợ chăm sóc da đầu và mái tóc."
                },

                {
                    name: "Xylishine™",

                    text:
                        "Chiết xuất từ tảo nâu Pelvetia canaliculata và đường tự nhiên trong gỗ, hỗ trợ dưỡng ẩm, phục hồi và tăng độ bóng."
                },

                {
                    name: "Vitamin B5 (D-panthenol)",

                    text:
                        "Hỗ trợ dưỡng tóc, duy trì độ ẩm lâu hơn và giúp tóc trông mềm mại, bóng hơn."
                },

                {
                    name: "Axít amin",

                    text:
                        "Hỗ trợ dưỡng ẩm, củng cố cấu trúc tóc, bảo vệ màu và chăm sóc bề mặt tóc."
                }

            ]

        }

    },


    {
        id: "combo-buoi-310",

        name: "Combo dầu gội xả Bưởi Cocoon 310mlx2",

        price: 590000,

        category: "Bộ đôi dầu gội và dầu xả",

        image:
            "https://oharabeauty.com/wp-content/uploads/2024/02/dau-xa-cocoon-buoi-cung-cap-duong-chat-do-am-310ml-2.png",

        shortDescription:
            "Bộ đôi dầu gội và dầu xả Bưởi 310ml × 2 cho một chu trình chăm tóc trọn vẹn.",

        tags: [
            "combo",
            "bộ đôi",
            "dầu gội",
            "dầu xả",
            "bưởi",
            "310ml",
            "cocoon"
        ],

        detail: {

            dosage:
                "Từ 1–2 lần nhấn cho mỗi sản phẩm",

            texture:
                "Dầu gội dạng gel trong mờ; dầu xả dạng kem đặc màu trắng ngà",

            scent:
                "Mùi tinh dầu bưởi thơm mát",

            notes:
                "Tránh dùng vùng mắt, chỉ dùng ngoài da",

            origin:
                "Việt Nam",

            usage: [

                {
                    title: "Bước 1 — Dầu gội",

                    text:
                        "Thoa dầu gội lên tóc ướt và tạo bọt, mát-xa nhẹ nhàng từ gốc đến ngọn, sau đó gội sạch."
                },

                {
                    title: "Bước 2 — Dầu xả",

                    text:
                        "Sau khi gội, thoa dầu xả lên tóc ướt, mát-xa nhẹ nhàng lên thân tóc, sau đó xả sạch lại với nước."
                },

                {
                    title: "Sử dụng hằng ngày",

                    text:
                        "Có thể sử dụng hằng ngày để duy trì chu trình chăm sóc tóc. Tránh tiếp xúc với mắt."
                }

            ],

            ingredients: [

                {
                    name: "Tinh dầu bưởi",

                    text:
                        "Trích ly từ vỏ bưởi, chứa limonene, hỗ trợ chăm sóc da đầu và mái tóc."
                },

                {
                    name: "Xylishine™",

                    text:
                        "Chiết xuất từ tảo nâu Pelvetia canaliculata và đường tự nhiên trong gỗ, hỗ trợ dưỡng ẩm, phục hồi và tăng độ bóng."
                },

                {
                    name: "Vitamin B5 (D-panthenol)",

                    text:
                        "Hỗ trợ dưỡng tóc, duy trì độ ẩm và giúp tóc trông mềm mại, bóng hơn."
                },

                {
                    name: "Axít amin",

                    text:
                        "Hỗ trợ dưỡng ẩm, củng cố cấu trúc tóc, bảo vệ màu và chăm sóc bề mặt tóc."
                }

            ]

        }

    }

];


/* =========================================================
   2. CONFIG
========================================================= */

const CART_STORAGE_KEY =
    "nangNiuMaiTocVietCart";


/* =========================================================
   3. STATE
========================================================= */

let cart = loadCart();

let activeCategory = "all";

let searchTerm = "";

let toastTimer = null;


/* =========================================================
   4. DOM
========================================================= */

const productGrid =
    document.getElementById("productGrid");

const emptyState =
    document.getElementById("emptyState");

const productSearch =
    document.getElementById("productSearch");

const categoryFilter =
    document.getElementById("categoryFilter");

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

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const cartCheckout =
    document.getElementById("cartCheckout");

const productModal =
    document.getElementById("productModal");

const modalBody =
    document.getElementById("modalBody");

const modalClose =
    document.getElementById("modalClose");

const toast =
    document.getElementById("toast");

const orderForm =
    document.getElementById("orderForm");

const orderSummary =
    document.getElementById("orderSummary");

const orderTotal =
    document.getElementById("orderTotal");

const orderMessage =
    document.getElementById("orderMessage");

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


/* =========================================================
   5. INIT
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    init
);


function init() {

    renderProducts();

    renderCart();

    renderOrderSummary();

    bindEvents();

    updateCartCount();

}


/* =========================================================
   6. EVENTS
========================================================= */

function bindEvents() {


    /* -----------------------------------------
       CATEGORY FILTER
    ----------------------------------------- */

    if (categoryFilter) {

        categoryFilter.addEventListener(
            "click",
            event => {

                const button =
                    event.target.closest(
                        "[data-category]"
                    );

                if (!button) {
                    return;
                }

                activeCategory =
                    button.dataset.category;

                categoryFilter
                    .querySelectorAll(
                        ".filter-btn"
                    )
                    .forEach(item => {

                        item.classList.toggle(
                            "is-active",
                            item === button
                        );

                    });

                renderProducts();

            }
        );

    }


    /* -----------------------------------------
       SEARCH
    ----------------------------------------- */

    if (productSearch) {

        productSearch.addEventListener(
            "input",
            event => {

                searchTerm =
                    event.target.value
                        .trim();

                renderProducts();

            }
        );

    }


    /* -----------------------------------------
       PRODUCT GRID
    ----------------------------------------- */

    if (productGrid) {

        productGrid.addEventListener(
            "click",
            event => {

                const detailButton =
                    event.target.closest(
                        ".js-product-detail"
                    );

                const addButton =
                    event.target.closest(
                        ".js-add-cart"
                    );


                if (detailButton) {

                    const productId =
                        detailButton.dataset.id;

                    openProductModal(
                        productId
                    );

                    return;
                }


                if (addButton) {

                    const productId =
                        addButton.dataset.id;

                    addToCart(productId);

                }

            }
        );

    }


    /* -----------------------------------------
       CART
    ----------------------------------------- */

    cartToggle?.addEventListener(
        "click",
        openCart
    );


    cartClose?.addEventListener(
        "click",
        closeCart
    );


    cartOverlay?.addEventListener(
        "click",
        closeCart
    );


    cartItems?.addEventListener(
        "click",
        handleCartClick
    );


    cartCheckout?.addEventListener(
        "click",
        () => {

            closeCart();

        }
    );


    /* -----------------------------------------
       MODAL
    ----------------------------------------- */

    modalClose?.addEventListener(
        "click",
        closeProductModal
    );


    productModal?.addEventListener(
        "click",
        event => {

            if (
                event.target.matches(
                    "[data-modal-close]"
                )
            ) {

                closeProductModal();

            }


            const addButton =
                event.target.closest(
                    ".js-modal-add"
                );


            if (addButton) {

                addToCart(
                    addButton.dataset.id
                );

            }


            const orderButton =
                event.target.closest(
                    ".js-modal-order"
                );


            if (orderButton) {

                const productId =
                    orderButton.dataset.id;

                addToCart(productId);

                closeProductModal();

                setTimeout(
                    () => {

                        document
                            .getElementById("order")
                            ?.scrollIntoView({
                                behavior: "smooth"
                            });

                    },
                    100
                );

            }

        }
    );


    /* -----------------------------------------
       ORDER FORM
    ----------------------------------------- */

    orderForm?.addEventListener(
        "submit",
        handleOrderSubmit
    );


    /* -----------------------------------------
       MOBILE MENU
    ----------------------------------------- */

    menuToggle?.addEventListener(
        "click",
        toggleMobileMenu
    );


    mainNav?.addEventListener(
        "click",
        event => {

            if (
                event.target.closest("a")
            ) {

                closeMobileMenu();

            }

        }
    );


    /* -----------------------------------------
       ESCAPE
    ----------------------------------------- */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") {
                return;
            }

            closeCart();

            closeProductModal();

            closeMobileMenu();

        }
    );

}


/* =========================================================
   7. NORMALIZE SEARCH
========================================================= */

function normalizeText(value) {

    return String(value ?? "")
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .replace(
            /đ/g,
            "d"
        )
        .replace(
            /Đ/g,
            "D"
        )
        .toLowerCase()
        .trim();

}


/* =========================================================
   8. FORMAT PRICE
========================================================= */

function formatPrice(price) {

    return (
        Number(price)
            .toLocaleString("vi-VN")
        + " VNĐ"
    );

}


/* =========================================================
   9. FIND PRODUCT
========================================================= */

function getProductById(id) {

    return products.find(
        product =>
            product.id === id
    );

}


/* =========================================================
   10. FILTER PRODUCTS
========================================================= */

function getFilteredProducts() {

    const normalizedSearch =
        normalizeText(searchTerm);


    return products.filter(
        product => {

            const categoryMatch =
                activeCategory === "all"
                ||
                product.category ===
                    activeCategory;


            const searchableText =
                [
                    product.name,
                    product.category,
                    product.shortDescription,
                    ...(product.tags || [])
                ]
                    .map(normalizeText)
                    .join(" ");


            const searchMatch =
                !normalizedSearch
                ||
                searchableText.includes(
                    normalizedSearch
                );


            return (
                categoryMatch
                &&
                searchMatch
            );

        }
    );

}


/* =========================================================
   11. RENDER PRODUCTS
========================================================= */

function renderProducts() {

    if (!productGrid) {
        return;
    }


    const filteredProducts =
        getFilteredProducts();


    if (
        filteredProducts.length === 0
    ) {

        productGrid.innerHTML = "";

        if (emptyState) {
            emptyState.hidden = false;
        }

        return;
    }


    if (emptyState) {
        emptyState.hidden = true;
    }


    productGrid.innerHTML =
        filteredProducts
            .map(
                product =>
                    createProductCard(
                        product
                    )
            )
            .join("");


    bindImageFallbacks(
        productGrid
    );

}


/* =========================================================
   12. CREATE PRODUCT CARD
========================================================= */

function createProductCard(product) {

    return `

        <article
            class="product-card"
            data-product-id="${product.id}"
        >

            <!--
                ẢNH FULL KHUNG
                Không có chữ nằm bên cạnh ảnh.
            -->

            <button
                type="button"
                class="product-image-button js-product-detail"
                data-id="${product.id}"
                aria-label="Xem ${escapeHtml(product.name)}"
            >

                <span class="product-image-frame">

                    <img
                        src="${escapeAttribute(product.image)}"
                        alt="${escapeAttribute(product.name)}"
                        loading="lazy"
                        decoding="async"
                    >

                </span>

            </button>


            <!--
                CHỈ SAU KHI ẢNH KẾT THÚC
                MỚI ĐẾN TÊN SẢN PHẨM.
            -->

            <div class="product-content">

                <button
                    type="button"
                    class="product-title js-product-detail"
                    data-id="${product.id}"
                >
                    ${escapeHtml(product.name)}
                </button>


                <div class="product-price">
                    ${formatPrice(product.price)}
                </div>


                <div class="product-actions">

                    <button
                        type="button"
                        class="btn btn-outline js-product-detail"
                        data-id="${product.id}"
                    >
                        Xem chi tiết
                    </button>


                    <button
                        type="button"
                        class="btn btn-primary js-add-cart"
                        data-id="${product.id}"
                    >
                        Thêm giỏ
                    </button>

                </div>

            </div>

        </article>

    `;

}


/* =========================================================
   13. IMAGE FALLBACK
========================================================= */

function bindImageFallbacks(
    scope = document
) {

    scope
        .querySelectorAll("img")
        .forEach(image => {

            if (
                image.dataset.errorBound
            ) {
                return;
            }

            image.dataset.errorBound =
                "true";


            image.addEventListener(
                "error",
                () => {

                    image.style.display =
                        "none";

                    const parent =
                        image.parentElement;

                    if (parent) {

                        parent.classList.add(
                            "image-fallback"
                        );

                    }

                }
            );

        });

}


/* =========================================================
   14. CART STORAGE
========================================================= */

function loadCart() {

    try {

        const saved =
            localStorage.getItem(
                CART_STORAGE_KEY
            );


        if (!saved) {
            return [];
        }


        const parsed =
            JSON.parse(saved);


        if (!Array.isArray(parsed)) {
            return [];
        }


        return parsed.filter(
            item =>
                item
                &&
                typeof item.id === "string"
                &&
                Number(item.quantity) > 0
        );

    }
    catch (error) {

        console.warn(
            "Không thể đọc giỏ hàng:",
            error
        );

        return [];

    }

}


/* =========================================================
   15. SAVE CART
========================================================= */

function saveCart() {

    localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(cart)
    );

}


/* =========================================================
   16. ADD TO CART
========================================================= */

function addToCart(
    productId
) {

    const product =
        getProductById(productId);


    if (!product) {
        return;
    }


    const existing =
        cart.find(
            item =>
                item.id === productId
        );


    if (existing) {

        existing.quantity += 1;

    }
    else {

        cart.push({

            id: productId,

            quantity: 1

        });

    }


    saveCart();

    renderCart();

    renderOrderSummary();

    updateCartCount();

    showToast(
        `${product.name} đã được thêm vào giỏ hàng.`
    );

}


/* =========================================================
   17. UPDATE CART QUANTITY
========================================================= */

function updateCartQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            entry =>
                entry.id === productId
        );


    if (!item) {
        return;
    }


    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                entry =>
                    entry.id !== productId
            );

    }


    saveCart();

    renderCart();

    renderOrderSummary();

    updateCartCount();

}


/* =========================================================
   18. REMOVE CART ITEM
========================================================= */

function removeFromCart(
    productId
) {

    const product =
        getProductById(productId);


    cart =
        cart.filter(
            item =>
                item.id !== productId
        );


    saveCart();

    renderCart();

    renderOrderSummary();

    updateCartCount();


    if (product) {

        showToast(
            `${product.name} đã được xóa khỏi giỏ hàng.`
        );

    }

}


/* =========================================================
   19. CART CLICK
========================================================= */

function handleCartClick(
    event
) {

    const increase =
        event.target.closest(
            "[data-cart-increase]"
        );


    const decrease =
        event.target.closest(
            "[data-cart-decrease]"
        );


    const remove =
        event.target.closest(
            "[data-cart-remove]"
        );


    if (increase) {

        updateCartQuantity(
            increase.dataset.cartIncrease,
            1
        );

        return;
    }


    if (decrease) {

        updateCartQuantity(
            decrease.dataset.cartDecrease,
            -1
        );

        return;
    }


    if (remove) {

        removeFromCart(
            remove.dataset.cartRemove
        );

    }

}


/* =========================================================
   20. CART TOTAL
========================================================= */

function getCartTotal() {

    return cart.reduce(
        (
            total,
            item
        ) => {

            const product =
                getProductById(item.id);


            if (!product) {
                return total;
            }


            return (
                total
                +
                product.price *
                item.quantity
            );

        },
        0
    );

}


/* =========================================================
   21. CART COUNT
========================================================= */

function getCartItemCount() {

    return cart.reduce(
        (
            total,
            item
        ) =>
            total +
            Number(item.quantity || 0),
        0
    );

}


function updateCartCount() {

    if (cartCount) {

        cartCount.textContent =
            getCartItemCount();

    }

}


/* =========================================================
   22. RENDER CART
========================================================= */

function renderCart() {

    if (!cartItems) {
        return;
    }


    /*
       Loại bỏ những sản phẩm không còn
       tồn tại trong dữ liệu.
    */

    const validCart =
        cart.filter(
            item =>
                getProductById(item.id)
        );


    if (
        validCart.length !==
        cart.length
    ) {

        cart = validCart;

        saveCart();

    }


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="cart-empty">

                <h3>
                    Giỏ hàng đang trống
                </h3>

                <p>
                    Hãy chọn một sản phẩm
                    để bắt đầu chu trình chăm tóc.
                </p>

                <a
                    href="#products"
                    class="btn btn-primary"
                    onclick="closeCart()"
                >
                    Xem sản phẩm
                </a>

            </div>

        `;

    }
    else {

        cartItems.innerHTML =
            cart
                .map(
                    item =>
                        createCartItem(
                            item
                        )
                )
                .join("");

    }


    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(
                getCartTotal()
            );

    }


    updateCartCount();

}


/* =========================================================
   23. CREATE CART ITEM
========================================================= */

function createCartItem(
    item
) {

    const product =
        getProductById(item.id);


    if (!product) {
        return "";
    }


    return `

        <div
            class="cart-item"
            data-id="${product.id}"
        >

            <div class="cart-item-image">

                <img
                    src="${escapeAttribute(product.image)}"
                    alt="${escapeAttribute(product.name)}"
                    loading="lazy"
                >

            </div>


            <div class="cart-item-info">

                <div class="cart-item-name">
                    ${escapeHtml(product.name)}
                </div>


                <div class="cart-item-price">
                    ${formatPrice(product.price)}
                </div>


                <div class="quantity-control">

                    <button
                        type="button"
                        aria-label="Giảm số lượng"
                        data-cart-decrease="${product.id}"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        type="button"
                        aria-label="Tăng số lượng"
                        data-cart-increase="${product.id}"
                    >
                        +
                    </button>

                </div>


                <button
                    type="button"
                    class="remove-item"
                    data-cart-remove="${product.id}"
                >
                    Xóa sản phẩm
                </button>

            </div>

        </div>

    `;

}


/* =========================================================
   24. OPEN CART
========================================================= */

function openCart() {

    cartDrawer?.classList.add(
        "is-open"
    );


    cartOverlay?.removeAttribute(
        "hidden"
    );


    requestAnimationFrame(
        () => {

            cartOverlay?.classList.add(
                "is-visible"
            );

        }
    );


    cartDrawer?.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "drawer-open"
    );

}


/* =========================================================
   25. CLOSE CART
========================================================= */

function closeCart() {

    cartDrawer?.classList.remove(
        "is-open"
    );


    cartOverlay?.classList.remove(
        "is-visible"
    );


    cartDrawer?.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "drawer-open"
    );


    setTimeout(
        () => {

            if (
                !cartOverlay?.classList.contains(
                    "is-visible"
                )
            ) {

                cartOverlay?.setAttribute(
                    "hidden",
                    ""
                );

            }

        },
        300
    );

}


/* =========================================================
   26. OPEN PRODUCT MODAL
========================================================= */

function openProductModal(
    productId
) {

    const product =
        getProductById(productId);


    if (!product) {
        return;
    }


    modalBody.innerHTML =
        createProductModal(
            product
        );


    productModal?.classList.add(
        "is-open"
    );


    productModal?.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );


    bindImageFallbacks(
        productModal
    );


    setTimeout(
        () => {
            modalClose?.focus();
        },
        100
    );

}


/* =========================================================
   27. CLOSE PRODUCT MODAL
========================================================= */

function closeProductModal() {

    productModal?.classList.remove(
        "is-open"
    );


    productModal?.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   28. CREATE PRODUCT MODAL
========================================================= */

function createProductModal(
    product
) {

    const usageHTML =
        product.detail.usage
            .map(
                (
                    step,
                    index
                ) => `

                    <div class="usage-step">

                        <span class="usage-number">
                            ${index + 1}
                        </span>

                        <div>

                            <h4>
                                ${escapeHtml(step.title)}
                            </h4>

                            <p>
                                ${escapeHtml(step.text)}
                            </p>

                        </div>

                    </div>

                `
            )
            .join("");


    const ingredientsHTML =
        product.detail.ingredients
            .map(
                ingredient => `

                    <article
                        class="ingredient-detail-card"
                    >

                        <h4>
                            ${escapeHtml(
                                ingredient.name
                            )}
                        </h4>

                        <p>
                            ${escapeHtml(
                                ingredient.text
                            )}
                        </p>

                    </article>

                `
            )
            .join("");


    return `

        <div class="modal-product">

            <!--
                ẢNH FULL KHUNG
            -->

            <div class="modal-product-media">

                <img
                    src="${escapeAttribute(product.image)}"
                    alt="${escapeAttribute(product.name)}"
                >

            </div>


            <div class="modal-product-info">

                <div class="modal-category">
                    ${escapeHtml(product.category)}
                </div>


                <!-- TÊN NẰM DƯỚI ẢNH -->

                <h2
                    class="modal-product-title"
                    id="modalTitle"
                >
                    ${escapeHtml(product.name)}
                </h2>


                <div class="modal-product-price">
                    ${formatPrice(product.price)}
                </div>


                <p class="modal-product-description">
                    ${escapeHtml(
                        product.shortDescription
                    )}
                </p>


                <div class="modal-actions">

                    <button
                        type="button"
                        class="btn btn-primary js-modal-add"
                        data-id="${product.id}"
                    >
                        Thêm vào giỏ hàng
                    </button>


                    <button
                        type="button"
                        class="btn btn-outline js-modal-order"
                        data-id="${product.id}"
                    >
                        Đặt sản phẩm này
                    </button>

                </div>


                <!-- THÔNG TIN -->

                <section class="detail-section">

                    <h3>
                        Thông tin sản phẩm
                    </h3>


                    <div class="spec-grid">

                        <div class="spec-item">

                            <strong>
                                Lượng dùng
                            </strong>

                            <span>
                                ${escapeHtml(
                                    product.detail.dosage
                                )}
                            </span>

                        </div>


                        <div class="spec-item">

                            <strong>
                                Kết cấu
                            </strong>

                            <span>
                                ${escapeHtml(
                                    product.detail.texture
                                )}
                            </span>

                        </div>


                        <div class="spec-item">

                            <strong>
                                Mùi hương
                            </strong>

                            <span>
                                ${escapeHtml(
                                    product.detail.scent
                                )}
                            </span>

                        </div>


                        <div class="spec-item">

                            <strong>
                                Xuất xứ
                            </strong>

                            <span>
                                ${escapeHtml(
                                    product.detail.origin
                                )}
                            </span>

                        </div>


                        <div class="spec-item">

                            <strong>
                                Lưu ý
                            </strong>

                            <span>
                                ${escapeHtml(
                                    product.detail.notes
                                )}
                            </span>

                        </div>

                    </div>

                </section>


                <!-- CÁCH SỬ DỤNG -->

                <section class="detail-section">

                    <h3>
                        Cách sử dụng
                    </h3>


                    <div class="usage-list">

                        ${usageHTML}

                    </div>

                </section>


                <!-- THÀNH PHẦN -->

                <section class="detail-section">

                    <h3>
                        Thành phần chính
                    </h3>


                    <div class="ingredients-list">

                        ${ingredientsHTML}

                    </div>

                </section>

            </div>

        </div>

    `;

}


/* =========================================================
   29. RENDER ORDER SUMMARY
========================================================= */

function renderOrderSummary() {

    if (!orderSummary) {
        return;
    }


    const validItems =
        cart.filter(
            item =>
                getProductById(item.id)
        );


    if (validItems.length === 0) {

        orderSummary.innerHTML = `

            <div class="empty-summary">

                Chưa có sản phẩm trong đơn hàng.

            </div>

        `;

    }
    else {

        orderSummary.innerHTML =
            validItems
                .map(
                    item =>
                        createOrderSummaryItem(
                            item
                        )
                )
                .join("");

    }


    if (orderTotal) {

        orderTotal.textContent =
            formatPrice(
                getCartTotal()
            );

    }

}


/* =========================================================
   30. CREATE ORDER SUMMARY ITEM
========================================================= */

function createOrderSummaryItem(
    item
) {

    const product =
        getProductById(item.id);


    if (!product) {
        return "";
    }


    const subtotal =
        product.price *
        item.quantity;


    return `

        <div class="order-summary-item">

            <div class="order-summary-image">

                <img
                    src="${escapeAttribute(product.image)}"
                    alt="${escapeAttribute(product.name)}"
                    loading="lazy"
                >

            </div>


            <div class="order-summary-info">

                <h4>
                    ${escapeHtml(product.name)}
                </h4>

                <p>
                    ${item.quantity} ×
                    ${formatPrice(product.price)}
                </p>

                <p>
                    Thành tiền:
                    <strong>
                        ${formatPrice(subtotal)}
                    </strong>
                </p>

            </div>

        </div>

    `;

}


/* =========================================================
   31. ORDER SUBMIT
========================================================= */

function handleOrderSubmit(
    event
) {

    event.preventDefault();


    if (cart.length === 0) {

        showOrderMessage(
            "Bạn chưa chọn sản phẩm. Vui lòng thêm sản phẩm vào giỏ hàng trước khi đặt hàng.",
            "error"
        );

        document
            .getElementById("products")
            ?.scrollIntoView({
                behavior: "smooth"
            });

        return;
    }


    const name =
        document
            .getElementById(
                "customerName"
            )
            ?.value
            .trim();


    const phone =
        document
            .getElementById(
                "customerPhone"
            )
            ?.value
            .trim();


    const address =
        document
            .getElementById(
                "customerAddress"
            )
            ?.value
            .trim();


    const payment =
        document
            .getElementById(
                "paymentMethod"
            )
            ?.value;


    const note =
        document
            .getElementById(
                "orderNote"
            )
            ?.value
            .trim();


    if (
        !name
        ||
        !phone
        ||
        !address
    ) {

        showOrderMessage(
            "Vui lòng điền đầy đủ họ tên, số điện thoại và địa chỉ nhận hàng.",
            "error"
        );

        return;
    }


    const cleanPhone =
        phone.replace(
            /[\s.-]/g,
            ""
        );


    if (
        !/^(\+84|0)\d{8,10}$/
            .test(cleanPhone)
    ) {

        showOrderMessage(
            "Số điện thoại chưa đúng định dạng. Vui lòng kiểm tra lại.",
            "error"
        );

        return;
    }


    const orderCode =
        `NNMTV-${Date.now()
            .toString(36)
            .toUpperCase()}`;


    const total =
        getCartTotal();


    const paymentName =
        payment === "bank"
            ? "Chuyển khoản"
            : "Thanh toán khi nhận hàng";


    /*
       Dữ liệu này hiện chỉ phục vụ frontend.
       Có thể gửi object này tới API/backend
       khi triển khai website thực tế.
    */

    const orderData = {

        code: orderCode,

        customer: {

            name,

            phone,

            address

        },

        payment: paymentName,

        note,

        items: cart.map(
            item => {

                const product =
                    getProductById(
                        item.id
                    );

                return {

                    id: item.id,

                    name: product.name,

                    price: product.price,

                    quantity: item.quantity,

                    subtotal:
                        product.price *
                        item.quantity

                };

            }
        ),

        total,

        createdAt:
            new Date().toISOString()

    };


    console.log(
        "Đơn hàng:",
        orderData
    );


    showOrderMessage(
        `
            <strong>Đặt hàng thành công!</strong><br>
            Mã đơn: <strong>${orderCode}</strong><br>
            Tổng tiền: <strong>${formatPrice(total)}</strong><br>
            Chúng tôi sẽ liên hệ số
            <strong>${escapeHtml(phone)}</strong>
            để xác nhận đơn hàng.
        `,
        "success"
    );


    /*
       Xóa giỏ hàng sau khi đặt hàng.
    */

    cart = [];


    saveCart();

    renderCart();

    renderOrderSummary();

    updateCartCount();


    orderForm.reset();


    showToast(
        `Đã tạo đơn hàng ${orderCode}.`
    );

}


/* =========================================================
   32. ORDER MESSAGE
========================================================= */

function showOrderMessage(
    message,
    type
) {

    if (!orderMessage) {
        return;
    }


    orderMessage.innerHTML =
        message;


    orderMessage.hidden =
        false;


    orderMessage.dataset.type =
        type;


    orderMessage.style.padding =
        "16px";


    orderMessage.style.marginTop =
        "18px";


    orderMessage.style.borderRadius =
        "14px";


    if (type === "success") {

        orderMessage.style.background =
            "#e8f3e9";

        orderMessage.style.color =
            "#173f2b";

    }
    else {

        orderMessage.style.background =
            "#f8e9e6";

        orderMessage.style.color =
            "#7d443a";

    }

}


/* =========================================================
   33. TOAST
========================================================= */

function showToast(
    message
) {

    if (!toast) {
        return;
    }


    toast.textContent =
        message;


    toast.classList.add(
        "is-visible"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "is-visible"
                );

            },
            2800
        );

}


/* =========================================================
   34. MOBILE MENU
========================================================= */

function toggleMobileMenu() {

    const isOpen =
        mainNav?.classList.toggle(
            "is-open"
        );


    menuToggle?.setAttribute(
        "aria-expanded",
        String(Boolean(isOpen))
    );

}


function closeMobileMenu() {

    mainNav?.classList.remove(
        "is-open"
    );


    menuToggle?.setAttribute(
        "aria-expanded",
        "false"
    );

}


/* =========================================================
   35. ESCAPE HTML
========================================================= */

function escapeHtml(
    value
) {

    return String(value ?? "")
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   36. ESCAPE ATTRIBUTE
========================================================= */

function escapeAttribute(
    value
) {

    return escapeHtml(value);

}
