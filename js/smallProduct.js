const accessories = [
    {
        path: '../assets/img/accessory/a1.png',
        title: 'Nổi bật'
    },
    {
        path: '../assets/img/accessory/a2.png',
        title: 'Phụ kiện Apple'
    },
    {
        path: '../assets/img/accessory/a3.png',
        title: 'Dán màn hình'
    },
    {
        path: '../assets/img/accessory/a4.png',
        title: 'Ốp lưng - Bao da'
    },
    {
        path: '../assets/img/accessory/a5.png',
        title: 'Cáp, sạc'
    },
    {
        path: '../assets/img/accessory/a6.png',
        title: 'Pin dự phòng'
    },
    {
        path: '../assets/img/accessory/a7.png',
        title: 'Thiết bị mạng'
    },
    {
        path: '../assets/img/accessory/a8.png',
        title: 'Gaming Gear'
    },
    {
        path: '../assets/img/accessory/a9.png',
        title: 'Gimbal | Tay cầm chống rung'
    },
    {
        path: '../assets/img/accessory/a10.png',
        title: 'Thẻ nhớ, USB'
    },
    {
        path: '../assets/img/accessory/a11.png',
        title: 'Chuột, bàn phím'
    },
    {
        path: '../assets/img/accessory/a12.png',
        title: 'Sim 4G số đẹp'
    },
    {
        path: '../assets/img/accessory/a13.png',
        title: 'Camera hành trình'
    },
    {
        path: '../assets/img/accessory/a14.png',
        title: 'Camera an ninh'
    },
    {
        path: '../assets/img/accessory/a15.png',
        title: 'Phụ kiện Laptop'
    },
    {
        path: '../assets/img/accessory/a16.png',
        title: 'Quạt mini'
    },
    {
        path: '../assets/img/accessory/a17.png',
        title: 'Balo, túi chống sốc'
    },
    {
        path: '../assets/img/accessory/a18.png',
        title: 'Dây đeo đồng hồ'
    },
    {
        path: '../assets/img/accessory/a19.png',
        title: 'Ổ cứng di động'
    },
    {
        path: '../assets/img/accessory/a20.png',
        title: 'Apple Care'
    },
]

const desktopComponents = [
    {
        path: '../assets/img/components/c1.png',
        title: 'PC ráp sẵn CellphoneS',
        background: 'rgb(252, 165, 165)'
    },
    {
        path: '../assets/img/components/c2.png',
        title: 'CPU',
        background: 'rgb(253, 164, 175)'
    },
    {
        path: '../assets/img/components/c3.png',
        title: 'Mainboard',
        background: 'rgb(249, 168, 212)'
    },
    {
        path: '../assets/img/components/c4.png',
        title: 'RAM',
        background: 'rgb(196, 181, 253)'
    },
    {
        path: '../assets/img/components/c5.png',
        title: 'Ổ cứng',
        background: 'rgb(165, 180, 252)'
    },
    {
        path: '../assets/img/components/c6.png',
        title: 'Card màn hình',
        background: 'rgb(147, 197, 253)'
    },
    {
        path: '../assets/img/components/c7.png',
        title: 'Nguồn máy tính',
        background: 'rgb(110, 231, 183)'
    },
    {
        path: '../assets/img/components/c8.png',
        title: 'Tản nhiệt',
        background: 'rgb(252, 211, 75)'
    },
    {
        path: '../assets/img/components/c9.png',
        title: 'Case máy tính',
        background: 'rgb(253, 186, 116)'
    },
]

const oldProducts = [
    {
        path: '../assets/img/old-product/o1.png',
        title: 'Điện thoại cũ',
        background: 'rgb(251, 60, 89)'
    },
    {
        path: '../assets/img/old-product/o2.png',
        title: 'Máy tính bảng cũ',
        background: 'rgb(248, 53, 137)'
    },
    {
        path: '../assets/img/old-product/o3.png',
        title: 'Mac cũ',
        background: 'rgb(210, 200, 86)'
    },
    {
        path: '../assets/img/old-product/o4.png',
        title: 'Laptop cũ',
        background: 'rgb(180, 225, 91)'
    },
    {
        path: '../assets/img/old-product/o5.png',
        title: 'Loa, tai nghe cũ',
        background: 'rgb(86, 225, 153)'
    },
    {
        path: '../assets/img/old-product/o6.png',
        title: 'Đồng hồ thông minh cũ',
        background: 'rgb(47, 111, 97)'
    },
    {
        path: '../assets/img/old-product/o7.png',
        title: 'Nhà thông minh cũ',
        background: 'rgb(115, 179, 221)'
    },
    {
        path: '../assets/img/old-product/o8.png',
        title: 'Phụ kiện cũ',
        background: 'rgb(84, 105, 176)'
    },
    {
        path: '../assets/img/old-product/o9.png',
        title: 'Màn hình cũ',
        background: 'rgb(94, 73, 188)'
    },
]

const accessory = document.querySelector('.accessory')
const desktopComponentEle = document.querySelector('.desktop-component')
const oldProdutEle = document.querySelector('.old-product')

const renderSmall = (products, root) => {
    let htmls = products.reduce((preVal, curVal) => {
        return preVal + `
            <div class="small-product-item">
                <a href="#" style="background-image: url(${curVal.path}); background-color: ${curVal.background ? curVal.background : 'rgb(242, 131, 118)'}" class="small-product-link">
                    <span>${curVal.title}</span>
                </a>
            </div>
        `
    }, '')
    root.innerHTML = htmls
}

renderSmall(accessories, accessory)
renderSmall(desktopComponents, desktopComponentEle)
renderSmall(oldProducts, oldProdutEle)