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
