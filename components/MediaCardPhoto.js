export default class MediaCardPhoto {
    constructor(media) {
        this._media = media;
    }

    get dom() {
        const el = document.createElement('article');
        el.classList.add('photograph_media');
        el.innerHTML = `
            <div class="photograph_media_picture photograph_media_all">
                <img src="${this._media.image}" alt="${this._media.title}" class="lightbox" tabindex="0"/>
            </div>
            <div class="photograph_media_infos">
                <div class="photograph_media_title" aria-label="${this._media.title}" tabindex="0">
                    <h3>${this._media.title}</h3>
                </div>
                <div class="photograph_media_likes" 
                    onclick="window.useLike.toggle(this)"
                    onkeydown="window.useLike.toggleOnEnter(this, event)"
                    aria-label="like" 
                    tabindex="0"
                >
                    <div class="likesCount">${this._media.likes}</div>
                    <i class="fa-solid fa-heart heartIcon" aria-label="like" role="button"></i>
                </div>
            </div>
             `;
        return el;
    }
}
