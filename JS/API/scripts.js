// Initial Test
search_btn.addEventListener("click", () => {
    //grab the thing
    const search_term = search_btn.innerText;
    //where we going, to this unsplash api here
    const API_URL = `https://api.unsplash.com/search/photos?client_id=7YJ_au6K1r-YrGOowfWlOVcbN7wnyKdxkwk3i_ChBkU&query=${search_term}`;
      
    // fetch(API_URL)
    //     .then((res) => res.json())
    //     //destructuring an object
    //     .then(({ results: unsplashPhotos }) => {
    //     for (const photo of unsplashPhotos) {
    //         const photoUrl = photo.urls.thumb;
    //         const img = document.createElement("img");
    //         img.setAttribute("src", photoUrl);
    //         img.setAttribute("alt", photo.alt_description);
    //         photos_container.appendChild(img);
    //     }
    // });
    //we want that response to come back as jason.
fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
        const unsplashPhotos = data.results;

        for (const photo of unsplashPhotos){
            const photoUrl = photo.urls.thumb;
            const img = document.createElement("img");
            img.setAttribute("src", photoUrl);
            img.setAttribute("alt", photo.alt_description);
            photos_container.appendChild(img);
        }
    });
});



