/* =========================================================
   NÂNG NIU MÁI TÓC VIỆT
   SCRIPT.JS
   =========================================================
   CHỨC NĂNG
   ---------------------------------------------------------
   1. Hiển thị đủ 5 sản phẩm
   2. Tìm kiếm sản phẩm
   3. Tìm kiếm không dấu
   4. Lọc theo loại sản phẩm
   5. Xem chi tiết sản phẩm
   6. Thêm vào giỏ hàng
   7. Tăng / giảm số lượng
   8. Xóa sản phẩm khỏi giỏ
   9. Xóa toàn bộ giỏ
   10. Tính tổng tiền
   11. Lưu giỏ hàng bằng localStorage
   ========================================================= */


/* =========================================================
   1. DANH SÁCH 5 SẢN PHẨM
   ========================================================= */

const products = [

    /* -----------------------------------------------------
       SẢN PHẨM 1
       ----------------------------------------------------- */
    {
        id: 1,

        name: "Dầu gội Bưởi Cocoon 500ml",

        shortName: "Dầu gội Bưởi 500ml",

        category: "dau-goi",

        categoryName: "Dầu gội",

        price: 388000,

        image:
            "https://image.cocoonvietnam.com/uploads/IMG_5252_8f3fe2deab.jpg",

        description:
            "Dầu gội Bưởi Cocoon với tinh dầu bưởi và các thành phần dưỡng tóc giúp làm sạch tóc, chăm sóc da đầu và hỗ trợ mái tóc bóng khỏe.",

        usage:
            "Thoa sản phẩm lên tóc ướt và tạo bọt. Mát-xa nhẹ nhàng từ gốc đến ngọn, sau đó gội sạch. Sử dụng hằng ngày để có kết quả tốt nhất. Tránh tiếp xúc với mắt.",

        amount:
            "1–2 lần nhấn",

        texture:
            "Gel trong mờ",

        scent:
            "Tinh dầu bưởi thơm mát",

        note:
            "Tránh dùng vùng mắt, chỉ dùng ngoài da.",

        origin:
            "Việt Nam",

        ingredients: [
            {
                name: "Tinh dầu bưởi",
                description:
                    "Giàu limonene, hỗ trợ chăm sóc da đầu và tóc, đồng thời có đặc tính kháng khuẩn và chống oxy hóa."
            },
            {
                name: "Xylishine™",
                description:
                    "Giúp dưỡng ẩm, hỗ trợ phục hồi và tăng cường độ bóng cho tóc."
            },
            {
                name: "Vitamin B5",
                description:
                    "Cung cấp độ ẩm lâu dài, hỗ trợ hạn chế hư tổn và cải thiện độ bóng khỏe của tóc."
            },
            {
                name: "Axít amin",
                description:
                    "Giúp dưỡng ẩm, củng cố cấu trúc và hỗ trợ cải thiện hư tổn bề mặt tóc."
            }
        ]
    },


    /* -----------------------------------------------------
       SẢN PHẨM 2
       ----------------------------------------------------- */
    {
        id: 2,

        name: "Dầu gội Bưởi Cocoon 310ml",

        shortName: "Dầu gội Bưởi 310ml",

        category: "dau-goi",

        categoryName: "Dầu gội",

        price: 200000,

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaO9qvYFAEuGH2AkFhsus8McXksD5--YRyhFYcsqTdwg&s=10",

        description:
            "Dầu gội Bưởi Cocoon 310ml giúp làm sạch tóc và da đầu, kết hợp các thành phần chăm sóc tóc giúp tóc mềm mại và bóng khỏe.",

        usage:
            "Thoa sản phẩm lên tóc ướt và tạo bọt. Mát-xa nhẹ nhàng từ gốc đến ngọn, sau đó gội sạch. Sử dụng hằng ngày. Tránh tiếp xúc với mắt.",

        amount:
            "1–2 lần nhấn",

        texture:
            "Gel trong mờ",

        scent:
            "Tinh dầu bưởi thơm mát",

        note:
            "Tránh dùng vùng mắt, chỉ dùng ngoài da.",

        origin:
            "Việt Nam",

        ingredients: [
            {
                name: "Tinh dầu bưởi",
                description:
                    "Giúp chăm sóc da đầu và tóc, đồng thời hỗ trợ bảo vệ tóc nhờ đặc tính chống oxy hóa."
            },
            {
                name: "Xylishine™",
                description:
                    "Giúp dưỡng ẩm, hỗ trợ phục hồi và tăng độ bóng cho tóc."
            },
            {
                name: "Vitamin B5",
                description:
                    "Hỗ trợ cung cấp độ ẩm và cải thiện vẻ bóng khỏe của mái tóc."
            },
            {
                name: "Axít amin",
                description:
                    "Giúp dưỡng ẩm và hỗ trợ củng cố cấu trúc tóc."
            }
        ]
    },


    /* -----------------------------------------------------
       SẢN PHẨM 3
       ----------------------------------------------------- */
    {
        id: 3,

        name: "Túi Refill Dầu gội Bưởi Cocoon",

        shortName: "Túi Refill Dầu gội Bưởi",

        category: "refill",

        categoryName: "Refill",

        price: 310000,

        image:
            "https://cdn.hstatic.net/products/1000006063/new_project_4f782c61380f46bc8013b609d3849d29_1024x1024.jpg",

        description:
            "Túi Refill Dầu gội Bưởi Cocoon giúp bổ sung dầu gội tiện lợi cho nhu cầu sử dụng thường xuyên.",

        usage:
            "Bổ sung sản phẩm vào chai đựng phù hợp. Khi sử dụng, thoa dầu gội lên tóc ướt, tạo bọt, mát-xa nhẹ nhàng từ gốc đến ngọn rồi xả sạch.",

        amount:
            "1–2 lần nhấn",

        texture:
            "Gel trong mờ",

        scent:
            "Tinh dầu bưởi thơm mát",

        note:
            "Tránh dùng vùng mắt, chỉ dùng ngoài da.",

        origin:
            "Việt Nam",

        ingredients: [
            {
                name: "Tinh dầu bưởi",
                description:
                    "Hỗ trợ chăm sóc da đầu và tóc, đồng thời có đặc tính kháng khuẩn và chống oxy hóa."
            },
            {
                name: "Xylishine™",
                description:
                    "Giúp dưỡng ẩm, hỗ trợ phục hồi và tăng độ bóng cho tóc."
            },
            {
                name: "Vitamin B5",
                description:
                    "Giúp cung cấp độ ẩm và hỗ trợ mái tóc mềm mại, bóng khỏe."
            },
            {
                name: "Axít amin",
                description:
                    "Giúp dưỡng ẩm và hỗ trợ củng cố cấu trúc tóc."
            }
        ]
    },


    /* -----------------------------------------------------
       SẢN PHẨM 4
       ----------------------------------------------------- */
    {
        id: 4,

        name: "Dầu xả Bưởi Cocoon 310ml",

        shortName: "Dầu xả Bưởi 310ml",

        category: "dau-xa",

        categoryName: "Dầu xả",

        price: 388000,

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTToPG_yudvoDtXvIjkh-42g8gBg6_rNUnREextcb85SNZAT1Ao3bdoyw&s=10",

        description:
            "Dầu xả Bưởi Cocoon giúp dưỡng tóc sau bước gội, cung cấp độ ẩm và hỗ trợ mái tóc mềm mượt, bóng khỏe.",

        usage:
            "Sau khi gội tóc với Dầu gội Bưởi, thoa sản phẩm lên tóc ướt và mát-xa nhẹ nhàng lên thân tóc. Sau đó xả sạch lại với nước. Sử dụng hằng ngày. Tránh tiếp xúc với mắt.",

        amount:
            "1–2 lần nhấn",

        texture:
            "Kem đặc màu trắng ngà",

        scent:
            "Tinh dầu bưởi thơm mát",

        note:
            "Tránh dùng vùng mắt, chỉ dùng ngoài da.",

        origin:
            "Việt Nam",

        ingredients: [
            {
                name: "Tinh dầu bưởi",
                description:
                    "Giúp chăm sóc tóc và mang lại cảm giác thơm mát, dễ chịu."
            },
            {
                name: "Xylishine™",
                description:
                    "Giúp dưỡng ẩm, hỗ trợ phục hồi và tăng độ bóng cho tóc."
            },
            {
                name: "Vitamin B5",
                description:
                    "Giúp cung cấp độ ẩm và hỗ trợ cải thiện vẻ bóng khỏe của tóc."
            },
            {
                name: "Axít amin",
                description:
                    "Giúp dưỡng ẩm, củng cố cấu trúc và hỗ trợ cải thiện hư tổn bề mặt tóc."
            }
        ]
    },


    /* -----------------------------------------------------
       SẢN PHẨM 5
       ----------------------------------------------------- */
    {
        id: 5,

        name: "Combo Dầu gội & Dầu xả Bưởi Cocoon 310ml x 2",

        shortName: "Combo Dầu gội & Dầu xả Bưởi",

        category: "combo",

        categoryName: "Combo",

        price: 590000,

        image:
            "https://oharabeauty.com/wp-content/uploads/2024/02/dau-xa-cocoon-buoi-cung-cap-duong-chat-do-am-310ml-2.png",

        description:
            "Combo kết hợp Dầu gội và Dầu xả Bưởi Cocoon 310ml, giúp hoàn thiện chu trình làm sạch và dưỡng tóc.",

        usage:
            "Bước 1: Thoa dầu gội lên tóc ướt, tạo bọt và mát-xa nhẹ nhàng từ gốc đến ngọn, sau đó xả sạch. Bước 2: Sau khi gội, thoa dầu xả lên thân tóc, mát-xa nhẹ nhàng rồi xả sạch với nước. Sử dụng hằng ngày.",

        amount:
            "Dầu gội: 1–2 lần nhấn. Dầu xả: 1–2 lần nhấn",

        texture:
            "Dầu gội dạng gel trong mờ; dầu xả dạng kem đặc màu trắng ngà",

        scent:
            "Tinh dầu bưởi thơm mát",

        note:
            "Tránh dùng vùng mắt, chỉ dùng ngoài da.",

        origin:
            "Việt Nam",

        ingredients: [
            {
                name: "Tinh dầu bưởi",
                description:
                    "Hỗ trợ chăm sóc da đầu và tóc, đồng thời có đặc tính chống oxy hóa."
            },
            {
                name: "Xylishine™",
                description:
                    "Giúp dưỡng ẩm, hỗ trợ phục hồi và tăng cường độ bóng cho tóc."
            },
            {
                name: "Vitamin B5",
                description:
                    "Cung cấp độ ẩm lâu dài và hỗ trợ cải thiện vẻ bóng khỏe của mái tóc."
            },
            {
                name: "Axít amin",
                description:
                    "Giúp dưỡng ẩm, củng cố cấu trúc và hỗ trợ cải thiện hư tổn bề mặt tóc."
            }
        ]
    }

];


