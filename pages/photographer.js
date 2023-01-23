import { Api } from '../api/Api.js';
import MediaCardFactory from '../components/MediaCardFactory.js';

class App {
    #headerWrapper;
    #mediasWrapper;

    constructor() {
        this.#headerWrapper = document.getElementById('photographHeaderSection');
        this.#mediasWrapper = document.getElementById('photographMediasSection');
    }

    async main() {
        const photographerId = new URLSearchParams(window.location.search).get('id');
        const medias = await new Api().getMediasForPhotographer(photographerId);
        let photographer = await new Api().getPhotographerById(photographerId);

        console.log(photographer)

        medias.forEach(media => {
            this.#mediasWrapper.appendChild(new MediaCardFactory(media).dom);
        });
    }
}

new App().main();
