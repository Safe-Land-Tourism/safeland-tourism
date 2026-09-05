// WhatsApp-এ ডাইরেক্ট প্যাকেজের নামসহ মেসেজ পাঠানোর ফংশন
function sendWhatsApp(packageName) {
    var phoneNumber = "971504915900"; // আপনার WhatsApp নাম্বার
    var message = "Hello, I am interested in booking: " + packageName;
    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url, '_blank');
}
