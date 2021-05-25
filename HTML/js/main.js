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

// Страница Партнери. Для адаптива, появление контента при клике
$('.partners__click-desc').on('click', function(event){
    $('.partners__show-desc').toggleClass('partners__active');
    $('.partners__click-desc').toggleClass('partners__hide');
});

// Страница Центр обслуговування клієнтів. Для адаптива, появление контента при клике
$('.service-center__click-desc').on('click', function(event){
    $('.service-center__show-desc').toggleClass('block__active');
    $('.service-center__click-desc').toggleClass('block__hide');
});

$('.advantages-service__click-desc').on('click', function(event){
    $('.advantages-service__show-desc').toggleClass('block__active');
    $('.advantages-service__show-desc--flex').toggleClass('block__active--flex');
    $('.advantages-service__click-desc').toggleClass('block__hide');
});


// Страница Документація. Для адаптива, появление контента при клике
$('.category-1__click').on('click', function(event){
    $('.category-1__block').toggleClass('category__active');
    $('.category-1__click').toggleClass('category__title-active');
});

$('.category-2__click').on('click', function(event){
    $('.category-2__block').toggleClass('category__active');
    $('.category-2__click').toggleClass('category__title-active');
});

$('.category-3__click').on('click', function(event){
    $('.category-3__block').toggleClass('category__active');
    $('.category-3__click').toggleClass('category__title-active');
});

$('.category-4__click').on('click', function(event){
    $('.category-4__block').toggleClass('category__active');
    $('.category-4__click').toggleClass('category__title-active');
});

$('.category-5__click').on('click', function(event){
    $('.category-5__block').toggleClass('category__active');
    $('.category-5__click').toggleClass('category__title-active');
});

$('.category-6__click').on('click', function(event){
    $('.category-6__block').toggleClass('category__active');
    $('.category-6__click').toggleClass('category__title-active');
});

$('.category-7__click').on('click', function(event){
    $('.category-7__block').toggleClass('category__active');
    $('.category-7__click').toggleClass('category__title-active');
});


// new doc

$('.doc-tab--click-1').on('click', function(event){
    $('.doc-list--block-1').toggleClass('doc-list__active');
    $('.doc-tab--click-1').toggleClass('doc-tab__title-active');
});

$('.doc-tab--click-2').on('click', function(event){
    $('.doc-list--block-2').toggleClass('doc-list__active');
    $('.doc-tab--click-2').toggleClass('doc-tab__title-active');
});

$('.doc-tab--click-3').on('click', function(event){
    $('.doc-list--block-3').toggleClass('doc-list__active');
    $('.doc-tab--click-3').toggleClass('doc-tab__title-active');
});



// Страницы Тарифов. Для адаптива, появление контента при клике
$('.tariff-click-1').on('click', function(event){
    $('.tariff-content-1').toggleClass('tariff-content__active');
    $('.tariff-click-1').toggleClass('tariff-title__active');
});

$('.tariff-click-2').on('click', function(event){
    $('.tariff-content-2').toggleClass('tariff-content__active');
    $('.tariff-click-2').toggleClass('tariff-title__active');
});

$('.tariff-click-3').on('click', function(event){
    $('.tariff-content-3').toggleClass('tariff-content__active');
    $('.tariff-click-3').toggleClass('tariff-title__active');
});

$('.tariff-click-4').on('click', function(event){
    $('.tariff-content-4').toggleClass('tariff-content__active');
    $('.tariff-click-4').toggleClass('tariff-title__active');
});

$('.tariff-click-5').on('click', function(event){
    $('.tariff-content-5').toggleClass('tariff-content__active');
    $('.tariff-click-5').toggleClass('tariff-title__active');
});

$('.tariff-click-6').on('click', function(event){
    $('.tariff-content-6').toggleClass('tariff-content__active');
    $('.tariff-click-6').toggleClass('tariff-title__active');
});

$('.tariff-click-7').on('click', function(event){
    $('.tariff-content-7').toggleClass('tariff-content__active');
    $('.tariff-click-7').toggleClass('tariff-title__active');
});

$('.tariff-click-8').on('click', function(event){
    $('.tariff-content-8').toggleClass('tariff-content__active');
    $('.tariff-click-8').toggleClass('tariff-title__active');
});

