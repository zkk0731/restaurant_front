$(document).ready(function () {

    searchUncheckedOrder()
})

$(document).on('click', '#showUncheckedOrdersBtn', function (e) {
    e.preventDefault()

    searchUncheckedOrder('unchecked')
})

$(document).on('click', '#showCheckedOrdersBtn', function (e) {
    e.preventDefault()

    searchUncheckedOrder('checked')
})

$(document).on('click', '#showAllOrdersBtn', function (e) {
    e.preventDefault()

    searchUncheckedOrder()
})