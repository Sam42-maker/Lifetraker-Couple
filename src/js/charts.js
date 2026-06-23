async function drawPastelChart() {
    // 1. Ambil data dari api.js
    const expenseData = await fetchLiveExpenses();
    if (expenseData.length === 0) return;

    // 2. Mesin penghitung total per kategori
    const categoryTotals = {};
    let grandTotal = 0;

    expenseData.forEach(row => {
        if (row.amount > 0) { // Hanya hitung yang berupa angka pengeluaran
            const cat = row.category || "General";
            categoryTotals[cat] = (categoryTotals[cat] || 0) + row.amount;
            grandTotal += row.amount;
        }
    });

    // 3. Update teks total uang di Dashboard HTML
    const totalTextElement = document.querySelector(".money-text");
    if (totalTextElement) {
        totalTextElement.innerText = "Rp " + grandTotal.toLocaleString('id-ID');
    }

    // 4. Siapkan kuas dan warna pastel untuk Chart.js
    const labels = Object.keys(categoryTotals);
    const chartData = Object.values(categoryTotals);
    const pastelColors = ['#FFD3B6', '#FFAAA5', '#A8E6CF', '#DCEDC1', '#FF8B94', '#A0C4FF'];

    // 5. Gambar grafik Pie/Doughnut
    const ctx = document.getElementById('expensePieChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: chartData,
                backgroundColor: pastelColors,
                borderWidth: 3,
                borderColor: '#FDFBF7', // Sama dengan warna background web
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
}