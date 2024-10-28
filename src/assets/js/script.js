new WOW({
    animateClass: 'animate__animated'
}).init();

$( function() {
    var icons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };
    $( "#accordion" ).accordion({
        icons: icons
    });
    $( "#toggle" ).button().on( "click", function() {
        if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
            $( "#accordion" ).accordion( "option", "icons", null );
        } else {
            $( "#accordion" ).accordion( "option", "icons", icons );
        }
    });
} );

let singleItem = $('.single-item')

singleItem.slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});
singleItem.magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
});

let nameInput = $('#name-input');
let phoneInput = $('#phone-input');
let indexInput = $('#index-input');
let lastNameInput = $('#lastName-input');
let countryInput = $('#country-input');
let addressInput = $('#address-input');

indexInput.on('keydown', function (e) {
    let number = parseInt(e.key);
    if (isNaN(number) && e.key !== "Backspace") {
        return false;
    };

});



$('#create-order').click(function () {
    if (!nameInput.val()) {
        alert('Заполните имя');
        return;
    }
    if (!lastNameInput.val()) {
        alert('Заполните фамилию');
        return;
    }
    if (!phoneInput.val()) {
        alert('Заполните телефон');
        return;
    }

    if (!countryInput.val()) {
        alert('Заполните страну');
        return;
    }

    if (!indexInput.val()) {
        alert('Заполните индекс');
        return;
    }
    if (indexInput.val().length < 6) {
        alert('Индекс должен содержать 6 символов');
        return;
    }

    if (!addressInput.val()) {
        alert('Заполните адрес');
        return;
    }

     $('#popup').css('display', 'block');

    nameInput.val('');
    lastNameInput.val('');
    phoneInput.val('');
    countryInput.val('');
    indexInput.val('');
    addressInput.val('');
});


