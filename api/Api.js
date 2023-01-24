export class Api {
    _isFetched = false;
    _photographers = [];
    _medias = [];

    // Singleton constructor
    constructor() {
        if (Api.exists) {
            return Api.instance;
        }

        Api.exists = true;
        Api.instance = this;
    }

    async get() {
        if (this._isFetched) return;

        const data = await fetch('./data/photographers.json')
            .then(res => res.json())
            .catch(err => console.error('an error occurs', err));

        this._photographers = data.photographers;
        this._medias = data.medias;

        this._isFetched = true;
    }

    async getPhotographers() {
        await this.get();

        return this._photographers;
    }

    async getPhotographerById(id) {
        await this.get();
        id = parseInt(id);

        return this._photographers.find(photographer => photographer.id === id);
    }

    async getMediasForPhotographer(id) {
        await this.get();
        id = parseInt(id);

        return this._medias.filter(media => {
            return media.photographerId === id;
        });
    }
}
