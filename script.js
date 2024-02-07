document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('language-dropdown').addEventListener('change', function() {
        var language = this.value;
        // Perform action based on the selected language
        // For example, redirect to a different language version of the site
        if(language === 'en') {
            window.location.href = '/html_en';
        } else if(language === 'fi') {
            window.location.href = '/html_fi';
        } else if(language === 'sv') {
            window.location.href = '/html_sv';
        }
    });
});