/* =========================================================
   2. GIỎ HÀNG
   ========================================================= */

let cart = [];


/* =========================================================
   3. HÀM BỎ DẤU TIẾNG VIỆT
   ========================================================= */

function removeVietnameseTones(text) {

    return String(text || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/\s+/g, " ")
        .trim();
}


/* =========================================================
   4. ĐỊNH DẠNG TIỀN
   ========================================================= */

function formatPrice(price) {

    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
    }).format(price);
}


/* =========================================================
   5. TÌM SẢN PHẨM THEO ID
   ========================================================= */

function getProductById(id) {

    return products.find(
        product => Number(product.id) === Number(id)
    );
}


/* =========================================================
   6. HIỂN THỊ ĐỦ 5 SẢN PHẨM
   ========================================================= */

function renderProducts(productList = products) {

    const productGrid =
        document.getElementById("productGrid");

    if (!productGrid) {
        console.error(
            "Không tìm thấy phần tử #productGrid trong HTML."
        );
        return;
    }


    /*
     * Không có kết quả tìm kiếm
     */

    if (productList.length === 0) {

        productGrid.innerHTML = `
            <div class="no-products">

                <h3>
                    Không tìm thấy sản phẩm
                </h3>

                <p>
                    Vui lòng thử từ khóa khác.
                </p>

                <button
                    type="button"
                    onclick="showAllProducts()"
                >
                    Xem tất cả sản phẩm
                </button>

            </div>
        `;

        return;
    }


    /*
     * HIỂN THỊ TOÀN BỘ SẢN PHẨM
     */

    productGrid.innerHTML =
        productList
            .map(product => createProductCard(product))
            .join("");
}


