window.addEventListener('DOMContentLoaded', (event) => {
    const table = document.getElementById('table');
    const cells = table.querySelectorAll('td');
    cells.forEach(cell => {
        if (cell.innerHTML.trim() === '') {
            cell.innerHTML = '&nbsp;';
        }
    });
});