import images from '../../constants/images.js';
import sources from '../../constants/sources.js';

function sourceMosqueImage({ map }) {
  return fetch(images.MOSQUE)
    .then((response) => response.blob())
    .then((blob) => {
      const img = document.createElement('img');
      img.onload = () => addSource({ image: img, map });
      img.src = URL.createObjectURL(blob);
    });
}

function addSource({ image, map }) {
  map.addImage(sources.MOSQUE_IMAGE, image);
}

export default sourceMosqueImage;
