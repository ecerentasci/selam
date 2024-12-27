// Sayfa yüklendikten sonra bu kod çalışacak
document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById('play-music'); // Müzik başlatma butonu
    const music = document.getElementById('background-music'); // Müzik dosyası

    // Müzik açıldığında buton kaybolur ve müzik çalmaya başlar
    playButton.addEventListener('click', function () {
        music.play();  // Müziği başlat
        document.getElementById('music-overlay').style.display = 'none';  // Müzik açılış ekranını gizle
        document.getElementById('main-content').style.display = 'block';  // Ana içeriği göster
    });
});
