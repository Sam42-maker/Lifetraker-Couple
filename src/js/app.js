document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.getElementById("splash-screen");
    const mainDashboard = document.getElementById("main-dashboard");

    setTimeout(() => {
        splashScreen.style.opacity = "0";

        // MULAI MENGGAMBAR GRAFIK SAAT LAYAR MULAI MEMUDAR
        drawPastelChart(); 

        setTimeout(() => {
            splashScreen.style.display = "none"; 
            mainDashboard.classList.remove("hidden"); 
        }, 500); 

    }, 3500); 
});