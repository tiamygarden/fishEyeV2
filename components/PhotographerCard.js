export default class PhotographerCard {
    constructor({ name, portrait, city, country, tagline, price, id }) {
        this._photographer = {
            id,
            name: name, // default notation
            city, // short notation
            portrait : `/assets/photographers/portraits/${portrait}`,
            country,
            tagline,
            price,
        };

    }

    get dom() {
        const el = document.createElement('article');
        el.innerHTML = `
            <a href="photographer.html?id=${this._photographer.id}">
                <img src="${this._photographer.portrait}" alt="${this._photographer.name}">
                <h2>${this._photographer.name}</h2>
            </a>
            <p class="location" aria-label="localisation">${this._photographer.city}, ${this._photographer.country}</p>
            <p class="tagline" aria-label="tagline">${this._photographer.tagline}</p>
            <p class="price" aria-label="prix €/jour">${this._photographer.price}€/jour</p>
        `;
        return el;
    }
}
