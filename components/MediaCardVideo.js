export default class MediaCardVideo {
    _wrapper;

    constructor(media) {
        this._media = media;

        this._wrapper = document.createElement('article');
        this._wrapper.classList.add('photograph_media');
    }

    handleLikeButton() {
        // TODO
    }

    get dom() {
        this._wrapper.innerHTML = `
            <video class="photograph_media_movie photograph_media_all lightbox" src="${this._media.video}" title="${this._media.title}" aria-label="${this._media.title}" tabindex="0">
                <source class="photograph_media_all" src="${this._media.video}" type="video/mp4" tabindex="0">
            </video>
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
                    <i class="fa-solid fa-heart heartIcon" aria-label="like"></i>
                </div>
            </div>
             `;
        return this._wrapper;
    }
}
