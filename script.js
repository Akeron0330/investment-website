// 資産推移データのサンプル
const assetData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [{
        label: '資産総額 (円)',
        data: [1000000, 1200000, 1400000, 1600000, 1800000],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

// グラフの設定
const config = {
    type: 'line',
    data: assetData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '年間資産推移'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};

// グラフを描画
window.addEventListener('load', () => {
    const ctx = document.getElementById('assetChart').getContext('2d');
    new Chart(ctx, config);
});
