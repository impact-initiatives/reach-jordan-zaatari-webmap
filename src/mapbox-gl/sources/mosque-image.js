import images from '../../constants/images.js';
import sources from '../../constants/sources.js';

function sourceMosqueImage({ map }) {
  return new Promise((resolve) => {
    map.loadImage(images.MOSQUE, (error, image) => {
      addSource({ image, map });
      resolve();
    });
  });
}

function addSource({ image, map }) {
  map.addImage(sources.MOSQUE_IMAGE, image);
}

export default sourceMosqueImage;
