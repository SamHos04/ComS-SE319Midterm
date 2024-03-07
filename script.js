document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            switch (page) {
                case 'ArtGallery.html':
                    populateGallery(data.artworks);
                    break;
                case 'ArtistProfiles.html':
                    populateArtists(data.artists);
                    break;
                case 'Events.html':
                    populateEvents(data.events);
                    break;
                default:
                    break;
            }
        });
});

function populateGallery(artworks) {
    const container = document.getElementById('gallery-container');
    artworks.forEach(art => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${art.title}</h3>
            <img src="${art.image}" alt="${art.title}" style="width: 200px; height: auto;">
            <p>Artist: ${art.artist}</p>
            <p>Description: ${art.description}</p>
        `;
        container.appendChild(div);
    });
}

function populateArtists(artists) {
    const container = document.getElementById('artist-container');
    artists.forEach(artist => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${artist.name}</h3>
            <img src="${artist.image}" alt="${artist.name}" style="width: 200px; height: auto;">
            <p>Bio: ${artist.bio}</p>
        `;
        container.appendChild(div);
    });
}

function populateEvents(events) {
    const container = document.getElementById('events-container');
    events.forEach(event => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${event.title}</h3>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>
            <p>Description: ${event.description}</p>
        `;
        container.appendChild(div);
    });
}
