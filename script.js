document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('language-dropdown').addEventListener('change', function() {
        var language = this.value;

        // Dynamically construct the base path to include the repository name
        var host = window.location.hostname;
        var protocol = window.location.protocol;
        var pathname = window.location.pathname; // Includes '/testtemp/' when on GitHub Pages
        var segments = pathname.split('/').filter(Boolean); // Remove empty segments
        var basePath = protocol + '//' + host + '/' + (segments.length ? segments[0] + '/' : ''); // Assumes the project is in the first segment
        
        // Redirect based on selected language
        if(language === 'en') {
            window.location.href = basePath + 'html_en';
        } else if(language === 'fi') {
            window.location.href = basePath + 'html_fi';
        } else if(language === 'sv') {
            window.location.href = basePath + 'html_sv';
        }
    });
});
