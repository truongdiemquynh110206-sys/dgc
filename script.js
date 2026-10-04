/* =========================================================
   NÂNG NIU MÁI TÓC VIỆT
   script.js

   Chức năng:
   - Dữ liệu sản phẩm
   - Tìm kiếm
   - Tìm kiếm không dấu
   - Lọc danh mục
   - Chi tiết sản phẩm
   - Giỏ hàng
   - Tăng / giảm số lượng
   - Xóa sản phẩm
   - LocalStorage
   - Tóm tắt đơn hàng
   - Form đặt hàng
   - Menu mobile
   ========================================================= */


/* =========================================================
   1. CẤU HÌNH
   ========================================================= */

const CONFIG = {

    storageKey:
        "nangNiuMaiTocVietCart",

    currency:
        "VNĐ",

    hotline:
        "0335459131"

};


/* =========================================================
   2. DỮ LIỆU SẢN PHẨM
   ========================================================= */

const products = [

    /* =====================================================
       SẢN PHẨM 01
       ===================================================== */

    {
        id: 1,

        name:
            "Dầu Gội Bưởi Cocoon 500ml",

        slug:
            "dau-goi-buoi-cocoon-500ml",

        category:
            "dau-goi",

        categoryName:
            "Dầu gội",

        volume:
            "500ml",

        price:
            388000,

        image:
            "https://image.cocoonvietnam.com/uploads/IMG_5252_8f3fe2deab.jpg",

        description:
            "Dầu Gội Bưởi Cocoon với tinh dầu bưởi, Xylishine™, Vitamin B5 và axít amin, mang đến trải nghiệm làm sạch và chăm sóc tóc với hương tinh dầu bưởi thơm mát.",

        usage: [
            "Thoa sản phẩm lên tóc ướt và tạo bọt, mát-xa nhẹ nhàng từ gốc đến ngọn, sau đó gội sạch.",

            "Sử dụng hằng ngày để có kết quả tốt nhất. Tránh tiếp xúc với mắt."
        ],

        dosage:
            "Từ 1–2 lần nhấn",

        texture:
            "Dạng gel trong mờ",

        scent:
            "Mùi tinh dầu bưởi thơm mát",

        note:
            "Tránh dùng vùng mắt, chỉ dùng ngoài da.",

        origin:
            "Việt Nam",

        ingredients: [

            {
                name:
                    "Tinh dầu bưởi",

                description:
                    "Được trích ly từ vỏ bưởi, chứa hàm lượng lớn limonene. Thành phần này được mô tả với đặc tính kháng khuẩn và chống oxy hóa, góp phần chăm sóc da đầu và tóc."
            },

            {
                name:
                    "Xylishine™",

                description:
                    "Được chiết xuất từ tảo nâu Pelvetia canaliculata và các loại đường tự nhiên có trong gỗ. Có chức năng dưỡng ẩm và phục hồi tóc, giúp tăng cường độ bóng."
            },

            {
                name:
                    "Vitamin B5 (D-panthenol)",

                description:
                    "Có chức năng như một tác nhân dưỡng tóc, hỗ trợ cung cấp độ ẩm lâu dài cho tóc, hạn chế hư tổn và cải thiện độ bóng khỏe của mái tóc."
            },

            {
                name:
                    "Axít amin",

                description:
                    "Hỗ trợ dưỡng ẩm, củng cố cấu trúc, bảo vệ màu sắc và chăm sóc những hư hỏng trên bề mặt tóc."
            }

        ]

    },


    /* =====================================================
       SẢN PHẨM 02
       ===================================================== */

    {
        id: 2,

        name:
            "Dầu Gội Bưởi Cocoon 310ml",

        slug:
            "dau-goi-buoi-cocoon-310ml",

        category:
            "dau-goi",

        categoryName:
            "Dầu gội",

        volume:
            "310ml",

        price:
            200000,

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaO9qvYFAEuGH2AkFhsus8McXksD5--YRyhFYcsqTdwg&s=10",

        description:
            "Dầu Gội Bưởi Cocoon 310ml mang hương tinh dầu bưởi thơm mát, kết hợp các thành phần chăm sóc tóc như Xylishine™, Vitamin B5 và axít amin.",

        usage: [
            "Thoa sản phẩm lên tóc ướt và tạo bọt, mát-xa nhẹ nhàng từ gốc đến ngọn, sau đó gội sạch.",

            "Sử dụng hằng ngày để có kết quả tốt nhất. Tránh tiếp xúc với mắt."
        ],

        dosage:
            "Từ 1–2 lần nhấn",

        texture:
            "Dạng gel trong mờ",

        scent:
            "Mùi tinh dầu bưởi thơm mát",

        note:
            "Tránh dùng vùng mắt, chỉ dùng ngoài da.",

        origin:
            "Việt Nam",

        ingredients: [

            {
                name:
                    "Tinh dầu bưởi",

                description:
                    "Được trích ly từ vỏ bưởi và chứa limonene. Tinh dầu vỏ bưởi được sử dụng trong sản phẩm với đặc tính kháng khuẩn và chống oxy hóa."
            },

            {
                name:
                    "Xylishine™",

                description:
                    "Hỗ trợ dưỡng ẩm và phục hồi tóc, góp phần tăng độ bóng cho mái tóc."
            },

            {
                name:
                    "Vitamin B5 (D-panthenol)",

                description:
                    "Hỗ trợ cung cấp độ ẩm cho tóc và cải thiện vẻ bóng khỏe của mái tóc."
            },

            {
                name:
                    "Axít amin",

                description:
                    "Hỗ trợ dưỡng ẩm và củng cố cấu trúc bề mặt tóc."
            }

        ]

    },


    /* =====================================================
       SẢN PHẨM 03
       ===================================================== */

    {
        id: 3,

        name:
            "Túi Refill Dầu Gội Bưởi Cocoon",

        slug:
            "tui-refill-dau-goi-buoi",

        category:
            "dau-goi",

        categoryName:
            "Dầu gội",

        volume:
            "Túi Refill",

        price:
            310000,

        image:
            "https://cdn.hstatic.net/products/1000006063/new_project_4f782c61380f46bc8013b609d3849d29_1024x1024.jpg",

        description:
            "Túi Refill Dầu Gội Bưởi Cocoon giúp bổ sung sản phẩm vào chai đang sử dụng, mang đến lựa chọn tiện lợi cho chu trình chăm sóc tóc.",

        usage: [
            "Đổ sản phẩm từ túi refill vào chai sạch và khô.",

            "Khi sử dụng, thoa sản phẩm lên tóc ướt, tạo bọt và mát-xa nhẹ nhàng từ gốc đến ngọn, sau đó gội sạch."
        ],

        dosage:
            "Từ 1–2 lần nhấn",

        texture:
            "Dạng gel trong mờ",

        scent:
            "Mùi tinh dầu bưởi thơm mát",

        note:
            "Tránh dùng vùng mắt, chỉ dùng ngoài da.",

        origin:
            "Việt Nam",

        ingredients: [

            {
                name:
                    "Tinh dầu bưởi",

                description:
                    "Được trích ly từ vỏ bưởi, chứa limonene và có đặc tính kháng khuẩn, chống oxy hóa theo mô tả thành phần."
            },

            {
                name:
                    "Xylishine™",

                description:
                    "Hỗ trợ dưỡng ẩm và phục hồi tóc, góp phần tăng độ bóng."
            },

            {
                name:
                    "Vitamin B5 (D-panthenol)",

                description:
                    "Hỗ trợ dưỡng ẩm lâu dài và chăm sóc mái tóc."
            },

            {
                name:
                    "Axít amin",

                description:
                    "Hỗ trợ dưỡng ẩm và củng cố cấu trúc bề mặt tóc."
            }

        ]

    },


    /* =====================================================
       SẢN PHẨM 04
       ===================================================== */

    {
        id: 4,

        name:
            "Dầu Xả Bưởi Cocoon 310ml",

        slug:
            "dau-xa-buoi-cocoon-310ml",

        category:
            "dau-xa",

        categoryName:
            "Dầu xả",

        volume:
            "310ml",

        price:
            388000,

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTToPG_yudvoDtXvIjkh-42g8gBg6_rNUnREextcb85SNZAT1Ao3bdoyw&s=10",

        description:
            "Dầu Xả Bưởi Cocoon 310ml có kết cấu kem đặc màu trắng ngà, hỗ trợ bổ sung độ ẩm và chăm sóc thân tóc sau bước gội.",

        usage: [
            "Sau khi gội tóc với Dầu Gội Bưởi, thoa sản phẩm lên tóc ướt.",

            "Mát-xa nhẹ nhàng lên thân tóc, sau đó xả sạch lại với nước. Sử dụng hằng ngày để có kết quả tốt nhất."
        ],

        dosage:
            "Từ 1–2 lần nhấn",

        texture:
            "Kem đặc màu trắng ngà",

        scent:
            "Mùi tinh dầu bưởi thơm mát",

        note:
            "Tránh dùng vùng mắt, chỉ dùng ngoài da.",

        origin:
            "Việt Nam",

        ingredients: [

            {
                name:
                    "Tinh dầu bưởi",

                description:
                    "Mang hương thơm bưởi tươi mát và góp phần chăm sóc tóc nhờ các đặc tính được mô tả của tinh dầu vỏ bưởi."
            },

            {
                name:
                    "Xylishine™",

                description:
                    "Hỗ trợ dưỡng ẩm và phục hồi tóc, giúp tóc mềm mại và tăng độ bóng."
            },

            {
                name:
                    "Vitamin B5 (D-panthenol)",

                description:
                    "Hỗ trợ cung cấp độ ẩm lâu dài cho tóc và cải thiện vẻ bóng khỏe."
            },

            {
                name:
                    "Axít amin",

                description:
                    "Hỗ trợ dưỡng ẩm, củng cố cấu trúc và chăm sóc bề mặt tóc."
            }

        ]

    },


    /* =====================================================
       SẢN PHẨM 05
       ===================================================== */

    {
        id: 5,

        name:
            "Combo Dầu Gội + Dầu Xả Bưởi Cocoon 310ml x 2",

        slug:
            "combo-dau-goi-dau-xa-buoi-cocoon",

        category:
            "combo",

        categoryName:
            "Bộ đôi",

        volume:
            "310ml x 2",

        price:
            590000,

        image:
            "https://oharabeauty.com/wp-content/uploads/2024/02/dau-xa-cocoon-buoi-cung-cap-duong-chat-do-am-310ml-2.png",

        description:
            "Bộ đôi gồm Dầu Gội và Dầu Xả Bưởi Cocoon 310ml, kết hợp hai bước làm sạch và chăm sóc thân tóc trong cùng một chu trình.",

        usage: [
            "Bước 1: Thoa Dầu Gội Bưởi lên tóc ướt và tạo bọt, mát-xa nhẹ nhàng từ gốc đến ngọn, sau đó gội sạch.",

            "Bước 2: Sau khi gội tóc với Dầu Gội Bưởi, thoa Dầu Xả Bưởi lên tóc ướt, mát-xa nhẹ nhàng lên thân tóc rồi xả sạch lại với nước."
        ],

        dosage:
            "Từ 1–2 lần nhấn cho mỗi sản phẩm",

        texture:
            "Gel trong mờ và kem đặc trắng ngà",

        scent:
            "Mùi tinh dầu bưởi thơm mát",

        note:
            "Tránh dùng vùng mắt, chỉ dùng ngoài da.",

        origin:
            "Việt Nam",

        ingredients: [

            {
                name:
                    "Tinh dầu bưởi",

                description:
                    "Được trích ly từ vỏ bưởi chứa limonene, có đặc tính kháng khuẩn và chống oxy hóa theo mô tả thành phần."
            },

            {
                name:
                    "Xylishine™",

                description:
                    "Được chiết xuất từ tảo nâu Pelvetia canaliculata và các loại đường tự nhiên có trong gỗ; hỗ trợ dưỡng ẩm và phục hồi tóc."
            },

            {
                name:
                    "Vitamin B5 (D-panthenol)",

                description:
                    "Hỗ trợ cung cấp độ ẩm lâu dài cho tóc, hạn chế hư tổn và cải thiện độ bóng khỏe."
            },

            {
                name:
                    "Axít amin",

                description:
                    "Có tác dụng dưỡng ẩm, củng cố cấu trúc, hỗ trợ bảo vệ màu sắc và chăm sóc bề mặt tóc."
            }

        ]

    }

];


