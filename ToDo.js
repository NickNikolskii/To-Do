$(document).ready(function () {

    $('.wrapper > div > button').click(function () {
        var a = $('input').val();
        $('.item_list').append('<div id="a" class="item">' + a + '</div>');
        
        $('input').val("");
    });

    $(item).click(function () {
        $(this).remove();
    });

    $()
});
