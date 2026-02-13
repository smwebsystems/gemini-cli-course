document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copy-email-btn');
    const emailText = document.getElementById('email-text').innerText;

    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            try {
                // Copy to clipboard
                await navigator.clipboard.writeText(emailText);
                
                // Visual feedback
                const originalIcon = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fas fa-check text-success"></i>';
                copyBtn.classList.add('copy-success');
                
                // Reset after 2 seconds
                setTimeout(() => {
                    copyBtn.innerHTML = originalIcon;
                    copyBtn.classList.remove('copy-success');
                }, 2000);
                
            } catch (err) {
                console.error('Failed to copy: ', err);
                // Fallback for older browsers
                const textArea = document.createElement("textarea");
                textArea.value = emailText;
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    copyBtn.innerHTML = '<i class="fas fa-check text-success"></i>';
                    setTimeout(() => {
                        copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
                    }, 2000);
                } catch (err) {
                    alert('Could not copy email automatically. Please select and copy manually.');
                }
                document.body.removeChild(textArea);
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // Offset for sticky navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
            navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
        } else {
            navbar.classList.remove('shadow-sm');
            navbar.style.backgroundColor = 'rgba(33, 37, 41, 1)';
        }
    });
});
