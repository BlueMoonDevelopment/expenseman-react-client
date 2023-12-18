import React from 'react';

export default function Home() {
    return (
        <>
            <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
                    data-cfasync="false"></script>
            <script src="/lib/to-top/material-scrolltop.js"></script>
            <script src="/js/scripts.js"></script>
            <script src="https://accounts.google.com/gsi/client" async></script>
            <script>$('body').materialScrollTop();</script>
        </>
    );
}
