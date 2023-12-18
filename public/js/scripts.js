document.addEventListener('DOMContentLoaded', () => {
    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
        let $notification = $delete.parentNode;
        $delete.addEventListener('click', () => {
            jQuery($notification).fadeOut().promise();
        });
    });
});

window.cookieconsent.initialise({
    "palette": {
        "popup": {
            "background": "#252e39"
        },
        "button": {
            "background": "#14a7d0"
        }
    },
    "position": "top",
    "static": true
});







