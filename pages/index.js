import { Api } from '../api/Api.js';
import PhotographerCard from '../components/PhotographerCard.js';

class App {
    /**
     * variable contenant le wrapper
     * dans lequel est injectée la liste des cards des photographes
     */
    #wrapper;

    constructor() {
        this.#wrapper = document.getElementById('photographer_section');
    }

    async main() {
        const photographers = await new Api().getPhotographers();

        photographers.forEach(photographer => {
            this.#wrapper.appendChild(new PhotographerCard(photographer).dom);
        });
    }
}

new App().main();
