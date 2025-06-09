document.querySelectorAll('.video-box').forEach(box => {
    const video = box.querySelector('video');

    let hasStarted = false;

    box.addEventListener('mouseenter', () => {
        video.currentTime = 0;
        video.play();
        hasStarted = true;
    });

    box.addEventListener('mouseleave', () => {
        video.pause();
        hasStarted = false;
    });

    // Pause the video at 10 seconds
    video.addEventListener('timeupdate', () => {
        if (hasStarted && video.currentTime >= 6) {
            video.pause();
            hasStarted = false;
        }
    });
});