/* =========================================================
   3. STATE
   ========================================================= */

let cart = loadCart();

let currentCategory = "all";

let currentProductId = null;


/* =========================================================
   4. DOM
   ========================================================= */

const DOM = {

    productGrid:
        document.getElementById("productGrid"),

    productSearch:
        document.getElementById("productSearch"),

    emptyResult:
        document.getElementById("emptyResult"),

    filterList:
        document.getElementById("filterList"),

    cartCount:
        document.getElementById("cartCount"),

    cartDrawer:
        document.getElementById("cartDrawer"),

    cartOverlay:
        document.getElementById("cartOverlay"),

    cartItems:
        document.getElementById("cartItems"),

    cartTotal:
        document.getElementById("cartTotal"),

    orderSummaryList:
        document.getElementById("orderSummaryList"),

    orderItemCount:
        document.getElementById("orderItemCount"),

    orderTotal:
        document.getElementById("orderTotal"),

    orderForm:
        document.getElementById("orderForm"),

    orderSuccess:
        document.getElementById("orderSuccess"),

    successMessage:
        document.getElementById("successMessage"),

    productModal:
        document.getElementById("productModal"),

    modalProductImage:
        document.getElementById("modalProductImage"),

    modalProductCategory:
        document.getElementById("modalProductCategory"),

    modalProductName:
        document.getElementById("modalProductName"),

    modalProductPrice:
        document.getElementById("modalProductPrice"),

    modalProductDescription:
        document.getElementById("modalProductDescription"),

    modalProductDosage:
        document.getElementById("modalProductDosage"),

    modalProductTexture:
        document.getElementById("modalProductTexture"),

    modalProductScent:
        document.getElementById("modalProductScent"),

    modalProductOrigin:
        document.getElementById("modalProductOrigin"),

    modalProductUsage:
        document.getElementById("modalProductUsage"),

    modalProductIngredients:
        document.getElementById("modalProductIngredients"),

    modalProductNote:
        document.getElementById("modalProductNote"),

    modalAddToCart:
        document.getElementById("modalAddToCart"),

    toast:
        document.getElementById("toast")

};


