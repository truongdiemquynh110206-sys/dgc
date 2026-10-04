/* =========================================================
   NÂNG NIU MÁI TÓC VIỆT
   script.js
   ---------------------------------------------------------
   Chức năng:
   1. Dữ liệu 5 sản phẩm Cocoon Bưởi
   2. Hiển thị sản phẩm
   3. Lọc sản phẩm
   4. Tìm kiếm sản phẩm
   5. Xem chi tiết sản phẩm
   6. Thêm sản phẩm vào giỏ hàng
   7. Tăng / giảm số lượng
   8. Xóa sản phẩm khỏi giỏ
   9. Tính tổng tiền
   10. Lưu giỏ hàng bằng localStorage
   ========================================================= */


/* =========================================================
   1. DỮ LIỆU SẢN PHẨM
   ========================================================= */

const products = [

    {
        id: 1,

        name: "Dầu Gội Bưởi Cocoon 500ml",

        shortName: "Dầu gội Bưởi 500ml",

        category: "dau-goi",

        categoryName: "Dầu gội",

        price: 388000,

        volume: "500ml",

        image:
            "https://image.cocoonvietnam.com/uploads/IMG_5252_8f3fe2deab.jpg",

        description:
            "Dầu Gội Bưởi Cocoon với tinh dầu bưởi, Vitamin B5, Xylishine™ và axít amin, giúp làm sạch tóc và chăm sóc mái tóc mềm mượt, bóng khỏe.",

        texture:
            "Dạng gel trong mờ",

        scent:
            "Mùi tinh dầu bưởi thơm mát",

        usage:
            "Thoa sản phẩm lên tóc ướt và tạo bọt. Mát-xa nhẹ nhàng từ gốc đến ngọn, sau đó gội sạch với nước. Sử dụng hằng ngày để có kết quả tốt nhất.",

        dosage:
            "Từ 1–2 lần nhấn",

        origin:
            "Việt Nam",

        note:
            "Tránh tiếp xúc với mắt. Chỉ dùng ngoài da.",

        ingredients: [

            {
                name: "Tinh dầu bưởi",

                content:
                    "Được trích ly từ vỏ bưởi, chứa hàm lượng lớn limonene. Tinh dầu vỏ bưởi có đặc tính kháng khuẩn và chống oxy hóa, góp phần chăm sóc da đầu và tóc."
            },

            {
                name: "Xylishine™",

                content:
                    "Được chiết xuất từ tảo nâu Pelvetia canaliculata và các loại đường tự nhiên có trong gỗ. Có chức năng dưỡng ẩm và phục hồi tóc, giúp tăng cường độ bóng."
            },

            {
                name: "Vitamin B5 (D-panthenol)",

                content:
                    "Giúp cung cấp độ ẩm lâu dài cho tóc, hỗ trợ hạn chế hư tổn, cải thiện độ bóng và vẻ khỏe của mái tóc."
            },

            {
                name: "Axít amin",

                content:
                    "Giúp dưỡng ẩm, củng cố cấu trúc tóc, hỗ trợ bảo vệ màu sắc và sửa chữa các hư hỏng trên bề mặt tóc."
            }

        ]
    },


    {
        id: 2,

        name: "Dầu Gội Bưởi Cocoon 310ml",

        shortName: "Dầu gội Bưởi 310ml",

        category: "dau-goi",

        categoryName: "Dầu gội",

        price: 200000,

        volume: "310ml",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaO9qvYFAEuGH2AkFhsus8McXksD5--YRyhFYcsqTdwg&s=10",

        description:
            "Dầu Gội Bưởi Cocoon phiên bản 310ml với tinh dầu bưởi và các hoạt chất dưỡng tóc, mang đến cảm giác sạch thoáng cùng hương bưởi tươi mát.",

        texture:
            "Dạng gel trong mờ",

        scent:
            "Mùi tinh dầu bưởi thơm mát",

        usage:
            "Thoa sản phẩm lên tóc ướt và tạo bọt. Mát-xa nhẹ nhàng từ gốc đến ngọn rồi gội sạch với nước. Sử dụng hằng ngày để có kết quả tốt nhất.",

        dosage:
            "Từ 1–2 lần nhấn",

        origin:
            "Việt Nam",

        note:
            "Tránh tiếp xúc với mắt. Chỉ dùng ngoài da.",

        ingredients: [

            {
                name: "Tinh dầu bưởi",

                content:
                    "Chiết xuất từ vỏ bưởi, giàu limonene và có đặc tính kháng khuẩn, chống oxy hóa, góp phần chăm sóc da đầu và mái tóc."
            },

            {
                name: "Xylishine™",

                content:
                    "Hỗ trợ dưỡng ẩm và phục hồi tóc, giúp mái tóc trở nên mềm mại và tăng độ bóng."
            },

            {
                name: "Vitamin B5",

                content:
                    "Hỗ trợ cung cấp độ ẩm lâu dài, giúp tóc mềm mại và cải thiện vẻ bóng khỏe."
            },

            {
                name: "Axít amin",

                content:
                    "Giúp dưỡng ẩm, củng cố cấu trúc và hỗ trợ bảo vệ bề mặt tóc."
            }

        ]
    },


    {
        id: 3,

        name: "Túi Refill Dầu Gội Bưởi Cocoon",

        shortName: "Túi Refill Dầu Gội Bưởi",

        category: "refill",

        categoryName: "Túi Refill",

        price: 310000,

        volume: "Refill",

        image:
            "https://cdn.hstatic.net/products/1000006063/new_project_4f782c61380f46bc8013b609d3849d29_1024x1024.jpg",

        description:
            "Túi Refill Dầu Gội Bưởi Cocoon là lựa chọn tiện lợi để bổ sung dầu gội vào chai đang sử dụng, giúp hạn chế việc mua lại chai mới.",

        texture:
            "Dạng gel trong mờ",

        scent:
            "Mùi tinh dầu bưởi thơm mát",

        usage:
            "Đổ sản phẩm từ túi refill vào chai sạch và khô. Khi sử dụng, thoa sản phẩm lên tóc ướt, tạo bọt và mát-xa nhẹ nhàng từ gốc đến ngọn rồi xả sạch.",

        dosage:
            "Từ 1–2 lần nhấn",

        origin:
            "Việt Nam",

        note:
            "Tránh tiếp xúc với mắt. Chỉ dùng ngoài da.",

        ingredients: [

            {
                name: "Tinh dầu bưởi",

                content:
                    "Được chiết xuất từ vỏ bưởi, mang hương thơm đặc trưng và có đặc tính kháng khuẩn, chống oxy hóa."
            },

            {
                name: "Xylishine™",

                content:
                    "Hỗ trợ dưỡng ẩm và phục hồi tóc, giúp tăng độ mềm mại và độ bóng."
            },

            {
                name: "Vitamin B5",

                content:
                    "Hỗ trợ giữ ẩm và chăm sóc tóc, giúp mái tóc có vẻ mềm mại và khỏe hơn."
            },

            {
                name: "Axít amin",

                content:
                    "Giúp dưỡng ẩm, củng cố cấu trúc và chăm sóc bề mặt tóc."
            }

        ]
    },


    {
        id: 4,

        name: "Dầu Xả Bưởi Cocoon 310ml",

        shortName: "Dầu xả Bưởi 310ml",

        category: "dau-xa",

        categoryName: "Dầu xả",

        price: 388000,

        volume: "310ml",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTToPG_yudvoDtXvIjkh-42g8gBg6_rNUnREextcb85SNZAT1Ao3bdoyw&s=10",

        description:
            "Dầu Xả Bưởi Cocoon giúp bổ sung độ ẩm cho thân tóc, hỗ trợ mái tóc mềm mại, bóng mượt và dễ chăm sóc hơn.",

        texture:
            "Kem đặc màu trắng ngà",

        scent:
            "Mùi tinh dầu bưởi thơm mát",

        usage:
            "Sau khi gội tóc với Dầu Gội Bưởi, thoa dầu xả lên tóc ướt và mát-xa nhẹ nhàng lên thân tóc. Sau đó xả sạch lại với nước.",

        dosage:
            "Từ 1–2 lần nhấn",

        origin:
            "Việt Nam",

        note:
            "Tránh tiếp xúc với mắt. Chỉ dùng ngoài da.",

        ingredients: [

            {
                name: "Tinh dầu bưởi",

                content:
                    "Mang hương thơm bưởi tươi mát và góp phần chăm sóc da đầu, tóc nhờ đặc tính chống oxy hóa."
            },

            {
                name: "Xylishine™",

                content:
                    "Hỗ trợ dưỡng ẩm và phục hồi tóc, giúp tóc tăng độ mềm mại và bóng mượt."
            },

            {
                name: "Vitamin B5 (D-panthenol)",

                content:
                    "Giúp cung cấp độ ẩm cho tóc, hỗ trợ hạn chế hư tổn và cải thiện độ bóng khỏe."
            },

            {
                name: "Axít amin",

                content:
                    "Hỗ trợ dưỡng ẩm, củng cố cấu trúc và bảo vệ bề mặt tóc."
            }

        ]
    },


    {
        id: 5,

        name: "Combo Dầu Gội + Dầu Xả Bưởi Cocoon 310ml x 2",

        shortName: "Combo Dầu Gội + Dầu Xả Bưởi",

        category: "combo",

        categoryName: "Combo",

        price: 590000,

        volume: "310ml x 2",

        image:
            "https://oharabeauty.com/wp-content/uploads/2024/02/dau-xa-cocoon-buoi-cung-cap-duong-chat-do-am-310ml-2.png",

        description:
            "Combo gồm Dầu Gội Bưởi và Dầu Xả Bưởi Cocoon 310ml, kết hợp làm sạch tóc và chăm sóc độ ẩm cho thân tóc trong cùng một chu trình.",

        texture:
            "Dầu gội dạng gel trong mờ và dầu xả dạng kem đặc màu trắng ngà",

        scent:
            "Mùi tinh dầu bưởi thơm mát",

        usage:
            "Bước 1: Thoa dầu gội lên tóc ướt, tạo bọt và mát-xa nhẹ nhàng từ gốc đến ngọn. Sau đó gội sạch.\n\nBước 2: Sau khi gội, thoa dầu xả lên thân tóc ướt, mát-xa nhẹ nhàng rồi xả sạch với nước.",

        dosage:
            "Từ 1–2 lần nhấn cho mỗi sản phẩm",

        origin:
            "Việt Nam",

        note:
            "Tránh tiếp xúc với mắt. Chỉ dùng ngoài da.",

        ingredients: [

            {
                name: "Tinh dầu bưởi",

                content:
                    "Chiết xuất từ vỏ bưởi, giàu limonene, có đặc tính kháng khuẩn và chống oxy hóa, góp phần chăm sóc da đầu và tóc."
            },

            {
                name: "Xylishine™",

                content:
                    "Hỗ trợ dưỡng ẩm và phục hồi tóc, giúp tăng độ mềm mại và bóng mượt."
            },

            {
                name: "Vitamin B5 (D-panthenol)",

                content:
                    "Giúp cung cấp độ ẩm lâu dài, hỗ trợ hạn chế hư tổn và cải thiện độ bóng khỏe."
            },

            {
                name: "Axít amin",

                content:
                    "Có tác dụng dưỡng ẩm, củng cố cấu trúc và hỗ trợ bảo vệ bề mặt tóc."
            }

        ]
    }

];


