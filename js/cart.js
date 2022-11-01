const products = JSON.parse(localStorage.getItem('products'))
let totalPrice = document.querySelector('.total-price span')
const chooseBtn = document.querySelector('.choose-btn')
let deleteBtn

function render() {
    if (products) {
        const htmls = products.reduce((preVal, curVal) => {
            return preVal + `
                <li class="cart-product-item">
                    <div class="cart-product-img">
                        <img src=${curVal.img} alt="">
                    </div>
                    <div class="cart-product-desc">
                        <p class="cart-product-name">
                            ${curVal.name}
                            <span>&times;</span>
                        </p>
                        <div class="cart-product-price">
                            <p value=${curVal.newPrice}>${parseInt(curVal.newPrice).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                            <p value=${curVal.oldPrice}>${parseInt(curVal.oldPrice).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                        </div>
                        <div class="cart-product-quantity">
                            <span>Chọn số lượng:</span>
                            <div class="quantity-input">
                                <span>-</span>
                                <input disabled type="text" value=${curVal.quantity}>
                                <span>+</span>
                            </div>
                        </div>
                        <div class="cart-promotion">
                            <p>- Chương trình khuyến mại:</p>
                            <ul>
                                <li>Thu cũ đổi mới - Trợ giá đến 300.000đ</li>
                            </ul>
                        </div>
                    </div>
                </li>
            `
        }, '')
        if (htmls) document.querySelector('.cart-product-list').innerHTML = htmls
        deleteBtn = document.querySelectorAll('.cart-product-name span')
        calTotalPrice()
    }
}

function calTotalPrice() {
    let price = 0;
    const listPrice = document.querySelectorAll('.cart-product-price p:first-child')
    const quantity = document.querySelectorAll('.quantity-input input')
    listPrice.forEach((item, index) => {
        price += parseInt(item.getAttribute('value')) * parseInt(quantity[index].value)
    })
    totalPrice.innerText = price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}

if (isLogin) render()
else {
    alert('Đăng nhập để dùng chức năng này')
    window.location = './index.html'
}

deleteBtn.forEach(btn => {
    btn.onclick = () => {
        let index = products.findIndex((product) => btn.previousSibling.data.trim() == product.name)

        products.splice(index, 1)

        localStorage.setItem('products', JSON.stringify(products))

        location.reload()
    }
})

function handleClickQuantity() {
    const btns = document.querySelectorAll('.quantity-input span')
    btns.forEach((btn, index) => {
        btn.onclick = () => {
            if (index % 2 == 1) {
                const quantity = btn.previousElementSibling
                quantity.value = parseInt(quantity.value) + 1
                calTotalPrice()
                products.forEach(product => {
                    if (product.name == btn.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].data.trim()) {
                        product.quantity = quantity.value
                    }
                })
            }
            else {
                const quantity = btn.nextElementSibling
                if (quantity.value != 1) {
                    quantity.value = parseInt(quantity.value) - 1
                    calTotalPrice()
                    products.forEach(product => {
                        if (product.name == btn.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].data.trim()) {
                            product.quantity = quantity.value
                        }
                    })
                }
            }

            localStorage.setItem('products', JSON.stringify(products))
        }
    })
}

handleClickQuantity()

chooseBtn.onclick = () => {
    window.location = ('./index.html')
}
