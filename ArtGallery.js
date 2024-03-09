fetch("./data.json")
    .then(response => response.json())
    .then(artGallery => loadArtGallery(artGallery))
    .catch(error => console.error('Error fetching art for gallery:', error));

function loadArtGallery(artGallery) {
    var artworksContainer = document.getElementById("col");
    for (var i = 0; i < artGallery.artwork.length; i++) {
        let name = artGallery.artwork[i].name;
        let artist = artGallery.artwork[i].artist;
        let image = artGallery.artwork[i].imageOfArt;
        let cardId = "card" + i.toString();
        let cardArtwork = document.createElement("div");
        cardArtwork.classList.add("col");
        cardArtwork.innerHTML = `
            <div id=${cardId} class="card shadow-sm">
                <img src="${image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text"><strong>${name}</strong> by ${artist}</p>
                    </div>
                </div>
            </div>
        `;
        artworksContainer.appendChild(cardArtwork);
    }
}