/* =========================================================
   2. BIẾN GIỎ HÀNG
   ========================================================= */

let cart = JSON.parse(
    localStorage.getItem("cocoonCart")
) || [];


/* =========================================================
   3. ĐỊNH DẠNG TIỀN VIỆT NAM
   ========================================================= */

function formatPrice(price) {

    return new Intl.NumberFormat(
        "vi-VN"
    ).format(price) + " VNĐ";

}


/* =========================================================
   4. LƯU GIỎ HÀNG
   ========================================================= */

function saveCart() {

    localStorage.setItem(
        "cocoonCart",
        JSON.stringify(cart)
    );

}


/* =========================================================
   5. LẤY SẢN PHẨM THEO ID
   ========================================================= */

function getProduct(productId) {

    return products.find(
        product => product.id === Number(productId)
    );

}


/* =========================================================
   6. HIỂN THỊ DANH SÁCH SẢN PHẨM
   ========================================================= */

function renderProducts(productList = products) {

    const productGrid =
        document.getElementById("productGrid");

    if (!productGrid) return;


    if (productList.length === 0) {

        productGrid.innerHTML = `
            <div class="empty-products">
                <p>Không tìm thấy sản phẩm phù hợp.</p>
            </div>
        `;

        return;
    }


    productGrid.innerHTML =
        productList.map(product => {

            return `

                <article
                    class="product-card"
                    data-id="${product.id}"
                >

                    <div class="product-card-image">

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                            loading="lazy"
                            onerror="this.style.display='none'; this.parentElement.classList.add('image-error');"
                        >

                        <span class="product-category">
                            ${product.categoryName}
                        </span>

                    </div>


                    <div class="product-card-content">

                        <button
                            class="product-name"
                            type="button"
                            onclick="openProductDetail(${product.id})"
                        >
                            ${product.name}
                        </button>


                        <p class="product-description">
                            ${product.description}
                        </p>


                        <div class="product-bottom">

                            <strong class="product-price">
                                ${formatPrice(product.price)}
                            </strong>

                            <button
                                class="add-cart-btn"
                                type="button"
                                onclick="addToCart(${product.id})"
                            >
                                Thêm vào giỏ
                            </button>

                        </div>

                    </div>

                </article>

            `;

        }).join("");

}


