// pop up мероприятия на странице "Центр обслуговування клієнтів"
$('#popup-event--1').popup({
    pagecontainer: 'body',
    closebutton: true,
    escape: false
});


$('#popup-event--2').popup({
    pagecontainer: 'body',
    closebutton: true,
    escape: false
});

// pop up Подписки на новости
$('#popup-news').popup({
    pagecontainer: 'body',
    closebutton: true,
    escape: false
});


// notification (approve or error)

// Заявка
// approve
function throw_message_order_approve(str) {
    $("#order_approve").fadeIn(500).delay(6000).fadeOut(500);
}

// onclick='throw_message_order_approve(" "); return false;'

// error
function throw_message_order_error(str) {
    $("#order_error").fadeIn(500).delay(6000).fadeOut(500);
}

// onclick='throw_message_order_error(" "); return false;'




// Для подписки на новости
// approve
function throw_message_subscribe_approve(str) {
    $("#subscribe_approve").fadeIn(500).delay(6000).fadeOut(500);
}

// html
// onclick='throw_message_subscribe_approve(" "); return false;'

// error
function throw_message_subscribe_error(str) {
    $("#subscribe_error").fadeIn(500).delay(6000).fadeOut(500);
}

// html
// onclick='throw_message_subscribe_error(" "); return false;'
