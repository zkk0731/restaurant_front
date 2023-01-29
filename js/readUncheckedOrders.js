let pointEx = JSON.parse(sessionStorage.getItem('pointEx'))
$(document).ready(function () {
    searchPointsExchange()

    console.log(pointEx);
    searchUncheckedOrder(null, pointEx)
})

$(document).on('click', '#showUncheckedOrdersBtn', function (e) {
    e.preventDefault()

    searchUncheckedOrder('unchecked', pointEx)
})

$(document).on('click', '#showCheckedOrdersBtn', function (e) {
    e.preventDefault()

    searchUncheckedOrder('checked', pointEx)
})

$(document).on('click', '#showAllOrdersBtn', function (e) {
    e.preventDefault()

    searchUncheckedOrder(null, pointEx)
})