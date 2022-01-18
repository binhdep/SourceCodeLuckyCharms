$(document).ready(function (e) {
    $('.cb-wrap').on('click', '#page1Submit', function () {
        let name = $('.cb-form-main input[name="cb-name"]').val();
        $('#page1').css('display', 'none');
        $('#page2').css('display', 'block');
        $('#page2 #cb-show-name').html(name);
    });

    $('.cb-wrap').on('click', '#tarot_cards .flip-card', function () {
        let count = parseInt($('#resultCards input[name="cardSelected"]').val());
        if (count < 3) {
            let choose = $(this).clone();
            $(this).css('visibility', 'hidden');
            $('#resultCards').append(choose);
            count++;
            $('#resultCards input[name="cardSelected"]').val(count)
        }
        if(count === 3){
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#resultCards").offset().top
            }, 2000);
        }
    });

    $('.cb-wrap').on('click', '#submitPage2', function () {
        $('#page2').css('display', 'none');
        $('#screenFirst').css('display', 'block');
    })
});