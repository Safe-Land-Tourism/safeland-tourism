document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Redirect directly to WhatsApp with pre-filled details
        const whatsappUrl = `https://wa.me/971504915900?text=Hello%20Safe%20Land%20Tourism,%20my%20name%20is%20${encodeURIComponent(name)}.%20${encodeURIComponent(message)}%20(Contact:%20${encodeURIComponent(phone)})`;
        
        window.open(whatsappUrl, '_blank');
    });
});