/* =========================================================
   7. TẠO CARD SẢN PHẨM
   ========================================================= */

function createProductCard(product) {

    return `
        <article
            class="product-card"
            data-id="${product.id}"
        >

            <div class="product-image-box">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                    loading="lazy"
                >

                <span class="product-category">
                    ${product.categoryName}
                </span>

            </div>


            <div class="product-info">

                <!-- TÊN SẢN PHẨM CÓ THỂ BẤM -->

                <button
                    type="button"
                    class="product-name"
                    onclick="openProductDetail(${product.id})"
                >
                    ${product.name}
                </button>


                <p class="product-description">
                    ${product.description}
                </p>


                <div class="product-card-bottom">

                    <span class="product-price">
                        ${formatPrice(product.price)}
                    </span>


                    <button
                        type="button"
                        class="add-to-cart"
                        onclick="addToCart(${product.id})"
                    >
                        Thêm vào giỏ
                    </button>

                </div>

            </div>

        </article>
    `;
}


/* =========================================================
   8. TÌM KIẾM
   ========================================================= */

function searchProducts() {

    const searchInput =
        document.getElementById("productSearch");


    const categoryFilter =
        document.getElementById("categoryFilter");


    const keyword =
        removeVietnameseTones(
            searchInput
                ? searchInput.value
                : ""
        );


    const selectedCategory =
        categoryFilter
            ? categoryFilter.value
            : "all";


    const filteredProducts =
        products.filter(product => {

            /*
             * Ghép toàn bộ nội dung của sản phẩm
             * để tìm kiếm.
             */

            const searchText =
                removeVietnameseTones(`
                    ${product.name}
                    ${product.shortName}
                    ${product.categoryName}
                    ${product.description}
                    ${product.scent}
                    ${product.texture}
                `);


            const matchKeyword =
                keyword === "" ||
                searchText.includes(keyword);


            const matchCategory =
                selectedCategory === "all" ||
                product.category === selectedCategory;


            return (
                matchKeyword &&
                matchCategory
            );
        });


    renderProducts(filteredProducts);
}


