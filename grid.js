(function() {

    'use strict';

    document.getElementById('toggle')
        .addEventListener('click', function() {

            var noncore = document.getElementsByClassName('non-core');
            var display = '0';
            if (this.checked) {
                display = '0.4';
            }

            [].forEach.call(noncore, function (el) {
                el.style.opacity = display;
            });
        });

})();