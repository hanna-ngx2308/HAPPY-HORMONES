// Add interactive functionality
document.addEventListener('DOMContentLoaded', function() {
    const habitBoxes = document.querySelectorAll('.habit-box');
    const neuroBoxes = document.querySelectorAll('.neuro-box');

    // Add click handlers for habit boxes
    habitBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // Remove active class from all boxes
            habitBoxes.forEach(b => b.classList.remove('active'));
            // Add active class to clicked box
            this.classList.add('active');
            
            console.log('Selected habit:', this.dataset.habit);
        });
    });

    // Add click handlers for neurotransmitter boxes
    neuroBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // Remove active class from all neuro boxes
            neuroBoxes.forEach(b => b.classList.remove('active'));
            // Add active class to clicked box
            this.classList.add('active');
            
            console.log('Selected neurotransmitter:', this.dataset.neuro);
        });
    });

    // Add hover effects
    habitBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        box.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
});

// Optional: Add animation on load
window.addEventListener('load', function() {
    const boxes = document.querySelectorAll('.habit-box, .neuro-box');
    boxes.forEach((box, index) => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        setTimeout(() => {
            box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