/* =========================================================
   5. TIỆN ÍCH
   ========================================================= */


/**
 * Chuyển số thành tiền Việt Nam.
 */
function formatPrice(value) {

    return new Intl.NumberFormat(
        "vi-VN"
    ).format(value) + " VNĐ";

}


/**
 * Bỏ dấu tiếng Việt để tìm kiếm dễ hơn.
 */
function removeVietnameseTones(text) {

    return text

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


/**
 * Escape HTML để tránh chèn HTML không mong muốn
 * khi hiển thị dữ liệu.
 */
function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)

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
   6. LOCAL STORAGE
   ========================================================= */

function loadCart() {

    try {

        const savedCart =
            localStorage.getItem(
                CONFIG.storageKey
            );


        if (!savedCart) {

            return [];

        }


        const parsed =
            JSON.parse(savedCart);


        if (!Array.isArray(parsed)) {

            return [];

        }


        return parsed.filter(
            item => {

                return (
                    Number.isInteger(
                        Number(item.id)
                    )

                    &&

                    Number(item.quantity) > 0

                );

            }
        ).map(
            item => ({

                id:
                    Number(item.id),

                quantity:
                    Math.max(
                        1,
                        Number(item.quantity)
                    )

            })
        );

    }

    catch (error) {

        console.error(
            "Không thể đọc giỏ hàng:",
            error
        );

        return [];

    }

}


