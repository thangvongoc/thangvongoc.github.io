const loginUserName = document.querySelector('#username')
const loginPwd = document.querySelector('#pwd')
const btnLogin = document.querySelector('.login-btn')

const accounts = JSON.parse(localStorage.getItem('accounts')) ? JSON.parse(localStorage.getItem('accounts')) : []

function handleLogin() {
    let isLoginOk = 0
    accounts.map(acc => {
        if (acc.userName = loginUserName.value && acc.pwd == loginPwd.value) {
            isLoginOk = 1
            localStorage.setItem('isLogin', 'true')

            location.reload()
        }
    })
    if (!isLoginOk) alert('Thông tin không đúng')
}

btnLogin.onclick = handleLogin
