

function login(strAccount, strPwd) {

    let objPostData = { memberAccount: strAccount, memberPwd: strPwd }

    $.ajax({
        url: 'http://localhost:8080/login',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (res) {

            let { message } = res

            if (message === '已有帳號登入，要登入其他帳號請先登出') {
                alert('已有帳號登入，要登入其他帳號請先登出')
            } else if (message === '所需資料缺失') {
                alert('所需資料缺失')
            } else if (message === '帳號或密碼錯誤') {
                alert('帳號或密碼錯誤')
            }

            else if (message === '登入店家成功') {
                alert('登入店家成功')
                window.location.href = 'sellerManageSystem.html'
            }
        }, xhrFields: {
            withCredentials: true
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }

    })
}
function showLogin() {

    $.ajax({
        url: 'http://localhost:8080/check_seller_login',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(),
        success: function (res) {

            let { message } = res

            if (message === '尚未登入') {
                alert('尚未登入')
                window.location.href = 'login.html'
            } else {
                $('#showLogin').empty()
                $('#showLogin').append(`<p>${message}</p>`)
            }
        }, xhrFields: {
            withCredentials: true
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }

    })


}

function searchSalesVolume(startDateTime, endDateTime) {

    let objPostData = { start_date_time: startDateTime, end_date_time: endDateTime }

    $.ajax({
        url: 'http://localhost:8080/search_sales_volume',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (res) {

            let { message, orderInfoMap, totalPrice } = res

            if (message === '所需資料缺失') {
                alert('所需資料缺失')
            } else if (message === '資料格式錯誤') {
                alert('資料格式錯誤')
            } else if (message === 'Success') {
                $('#showSalesVolumeTotalPrice').empty()
                $('#showSalesVolumeTable').empty()
                $('#showSalesVolumeTable').append(`<tr><th>品項</th><th>數量</th></tr>`)
                // map的foreach
                $.each(orderInfoMap, function (key, value) {
                    $('#showSalesVolumeTable').append(`<tr><td>${key}</td><td>${value}</td></tr>`)
                })

                $('#showSalesVolumeTotalPrice').append(`<p>總收入: ${totalPrice}</p>`)
            }
        }, xhrFields: {
            withCredentials: true
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }

    })
}

function logout() {

    $.ajax({
        url: 'http://localhost:8080/logout',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(),
        success: function (res) {

            let { message } = res

            if (message === 'Success') {
                alert('登出成功')
                window.location.href = 'login.html'
            }
        }, xhrFields: {
            withCredentials: true
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }

    })


}

function createPointsExchange(pointName, pointCost, intDiscount) {

    let objPostData = { point_name: pointName, points_cost: pointCost, discount: intDiscount }

    $.ajax({
        url: 'http://localhost:8080/createPointsExchange',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (res) {

            let { message } = res

            if (message === '所需資料缺失') {
                alert('所需資料缺失')
            } else if (message === '折扣輸入錯誤') {
                alert('折扣輸入錯誤')
            } else if (message === '名稱已存在') {
                alert('名稱已存在')
            } else if (message === 'Success') {
                $('#showSalesVolumeTotalPrice').empty()
                $('#showSalesVolumeTable').empty()
                $('#showSalesVolumeTable').append(`<tr><th>品項</th><th>數量</th></tr>`)
                // map的foreach
                $.each(orderInfoMap, function (key, value) {
                    $('#showSalesVolumeTable').append(`<tr><td>${key}</td><td>${value}</td></tr>`)
                })

                $('#showSalesVolumeTotalPrice').append(`<p>總收入: ${totalPrice}</p>`)
            }
        }, xhrFields: {
            withCredentials: true
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }

    })
}

function readPointsExchange() {

    $.ajax({
        url: 'http://localhost:8080/readPointsExchange',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(),
        success: function (res) {
            let list = res

            $('#readPointsExchangeTable').empty()
            $('#readPointsExchangeTable').append(`<tr><th>名稱</th><th>消費點數</th></tr>`)

            for (let points of list) {
                $('#readPointsExchangeTable').append(`<tr><td>${points.pointName}</td><td>${points.pointsCost}</td><td><button id="updatePoints_${points.pointName}">修改</button></td> <td><button id="deletePoints_${points.pointName}">刪除</button></td></tr>`)
            }

        }, xhrFields: {
            withCredentials: true
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }

    })


}

function sendEmail(strEmailTitle, strEmailMessage) {

    let objPostData = { emailTitle: strEmailTitle, emailMessage: strEmailMessage }

    $.ajax({
        url: 'http://localhost:8080/send_email',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (res) {

            let { message } = res

            if (message === '所需資料缺失') {
                alert('所需資料缺失')
            } else if (message === '無會員資訊') {
                alert('無會員資訊')
            } else if (message === '無email資訊') {
                alert('無email資訊')
            }
            else if (message === 'Success') {
                alert('成功發送')
            }
        }, xhrFields: {
            withCredentials: true
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }

    })
}

function createCommodity(intPrice, strCommodityName, strCategory) {

    let objPostData = { price: intPrice, commodityName: strCommodityName, category: strCategory }

    $.ajax({
        url: 'http://localhost:8080/create_commodity',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (res) {

            let { message } = res

            if (message === '資料格式錯誤') {
                alert('資料格式錯誤 1. 價格不得小於零 2. 品項名稱不得為空 3. 品項分類不得為空')
            } else if (message === '餐點已存在') {
                alert('餐點已存在')
            }
            else if (message === 'Success') {
                alert('新增成功')
            }
        }, xhrFields: {
            withCredentials: true
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }

    })
}

function updatePointsExchange(pointName, pointCost, intDiscount, newPointName) {

    let objPostData = { point_name: pointName, points_cost: pointCost, discount: intDiscount, new_point_name: newPointName }

    $.ajax({
        url: 'http://localhost:8080/update_points_exchange',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (res) {

            let { message } = res

            if (message === '資料格式錯誤') {
                alert('資料格式錯誤')
            }
            else if (message === 'Success') {
                alert('更新成功')
            }
        }, xhrFields: {
            withCredentials: true
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        }

    })
}