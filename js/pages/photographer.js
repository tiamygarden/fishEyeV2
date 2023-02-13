import {Api} from '../api/Api.js';
import MediaCardFactory from '../factories/MediaCardFactory.js';
import PhotographerHeader from '../components/PhotographerHeader.js';
import PhotographerRecap from '../components/PhotographerRecap.js';
import SorterForm from '../components/SorterForm.js';
import Subject from '../observers/likes/Subject.js';
import Counter from '../observers/likes/Counter.js';
import Lightbox from "../templates/LightboxModal.js";

class App {
    _headerWrapper;
    _mediasWrapper;
    _recapWrapper;
    _mediasOrderBy;

    constructor() {
        this._headerWrapper = document.getElementById('photographHeaderSection');
        this._mediasWrapper = document.getElementById('photographMediasSection');
        this._recapWrapper = document.getElementById('likesModal');
        this._mediasOrderBy = document.getElementById('mediasOrderByPlaceholder');

        //like pub/sub
        this.Subject = new Subject()
        this.Counter = new Counter()

        this.Subject.subscribe(this.Counter)
    }

    async main() {
        const photographerId = new URLSearchParams(window.location.search).get('id');
        const medias = await new Api().getMediasForPhotographer(photographerId);
        const photographer = await new Api().getPhotographerById(photographerId);

        // Insère le composant PhotograhperHeader dans son emplacement
        this._headerWrapper.appendChild(new PhotographerHeader(photographer).dom);

        this._mediasOrderBy.appendChild(new SorterForm(medias, this._mediasWrapper, this.Subject).dom);

        medias.forEach(media => {
            this._mediasWrapper.appendChild(new MediaCardFactory(media, this.Subject).dom);
        });

        this._recapWrapper.appendChild(new PhotographerRecap(photographer, medias).dom);
    }
}

new App().main();
window.Lightbox = new Lightbox()