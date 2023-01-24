export default class PhotographerHeader {
    _photographer;

    constructor(photographer) {
        this._photographer = photographer;
    }

    get dom() {
        const element = document.createElement('article');
        element.classList.add('photograph_header');
        element.innerHTML = `
            <div class="photograph-info" aria-label="informations" tabindex="0">
                <div class="photograph-name" aria-label="nom">
                    <h1>${this._photographer.name}</h1>
                </div>
                <div class="photograph-txt" aria-label="origines et tagline">
                    <h2>${this._photographer.city}, ${this._photographer.country}</h2>
                    <p>${this._photographer.tagline}</p>
                </div>
            </div>
            <div class="photograph_column-center">
                <button type="button" class="contact_me contact_button" onclick="displayModal()" aria-label="contactez-moi">Contactez-moi</button>
            </div>
            <div class="photograph_column-right" tabindex="0">  
                <div class="photographer_portrait">
                    <img src="./assets/photographers/portraits/${this._photographer.portrait}" alt="${this._photographer.name}"/>
                </div>  
            </div>
        `;
        return element;
    }
}
