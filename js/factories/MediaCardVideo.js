export default class MediaCardVideo {
    _wrapper;

    constructor(media, Subject) {
        this._media = media;
        this.Subject =Subject

        this._wrapper = document.createElement('article');
        this._wrapper.classList.add('photograph_media');
    }

    handleLikeButton() {
        const that= this

        this._wrapper
            .querySelector('.photograph_media_likes')
            .addEventListener('click', function () {
                if (this.classList.contains('liked')) {
                    this.classList.remove('liked')
                    that.Subject.fire('DEC')

                    const el = this.getElementsByClassName('likesCount')[0]
                    el.innerHTML = (parseInt(el.innerHTML) - 1).toString()

                } else {
                    this.classList.add('liked')
                    that.Subject.fire('INC')


                    const el = this.getElementsByClassName('likesCount')[0]
                    el.innerHTML = (parseInt(el.innerHTML) + 1).toString()
                }
            })
    }

    get dom() {
        this._wrapper.innerHTML = `
            <video class="photograph_media_movie photograph_media_all lightbox" 
                    src="${this._media.video}" 
                    title="${this._media.title}" 
                    aria-label="${this._media.title}" 
                    data-src="${this._media.video}"
                    onclick="window.Lightbox.open('${this._media.video}')"
                    tabindex="0"
            >
                <source class="photograph_media_all" src="${this._media.video}" type="video/mp4" tabindex="0">
            </video>
            <div class="photograph_media_infos">
                <div class="photograph_media_title" aria-label="${this._media.title}" tabindex="0">
                    <h3>${this._media.title}</h3>
                </div>
                <div class="photograph_media_likes" aria-label="like" tabindex="0">
                    <div class="likesCount">${this._media.likes}</div>
                    <i class="fa-solid fa-heart heartIcon" aria-label="like"></i>
                </div>
            </div>
             `;
        this.handleLikeButton();
        return this._wrapper;
    }
}
