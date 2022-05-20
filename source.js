(async () => {
    console.log("waiting for jQuery");

    // It's an example
    var menu_icon = document.querySelector('.qodef-mobile-header-opener');
    menu_icon.addEventListener("click", function () {
        menu_icon.classList.add("menu_opened");
    });


    // Promise Resolving
    while (!window.hasOwnProperty("jQuery")) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Jquery Loaded All Pending operations under
    console.log("jQuery is loaded.");
    setTimeout(function () {
        jQuery(document).ready(function ($) {
            if ($('.qodef-mobile-header-opener').hasClass('menu_opened')) {
                var nani = setInterval(function () {

                    if ($('.qodef--opened').length < 1) {
                        $('.qodef-mobile-header-opener').click();
                    } else {
                        clearInterval(nani);
                    }
                }, 50);

            }
        });
    }, 200);

})();