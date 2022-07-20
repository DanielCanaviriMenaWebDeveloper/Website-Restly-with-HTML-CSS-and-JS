

/* 23. CountDown Start */
$('.count-down').each(function () {
    $(this).countdown({
        date: $(this).attr('data-date')
    });
});


/* 24. Fact Counter + Text Count - Our Success */
if ($('.success-item').length) {
    $('.success-item').appear(function () {

        var $t = $(this),
            n = $t.find(".count-text").attr("data-stop"),
            r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
                countNum: $t.find(".count-text").text()
            }).animate({
                countNum: n
            }, {
                duration: r,
                easing: "linear",
                step: function () {
                    $t.find(".count-text").text(Math.floor(this.countNum));
                },
                complete: function () {
                    $t.find(".count-text").text(this.countNum);
                }
            });
        }

    }, {
        accY: 0
    });
}