function sendWhatsApp(packageName) {
    // Business card Phone Number: +971 50 491 5900
    var phoneNumber = "971504915900"; 
    
    var message = "Hello, I am visiting your website and I would like to book or get details about: " + packageName;
    var encodedMessage = encodeURIComponent(message);
    
    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;
    
    window.open(whatsappUrl, '_blank');
}
