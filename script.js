window.addEventListener('load', function () {
    var loadingContainer = document.querySelector('#wave-container');
    var duration = 3800; // Set the duration in milliseconds (e.g., 3500 = 3.5 seconds)
    var fadeOutDuration = 500; // Set the fade out duration in milliseconds (e.g., 500 = 0.5 seconds)
    var body = document.querySelector('body')
    setTimeout(function () {
        loadingContainer.classList.add("fade")
        setTimeout(function () {
            loadingContainer.style.display = 'none';
        }, fadeOutDuration);
    }, duration);
});
