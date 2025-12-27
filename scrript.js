const navMenu = document.getElementById('nav-menu');
const navContainer = document.querySelector('nav');

function handleResponsiveness() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 750) {
        // Jika layar kurang dari 750px
        navMenu.classList.add('hide-menu');       // Hilangkan menu
        navContainer.classList.add('mobile-mode'); // Logo ke tengah
    } else {
        // Jika layar 750px atau lebih
        navMenu.classList.remove('hide-menu');    // Munculkan menu lagi
        navContainer.classList.remove('mobile-mode'); // Logo balik ke kiri
    }
}

// Jalankan fungsi saat halaman pertama kali dimuat
handleResponsiveness();

// Jalankan fungsi setiap kali layar di-resize
window.addEventListener('resize', handleResponsiveness);