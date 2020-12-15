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

// pop up тарифная сітка по Україні, на страницах с тарифами
$('#popup-tariff-map').popup({
    pagecontainer: 'body',
    closebutton: true,
    escape: false
});

// pop up Карта Cистема знижок
$('#popup-discount').popup({
    pagecontainer: 'body',
    closebutton: true,
    escape: false
});


// pop up Графік роботи call-центру
$('#popup-call-center').popup({
    pagecontainer: 'body',
    closebutton: true,
    escape: false
});

// pop up Додати квитанцію в форме Забор/Доставка
$('#popup-courier-info').popup({
    pagecontainer: 'body',
    closebutton: true,
    escape: false
});


// ----------------------------------------------------------------
// notification (approve or error)

// Заявка
// approve
function throw_message_order_approve(str) {
    $("#order_approve").fadeIn(500).delay(6000).fadeOut(500);
}
// html
// onclick='throw_message_order_approve(" "); return false;'


// error
function throw_message_order_error(str) {
    $("#order_error").fadeIn(500).delay(6000).fadeOut(500);
}

// html
// onclick='throw_message_order_error(" "); return false;'


// ----------------------------------------------------------------

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