$('.tariff-click-9').on('click', function(event){
    $('.tariff-content-9').toggleClass('tariff-content__active');
    $('.tariff-click-9').toggleClass('tariff-title__active');
});

$('.tariff-click-10').on('click', function(event){
    $('.tariff-content-10').toggleClass('tariff-content__active');
    $('.tariff-click-10').toggleClass('tariff-title__active');
});

$('.tariff-click-11').on('click', function(event){
    $('.tariff-content-11').toggleClass('tariff-content__active');
    $('.tariff-click-11').toggleClass('tariff-title__active');
});

$('.tariff-click-12').on('click', function(event){
    $('.tariff-content-12').toggleClass('tariff-content__active');
    $('.tariff-click-12').toggleClass('tariff-title__active');
});

$('.tariff-click-13').on('click', function(event){
    $('.tariff-content-13').toggleClass('tariff-content__active');
    $('.tariff-click-13').toggleClass('tariff-title__active');
});

// Страница Финансовые послуги. Для адаптива, появление контента при клике
$('.finance__click-1').on('click', function(event){
    $('.finance__block-hide--1').toggleClass('block__active');
});

$('.finance__click-2').on('click', function(event){
    $('.finance__block-hide--2').toggleClass('block__active');
});

$('.finance__click-3').on('click', function(event){
    $('.finance__block-hide--3').toggleClass('block__active');
});


// Страница Отделения 
$('.fast-search__more-filters-btn').on('click', function(event){
    $('.fast-search__more-filters').addClass('block__active');
    $('.fast-search__more-filters-btn').addClass('block__hide');
    $('.fast-search__cleen').addClass('cleen-btn__active');
});






// Фильтер для "Тарифи на додаткові послуги"
$('.sort-item--type-service').on('click', function(event){
    $(this).addClass('sort-item--active');
    $('.services-group--type-service').addClass('services-group--active');
    $('.sort-item--type-cargo').removeClass('sort-item--active');
    $('.services-group--type-cargo').removeClass('services-group--active');
});

$('.sort-item--type-cargo').on('click', function(event){
    $(this).addClass('sort-item--active');
    $('.services-group--type-cargo').addClass('services-group--active');
    $('.sort-item--type-service').removeClass('sort-item--active');
    $('.services-group--type-service').removeClass('services-group--active');
});



// Обращение к родителю
$(".time-line__input").change(function(){
    $(this).parents(".time-line").toggleClass("time-line-active");
})

$(".calc-type-cargo, .type-cargo").click(function(){
    $('.time-line--type-cargo').addClass("time-line-active");
})

$(".type-cargo").click(function(){
    $(this).addClass("time-line-active");
})


// Сортировка по типу 
$('.calc-type-cargo__cargo').on('click', function(event){
    $('.calc-type-cargo__item').removeClass('calc-type-cargo__item--active');
    $(this).addClass('calc-type-cargo__item--active');
    $('.type-cargo').removeClass('type-cargo--active');
    $('.type-cargo-1').addClass('type-cargo--active');
});

$('.calc-type-cargo__pallets').on('click', function(event){
    $('.calc-type-cargo__item').removeClass('calc-type-cargo__item--active');
    $(this).addClass('calc-type-cargo__item--active');
    $('.type-cargo').removeClass('type-cargo--active');
    $('.type-cargo-2').addClass('type-cargo--active');
});

$('.calc-type-cargo__documents').on('click', function(event){
    $('.calc-type-cargo__item').removeClass('calc-type-cargo__item--active');
    $(this).addClass('calc-type-cargo__item--active');
    $('.type-cargo').removeClass('type-cargo--active');
    $('.type-cargo-3').addClass('type-cargo--active');
});

$('.calc-type-cargo__sectoral').on('click', function(event){
    $('.calc-type-cargo__item').removeClass('calc-type-cargo__item--active');
    $(this).addClass('calc-type-cargo__item--active');
    $('.type-cargo').removeClass('type-cargo--active');
    $('.type-cargo-4').addClass('type-cargo--active');
});




// Появление инпута "Послеплаты"
$('#t6').on('change', function() {
    $('.after-pay-acc').toggleClass('after-pay-acc__hide', this.value);
});