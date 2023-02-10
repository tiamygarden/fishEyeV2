import MediaCardPhoto from './MediaCardPhoto.js';
import MediaCardVideo from './MediaCardVideo.js';

export default class MediaCardFactory {

    constructor({ image, video, likes, title, photographerId }, Subject) {
        const media = {
            likes,
            title,
            image: `./assets/photographers/medias/${photographerId}/${image}`,
            video: `./assets/photographers/medias/${photographerId}/${video}`,
        };

        if (image) {
            return new MediaCardPhoto(media, Subject);
        }

        if (video) {
            return new MediaCardVideo(media, Subject);
        }
    }
}
