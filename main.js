document.addEventListener('DOMContentLoaded', () => {
    // Fetch the JSON data on page load
    fetch('/projects.json')
        .then(response => response.json())
        .then(data => {
            // Initially load 'Books' section
            loadContent('books', data);
        });

    // Event Listeners for Navigation Buttons
    document.getElementById('booksButton').addEventListener('click', () => loadContent('books'));
    document.getElementById('websitesButton').addEventListener('click', () => loadContent('websites'));
    document.getElementById('projectsButton').addEventListener('click', () => loadContent('projects'));
});

// Load content based on selected section
function loadContent(type) {
    fetch('/projects.json')
        .then(response => response.json())
        .then(data => {
            const contentSection = document.getElementById('content-section');
            contentSection.innerHTML = '';  // Clear previous content

            // Filter data by type (book, website, project)
            const filteredEntries = data.entries.filter(entry => {
                if (type === 'books') return entry.type === 'book';
                if (type === 'websites') return entry.type === 'website';
                if (type === 'projects') return entry.type === 'project';
            });

            // Generate cards for each entry
            filteredEntries.forEach(entry => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <img src="${entry.image_url}" alt="${entry.title}">
                    <h3>${entry.title}</h3>
                    <p>${entry.description}</p>
                    ${entry.link1 ? `<a href="${entry.link1}" target="_blank">See more</a>` : ''}
                    ${entry.link2 ? `<a href="${entry.link2}" target="_blank">GitHub</a>` : ''}
                `;

                // Append the card to the content section
                contentSection.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
}

