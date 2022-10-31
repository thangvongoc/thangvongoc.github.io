const isLogin = JSON.parse(localStorage.getItem('isLogin'))
const headerLogin = document.querySelector('.header-login')
const length = JSON.parse(localStorage.getItem('products')).length

if (isLogin) {
    document.querySelector('.header-login p').innerText = 'Đăng xuất'
    headerLogin.onclick = () => {
        localStorage.setItem('isLogin', false)
        document.querySelector('.modal').style.display = 'none'
        location.reload()
    }
    document.querySelector('.header-item span').innerText = length
}


