function toggleTheme() {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }
}

// Function to apply the selected theme
function applyTheme(theme) {
    const themeLink = document.getElementById('theme');
    themeLink.href = `css/${theme}.css`;
    localStorage.setItem('theme', theme);

    // Add the custom-transition class after a small delay
    setTimeout(function() {
        const titleElement = document.getElementById('titlu');
        titleElement.classList.add('custom-transition');

        // Update the text within the paragraph based on the selected theme
        const themeText = document.getElementById('theme-text');
        const otherText = document.getElementById('descriere_concisa');
        
        if (theme === 'light') {
            themeText.textContent = 'Alege latura întunecată';
            otherText.textContent = 'Întunericul preia controlul • Website-ul se transformă în modul întunecat, aducând o atmosferă misterioasă și elegantă.';
        } else {
            themeText.textContent = 'Alege latura luminoasă';
            otherText.textContent = 'Lumina strălucește • Website-ul se schimbă în modul luminos, creând o atmosferă vibrantă și energică.';
        }
    }, 100);
}

// Function to load the user preference from local storage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }
}

// Load the theme on initial page load
loadTheme();