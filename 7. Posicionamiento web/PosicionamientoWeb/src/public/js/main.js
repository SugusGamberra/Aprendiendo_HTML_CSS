document.addEventListener('DOMContentLoaded', () => {

    const footerLink = document.querySelector('.footer__inner');

    if (footerLink) {
        footerLink.addEventListener('mousemove', function(e) {
            const particle = document.createElement('span');
            particle.classList.add('particle-effect');
            particle.style.top = e.pageY + 'px'; 
            particle.style.left = e.pageX + 'px';
            particle.innerHTML = Math.random() > 0.5 ? '🤍' : '✨';
            const randomX = (Math.random() - 0.5) * 50;
            particle.style.setProperty('--random-x', randomX + 'px');
            document.body.appendChild(particle);
            setTimeout(() => {
                particle.remove();
            }, 1000);
        });
    }

});