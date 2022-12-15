$(document).on('click', '#loginBtn', function (e) {
    e.preventDefault()

    let strAccount = $('#account').val()
    let strPwd = $('#pwd').val()

    if (strAccount == '' || strPwd == '') {
        alert('請輸入帳號密碼')
        return
    }

    login(strAccount, strPwd)
})