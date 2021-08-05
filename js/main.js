// スクロールしたときの透過用クラス処理
$(function () {
    const header = $('#header');
    $(window).on('load scroll' ,function () {
        var headerHeight = header.innerHeight();

        $(window).on('scroll' ,function () {
            if ( $(this).scrollTop() > 100 ) {
                header.addClass('min-header');
            } else {
                header.removeClass('min-header');
            }
        });
    });
});