/* =========================================================
   9. HIỂN THỊ TẤT CẢ 5 SẢN PHẨM
   ========================================================= */

function showAllProducts() {

    const searchInput =
        document.getElementById("productSearch");


    const categoryFilter =
        document.getElementById("categoryFilter");


    if (searchInput) {
        searchInput.value = "";
    }


    if (categoryFilter) {
        categoryFilter.value = "all";
    }


    /*
     * QUAN TRỌNG:
     * Luôn truyền products để hiển thị đủ 5 sản phẩm.
     */

    renderProducts(products);
}


/* =========================================================
   10. MỞ CHI TIẾT SẢN PHẨM
   ========================================================= */

function openProductDetail(productId) {

    const product =
        getProductById(productId);


    if (!product) {
        console.error(
            "Không tìm thấy sản phẩm:",
            productId
        );
        return;
    }


    let modal =
        document.getElementById("productModal");


    if (!modal) {

        createProductModal();

        modal =
            document.getElementById("productModal");
    }


    const modalBody =
        document.getElementById("modalBody");


    if (!modalBody) {
        return;
    }


    modalBody.innerHTML =
        createProductDetail(product);


    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );
}


/* =========================================================
   11. NỘI DUNG CHI TIẾT
   ========================================================= */

function createProductDetail(product) {

    return `

        <div class="product-detail">

            <div class="product-detail-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="product-detail-content">

                <span class="product-detail-category">
                    ${product.categoryName}
                </span>


                <h2>
                    ${product.name}
                </h2>


                <div class="product-detail-price">
                    ${formatPrice(product.price)}
                </div>


                <p class="product-detail-description">
                    ${product.description}
                </p>


                <!-- CÁCH SỬ DỤNG -->

                <div class="detail-section">

                    <h3>
                        Cách sử dụng
                    </h3>

                    <p>
                        ${product.usage}
                    </p>

                </div>


                <!-- THÔNG TIN -->

                <div class="detail-information">

                    <div class="detail-information-item">

                        <strong>
                            Lượng dùng
                        </strong>

                        <span>
                            ${product.amount}
                        </span>

                    </div>


                    <div class="detail-information-item">

                        <strong>
                            Kết cấu
                        </strong>

                        <span>
                            ${product.texture}
                        </span>

                    </div>


                    <div class="detail-information-item">

                        <strong>
                            Mùi hương
                        </strong>

                        <span>
                            ${product.scent}
                        </span>

                    </div>


                    <div class="detail-information-item">

                        <strong>
                            Xuất xứ
                        </strong>

                        <span>
                            ${product.origin}
                        </span>

                    </div>

                </div>


                <!-- THÀNH PHẦN -->

                <div class="detail-section">

                    <h3>
                        Thành phần chính
                    </h3>


                    <div class="ingredients">

                        ${product.ingredients
                            .map(
                                ingredient => `

                                    <div class="ingredient">

                                        <h4>
                                            ${ingredient.name}
                                        </h4>

                                        <p>
                                            ${ingredient.description}
                                        </p>

                                    </div>

                                `
                            )
                            .join("")
                        }

                    </div>

                </div>


                <!-- LƯU Ý -->

                <div class="detail-section detail-note">

                    <h3>
                        Lưu ý
                    </h3>

                    <p>
                        ${product.note}
                    </p>

                </div>


                <!-- NÚT THÊM GIỎ -->

                <button
                    type="button"
                    class="detail-cart-button"
                    onclick="addToCart(${product.id})"
                >
                    Thêm vào giỏ hàng
                </button>

            </div>

        </div>
    `;
}


