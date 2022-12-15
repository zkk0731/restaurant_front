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

