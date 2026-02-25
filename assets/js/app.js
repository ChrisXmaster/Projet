/* =============================================================
   APP.JS — Logique globale
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ── Sidebar Toggle ────────────────────────────────────────
  const sidebar = document.querySelector('.sidebar');
  const mainContent = document.querySelector('.main-content');
  const toggleBtn = document.querySelector('.navbar-toggle-btn');
  const overlay = document.querySelector('.sidebar-overlay');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      if (window.innerWidth <= 991) {
        sidebar.classList.toggle('mobile-open');
        overlay && overlay.classList.toggle('show');
      } else {
        sidebar.classList.toggle('collapsed');
        mainContent && mainContent.classList.toggle('expanded');
      }
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
      overlay.classList.remove('show');
    });
  }

  // ── Active nav link ───────────────────────────────────────
  const currentPath = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.sidebar-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPath) && currentPath !== '') {
      link.classList.add('active');
    }
  });

  // ── Bootstrap tooltips ────────────────────────────────────
  const tooltipEls = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipEls.forEach(el => new bootstrap.Tooltip(el));

  // ── Clock ─────────────────────────────────────────────────
  const clockEl = document.getElementById('live-clock');
  if (clockEl) {
    const updateClock = () => {
      const now = new Date();
      clockEl.textContent = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    };
    updateClock();
    setInterval(updateClock, 60000);
  }

  // ── Toast Helper ─────────────────────────────────────────
  window.showToast = (message, type = 'success') => {
    const toastContainer = document.querySelector('.toast-container') || (() => {
      const tc = document.createElement('div');
      tc.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      document.body.appendChild(tc);
      return tc;
    })();

    const icons = { success: 'bi-check-circle-fill', danger: 'bi-x-circle-fill', warning: 'bi-exclamation-triangle-fill', info: 'bi-info-circle-fill' };
    const toastEl = document.createElement('div');
    toastEl.className = `toast align-items-center text-bg-${type} border-0 show`;
    toastEl.setAttribute('role', 'alert');
    toastEl.innerHTML = `
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center gap-2">
          <i class="bi ${icons[type] || 'bi-info-circle-fill'}"></i>
          ${message}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>`;
    toastContainer.appendChild(toastEl);
    const bsToast = new bootstrap.Toast(toastEl, { delay: 4000 });
    bsToast.show();
    toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
  };

  // ── Notification badge refresh (mock) ─────────────────────
  const notifBadge = document.querySelector('.nav-icon-btn .badge-dot');
  // In a real app, fetch from API
});
