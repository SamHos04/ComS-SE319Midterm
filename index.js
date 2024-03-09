document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    fetch('data.json')  
        .then(response => response.json())
        .then(data => {
            if (page === 'ArtistProfiles.html') {
                populateArtists(data.artists);
            }
        })
        .catch(error => console.error("Error loading the data:", error));
});

function populateArtists(artists) {
    const container = document.getElementById('artist-container');
    artists.forEach(artist => {
        const artistDiv = document.createElement('div');
        artistDiv.className = 'artist-profile';
        artistDiv.innerHTML = `
            <img src="${artist.imageOfPerson}" alt="Portrait of ${artist.name}" style="width: 200px; height: auto;">
            <h3>${artist.name}</h3>
            <p><strong>Most Famous Piece:</strong> ${artist.mostFamousPiece}</p>
            <p><strong>Country of Origin:</strong> ${artist.countryOfOrigin}</p>
            <p><strong>Other Work:</strong> ${artist.otherWork}</p>
        `;
        container.appendChild(artistDiv);
    });
}