function saveCart() {

    try {

        localStorage.setItem(

            CONFIG.storageKey,

            JSON.stringify(cart)

        );

    }

    catch (error) {

        console.error(
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
        product =>
            product.id === Number(productId)
    );

}


/* =========================================================
   8. LỌC + TÌM KIẾM
   ========================================================= */

function getFilteredProducts() {

    const keyword =
        removeVietnameseTones(
            DOM.productSearch
                ? DOM.productSearch.value
                : ""
        );


    return products.filter(
        product => {

            const matchCategory =

                currentCategory === "all"

                ||

                product.category ===
                    currentCategory;


            if (!matchCategory) {

                return false;

            }


            if (!keyword) {

                return true;

            }


            const searchableText =

                removeVietnameseTones(

                    [

                        product.name,

                        product.categoryName,

                        product.volume,

                        product.description,

                        product.scent,

                        ...product.ingredients.map(
                            ingredient =>
                                ingredient.name
                        )

                    ].join(" ")

                );


            return searchableText.includes(
                keyword
            );

        }
    );

}


/* =========================================================
   9. RENDER SẢN PHẨM
   ========================================================= */

function renderProducts() {

    if (!DOM.productGrid) {

        return;

    }


    const filteredProducts =
        getFilteredProducts();


    DOM.productGrid.innerHTML =
        filteredProducts
            .map(
                product =>
                    createProductCard(product)
            )
            .join("");


    if (DOM.emptyResult) {

        DOM.emptyResult.hidden =
            filteredProducts.length !== 0;

    }

}


/**
 * Tạo card sản phẩm.
 */
function createProductCard(product) {

    return `

        <article
            class="product-card"
            data-product-id="${product.id}"
        >

            <div class="product-image-wrapper">

                <span class="product-category-tag">
                    ${escapeHTML(product.categoryName)}
                </span>

                <img
                    src="${escapeHTML(product.image)}"
                    alt="${escapeHTML(product.name)}"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,${createFallbackSVG(product)}';"
                >

            </div>


            <div class="product-content">

                <button
                    type="button"
                    class="product-title-button"
                    data-product-detail="${product.id}"
                >
                    ${escapeHTML(product.name)}
                </button>


                <p class="product-description">
                    ${escapeHTML(product.description)}
                </p>


                <div class="product-meta">

                    <span class="product-volume">
                        ${escapeHTML(product.volume)}
                    </span>

                    <strong class="product-price">
                        ${formatPrice(product.price)}
                    </strong>

                </div>


                <div class="product-actions">

                    <button
                        type="button"
                        class="product-detail-button"
                        data-product-detail="${product.id}"
                    >
                        Xem chi tiết
                    </button>


                    <button
                        type="button"
                        class="product-add-button"
                        data-add-cart="${product.id}"
                    >
                        Thêm vào giỏ
                    </button>

                </div>

            </div>

        </article>

    `;

}


/**
 * SVG fallback nếu ảnh bên ngoài không tải được.
 */
function createFallbackSVG(product) {

    const title =
        encodeURIComponent(
            product.categoryName
        );


    return `

        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">

            <rect
                width="500"
                height="500"
                fill="%23f7f3e8"
            />

            <circle
                cx="250"
                cy="220"
                r="120"
                fill="%23e7d08b"
                opacity=".7"
            />

            <text
                x="250"
                y="210"
                text-anchor="middle"
                font-family="serif"
                font-size="46"
                fill="%23173f2b"
            >
                COCOON
            </text>

            <text
                x="250"
                y="255"
                text-anchor="middle"
                font-family="sans-serif"
                font-size="20"
                fill="%233d7650"
            >
                ${title}
            </text>

        </svg>

    `;

}


/* =========================================================
   10. FILTER BUTTONS
   ========================================================= */

function handleCategoryFilter(category) {

    currentCategory =
        category;


    const buttons =
        document.querySelectorAll(
            ".filter-button"
        );


    buttons.forEach(
        button => {

            button.classList.toggle(

                "active",

                button.dataset.category ===
                    category

            );

        }
    );


    renderProducts();

}


/* =========================================================
   11. PRODUCT MODAL
   ========================================================= */

function openProductModal(productId) {

    const product =
        getProduct(productId);


    if (!product) {

        return;

    }


    currentProductId =
        product.id;


    DOM.modalProductImage.src =
        product.image;


    DOM.modalProductImage.alt =
        product.name;


    DOM.modalProductCategory.textContent =
        product.categoryName;


    DOM.modalProductName.textContent =
        product.name;


    DOM.modalProductPrice.textContent =
        formatPrice(product.price);


    DOM.modalProductDescription.textContent =
        product.description;


    DOM.modalProductDosage.textContent =
        product.dosage;


    DOM.modalProductTexture.textContent =
        product.texture;


    DOM.modalProductScent.textContent =
        product.scent;


    DOM.modalProductOrigin.textContent =
        product.origin;


    DOM.modalProductNote.textContent =
        product.note;


    DOM.modalProductUsage.innerHTML =

        product.usage

            .map(
                (paragraph, index) => `

                    <p>
                        <strong>
                            ${escapeHTML(
                                getUsageLabel(
                                    index,
                                    product.usage.length
                                )
                            )}
                        </strong>

                        ${escapeHTML(paragraph)}
                    </p>

                `
            )

            .join("");


    DOM.modalProductIngredients.innerHTML =

        product.ingredients

            .map(
                ingredient => `

                    <article class="ingredient-item">

                        <h4>
                            ${escapeHTML(
                                ingredient.name
                            )}
                        </h4>

                        <p>
                            ${escapeHTML(
                                ingredient.description
                            )}
                        </p>

                    </article>

                `
            )

            .join("");


    DOM.productModal.classList.add(
        "active"
    );


    DOM.productModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );


    DOM.modalAddToCart.focus();

}


