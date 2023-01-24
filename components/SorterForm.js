import MediaCardFactory from './MediaCardFactory.js';

export default class SorterForm {
    _medias;
    _mediasWrapper;

    constructor(medias, mediasWrapper) {
        this._medias = medias;
        this._mediasWrapper = mediasWrapper;

        if (!window.sorter) {
            window.sorter = this;
        }
    }

    sort(orderBy) {
        this._mediasWrapper.innerHTML = '';

        this.orderMedias(orderBy).forEach(media => {
            this._mediasWrapper.appendChild(new MediaCardFactory(media).dom);
        });
    }

    orderMedias(orderBy) {
        switch (orderBy) {
            case 'popularity':
                return this._medias.sort((a, b) => b.likes - a.likes);
            case 'date':
                return this._medias.sort((a, b) => new Date(b.date) - new Date(a.date));
            case 'title':
                return this._medias.sort((a, b) => a.title.localeCompare(b.title));
            default:
                return this._medias;
        }
    }

    get dom() {
        const el = document.createElement('div');
        el.innerHTML = `
            <select onchange="window.sorter.sort(event.target.value)">
                <option></option>
                <option value="popularity">Popularité</option>
                <option value="date">Date</option>
                <option value="title">Titre</option>
            </select>
        `;

        return el;
    }
}
