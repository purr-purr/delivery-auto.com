// Import HTML template
$(function(){
    $("#included__main-navigation").load("template/main-navigation.html");
    $("#included__footer").load("template/footer.html");
    $("#included__sub-footer").load("template/sub-footer.html");
    // any blocks
    $("#included__feedback-block").load("template/feedback-block.html");
    $("#included__kpi-block").load("template/kpi-block.html");
    $("#included__news-block").load("template/news-block.html");
    // aside block
    $("#included__aside-search").load("template/aside-search.html");
    $("#included__aside-news").load("template/aside-news.html");
    $("#included__aside-action").load("template/aside-action.html");
    $("#included__aside-btn").load("template/aside-btn.html");
    $("#included__aside-links").load("template/aside-links.html");
    // Pop-up
    $("#included__pop-up").load("template/pop-up.html");
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



// ---------------------------------------------------------------------------
// Только для cl-express-delivery.html

// Добавление и удаление Дополнительной посылки
$('.del-order__parcel-btn').on('click', function(event){
    $('.add-parcel').toggleClass('add-parcel--show-block');
});

$('.add-parcel__delete').on('click', function(event){
    $('.add-parcel').removeClass('add-parcel--show-block');
});

// Появление инпута 3-тя особа
$('#person-3dr').on('change', function() {
    $('.person-3dr__input').toggleClass('person-3dr__hidden', this.value != 'string:100000002');
});

// Появление инпута "Оберіть платника страховки"
$('#declared-cost').on('change', function() {
    $('.insurance-block').toggleClass('insurance-block__hidden', this.value);
});

// Появление инпута "Оберіть платника страховки" для 3-тя особа
$('#declared-cost__3dr').on('change', function() {
    $('.insurance-payer-3dr__input').toggleClass('insurance-payer-3dr__hidden', this.value != 'string:100000002');
});
// ---------------------------------------------------------------------------



// ---------------------------------------------------------------------------
// Только для cl-сourier-form.html

// Добавление и удаление блока при выборе Тип вантажу: "Палети"
$('#type-cargo').bind("change keyup",function() {
    $(this).find(":selected").each(function () {
        $('.only-for-pallets').toggleClass('show-block2');
        $('.only-for-cargo').toggleClass('hide-block2');
    });
});

// Открытие блока добавление Склада
$('.add-warehouse__btn').on('click', function(event){
    $('.add-parcel').toggleClass('add-parcel--show-block');
});

// Кнопка удаления блока Склада
$('.add-parcel__delete').on('click', function(event){
    $('.add-parcel').removeClass('add-parcel--show-block');
});

// Чекбокс Доупакувати вантаж, появление textarea при выборе
$('.add-pack').on('click', function(event){
    $('.add-pack__text-area').toggleClass('show-block');
});

// Забирання вантажу на кожен день, при выборе - появление всех дней нидели
$('.day-vote').on('click', function(event){
    $('.everyday_block').toggleClass('show-it');
});
// ---------------------------------------------------------------------------


// ---------------------------------------------------------------------------
// Только для co-faq.html

// Появление инпута ответов на вопросы при выборе Темы
$('.faq__search').on('change', function() {
    $('.topic-001').toggleClass('faq__answer--hide', this.value != 's1');
    $('.topic-002').toggleClass('faq__answer--hide', this.value != 's2');
    $('.topic-003').toggleClass('faq__answer--hide', this.value != 's3');
    $('.topic-004').toggleClass('faq__answer--hide', this.value != 's4');
    $('.topic-005').toggleClass('faq__answer--hide', this.value != 's5');
    $('.topic-006').toggleClass('faq__answer--hide', this.value != 's6');
    $('.topic-007').toggleClass('faq__answer--hide', this.value != 's7');
    $('.topic-008').toggleClass('faq__answer--hide', this.value != 's8');
});

// ---------------------------------------------------------------------------


// ---------------------------------------------------------------------------
// Только для cl-express-delivery.html

$('#time09').hover(
    function(){ $('.schedule').addClass('schedule__time09') },
    function(){ $('.schedule').removeClass('schedule__time09') }
);
$('#time12').hover(
    function(){ $('.schedule').addClass('schedule__time12') },
    function(){ $('.schedule').removeClass('schedule__time12') }
);
$('#time15').hover(
    function(){ $('.schedule').addClass('schedule__time15') },
    function(){ $('.schedule').removeClass('schedule__time15') }
);
$('#time18').hover(
    function(){ $('.schedule').addClass('schedule__time18') },
    function(){ $('.schedule').removeClass('schedule__time18') }
);
// ---------------------------------------------------------------------------



// ---------------------------------------------------------------------------
// Автоматическое открытие <Details> при переходе по якорю,
// сейчас используется на нескольких страница, и в будущем думаю понадобится

function MakeArrayOfAllPrefixes(str){
    var prefixes = [];
    for (var i=1; i<=str.length; i++){
        prefixes.push(str.substr(0,i));
            }
            console.log("MakeArrayOfAllPrefixes("+str+") -> returns [" + prefixes + "]");
            return prefixes;
        }
    
    function SetOpenAttrForIdsAndPrefixes(ids, openAttrBool){
        $('details').attr('open',false); // close all others first
        console.log("SetOpenAttrForIds([" +ids+"], "+openAttrBool+")");
        for (idindex in ids) {
            var id = ids[idindex];
                if (id != ""){
                    var prefixes = MakeArrayOfAllPrefixes(id);
                    for (prefixidx in prefixes) {
                    var prefix = prefixes[prefixidx];
                    if(openAttrBool==true) { operationstr="Opening"; } else { operationstr="Closing"};
                    console.log(operationstr+" <details id='#"+prefix+"'> with $('#"+prefix+").attr('open',"+openAttrBool+");");
                    $('#'+prefix).attr('open',openAttrBool);
                    }
                }
        }
    }
    
    function SetOpenAttrForIdsAndPrefixesFromLocationHash(){
        var hashes = $(location).attr('hash').split('#'); 
        SetOpenAttrForIdsAndPrefixes(hashes, true); 
    }
    
    $(document).ready(function(){
        SetOpenAttrForIdsAndPrefixesFromLocationHash();
        if ("onhashchange" in window) {
            window.onhashchange = function () {
            SetOpenAttrForIdsAndPrefixesFromLocationHash();
            }
        }
});
// ---------------------------------------------------------------------------



// Анимация для select, перенос label вверх
$(document).ready(function(){
    // Страница Контрагентам
    $("#Services").change(function(){
        var valOpt=$(this).find('option:selected').val();
            if(valOpt)$(this).next("#Services--label").addClass("show-label");
    })
    $("#Tax").change(function(){
        var valOpt=$(this).find('option:selected').val();
            if(valOpt)$(this).next("#Tax--label").addClass("show-label");
    })
    // Страница Франчайзинг
    $("#Area").change(function(){
        var valOpt=$(this).find('option:selected').val();
            if(valOpt)$(this).next("#Area--label").addClass("show-label");
    })
    $("#City").change(function(){
        var valOpt=$(this).find('option:selected').val();
            if(valOpt)$(this).next("#City--label").addClass("show-label");
    })
    $("#City-area").change(function(){
        var valOpt=$(this).find('option:selected').val();
            if(valOpt)$(this).next("#City-area--label").addClass("show-label");
    })
    // Страница Тендер
    $("#IndustryCode").change(function(){
        var valOpt=$(this).find('option:selected').val();
            if(valOpt)$(this).next("#IndustryCode--label").addClass("show-label");
    })
    // Страница Робота і кар’єра
    $("#Gender").change(function(){
        var valOpt=$(this).find('option:selected').val();
            if(valOpt)$(this).next("#Gender--label").addClass("show-label");
    })
    $("#Marital-status").change(function(){
        var valOpt=$(this).find('option:selected').val();
            if(valOpt)$(this).next("#Marital-status--label").addClass("show-label");
    })
    // Страница FAQ
    $("#Question1").change(function(){
        var valOpt=$(this).find('option:selected').val();
            if(valOpt)$(this).next("#Question1--label").addClass("show-label");
    })
    // Страница Послуги
    $("#Service").change(function(){
        var valOpt=$(this).find('option:selected').val();
            if(valOpt)$(this).next("#Service--label").addClass("show-label");
    })
    // Страница Експресс доставка
    $("#SendCity").change(function(){
        var valOpt=$(this).find('option:selected').val();
            if(valOpt)$(this).next("#SendCity--label").addClass("show-label");
    })
    $("#TypeDeliv").change(function(){
        var valOpt=$(this).find('option:selected').val();
            if(valOpt)$(this).next("#TypeDeliv--label").addClass("show-label");
    })
    $("#declared-cost__3dr").change(function(){
        var valOpt=$(this).find('option:selected').val();
            if(valOpt)$(this).next("#declared-cost__3dr--label").addClass("show-label");
    })
    $("#person-3dr").change(function(){
        var valOpt=$(this).find('option:selected').val();
            if(valOpt)$(this).next("#person-3dr--label").addClass("show-label");
    })
    // Страница Забор/Доставка
    $("#itemPallet").change(function(){
        var valOpt=$(this).find('option:selected').val();
            if(valOpt)$(this).next("#itemPallet--label").addClass("show-label");
    })
    $("#singleSelectId").change(function(){
        var valOpt=$(this).find('option:selected').val();
            if(valOpt)$(this).next("#singleSelectId--label").addClass("show-label");
    })
    $("#WarehouseSelectValue").change(function(){
        var valOpt=$(this).find('option:selected').val();
            if(valOpt)$(this).next("#WarehouseSelectValue--label").addClass("show-label");
    })
});


// Плавная прокрутка к якорю
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


// Скрытие кнопки Scrollup
$(window).scroll(function(){
    if ($(this).scrollTop() > 600) {
        $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
});


// Страница Финансовые услуги. На адаптиве скрывает инфу в табы
jQuery(document).ready(function ($) {
    var windowSize = $(window).width();
        if (windowSize > 1024) {
            $(".finance__block").attr("open", "open");
            $(".finance-step__slider").slick("refresh"); 
        }
});

// Страница Про групу Delivery. Для адаптива, появление контента при клике
$('.group-item__show-btn--delauto').on('click', function(event){
    $('.group-item__hide-block--delauto').toggleClass('group-item__show-block');
    $('.group-item__show-btn--delauto').toggleClass('group-item__hide-block');
});

$('.group-item__show-btn--deltruck').on('click', function(event){
    $('.group-item__hide-block--deltruck').toggleClass('group-item__show-block');
    $('.group-item__show-btn--deltruck').toggleClass('group-item__hide-block');
});

$('.group-item__show-btn--inter').on('click', function(event){
    $('.group-item__hide-block--inter').toggleClass('group-item__show-block');
    $('.group-item__show-btn--inter').toggleClass('group-item__hide-block');
});

$('.group-item__show-btn--kvorum').on('click', function(event){
    $('.group-item__hide-block--kvorum').toggleClass('group-item__show-block');
    $('.group-item__show-btn--kvorum').toggleClass('group-item__hide-block');
});

// Страница Мобільній додаток. Для адаптива, появление контента при клике
$('.mob-app__click-desc').on('click', function(event){
    $('.mob-app__show-desc').toggleClass('mob-app__active');
    $('.mob-app__click-desc').toggleClass('mob-app__hide');
});