/**
 * Đặt nhãn cho từng bước sử dụng.
 */
function getUsageLabel(index, total) {

    if (total === 1) {

        return "";

    }


    return `Bước ${index + 1}:`;

}


function closeProductModal() {

    DOM.productModal.classList.remove(
        "active"
    );


    DOM.productModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );


    currentProductId =
        null;

}


/* =========================================================
   12. GIỎ HÀNG
   ========================================================= */

function addToCart(productId, quantity = 1) {

    const product =
        getProduct(productId);


    if (!product) {

        return;

    }


    const existingItem =
        cart.find(
            item =>
                item.id === product.id
        );


    if (existingItem) {

        existingItem.quantity +=
            quantity;

    }

    else {

        cart.push({

            id:
                product.id,

            quantity:
                quantity

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


/**
 * Xóa sản phẩm.
 */
function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                item.id !== Number(productId)
        );


    saveCart();

    renderCart();

    renderOrderSummary();

    updateCartCount();

}


/**
 * Thay đổi số lượng.
 */
function changeQuantity(
    productId,
    amount
) {

    const item =
        cart.find(
            cartItem =>
                cartItem.id === Number(productId)
        );


    if (!item) {

        return;

    }


    item.quantity +=
        amount;


    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;

    }


    saveCart();

    renderCart();

    renderOrderSummary();

    updateCartCount();

}


/**
 * Xóa toàn bộ giỏ.
 */
function clearCart() {

    if (!cart.length) {

        showToast(
            "Giỏ hàng đang trống."
        );

        return;

    }


    const confirmed =
        window.confirm(
            "Bạn có chắc muốn xóa toàn bộ sản phẩm trong giỏ hàng?"
        );


    if (!confirmed) {

        return;

    }


    cart = [];


    saveCart();

    renderCart();

    renderOrderSummary();

    updateCartCount();


    showToast(
        "Đã xóa toàn bộ giỏ hàng."
    );

}


/* =========================================================
   13. TÍNH TOÁN GIỎ
   ========================================================= */

function getCartQuantity() {

    return cart.reduce(

        (total, item) =>

            total +
            item.quantity,

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


            return (

                total +

                product.price *
                item.quantity

            );

        },

        0

    );

}


/* =========================================================
   14. RENDER CART
   ========================================================= */

