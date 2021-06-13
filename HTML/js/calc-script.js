// Свитч кнопка "Економ тариф"
$(document).ready(function(){
    $('.calc-switch-btn').click(function(){
        $('input[type="checkbox"]:checked').each(function(){
            $('.calc-switch-btn__desc').toggleClass('calc-switch-btn__desc--active');
        });
    });
});

// Для страницы ДУ
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


// Для Light и Расширеного
// Time line индикаторы
// Обращение к родителю
$(".time-line__input").change(function(){
    if ($(this).val() != ''){
        $(this).parents(".time-line").addClass("time-line-active");
    }
    else {
        $(this).parents(".time-line").removeClass("time-line-active");
    }
})

$(".time-line__btn").change(function(){
    $(this).parents(".time-line").toggleClass("time-line-active");
})

$(".calc-type-cargo, .type-cargo").click(function(){
    $('.time-line--type-cargo').addClass("time-line-active");
})

$(".type-cargo").click(function(){
    $(this).addClass("time-line-active");
})



// Только для Light Calc
// Сортировка по типу 
$('.calc-type-cargo__cargo').on('click', function(event){
    $('#DeliveryType').val('-1');
    $('.calc-type-cargo__item').removeClass('calc-type-cargo__item--active');
    $(this).addClass('calc-type-cargo__item--active');
    $('.type-cargo').removeClass('type-cargo--active');
    $('.type-cargo-1').addClass('type-cargo--active');
    $('#calc-footer--express').removeClass('calc-footer--express-block');
    $('#cargo-parameters--documents, .calc-footer__notice-item--documents').css('display','flex');
    $('#cargo-parameters--express, .calc-footer__notice-item--express-only').hide();
    $('.calc-form__group-title--express').removeClass('active');
    $('.calc-form__group-title').removeClass('hide');
});

$('.calc-type-cargo__pallets').on('click', function(event){
    $('#DeliveryType').val('-1');
    $('.calc-type-cargo__item').removeClass('calc-type-cargo__item--active');
    $(this).addClass('calc-type-cargo__item--active');
    $('.type-cargo').removeClass('type-cargo--active');
    $('.type-cargo-2').addClass('type-cargo--active');
    $('#calc-footer--express').removeClass('calc-footer--express-block');
    $('#cargo-parameters--documents, .calc-footer__notice-item--documents').css('display','flex');
    $('#cargo-parameters--express, .calc-footer__notice-item--express-only').hide();
    $('.calc-form__group-title--express').removeClass('active');
    $('.calc-form__group-title').removeClass('hide');
});

$('.calc-type-cargo__documents').on('click', function(event){
    $('.calc-type-cargo__item').removeClass('calc-type-cargo__item--active');
    $(this).addClass('calc-type-cargo__item--active');
    $('.type-cargo').removeClass('type-cargo--active');
    $('.type-cargo-3').addClass('type-cargo--active');
});

$('.calc-type-cargo__sectoral').on('click', function(event){
    $('#DeliveryType').val('-1');
    $('.calc-type-cargo__item').removeClass('calc-type-cargo__item--active');
    $(this).addClass('calc-type-cargo__item--active');
    $('.type-cargo').removeClass('type-cargo--active');
    $('.type-cargo-4').addClass('type-cargo--active');
    $('#calc-footer--express').removeClass('calc-footer--express-block');
    $('#cargo-parameters--documents, .calc-footer__notice-item--documents').css('display','flex');
    $('#cargo-parameters--express, .calc-footer__notice-item--express-only').hide();
    $('.calc-form__group-title--express').removeClass('active');
    $('.calc-form__group-title').removeClass('hide');
});

// Для Light и Расширеного
// Появление инпута "Послеплаты"
$('#t6').on('change', function() {
    $('.after-pay-acc').toggleClass('after-pay-acc__hide', this.value);
});


