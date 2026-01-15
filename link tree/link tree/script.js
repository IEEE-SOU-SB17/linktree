document.addEventListener('DOMContentLoaded', () => {
    // Add 3D tilt effect to cards
    const cards = document.querySelectorAll('.link-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate rotation based on cursor position
            // Small subtle movement
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -2; // Max 2 deg rotation
            const rotateY = ((x - centerX) / centerX) * 2;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            // Reset transformation
            card.style.transform = '';
            // Allow css transition to take over for smooth reset
            setTimeout(() => {
                card.style.transition = 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)';
            }, 0);
        });
    });

    // Ripple effect on click
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't follow link immediately (for demo purposes if href is #)
            // e.preventDefault(); 
            
            let ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});
