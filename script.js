// grndwg Meme Token Official Website JavaScript
// Add interactivity here if needed

// Example: Smooth scroll for navigation

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Copy contract address functionality
const copyBtn = document.getElementById('copy-contract');
const contractAddress = document.getElementById('contract-address');
if (copyBtn && contractAddress) {
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(contractAddress.textContent.trim());
        copyBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
        setTimeout(() => {
            copyBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
        }, 1200);
    });
}

// Phantom wallet connect for Buy Now button
// Remove Phantom wallet connect for Buy Now button (no longer needed)
