let cachedData = null;  // Cache the JSON data

document.addEventListener('DOMContentLoaded', () => {
    // Fetch the JSON data once on page load
    fetch('/projects.json')
        .then(response => response.json())
        .then(data => {
            cachedData = data;  // Store the data in cache
            // Initially load 'Books' section
            loadContent('books');
        })
        .catch(error => console.error('Error loading JSON:', error));

    // Event Listeners for Navigation Buttons
    document.getElementById('booksButton').addEventListener('click', () => loadContent('books'));
    document.getElementById('websitesButton').addEventListener('click', () => loadContent('websites'));
    document.getElementById('projectsButton').addEventListener('click', () => loadContent('projects'));
});

// Load content based on selected section
function loadContent(type) {
    if (!cachedData) {
        console.error('No data available');
        return;
    }

    const contentSection = document.getElementById('content-section');
    contentSection.innerHTML = '';  // Clear previous content

    // Filter data by type (book, website, project)
    const filteredEntries = cachedData.entries.filter(entry => {
        if (type === 'books') return entry.type === 'book';
        if (type === 'websites') return entry.type === 'website';
        if (type === 'projects') return entry.type === 'project';
    });

    // Generate and append cards for each entry
    filteredEntries.forEach(entry => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${entry.image_url}" alt="${entry.title}" loading="lazy">
            <h3>${entry.title}</h3>
            <p>${entry.description}</p>
            ${entry.link1 ? `<a href="${entry.link1}" target="_blank">See it live</a>` : ''}
            ${entry.link2 ? `<a href="${entry.link2}" target="_blank">GitHub</a>` : ''}
        `;

        contentSection.appendChild(card);
    });
}

