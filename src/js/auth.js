// Ganti "2026" dengan PIN rahasia kalian berdua
const SECRET_PIN = "2026"; 

function checkSecurity() {
    // Cek apakah HP ini sudah pernah login sebelumnya
    const isUnlocked = localStorage.getItem("us_space_unlocked");
    
    if (!isUnlocked) {
        // Jika belum, munculkan popup minta PIN
        let enteredPin = prompt("🔒 Welcome to Us Space.\nPlease enter your Secret PIN:");
        
        if (enteredPin === SECRET_PIN) {
            // Jika benar, simpan kunci di memori HP
            localStorage.setItem("us_space_unlocked", "true");
        } else {
            // Jika salah, kosongkan layar dan minta reload
            alert("❌ Incorrect PIN. Access Denied.");
            document.body.innerHTML = "<h1 style='text-align:center; margin-top:50px; font-family:sans-serif;'>LOCKED 🔒<br><br><button onclick='location.reload()'>Try Again</button></h1>";
        }
    }
}

// Langsung jalankan fungsi pengamanan saat file ini dibaca
checkSecurity();