// Только для Light Calc
// При "Тип доставки: Експресс доставка" - показывать блок с Експресс доставкой и остальные блоки связаные с Експресс доставкой
$("#DeliveryType").change(function () {
    if( $("option#express:selected").length )
    {
        $('#calc-footer--express').addClass('calc-footer--express-block');
        $('.type-cargo').removeClass('type-cargo--active');
        $('.type-cargo-3').addClass('type-cargo--active');
        $('.calc-type-cargo__item').removeClass('calc-type-cargo__item--active');
        $('.calc-type-cargo__documents').addClass('calc-type-cargo__item--active');
        $('#cargo-parameters--documents, .calc-footer__notice-item--documents').hide();
        $('#cargo-parameters--express, .calc-footer__notice-item--express-only').css('display','flex');
        $('.calc-form__group-title').addClass('hide');
        $('.calc-form__group-title--express').addClass('active');
    }
    else{
        $('#calc-footer--express').removeClass('calc-footer--express-block');
        $('.type-cargo-1').addClass('type-cargo--active');
        $('.calc-type-cargo__item').removeClass('calc-type-cargo__item--active');
        $('.calc-type-cargo__cargo').addClass('calc-type-cargo__item--active');
        $('.calc-type-cargo__documents').removeClass('calc-type-cargo__item--active');
        $('#cargo-parameters--documents, .calc-footer__notice-item--documents').css('display','flex');
        $('#cargo-parameters--express, .calc-footer__notice-item--express-only').hide();
        $('.calc-form__group-title--express').removeClass('active');
        $('.calc-form__group-title').removeClass('hide');
    }
});



// Клонирование блока "Категорія тарифу" при клике на кнопку
// document.querySelector(".add-category-btn").addEventListener("click", function() {
//     document.querySelector(".tariff-category__wrapper").appendChild(document.querySelector(".tariff-category").cloneNode(true));
// });

// $('.tariff-category__pick-category').bind("change keyup",function net2() {
//     console.log("yes11");
// });

$('.add-category-btn').on('click', function(event){
    $(".tariff-category").clone().appendTo(".tariff-category__wrapper");
});

$('.tariff-category__pick-category').on('change', function(event){
    if( $("option#tariff-category--cargo:selected").length )
        {
            $('.select-option').removeClass('active');
            $('.select-option--cargo').addClass('active');
        }
        if( $("option#tariff-category--pallets:selected").length )
        {
            $('.select-option').removeClass('active');
            $('.select-option--pallets').addClass('active');
        }
        if( $("option#tariff-category--documents:selected").length )
        {
            $('.select-option').removeClass('active');
            $('.select-option--documents').addClass('active');
        }
        if( $("option#tariff-category--industry:selected").length )
        {
            $('.select-option').removeClass('active');
            $('.select-option--industry-tariffs').addClass('active');
        }
    console.log("yes11");
});


// function net() {
//     $(".tariff-category__pick-category").change(function() {
//         if( $("option#tariff-category--cargo:selected").length )
//         {
//             $('.select-option').removeClass('active');
//             $('#select-option--cargo').addClass('active');
//         }
//         if( $("option#tariff-category--pallets:selected").length )
//         {
//             $('.select-option').removeClass('active');
//             $('#select-option--pallets').addClass('active');
//         }
//         if( $("option#tariff-category--documents:selected").length )
//         {
//             $('.select-option').removeClass('active');
//             $('#select-option--documents').addClass('active');
//         }
//         if( $("option#tariff-category--industry:selected").length )
//         {
//             $('.select-option').removeClass('active');
//             $('#select-option--industry-tariffs').addClass('active');
//         }
//         console.log("yes11");
//     });
// }

// Выбор Категории Тарифа (Full Calc)

// $(".tariff-category__pick-category").change(function() {
//     if( $("option#tariff-category--cargo:selected").length )
//     {
//         $('.select-option').removeClass('active');
//         $('#select-option--cargo').addClass('active');
//     }
//     if( $("option#tariff-category--pallets:selected").length )
//     {
//         $('.select-option').removeClass('active');
//         $('#select-option--pallets').addClass('active');
//     }
//     if( $("option#tariff-category--documents:selected").length )
//     {
//         $('.select-option').removeClass('active');
//         $('#select-option--documents').addClass('active');
//     }
//     if( $("option#tariff-category--industry:selected").length )
//     {
//         $('.select-option').removeClass('active');
//         $('#select-option--industry-tariffs').addClass('active');
//     }
//     console.log("yes11");
// });



// ===================================================================================



$("#select-type-document").change(function() {
    if ($(this).prop("checked")) {
        $('.document-type--id-card').css("display", "flex");
        $('.document-type--passport').css("display", "none");
    } else {
        $('.document-type--id-card').css("display", "none");
        $('.document-type--passport').css("display", "flex"); 
    }
});


function choiceFace() {
    if ($("#yur-face").prop("checked")) {
        $('.select-yur-face').css("display", "flex");
        $('.select-fiz-face').css("display", "none");
    } 
    if ($("#fiz-face").prop("checked")) {
        $('.select-yur-face').css("display", "none"); 
        $('.select-fiz-face').css("display", "flex");
    }
}