/* =========================================================
   12. TẠO MODAL
   ========================================================= */

function createProductModal() {

    if (
        document.getElementById("productModal")
    ) {
        return;
    }


    const modal =
        document.createElement("div");


    modal.id =
        "productModal";


    modal.className =
        "product-modal";


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    modal.innerHTML = `

        <div
            class="product-modal-overlay"
            onclick="closeProductDetail()"
        ></div>


        <div
            class="product-modal-container"
            role="dialog"
            aria-modal="true"
        >

            <button
                type="button"
                class="product-modal-close"
                onclick="closeProductDetail()"
                aria-label="Đóng"
            >
                ×
            </button>


            <div id="modalBody"></div>

        </div>
    `;


    document.body.appendChild(modal);
}


/* =========================================================
   13. ĐÓNG CHI TIẾT
   ========================================================= */

function closeProductDetail() {

    const modal =
        document.getElementById(
            "productModal"
        );


    if (!modal) {
        return;
    }


    modal.classList.remove(
        "active"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );
}


/* =========================================================
   14. LOAD GIỎ HÀNG
   ========================================================= */

function loadCart() {

    try {

        const savedCart =
            localStorage.getItem(
                "nangNiuMaiTocVietCart"
            );


        if (!savedCart) {
            return [];
        }


        const parsed =
            JSON.parse(savedCart);


        if (!Array.isArray(parsed)) {
            return [];
        }


        return parsed;

    } catch (error) {

        console.error(
            "Lỗi đọc giỏ hàng:",
            error
        );

        return [];
    }
}


/* =========================================================
   15. SAVE GIỎ HÀNG
   ========================================================= */

function saveCart() {

    localStorage.setItem(
        "nangNiuMaiTocVietCart",
        JSON.stringify(cart)
    );
}


/* =========================================================
   16. THÊM VÀO GIỎ
   ========================================================= */

function addToCart(productId) {

    const product =
        getProductById(productId);


    if (!product) {
        return;
    }


    const existingItem =
        cart.find(
            item =>
                Number(item.id) ===
                Number(productId)
        );


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            id: product.id,
            quantity: 1
        });
    }


    saveCart();

    renderCart();

    updateCartCount();


    showNotification(
        `Đã thêm "${product.name}" vào giỏ hàng.`
    );
}


/* =========================================================
   17. TĂNG SỐ LƯỢNG
   ========================================================= */

function increaseCartItem(productId) {

    const item =
        cart.find(
            item =>
                Number(item.id) ===
                Number(productId)
        );


    if (!item) {
        return;
    }


    item.quantity += 1;


    saveCart();

    renderCart();

    updateCartCount();
}


