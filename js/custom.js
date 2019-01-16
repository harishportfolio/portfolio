
// skills chart
$(document).ready(function (e) {
    var index = 0;
    $(document).scroll(function () {
        var top = $('#skills').height() - $(window).scrollTop();
        if (index == 0) {
            $('.chart').easyPieChart({
                easing: 'easeOutBounce',
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
        index++;
    })

});