import { Api } from '../api/Api.js';
import MediaCardFactory from '../components/MediaCardFactory.js';
import PhotographerHeader from '../components/PhotographerHeader.js';
import PhotographerRecap from '../components/PhotographerRecap.js';
import SorterForm from '../components/SorterForm.js';

class App {
    _headerWrapper;
    _mediasWrapper;
    _recapWrapper;
    _mediasOrderBy;

    constructor() {
        this._headerWrapper = document.getElementById('photographHeaderSection');
        this._mediasWrapper = document.getElementById('photographMediasSection');
        this._recapWrapper = document.getElementById('likesModal');
        this._mediasOrderBy= document.getElementById('mediasOrderByPlaceholder');
    }

    async main() {
        const photographerId = new URLSearchParams(window.location.search).get('id');
        const medias = await new Api().getMediasForPhotographer(photographerId);
        const photographer = await new Api().getPhotographerById(photographerId);

        // Insère le composant PhotograhperHeader dans son emplacement
        this._headerWrapper.appendChild(new PhotographerHeader(photographer).dom);

        this._mediasOrderBy.appendChild(new SorterForm(medias, this._mediasWrapper).dom);

        medias.forEach(media => {
            this._mediasWrapper.appendChild(new MediaCardFactory(media).dom);
        });

        this._recapWrapper.appendChild(new PhotographerRecap(photographer, medias).dom);
    }
}

new App().main();
