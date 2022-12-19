$(document).ready(function () {
    showLogin()
})

$(document).on('click', '#logoutBtn', function (e) {
    e.preventDefault()

    logout()
})

$(document).on('click', '#showSalesVolumeBtn', function (e) {
    e.preventDefault()

    let startDateTime = $('#startTime').val()
    let endDateTime = $('#endTime').val()
    searchSalesVolume(startDateTime, endDateTime)
})

$(document).on('click', '#sendEmail', function (e) {
    e.preventDefault()

    let strEmailTitle = $('#emailTitle').val()
    let strEmailMessage = $('#emailMessage').val()

    sendEmail(strEmailTitle, strEmailMessage)
})

$(document).on('click', '#createPointsExchangeBtn', function (e) {
    e.preventDefault()

    let pointName = $('#pointName').val()
    let pointCost = $('#pointCost').val()
    let intDiscount = $('#pointDiscount').val()
    createPointsExchange(pointName, pointCost, intDiscount)
})

$(document).on('click', '#createCommodityBtn', function (e) {
    e.preventDefault()

    let intPrice = $('#commodityPrice').val()
    let strCommodityName = $('#commodityName').val()
    let strCategory = $('#commodityCategory').val()

    createCommodity(intPrice, strCommodityName, strCategory)
})

$(document).on('click', 'button[id*=updatePoints]', function (e) {
    e.preventDefault()
    let pointName = $(this).prop('id').split('_')[1]
    $('#updatePointsExchange').empty()
    $('#updatePointsExchange').append(`<p>輸入優惠名稱<input id="${pointName}_pointName" value=${pointName} type="text"></p>`)
    $('#updatePointsExchange').append(`<p>輸入消費點數<input id="${pointName}_pointCost" type="number" ></p>`)
    $('#updatePointsExchange').append(`<p>輸入折扣<input id="${pointName}_pointDiscount" type="number" value=0 oninput="if(value>=100)value=0"></p>`)
    $('#updatePointsExchange').append(`<button id="${pointName}_updateConfirm">確認</button>`)

    // console.log(pointName)

})

$(document).on('click', 'button[id*=updateConfirm]', function (e) {
    e.preventDefault()
    let pointName = $(this).prop('id').split('_')[0]
    let newPointName = $('#' + pointName + '_pointName').val()
    let pointCost = $('#' + pointName + '_pointCost').val()
    let intDiscount = $('#' + pointName + '_pointDiscount').val()
    // console.log(newPointName)
    updatePointsExchange(pointName, pointCost, intDiscount, newPointName)
})

$(document).on('click', 'button[id*=deletePoints]', function (e) {
    e.preventDefault()
    let pointName = $(this).prop('id').split('_')[1]

    deletePointsExchange(pointName)
})

$(document).on('click', 'button[id*=cancelOrder]', function (e) {
    e.preventDefault()
    let intOrderId = $(this).prop('id').split('_')[1]

    cancelOrder(intOrderId)
})

$(document).on('click', 'button[id*=checkOrder]', function (e) {
    e.preventDefault()
    let intOrderId = $(this).prop('id').split('_')[1]

    checkOrder(intOrderId)
})
