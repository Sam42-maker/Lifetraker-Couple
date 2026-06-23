document.addEventListener("DOMContentLoaded", () => {
    
    // Tangkap elemen panggung dan dashboard
    const splashScreen = document.getElementById("splash-screen");
    const mainDashboard = document.getElementById("main-dashboard");

    // Setting Stopwatch: 3500 milidetik = 3.5 Detik
    setTimeout(() => {
        // 1. Perintahkan layar splash memudar (opacity 0)
        splashScreen.style.opacity = "0";

        // 2. Tunggu setengah detik sampai layar benar-benar pudar, lalu hapus panggungnya
        setTimeout(() => {
            splashScreen.style.display = "none"; // Hapus layar splash dari eksistensi
            mainDashboard.classList.remove("hidden"); // Tampilkan dashboard pastel
        }, 500); // 0.5 detik (waktu transisi kaca)

    }, 3500); // Trigger di detik ke 3.5

});