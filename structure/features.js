// QR Code generation function
function generateQR() {
    const qrDisplay = document.getElementById('qr-display');
    const eventName = 'Tech Workshop 2025'; // This would be dynamic
    const qrText = `EVENT_CHECKIN:${eventName}:${Date.now()}`;
    
    // Simple QR code representation (in real app, use QR library)
    qrDisplay.innerHTML = `
        <div class="qr-code">
            <div class="qr-pattern"></div>
            <p>QR Code for: ${eventName}</p>
            <small>Event ID: ${Date.now()}</small>
        </div>
    `;
}

// Notification subscription
document.addEventListener('DOMContentLoaded', function() {
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`✅ Successfully subscribed ${email} to notifications!`);
            this.reset();
        });
    }
    
    // Member management
    const addMemberBtn = document.querySelector('.add-member-btn');
    if (addMemberBtn) {
        addMemberBtn.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const email = input.value;
            if (email) {
                alert(`✅ Added ${email} to club members!`);
                input.value = '';
            }
        });
    }
    
    // Remove member functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-btn')) {
            const memberItem = e.target.parentElement;
            const email = memberItem.querySelector('span').textContent;
            if (confirm(`Remove ${email} from club?`)) {
                memberItem.remove();
            }
        }
    });
});

// Event registration with QR code
function registerForEvent(eventName) {
    const userEmail = prompt('Enter your email to register:');
    if (userEmail) {
        alert(`✅ Registered for ${eventName}! Check your email for QR code.`);
        // In real app, this would send QR code via email
    }
}

// Enhanced event registration buttons
document.addEventListener('DOMContentLoaded', function() {
    const registerBtns = document.querySelectorAll('.register-btn');
    registerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const eventCard = this.closest('.event-card');
            const eventName = eventCard.querySelector('h3').textContent;
            registerForEvent(eventName);
        });
    });
});