/* =========================================================
   7. LỌC SẢN PHẨM
   ========================================================= */

function filterProducts(category) {

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    filterButtons.forEach(button => {

        button.classList.remove("active");

        if (
            button.dataset.category === category
        ) {

            button.classList.add("active");

        }

    });


    if (category === "all") {

        renderProducts(products);

        return;
    }


    const filteredProducts =
        products.filter(
            product =>
                product.category === category
        );


    renderProducts(filteredProducts);

}


/* =========================================================
   8. TÌM KIẾM SẢN PHẨM
   ========================================================= */

function searchProducts(keyword) {

    const searchText =
        keyword
            .trim()
            .toLowerCase();


    if (!searchText) {

        renderProducts(products);

        return;
    }


    const result =
        products.filter(product => {

            return (

                product.name
                    .toLowerCase()
                    .includes(searchText)

                ||

                product.categoryName
                    .toLowerCase()
                    .includes(searchText)

                ||

                product.description
                    .toLowerCase()
                    .includes(searchText)

            );

        });


    renderProducts(result);

}


/* =========================================================
   9. MỞ CHI TIẾT SẢN PHẨM
   ========================================================= */

function openProductDetail(productId) {

    const product =
        getProduct(productId);

    if (!product) return;


    const modal =
        document.getElementById("productModal");

    if (!modal) return;


    const modalImage =
        document.getElementById("modalProductImage");

    const modalCategory =
        document.getElementById("modalProductCategory");

    const modalName =
        document.getElementById("modalProductName");

    const modalPrice =
        document.getElementById("modalProductPrice");

    const modalDescription =
        document.getElementById("modalProductDescription");

    const modalUsage =
        document.getElementById("modalProductUsage");

    const modalDosage =
        document.getElementById("modalProductDosage");

    const modalTexture =
        document.getElementById("modalProductTexture");

    const modalScent =
        document.getElementById("modalProductScent");

    const modalOrigin =
        document.getElementById("modalProductOrigin");

    const modalNote =
        document.getElementById("modalProductNote");

    const modalIngredients =
        document.getElementById("modalProductIngredients");


    if (modalImage) {

        modalImage.src =
            product.image;

        modalImage.alt =
            product.name;

    }


    if (modalCategory) {

        modalCategory.textContent =
            product.categoryName;

    }


    if (modalName) {

        modalName.textContent =
            product.name;

    }


    if (modalPrice) {

        modalPrice.textContent =
            formatPrice(product.price);

    }


    if (modalDescription) {

        modalDescription.textContent =
            product.description;

    }


    if (modalUsage) {

        modalUsage.innerHTML =
            formatMultilineText(
                product.usage
            );

    }


    if (modalDosage) {

        modalDosage.textContent =
            product.dosage;

    }


    if (modalTexture) {

        modalTexture.textContent =
            product.texture;

    }


    if (modalScent) {

        modalScent.textContent =
            product.scent;

    }


    if (modalOrigin) {

        modalOrigin.textContent =
            product.origin;

    }


    if (modalNote) {

        modalNote.textContent =
            product.note;

    }


    if (modalIngredients) {

        modalIngredients.innerHTML =

            product.ingredients
                .map(ingredient => {

                    return `

                        <div class="ingredient-item">

                            <h4>
                                ${ingredient.name}
                            </h4>

                            <p>
                                ${ingredient.content}
                            </p>

                        </div>

                    `;

                })
                .join("");

    }


    modal.classList.add("active");

    document.body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   10. XỬ LÝ NỘI DUNG NHIỀU DÒNG
   ========================================================= */

function formatMultilineText(text) {

    if (!text) return "";

    return text
        .split("\n\n")
        .map(
            paragraph =>
                `<p>${paragraph}</p>`
        )
        .join("");

}


/* =========================================================
   11. ĐÓNG CHI TIẾT SẢN PHẨM
   ========================================================= */

function closeProductDetail() {

    const modal =
        document.getElementById("productModal");

    if (!modal) return;


    modal.classList.remove("active");

    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   12. THÊM SẢN PHẨM VÀO GIỎ
   ========================================================= */

function addToCart(productId) {

    const product =
        getProduct(productId);

    if (!product) return;


    const existingProduct =
        cart.find(
            item =>
                item.id === product.id
        );


    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            quantity: 1

        });

    }


    saveCart();

    renderCart();

    updateCartCount();

    showCartNotification(
        `${product.name} đã được thêm vào giỏ hàng.`
    );

}


