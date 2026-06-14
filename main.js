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


// ----- ----- ----- ----- -----
// ----- ----- ----- ----- -----

// Lightbox popup modal for product images
(function () {
  const mainImg  = document.getElementById('mainImg');
  const lb       = document.getElementById('lb');
  const lbImg    = document.getElementById('lbImg');
  const thumbs   = document.querySelectorAll('.thumbnail');

  // Thumbnail click → swap main image, mark active
  thumbs.forEach(function (t) {
    t.addEventListener('click', function () {
      thumbs.forEach(function (x) { x.style.outline = ''; });
      t.style.outline = '2px solid #f60';
      mainImg.src = t.src;
      mainImg.alt = t.alt;
    });
  });

  // Highlight first thumb by default
  if (thumbs.length) thumbs[0].style.outline = '2px solid #f60';

  // Main image click → open lightbox
  mainImg.style.cursor = 'zoom-in';
  mainImg.addEventListener('click', function (e) {
    e.preventDefault();           // don't follow the Stripe link
    lbImg.src = mainImg.src;
    lb.style.display = 'flex';
  });

  // Close lightbox
  function closeLb() { lb.style.display = 'none'; }
  document.getElementById('lbClose').addEventListener('click', closeLb);
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLb(); });
})();
