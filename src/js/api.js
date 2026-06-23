// ⚠️ GANTI STRING DI BAWAH DENGAN URL WEB APP GOOGLE SCRIPT KAMU (Versi 7 yang terbaru)
const GOOGLE_API_URL = "https://script.google.com/macros/s/AKfycby2NZ2UzH1ocdEXDjlcgiodjQhpmNRZ4Sxpgg7oBaUrw7lugKvf4vNzqHyv_D9Sj0KKVw/exec";

async function fetchLiveExpenses() {
    try {
        console.log("Fetching data from Google Sheets...");
        // Meminta data dari Google Apps Script
        const response = await fetch(GOOGLE_API_URL);
        const result = await response.json();
        
        if (result.status === "success") {
            console.log("Data received!", result.data);
            return result.data; // Mengembalikan array data pengeluaran
        } else {
            console.error("Failed to read sheet data.");
            return [];
        }
    } catch (error) {
        console.error("Connection Error:", error);
        return [];
    }
}