/* =========================================================
   13. XÓA SẢN PHẨM KHỎI GIỎ
   ========================================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                item.id !== Number(productId)
        );


    saveCart();

    renderCart();

    updateCartCount();

}


/* =========================================================
   14. THAY ĐỔI SỐ LƯỢNG
   ========================================================= */

function changeQuantity(productId, change) {

    const cartItem =
        cart.find(
            item =>
                item.id === Number(productId)
        );


    if (!cartItem) return;


    cartItem.quantity += change;


    if (cartItem.quantity <= 0) {

        removeFromCart(productId);

        return;
    }


    saveCart();

    renderCart();

    updateCartCount();

}


/* =========================================================
   15. TÍNH SỐ LƯỢNG TRONG GIỎ
   ========================================================= */

function getCartQuantity() {

    return cart.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );

}


/* =========================================================
   16. TÍNH TỔNG TIỀN
   ========================================================= */

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
   17. HIỂN THỊ SỐ LƯỢNG GIỎ HÀNG
   ========================================================= */

function updateCartCount() {

    const cartCount =
        document.getElementById("cartCount");

    if (!cartCount) return;


    const quantity =
        getCartQuantity();


    cartCount.textContent =
        quantity;

}


/* =========================================================
   18. HIỂN THỊ GIỎ HÀNG
   ========================================================= */

function renderCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");

    if (!cartItems) return;


    if (cart.length === 0) {

        cartItems.innerHTML = `

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

        if (cartTotal) {

            cartTotal.textContent =
                "0 VNĐ";

        }

        return;
    }


    cartItems.innerHTML =

        cart.map(item => {

            const product =
                getProduct(item.id);

            if (!product) {
                return "";
            }


            const subtotal =
                product.price *
                item.quantity;


            return `

                <div class="cart-item">

                    <div class="cart-item-image">

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                        >

                    </div>


                    <div class="cart-item-info">

                        <button
                            class="cart-item-name"
                            type="button"
                            onclick="openProductDetail(${product.id})"
                        >
                            ${product.name}
                        </button>


                        <div class="cart-item-price">
                            ${formatPrice(product.price)}
                        </div>


                        <div class="cart-item-actions">

                            <div class="quantity-control">

                                <button
                                    type="button"
                                    onclick="changeQuantity(${product.id}, -1)"
                                >
                                    −
                                </button>

                                <span>
                                    ${item.quantity}
                                </span>

                                <button
                                    type="button"
                                    onclick="changeQuantity(${product.id}, 1)"
                                >
                                    +
                                </button>

                            </div>


                            <strong>
                                ${formatPrice(subtotal)}
                            </strong>

                        </div>


                        <button
                            class="remove-cart-item"
                            type="button"
                            onclick="removeFromCart(${product.id})"
                        >
                            Xóa
                        </button>

                    </div>

                </div>

            `;

        }).join("");


    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(
                getCartTotal()
            );

    }

}


/* =========================================================
   19. MỞ GIỎ HÀNG
   ========================================================= */

function openCart() {

    const cartDrawer =
        document.getElementById("cartDrawer");

    const cartOverlay =
        document.getElementById("cartOverlay");


    if (cartDrawer) {

        cartDrawer.classList.add("active");

    }


    if (cartOverlay) {

        cartOverlay.classList.add("active");

    }


    document.body.classList.add(
        "cart-open"
    );

}


/* =========================================================
   20. ĐÓNG GIỎ HÀNG
   ========================================================= */

function closeCart() {

    const cartDrawer =
        document.getElementById("cartDrawer");

    const cartOverlay =
        document.getElementById("cartOverlay");


    if (cartDrawer) {

        cartDrawer.classList.remove(
            "active"
        );

    }


    if (cartOverlay) {

        cartOverlay.classList.remove(
            "active"
        );

    }


    document.body.classList.remove(
        "cart-open"
    );

}


/* =========================================================
   21. THÔNG BÁO THÊM GIỎ HÀNG
   ========================================================= */

function showCartNotification(message) {

    let notification =
        document.getElementById(
            "cartNotification"
        );


    if (!notification) {

        notification =
            document.createElement(
                "div"
            );

        notification.id =
            "cartNotification";

        notification.className =
            "cart-notification";

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
        window.cartNotificationTimer
    );


    window.cartNotificationTimer =
        setTimeout(() => {

            notification.classList.remove(
                "show"
            );

        }, 2500);

}


/* =========================================================
   22. XÓA TOÀN BỘ GIỎ HÀNG
   ========================================================= */

function clearCart() {

    if (cart.length === 0) {
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

    updateCartCount();

}


/* =========================================================
   23. ĐƯA SẢN PHẨM VÀO FORM ĐẶT HÀNG
   ========================================================= */

function prepareOrder() {

    if (cart.length === 0) {

        showCartNotification(
            "Giỏ hàng của bạn đang trống."
        );

        return;
    }


    closeCart();


    const orderSection =
        document.getElementById(
            "order"
        );


    if (orderSection) {

        orderSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }


    renderOrderSummary();

}


/* =========================================================
   24. HIỂN THỊ TÓM TẮT ĐƠN HÀNG
   ========================================================= */

function renderOrderSummary() {

    const orderSummary =
        document.getElementById(
            "orderSummary"
        );

    const orderTotal =
        document.getElementById(
            "orderTotal"
        );


    if (!orderSummary) return;


    if (cart.length === 0) {

        orderSummary.innerHTML = `

            <p class="order-empty">
                Chưa có sản phẩm nào trong đơn hàng.
            </p>

        `;


        if (orderTotal) {

            orderTotal.textContent =
                "0 VNĐ";

        }

        return;
    }


    orderSummary.innerHTML =

        cart.map(item => {

            const product =
                getProduct(item.id);

            if (!product) {
                return "";
            }


            const subtotal =
                product.price *
                item.quantity;


            return `

                <div class="order-summary-item">

                    <div>

                        <strong>
                            ${product.name}
                        </strong>

                        <span>
                            Số lượng: ${item.quantity}
                        </span>

                    </div>


                    <strong>
                        ${formatPrice(subtotal)}
                    </strong>

                </div>

            `;

        }).join("");


    if (orderTotal) {

        orderTotal.textContent =
            formatPrice(
                getCartTotal()
            );

    }

}


/* =========================================================
   25. ĐẶT HÀNG
   ========================================================= */

function submitOrder(event) {

    event.preventDefault();


    if (cart.length === 0) {

        showCartNotification(
            "Bạn chưa chọn sản phẩm."
        );

        return;
    }


    const form =
        event.target;


    const customerName =
        form.querySelector(
            '[name="customerName"]'
        )?.value.trim();


    const customerPhone =
        form.querySelector(
            '[name="customerPhone"]'
        )?.value.trim();


    const customerAddress =
        form.querySelector(
            '[name="customerAddress"]'
        )?.value.trim();


    if (
        !customerName ||
        !customerPhone ||
        !customerAddress
    ) {

        showCartNotification(
            "Vui lòng điền đầy đủ thông tin nhận hàng."
        );

        return;
    }


    const orderData = {

        customer: {

            name:
                customerName,

            phone:
                customerPhone,

            address:
                customerAddress

        },

        products:
            cart.map(item => {

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

            }),

        total:
            getCartTotal(),

        createdAt:
            new Date().toISOString()

    };


    console.log(
        "Đơn hàng:",
        orderData
    );


    const successMessage =
        document.getElementById(
            "orderSuccess"
        );


    if (successMessage) {

        successMessage.innerHTML = `

            <div class="success-icon">
                ✓
            </div>

            <h3>
                Đặt hàng thành công!
            </h3>

            <p>
                Cảm ơn ${customerName}
                đã lựa chọn sản phẩm.
            </p>

            <p>
                Tổng giá trị đơn hàng:
                <strong>
                    ${formatPrice(orderData.total)}
                </strong>
            </p>

            <p>
                Chúng tôi sẽ liên hệ qua số
                <strong>
                    ${customerPhone}
                </strong>
                để xác nhận đơn hàng.
            </p>

        `;

        successMessage.classList.add(
            "show"
        );

    }


    form.reset();


    cart = [];


    saveCart();

    renderCart();

    updateCartCount();

    renderOrderSummary();


    if (successMessage) {

        successMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}


/* =========================================================
   26. ĐÓNG MODAL KHI CLICK RA NGOÀI
   ========================================================= */

function setupModalEvents() {

    const modal =
        document.getElementById(
            "productModal"
        );


    if (!modal) return;


    modal.addEventListener(
        "click",
        function(event) {

            if (
                event.target === modal
            ) {

                closeProductDetail();

            }

        }
    );

}


/* =========================================================
   27. PHÍM ESC
   ========================================================= */

function setupKeyboardEvents() {

    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Escape"
            ) {

                closeProductDetail();

                closeCart();

            }

        }
    );

}


/* =========================================================
   28. NÚT LỌC
   ========================================================= */

function setupFilterButtons() {

    const buttons =
        document.querySelectorAll(
            ".filter-btn"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            function() {

                const category =
                    this.dataset.category;

                filterProducts(
                    category
                );

            }
        );

    });

}


/* =========================================================
   29. TÌM KIẾM
   ========================================================= */

function setupSearch() {

    const searchInput =
        document.getElementById(
            "productSearch"
        );


    if (!searchInput) return;


    searchInput.addEventListener(
        "input",
        function() {

            searchProducts(
                this.value
            );

        }
    );

}


/* =========================================================
   30. CÁC NÚT GIỎ HÀNG
   ========================================================= */

function setupCartButtons() {

    const cartButtons =
        document.querySelectorAll(
            "[data-open-cart]"
        );


    cartButtons.forEach(button => {

        button.addEventListener(
            "click",
            openCart
        );

    });


    const closeCartButton =
        document.querySelector(
            "[data-close-cart]"
        );


    if (closeCartButton) {

        closeCartButton.addEventListener(
            "click",
            closeCart
        );

    }


    const cartOverlay =
        document.getElementById(
            "cartOverlay"
        );


    if (cartOverlay) {

        cartOverlay.addEventListener(
            "click",
            closeCart
        );

    }


    const checkoutButton =
        document.getElementById(
            "checkoutButton"
        );


    if (checkoutButton) {

        checkoutButton.addEventListener(
            "click",
            prepareOrder
        );

    }


    const clearCartButton =
        document.getElementById(
            "clearCartButton"
        );


    if (clearCartButton) {

        clearCartButton.addEventListener(
            "click",
            clearCart
        );

    }

}


/* =========================================================
   31. FORM ĐẶT HÀNG
   ========================================================= */

function setupOrderForm() {

    const orderForm =
        document.getElementById(
            "orderForm"
        );


    if (!orderForm) return;


    orderForm.addEventListener(
        "submit",
        submitOrder
    );

}


/* =========================================================
   32. MENU MOBILE
   ========================================================= */

function setupMobileMenu() {

    const menuButton =
        document.getElementById(
            "menuButton"
        );

    const navigation =
        document.getElementById(
            "mainNavigation"
        );


    if (
        !menuButton ||
        !navigation
    ) {
        return;
    }


    menuButton.addEventListener(
        "click",
        function() {

            navigation.classList.toggle(
                "active"
            );

            menuButton.classList.toggle(
                "active"
            );

        }
    );


    const navLinks =
        navigation.querySelectorAll(
            "a"
        );


    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            function() {

                navigation.classList.remove(
                    "active"
                );

                menuButton.classList.remove(
                    "active"
                );

            }
        );

    });

}


/* =========================================================
   33. KHỞI TẠO WEBSITE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /* Hiển thị sản phẩm */
        renderProducts(
            products
        );


        /* Hiển thị giỏ hàng */
        renderCart();


        /* Cập nhật số lượng */
        updateCartCount();


        /* Hiển thị tóm tắt đơn */
        renderOrderSummary();


        /* Bộ lọc */
        setupFilterButtons();


        /* Tìm kiếm */
        setupSearch();


        /* Giỏ hàng */
        setupCartButtons();


        /* Form */
        setupOrderForm();


        /* Modal */
        setupModalEvents();


        /* Phím ESC */
        setupKeyboardEvents();


        /* Menu mobile */
        setupMobileMenu();

    }
);


/* =========================================================
   34. XUẤT DỮ LIỆU RA WINDOW
   ---------------------------------------------------------
   Cho phép HTML gọi trực tiếp:
   openProductDetail()
   addToCart()
   removeFromCart()
   changeQuantity()
   closeCart()
   openCart()
   ========================================================= */

window.products =
    products;

window.openProductDetail =
    openProductDetail;

window.closeProductDetail =
    closeProductDetail;

window.addToCart =
    addToCart;

window.removeFromCart =
    removeFromCart;

window.changeQuantity =
    changeQuantity;

window.openCart =
    openCart;

window.closeCart =
    closeCart;

window.clearCart =
    clearCart;

window.filterProducts =
    filterProducts;

window.searchProducts =
    searchProducts;

window.prepareOrder =
    prepareOrder;

window.formatPrice =
    formatPrice;
