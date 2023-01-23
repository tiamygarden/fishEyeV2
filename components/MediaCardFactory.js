import MediaCardPhoto from './MediaCardPhoto.js';
import MediaCardVideo from './MediaCardVideo.js';

export default class MediaCardFactory {
    constructor({ image, video, likes, title, photographerId }) {
        const media = {
            likes,
            title,
        };

        if (image) {
            return new MediaCardPhoto({
                ...media,
                image: `/assets/photographers/medias/${photographerId}/${image}`,
            });
        }

        if (video) {
            return new MediaCardVideo({
                ...media,
                video: `/assets/photographers/medias/${photographerId}/${video}`,
            });
        }
    }
}