/* =========================================================
   18. GIẢM SỐ LƯỢNG
   ========================================================= */

function decreaseCartItem(productId) {

    const item =
        cart.find(
            item =>
                Number(item.id) ===
                Number(productId)
        );


    if (!item) {
        return;
    }


    item.quantity -= 1;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                cartItem =>
                    Number(cartItem.id) !==
                    Number(productId)
            );
    }


    saveCart();

    renderCart();

    updateCartCount();
}


/* =========================================================
   19. XÓA SẢN PHẨM
   ========================================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                Number(item.id) !==
                Number(productId)
        );


    saveCart();

    renderCart();

    updateCartCount();
}


/* =========================================================
   20. XÓA TOÀN BỘ GIỎ
   ========================================================= */

function clearCart() {

    cart = [];

    saveCart();

    renderCart();

    updateCartCount();
}


/* =========================================================
   21. TÍNH SỐ LƯỢNG GIỎ
   ========================================================= */

function getCartQuantity() {

    return cart.reduce(
        (total, item) =>
            total +
            Number(item.quantity || 0),
        0
    );
}


/* =========================================================
   22. TÍNH TỔNG TIỀN
   ========================================================= */

function getCartTotal() {

    return cart.reduce(
        (total, item) => {

            const product =
                getProductById(item.id);


            if (!product) {
                return total;
            }


            return total +
                product.price *
                Number(item.quantity || 0);

        },

        0
    );
}


/* =========================================================
   23. CẬP NHẬT SỐ LƯỢNG TRÊN GIỎ
   ========================================================= */

function updateCartCount() {

    const cartCount =
        document.getElementById(
            "cartCount"
        );


    if (!cartCount) {
        return;
    }


    cartCount.textContent =
        getCartQuantity();
}


/* =========================================================
   24. HIỂN THỊ GIỎ HÀNG
   ========================================================= */

