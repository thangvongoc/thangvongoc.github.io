const userName = document.querySelector('.sign-up .form-group #username1')
const pwd = document.querySelector('.sign-up .form-group #pwd1')
const pwdCheck = document.querySelector('.sign-up .form-group #pwdCheck1')



const btn = document.querySelector('.sign-up-btn')

const accountsList = JSON.parse(localStorage.getItem('accounts')) ? JSON.parse(localStorage.getItem('accounts')) : []


function checkPwd() {
    if (pwd.value != pwdCheck.value) {
        document.querySelector('.errPwd').innerText = 'Mật khẩu không đúng.'
    }
    else {
        document.querySelector('.errPwd').innerText = ''
    }
}

function signUp() {
    let isExist = 0;
    if (pwd.value == pwdCheck.value) {
        console.log(accountsList);
        accountsList.forEach(acc => {
            if (acc.userName == userName.value) isExist = 1
            return
        })
        if (isExist == 0) {
            accountsList.push({
                userName: userName.value,
                pwd: pwd.value
            })
            localStorage.setItem('accounts', JSON.stringify(accountsList))
            alert("Đã đăng ký")
        }
        else alert('Email đã tồn tại')
    }
    else alert('Vui lòng nhập đúng thông tin')
}

function login() {

}

pwdCheck1.oninput = checkPwd
btn.onclick = signUp
