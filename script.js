document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('language-dropdown').addEventListener('change', function() {
        var language = this.value;
        // Include the repository name in the redirect path
        var basePath = '/testtemp/'; // Repository name as the base path
        if(language === 'en') {
            window.location.href = basePath + 'html_en';
        } else if(language === 'fi') {
            window.location.href = basePath + 'html_fi';
        } else if(language === 'sv') {
            window.location.href = basePath + 'html_sv';
        }
    });
});
