export default class PhotographerRecap{
    constructor(photographer, medias) {
        this._photographer=photographer
        this._medias=medias
        // console.log(photographer)
    }

    get dom(){
        let totalLikes = this._medias.reduce((acc, cur) => acc + cur.likes, 0);
        let recapPhotographer=document.createElement('div')
        recapPhotographer.classList.add("likes__modal__likes")
        recapPhotographer.innerHTML = `
            <div class="likes__modal__likes" tabindex="0">
                <span id="totalLikes" tabindex="0">${totalLikes}</span>
                <i class="fa-solid fa-heart heartIcon" aria-label="likes" tabindex="0"></i>
            </div>
            <div class="likes__modal__price" aria-label="prix par jour" tabindex="0">
                ${this._photographer.price}&euro; / jour
            </div>
        `;
        return recapPhotographer;
    }
}
