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
});

