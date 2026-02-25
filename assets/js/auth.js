/* Auth JS */
document.addEventListener('DOMContentLoaded', () => {

    // Toggle password visibility
    document.querySelectorAll('.input-toggle-password').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.closest('.input-icon-wrapper').querySelector('input');
            if (input.type === 'password') {
                input.type = 'text';
                btn.innerHTML = '<i class="bi bi-eye-slash"></i>';
            } else {
                input.type = 'password';
                btn.innerHTML = '<i class="bi bi-eye"></i>';
            }
        });
    });

    // Role card selection
    document.querySelectorAll('.role-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            const roleInput = document.getElementById('selected-role');
            if (roleInput) roleInput.value = card.dataset.role;
        });
    });

    // Form validation
    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach(form => {
        form.addEventListener('submit', e => {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });
});
