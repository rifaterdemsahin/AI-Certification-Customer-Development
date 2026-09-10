// Dynamic spotlight hover effect for cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card, .interactive-card, .stage-step');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });
    
    // Add micro-interaction page transitions / animations on load
    const animElements = document.querySelectorAll('.animate-fade-in');
    animElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});
