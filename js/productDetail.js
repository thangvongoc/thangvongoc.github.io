const products = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) : []

const addBtn = document.querySelector('.add-to-cart-btn')

addBtn.onclick = () => {
    if (!isLogin) {
        alert('Đăng nhập để dùng chức năng')
        return
    }
    const img = document.querySelector('.product-img img')
    const name = document.querySelector('.title')
    const oldPrice = document.querySelector('.product-old-price')
    const newPrice = document.querySelector('.product-new-price')
    
    const isExist = products.some(obj => {
        return obj.name === name.innerText
    })

    if (!isExist) {
        products.push({
            img: img.src,
            name: name.innerText,
            oldPrice: oldPrice.getAttribute('value'),
            newPrice: newPrice.getAttribute('value'),
            quantity: 1
        })
        localStorage.setItem('products', JSON.stringify(products))
        console.log(document.querySelector('.header-item span'));
        document.querySelector('.header-item span').textContent = products.length
    }
    else alert('Đã có trong giỏ hàng')
}