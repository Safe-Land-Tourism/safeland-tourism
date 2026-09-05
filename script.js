// ওয়েবসাইট লোড হওয়ার পর কোড কাজ করবে
document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript file loaded successfully!");

    const button = document.getElementById('demoBtn');
    
    if (button) {
        button.addEventListener('click', () => {
            alert('JavaScript কাজ করছে!');
        });
    }
});