function renderCart() {

    if (!DOM.cartItems) {

        return;

    }


    if (!cart.length) {

        DOM.cartItems.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛍
                </div>

                <h3>
                    Giỏ hàng đang trống
                </h3>

                <p>
                    Hãy chọn sản phẩm bạn yêu thích.
                </p>

            </div>

        `;


        DOM.cartTotal.textContent =
            "0 VNĐ";


        return;

    }


    DOM.cartItems.innerHTML =

        cart

            .map(
                item => {

                    const product =
                        getProduct(item.id);


                    if (!product) {

                        return "";

                    }


                    const subtotal =
                        product.price *
                        item.quantity;


                    return `

                        <article class="cart-item">

                            <div class="cart-item-image">

                                <img
                                    src="${escapeHTML(product.image)}"
                                    alt="${escapeHTML(product.name)}"
                                    onerror="this.style.display='none';"
                                >

                            </div>


                            <div>

                                <button
                                    type="button"
                                    class="cart-item-name"
                                    data-product-detail="${product.id}"
                                >
                                    ${escapeHTML(product.name)}
                                </button>


                                <div class="cart-item-price">
                                    ${formatPrice(product.price)}
                                </div>


                                <div class="cart-item-bottom">

                                    <div class="quantity-control">

                                        <button
                                            type="button"
                                            aria-label="Giảm số lượng"
                                            data-quantity-minus="${product.id}"
                                        >
                                            −
                                        </button>

                                        <span>
                                            ${item.quantity}
                                        </span>

                                        <button
                                            type="button"
                                            aria-label="Tăng số lượng"
                                            data-quantity-plus="${product.id}"
                                        >
                                            +
                                        </button>

                                    </div>


                                    <strong class="cart-item-subtotal">
                                        ${formatPrice(subtotal)}
                                    </strong>

                                </div>


                                <button
                                    type="button"
                                    class="remove-item"
                                    data-remove-cart="${product.id}"
                                >
                                    Xóa sản phẩm
                                </button>

                            </div>

                        </article>

                    `;

                }
            )

            .join("");


    DOM.cartTotal.textContent =
        formatPrice(
            getCartTotal()
        );

}


/* =========================================================
   15. CART COUNT
   ========================================================= */

function updateCartCount() {

    if (!DOM.cartCount) {

        return;

    }


    const quantity =
        getCartQuantity();


    DOM.cartCount.textContent =
        quantity > 99
            ? "99+"
            : quantity;

}


/* =========================================================
   16. OPEN / CLOSE CART
   ========================================================= */

function openCart() {

    renderCart();


    DOM.cartDrawer.classList.add(
        "active"
    );


    DOM.cartOverlay.classList.add(
        "active"
    );


    DOM.cartDrawer.setAttribute(
        "aria-hidden",
        "false"
    );


    DOM.cartOverlay.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "cart-open"
    );

}


function closeCart() {

    DOM.cartDrawer.classList.remove(
        "active"
    );


    DOM.cartOverlay.classList.remove(
        "active"
    );


    DOM.cartDrawer.setAttribute(
        "aria-hidden",
        "true"
    );


    DOM.cartOverlay.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "cart-open"
    );

}


/* =========================================================
   17. ORDER SUMMARY
   ========================================================= */

function renderOrderSummary() {

    if (!DOM.orderSummaryList) {

        return;

    }


    const quantity =
        getCartQuantity();


    if (DOM.orderItemCount) {

        DOM.orderItemCount.textContent =

            `${quantity} sản phẩm`;

    }


    if (!cart.length) {

        DOM.orderSummaryList.innerHTML = `

            <div class="order-empty">

                <span>
                    🛍
                </span>

                <p>
                    Giỏ hàng đang trống.
                </p>

                <a href="#products">
                    Chọn sản phẩm
                </a>

            </div>

        `;


        DOM.orderTotal.textContent =
            "0 VNĐ";


        return;

    }


    DOM.orderSummaryList.innerHTML =

        cart

            .map(
                item => {

                    const product =
                        getProduct(item.id);


                    if (!product) {

                        return "";

                    }


                    const subtotal =
                        product.price *
                        item.quantity;


                    return `

                        <article
                            class="order-summary-item"
                        >

                            <img
                                class="order-summary-image"
                                src="${escapeHTML(product.image)}"
                                alt="${escapeHTML(product.name)}"
                            >


                            <div
                                class="order-summary-info"
                            >

                                <strong>
                                    ${escapeHTML(product.name)}
                                </strong>

                                <span>
                                    Số lượng:
                                    ${item.quantity}
                                </span>

                            </div>


                            <strong
                                class="order-summary-price"
                            >
                                ${formatPrice(subtotal)}
                            </strong>

                        </article>

                    `;

                }
            )

            .join("");


    DOM.orderTotal.textContent =
        formatPrice(
            getCartTotal()
        );

}


/* =========================================================
   18. VALIDATION FORM
   ========================================================= */

function clearFormErrors() {

    document
        .querySelectorAll(".form-error")
        .forEach(
            element => {

                element.textContent =
                    "";

            }
        );


    document
        .querySelectorAll(
            "#orderForm input, #orderForm textarea"
        )
        .forEach(
            element => {

                element.removeAttribute(
                    "aria-invalid"
                );

            }
        );

}


function setFormError(
    fieldName,
    message
) {

    const error =
        document.querySelector(
            `[data-error-for="${fieldName}"]`
        );


    const field =
        document.querySelector(
            `[name="${fieldName}"]`
        );


    if (error) {

        error.textContent =
            message;

    }


    if (field) {

        field.setAttribute(
            "aria-invalid",
            "true"
        );

    }

}


function validateOrderForm(formData) {

    clearFormErrors();


    let valid = true;


    if (
        !formData.customerName ||
        formData.customerName.length < 2
    ) {

        setFormError(
            "customerName",
            "Vui lòng nhập họ và tên."
        );

        valid = false;

    }


    const phone =
        formData.customerPhone
            .replace(/\s/g, "");


    if (
        !/^0\d{9}$/.test(phone)
    ) {

        setFormError(
            "customerPhone",
            "Số điện thoại chưa đúng định dạng."
        );

        valid = false;

    }


    if (
        !formData.customerAddress ||
        formData.customerAddress.length < 8
    ) {

        setFormError(
            "customerAddress",
            "Vui lòng nhập địa chỉ nhận hàng."
        );

        valid = false;

    }


    return valid;

}


/* =========================================================
   19. SUBMIT ORDER
   ========================================================= */

function handleOrderSubmit(event) {

    event.preventDefault();


    if (!cart.length) {

        showToast(
            "Bạn chưa chọn sản phẩm."
        );


        document
            .getElementById("products")
            ?.scrollIntoView({
                behavior: "smooth"
            });


        return;

    }


    const formData =
        new FormData(
            DOM.orderForm
        );


    const order = {

        customerName:
            String(
                formData.get(
                    "customerName"
                ) || ""
            ).trim(),

        customerPhone:
            String(
                formData.get(
                    "customerPhone"
                ) || ""
            ).trim(),

        customerEmail:
            String(
                formData.get(
                    "customerEmail"
                ) || ""
            ).trim(),

        customerAddress:
            String(
                formData.get(
                    "customerAddress"
                ) || ""
            ).trim(),

        paymentMethod:
            String(
                formData.get(
                    "paymentMethod"
                ) || "cod"
            ),

        customerNote:
            String(
                formData.get(
                    "customerNote"
                ) || ""
            ).trim(),

        items:
            cart.map(
                item => {

                    const product =
                        getProduct(item.id);


                    return {

                        id:
                            product.id,

                        name:
                            product.name,

                        price:
                            product.price,

                        quantity:
                            item.quantity,

                        subtotal:
                            product.price *
                            item.quantity

                    };

                }
            ),

        total:
            getCartTotal(),

        createdAt:
            new Date().toISOString()

    };


    const isValid =
        validateOrderForm(
            order
        );


    if (!isValid) {

        showToast(
            "Vui lòng kiểm tra lại thông tin."
        );

        return;

    }


    /*
     * Đây là nơi có thể kết nối API/backend
     * nếu website sau này cần lưu đơn thật.
     *
     * Hiện tại demo lưu đơn gần nhất
     * vào localStorage.
     */

    localStorage.setItem(
        "nangNiuMaiTocVietLastOrder",
        JSON.stringify(order)
    );


    const formattedPhone =
        order.customerPhone;


    DOM.successMessage.innerHTML = `

        Cảm ơn
        <strong>
            ${escapeHTML(order.customerName)}
        </strong>.
        Đơn hàng trị giá
        <strong>
            ${formatPrice(order.total)}
        </strong>
        đã được ghi nhận.
        Chúng tôi sẽ liên hệ qua số
        <strong>
            ${escapeHTML(formattedPhone)}
        </strong>
        để xác nhận.

    `;


    DOM.orderForm.hidden =
        true;


    DOM.orderSuccess.hidden =
        false;


    cart = [];


    saveCart();

    renderCart();

    renderOrderSummary();

    updateCartCount();


    showToast(
        "Đặt hàng thành công."
    );


    DOM.orderSuccess.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================================================
   20. TOAST
   ========================================================= */

let toastTimer = null;


function showToast(message) {

    if (!DOM.toast) {

        return;

    }


    DOM.toast.textContent =
        message;


    DOM.toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                DOM.toast.classList.remove(
                    "show"
                );

            },

            2800

        );

}


/* =========================================================
   21. MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

    const toggle =
        document.getElementById(
            "menuToggle"
        );


    const navigation =
        document.getElementById(
            "mainNavigation"
        );


    if (
        !toggle ||
        !navigation
    ) {

        return;

    }


    toggle.addEventListener(
        "click",
        () => {

            const active =
                navigation.classList.toggle(
                    "active"
                );


            toggle.setAttribute(
                "aria-expanded",
                String(active)
            );

        }
    );


    navigation
        .querySelectorAll("a")
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    () => {

                        navigation.classList.remove(
                            "active"
                        );


                        toggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            }
        );

}


/* =========================================================
   22. EVENT DELEGATION
   ========================================================= */

function setupProductEvents() {

    /*
     * Click vào tên hoặc nút "Xem chi tiết".
     */

    document.addEventListener(
        "click",
        event => {

            const detailButton =
                event.target.closest(
                    "[data-product-detail]"
                );


            if (detailButton) {

                const productId =
                    detailButton.dataset.productDetail;


                openProductModal(
                    productId
                );

                return;

            }


            /*
             * Thêm vào giỏ.
             */

            const addButton =
                event.target.closest(
                    "[data-add-cart]"
                );


            if (addButton) {

                const productId =
                    addButton.dataset.addCart;


                addToCart(
                    productId
                );

                return;

            }


            /*
             * Tăng số lượng.
             */

            const plusButton =
                event.target.closest(
                    "[data-quantity-plus]"
                );


            if (plusButton) {

                changeQuantity(

                    plusButton.dataset.quantityPlus,

                    1

                );

                return;

            }


            /*
             * Giảm số lượng.
             */

            const minusButton =
                event.target.closest(
                    "[data-quantity-minus]"
                );


            if (minusButton) {

                changeQuantity(

                    minusButton.dataset.quantityMinus,

                    -1

                );

                return;

            }


            /*
             * Xóa sản phẩm.
             */

            const removeButton =
                event.target.closest(
                    "[data-remove-cart]"
                );


            if (removeButton) {

                removeFromCart(

                    removeButton.dataset.removeCart

                );

            }

        }
    );

}


/* =========================================================
   23. FILTER EVENTS
   ========================================================= */

function setupFilterEvents() {

    if (!DOM.filterList) {

        return;

    }


    DOM.filterList.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "[data-category]"
                );


            if (!button) {

                return;

            }


            handleCategoryFilter(
                button.dataset.category
            );

        }
    );

}


/* =========================================================
   24. SEARCH
   ========================================================= */

function setupSearch() {

    if (!DOM.productSearch) {

        return;

    }


    DOM.productSearch.addEventListener(
        "input",
        () => {

            renderProducts();

        }
    );

}


/* =========================================================
   25. MODAL EVENTS
   ========================================================= */

function setupModalEvents() {

    const closeButton =
        document.getElementById(
            "closeProductModal"
        );


    const backdrop =
        DOM.productModal.querySelector(
            ".product-modal-backdrop"
        );


    closeButton.addEventListener(
        "click",
        closeProductModal
    );


    backdrop.addEventListener(
        "click",
        closeProductModal
    );


    DOM.modalAddToCart.addEventListener(
        "click",
        () => {

            if (!currentProductId) {

                return;

            }


            addToCart(
                currentProductId
            );


            closeProductModal();

        }
    );

}


/* =========================================================
   26. CART EVENTS
   ========================================================= */

function setupCartEvents() {

    document
        .getElementById("openCartButton")
        .addEventListener(
            "click",
            openCart
        );


    document
        .getElementById("closeCartButton")
        .addEventListener(
            "click",
            closeCart
        );


    DOM.cartOverlay.addEventListener(
        "click",
        closeCart
    );


    document
        .getElementById("clearCartButton")
        .addEventListener(
            "click",
            clearCart
        );


    document
        .getElementById("cartCheckoutButton")
        .addEventListener(
            "click",
            () => {

                if (!cart.length) {

                    showToast(
                        "Giỏ hàng đang trống."
                    );

                    return;

                }


                closeCart();


                document
                    .getElementById("order")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

}


/* =========================================================
   27. ORDER EVENTS
   ========================================================= */

function setupOrderEvents() {

    DOM.orderForm.addEventListener(
        "submit",
        handleOrderSubmit
    );


    document
        .getElementById(
            "continueShoppingButton"
        )
        .addEventListener(
            "click",
            () => {

                DOM.orderSuccess.hidden =
                    true;


                DOM.orderForm.hidden =
                    false;


                document
                    .getElementById(
                        "products"
                    )
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

}


/* =========================================================
   28. KEYBOARD
   ========================================================= */

function setupKeyboardEvents() {

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeProductModal();

                closeCart();

            }

        }
    );

}


/* =========================================================
   29. KHỞI TẠO
   ========================================================= */

function init() {

    /*
     * Render lần đầu.
     */

    renderProducts();

    renderCart();

    renderOrderSummary();

    updateCartCount();


    /*
     * Events.
     */

    setupProductEvents();

    setupFilterEvents();

    setupSearch();

    setupModalEvents();

    setupCartEvents();

    setupOrderEvents();

    setupMobileMenu();

    setupKeyboardEvents();

}


/* =========================================================
   30. START
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    init
);


/* =========================================================
   31. EXPORT
   ---------------------------------------------------------
   Cho phép sử dụng dữ liệu từ console hoặc file khác
   nếu sau này cần mở rộng.
   ========================================================= */

window.CocoonWebsite = {

    products,

    addToCart,

    removeFromCart,

    changeQuantity,

    openProductModal,

    closeProductModal,

    openCart,

    closeCart,

    formatPrice

};
