document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.toggle input');
    toggles.forEach(toggle => {
        toggle.addEventListener('change', (event) => {
            const status = event.target.checked ? 'Operational' : 'Down';
            const parent = event.target.closest('.status-item');
            parent.querySelector('span').innerText = `${parent.querySelector('span').innerText.split(' ')[0]} (${status})`;
            parent.classList.toggle('status-operational', event.target.checked);
            parent.classList.toggle('status-down', !event.target.checked);
        });
    });
});