function renderCart() {

    const cartItems =
        document.getElementById(
            "cartItems"
        );


    const cartTotal =
        document.getElementById(
            "cartTotal"
        );


    if (!cartItems) {
        return;
    }


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <h3>
                    Giỏ hàng đang trống
                </h3>

                <p>
                    Hãy chọn sản phẩm bạn yêu thích.
                </p>

            </div>
        `;

    } else {

        cartItems.innerHTML =
            cart
                .map(
                    item =>
                        createCartItem(item)
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

    renderOrderSummary();
}


/* =========================================================
   25. TẠO ITEM GIỎ
   ========================================================= */

function createCartItem(item) {

    const product =
        getProductById(item.id);


    if (!product) {
        return "";
    }


    const quantity =
        Number(item.quantity || 1);


    const total =
        product.price *
        quantity;


    return `

        <div
            class="cart-item"
            data-id="${product.id}"
        >

            <img
                src="${product.image}"
                alt="${product.name}"
                class="cart-item-image"
            >


            <div class="cart-item-info">

                <button
                    type="button"
                    class="cart-product-name"
                    onclick="openProductDetail(${product.id})"
                >
                    ${product.name}
                </button>


                <span class="cart-product-price">
                    ${formatPrice(product.price)}
                </span>


                <div class="quantity-control">

                    <button
                        type="button"
                        onclick="decreaseCartItem(${product.id})"
                    >
                        −
                    </button>


                    <span>
                        ${quantity}
                    </span>


                    <button
                        type="button"
                        onclick="increaseCartItem(${product.id})"
                    >
                        +
                    </button>

                </div>

            </div>


            <div class="cart-item-total">

                <strong>
                    ${formatPrice(total)}
                </strong>


                <button
                    type="button"
                    onclick="removeFromCart(${product.id})"
                >
                    Xóa
                </button>

            </div>

        </div>
    `;
}


/* =========================================================
   26. TÓM TẮT ĐƠN HÀNG
   ========================================================= */

function renderOrderSummary() {

    const orderItems =
        document.getElementById(
            "orderItems"
        );


    const orderTotal =
        document.getElementById(
            "orderTotal"
        );


    if (orderItems) {

        if (cart.length === 0) {

            orderItems.innerHTML =
                "<p>Chưa có sản phẩm.</p>";

        } else {

            orderItems.innerHTML =
                cart
                    .map(item => {

                        const product =
                            getProductById(item.id);


                        if (!product) {
                            return "";
                        }


                        return `

                            <div class="order-item">

                                <span>
                                    ${product.name}
                                    × ${item.quantity}
                                </span>

                                <strong>
                                    ${formatPrice(
                                        product.price *
                                        item.quantity
                                    )}
                                </strong>

                            </div>
                        `;

                    })
                    .join("");
        }
    }


    if (orderTotal) {

        orderTotal.textContent =
            formatPrice(
                getCartTotal()
            );
    }
}


/* =========================================================
   27. MỞ GIỎ HÀNG
   ========================================================= */

function openCart() {

    const drawer =
        document.getElementById(
            "cartDrawer"
        );


    const overlay =
        document.getElementById(
            "cartOverlay"
        );


    if (drawer) {

        drawer.classList.add(
            "active"
        );
    }


    if (overlay) {

        overlay.classList.add(
            "active"
        );
    }


    document.body.classList.add(
        "cart-open"
    );
}


/* =========================================================
   28. ĐÓNG GIỎ HÀNG
   ========================================================= */

function closeCart() {

    const drawer =
        document.getElementById(
            "cartDrawer"
        );


    const overlay =
        document.getElementById(
            "cartOverlay"
        );


    if (drawer) {

        drawer.classList.remove(
            "active"
        );
    }


    if (overlay) {

        overlay.classList.remove(
            "active"
        );
    }


    document.body.classList.remove(
        "cart-open"
    );
}


/* =========================================================
   29. THÔNG BÁO
   ========================================================= */

function showNotification(message) {

    let notification =
        document.getElementById(
            "siteNotification"
        );


    if (!notification) {

        notification =
            document.createElement("div");

        notification.id =
            "siteNotification";

        notification.className =
            "site-notification";

        document.body.appendChild(
            notification
        );
    }


    notification.textContent =
        message;


    notification.classList.add(
        "show"
    );


    clearTimeout(
        window.notificationTimer
    );


    window.notificationTimer =
        setTimeout(() => {

            notification.classList.remove(
                "show"
            );

        }, 2500);
}


/* =========================================================
   30. TÌM KIẾM NGAY KHI GÕ
   ========================================================= */

document.addEventListener(
    "input",
    function(event) {

        if (
            event.target &&
            event.target.id ===
            "productSearch"
        ) {

            searchProducts();
        }
    }
);


/* =========================================================
   31. LỌC DANH MỤC
   ========================================================= */

document.addEventListener(
    "change",
    function(event) {

        if (
            event.target &&
            event.target.id ===
            "categoryFilter"
        ) {

            searchProducts();
        }
    }
);


/* =========================================================
   32. ESC ĐỂ ĐÓNG
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeProductDetail();

            closeCart();
        }
    }
);


/* =========================================================
   33. KHỞI TẠO WEBSITE
   ========================================================= */

function initializeWebsite() {

    /*
     * Đọc giỏ hàng cũ.
     */

    cart = loadCart();


    /*
     * Tạo modal.
     */

    createProductModal();


    /*
     * QUAN TRỌNG:
     * HIỂN THỊ ĐỦ 5 SẢN PHẨM NGAY KHI MỞ WEB.
     */

    renderProducts(products);


    /*
     * Hiển thị giỏ.
     */

    renderCart();


    /*
     * Cập nhật số lượng.
     */

    updateCartCount();
}


/* =========================================================
   34. CHẠY
   ========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeWebsite
    );

} else {

    initializeWebsite();
}


/* =========================================================
   35. ĐƯA HÀM RA NGOÀI
   ========================================================= */

window.products =
    products;

window.renderProducts =
    renderProducts;

window.searchProducts =
    searchProducts;

window.showAllProducts =
    showAllProducts;

window.openProductDetail =
    openProductDetail;

window.closeProductDetail =
    closeProductDetail;

window.addToCart =
    addToCart;

window.increaseCartItem =
    increaseCartItem;

window.decreaseCartItem =
    decreaseCartItem;

window.removeFromCart =
    removeFromCart;

window.clearCart =
    clearCart;

window.openCart =
    openCart;

window.closeCart =
    closeCart;

window.formatPrice =
    formatPrice;
