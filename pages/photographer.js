import { Api } from '../api/Api.js';
import MediaCardFactory from '../components/MediaCardFactory.js';
import PhotographerHeader from '../components/PhotographerHeader.js';

class App {
    _headerWrapper;
    _mediasWrapper;

    constructor() {
        this._headerWrapper = document.getElementById('photographHeaderSection');
        this._mediasWrapper = document.getElementById('photographMediasSection');
    }

    async main() {
        const photographerId = new URLSearchParams(window.location.search).get('id');
        const medias = await new Api().getMediasForPhotographer(photographerId);
        let photographer = await new Api().getPhotographerById(photographerId);

        // Insère le composant PhotograhperHeader dans son emplacement
        this._headerWrapper.appendChild(new PhotographerHeader(photographer).dom)

        medias.forEach(media => {
            this._mediasWrapper.appendChild(new MediaCardFactory(media).dom);
        });
    }
}

new App().main();
