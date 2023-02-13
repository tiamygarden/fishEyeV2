export default class {
    _wrapper;
    _items = [];
    _currentIndex = 0;
    _listenerController;

    constructor(media) {
        this.media = media;

        const el = document.createElement('div')
        el.setAttribute('id', 'lightboxWrapper')
        document.getElementById('main').append(el)

        this._wrapper = document.getElementById('lightboxWrapper');
    }

    open(event, el) {
        event.preventDefault()

        this._items = Array.from(document.getElementsByClassName('lightbox'))
        this._currentIndex = this._items.findIndex(item => item.href === el.href);
        this.render()
        this._wrapper.classList.add('show')
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'
        this._wrapper.setAttribute('tabindex', '0')
        this._wrapper.focus()
        this.addListeners()
    }

    close() {
        this._wrapper.classList.remove('show')
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        this.removeListeners()
    }

    render() {
        this._wrapper.innerHTML = this.createModal()
    }

    createModal() {
        let html;
        const src = this._items[this._currentIndex].href
        console.log(this._items[this._currentIndex])
        if (this.isVideo(src)) {
            html = `<video title="${this._items[this._currentIndex].title}" controls>
                        <source src="${src}" type="video/mp4">
                    </video>`;
        } else {
            html = `<img src="${src}" alt="${this._items[this._currentIndex].title}">`;
        }
        return `
                <div class="viewport">
                    <button onclick="window.Lightbox.previous()" aria-label="précedent" class="prev" tabindex="0">
                       <i id="previous" class="fa-solid fa-chevron-left"></i>
                    </button>
                    
                    <div class="media">
                        ${html}
                    </div>
                    
                    <button onclick="window.Lightbox.next()" aria-label="suivant" class="next" tabindex="0">
                       <i id="next" class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                    
                <h3>${this._items[this._currentIndex].title}</h3>
                <button class="close" aria-label="fermer" onclick="window.Lightbox.close()">
                    <i class="fa-solid fa-xmark"></i>
                </button>
        `;
    }

    isVideo(src) {
        return src.includes('.mp4');
    }

    next() {
        this._currentIndex++;
        if (this._currentIndex >= this._items.length) {
            this._currentIndex = 0;
        }
        this.render()
    }

    previous() {
        this._currentIndex--;
        if (this._currentIndex < 0) {
            this._currentIndex = this._items.length - 1;
        }
        this.render()
    }

    addListeners() {
        this._listenerController = new AbortController()

        window.addEventListener('keyup', e => {
            if (e.code === 'ArrowLeft') {
                this.previous();
            }
            if (e.code === 'ArrowRight') {
                this.next();
            }
            if (e.code === 'Escape') {
                this.close();
            }
        }, {signal: this._listenerController.signal});
    }

    removeListeners() {
        this._listenerController.abort();
    }
}