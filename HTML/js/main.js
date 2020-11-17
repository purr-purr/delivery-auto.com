// Import HTML template
$(function(){
    $("#included__main-navigation").load("template/main-navigation.html");
    $("#included__footer").load("template/footer.html");
    $("#included__sub-footer").load("template/sub-footer.html");
    // any blocks
    $("#included__feedback-block").load("template/feedback-block.html");
    $("#included__kpi-block").load("template/kpi-block.html");
    // aside block
    $("#included__aside-search").load("template/aside-search.html");
    $("#included__aside-news").load("template/aside-news.html");
    $("#included__aside-action").load("template/aside-action.html");
    // Notification
    $("#included__notification").load("template/notification.html");
    // Mobile App
    $("#included__mob-app").load("template/mob-app.html");
});
// ---------------------------------------------------------------------------







// ---------------------------------------------------------------------------
// Только для cl-program-layalty.html
// Добавление и удаление расширеного списка баллов
$('.more-point__btn').on('click', function(event){
    $(this).toggleClass('more-point__btn--hover');
    $('.bonus-table--hide-block ').toggleClass('bonus-table--show-block');
});
// ---------------------------------------------------------------------------