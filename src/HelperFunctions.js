
/*
Funtion to loead images from Firebase
*/
const loadImages = (imageUrls, callback) => {
    let imagesLoaded = 0;
  
    imageUrls.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imagesLoaded += 1;
        if (imagesLoaded === imageUrls.length) {
          callback();
        }
      };
    });
  };

  export default loadImages;
