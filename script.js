function checkCode() {
    const codeInput = document.getElementById('codeInput').value;
    const message = document.getElementById('message');
    const accessForm = document.getElementById('accessForm');
    const mainContent = document.getElementById('mainContent');
    
    if (codeInput === '35281') {
        accessForm.style.display = 'none';
        mainContent.style.display = 'block';
    } else {
        message.textContent = 'Invalid code. Please try again.';
    }
}

// Disable right-click and show a message
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('🥱 SORRY!');
});
