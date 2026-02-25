/* Charts.js — Initialisation des graphiques Chart.js */

document.addEventListener('DOMContentLoaded', () => {

    // ── Couleur du rôle depuis CSS variable ──────────────────
    const getRoleColor = () => {
        return getComputedStyle(document.documentElement).getPropertyValue('--role-color').trim() || '#0d6efd';
    };

    // ── Doughnut (répartition stages) ───────────────────────
    const doughnutEl = document.getElementById('chartDoughnut');
    if (doughnutEl && typeof Chart !== 'undefined') {
        const rc = getRoleColor();
        new Chart(doughnutEl, {
            type: 'doughnut',
            data: {
                labels: ['En attente', 'Validés', 'Refusés', 'En cours', 'Terminés'],
                datasets: [{
                    data: [12, 28, 5, 18, 37],
                    backgroundColor: [
                        'rgba(255,193,7,0.85)',
                        'rgba(25,135,84,0.85)',
                        'rgba(220,53,69,0.85)',
                        rc,
                        'rgba(108,117,125,0.85)'
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                cutout: '72%',
                plugins: {
                    legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } }
                },
                animation: { animateScale: true }
            }
        });
    }

    // ── Bar Chart (par mois) ─────────────────────────────────
    const barEl = document.getElementById('chartBar');
    if (barEl && typeof Chart !== 'undefined') {
        const rc = getRoleColor();
        new Chart(barEl, {
            type: 'bar',
            data: {
                labels: ['Sep', 'Oct', 'Nov', 'Déc', 'Jan', 'Fév', 'Mar'],
                datasets: [{
                    label: 'Stages',
                    data: [8, 14, 11, 6, 19, 22, 17],
                    backgroundColor: rc,
                    borderRadius: 6,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 11 } } },
                    x: { grid: { display: false }, ticks: { font: { size: 11 } } }
                }
            }
        });
    }

    // ── Line Chart (évolution) ───────────────────────────────
    const lineEl = document.getElementById('chartLine');
    if (lineEl && typeof Chart !== 'undefined') {
        const rc = getRoleColor();
        new Chart(lineEl, {
            type: 'line',
            data: {
                labels: ['Sep', 'Oct', 'Nov', 'Déc', 'Jan', 'Fév', 'Mar'],
                datasets: [{
                    label: 'Candidatures',
                    data: [5, 12, 9, 4, 18, 24, 20],
                    borderColor: rc,
                    backgroundColor: rc.replace(')', ', 0.08)').replace('rgb', 'rgba'),
                    borderWidth: 2.5,
                    pointBackgroundColor: rc,
                    pointRadius: 4,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 11 } } },
                    x: { grid: { display: false }, ticks: { font: { size: 11 } } }
                }
            }
        });
    }
});
