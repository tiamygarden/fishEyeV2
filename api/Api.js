export class Api {
    #isFetched = false;
    #photographers = [];
    #medias = [];

    // Singleton constructor
    constructor() {
        if (Api.exists) {
            return Api.instance;
        }

        Api.exists = true;
        Api.instance = this;
    }

    async get() {
        if (this.#isFetched) return;

        const data = await fetch('../data/photographers.json')
            .then(res => res.json())
            .catch(err => console.error('an error occurs', err));

        this.#photographers = data.photographers;
        this.#medias = data.medias;

        this.#isFetched = true;
    }

    async getPhotographers() {
        await this.get();

        return this.#photographers;
    }

    async getPhotographerById(id) {
        await this.get();
        id = parseInt(id);

        return this.#photographers.find(photographer => photographer.id === id);
    }

    async getMediasForPhotographer(id) {
        await this.get();
        id = parseInt(id);

        return this.#medias.filter(media => {
            return media.photographerId === id;
        });
    }
}
