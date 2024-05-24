import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const KikitoGallery = ({ images = [], ...props }) => {
  const [index, setIndex] = useState(-1);

  const currentImage = images?.[index];
  const nextIndex = (index + 1) % images?.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images?.length - 1) % images?.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => {
    setIndex(index);
  };

  const handleClose = () => {
    setIndex(-1);
  };

  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  const finalesImages = images?.length
    ? images?.map((image) => ({
        ...image,
        customOverlay: (
          <div className="custom-overlay__caption">
            <div>{image.caption}</div>
            {image.tags &&
              image.tags.map((t, index) => <div key={index}>{t.title}</div>)}
          </div>
        ),
      }))
    : [];

  return (
    <>
      <Gallery
        images={finalesImages}
        onClick={handleClick}
        enableImageSelection={false}
        margin={0}
      />
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          onAfterOpen={() => {}}
          mainSrc={currentImage.src}
          imageTitle={currentImage.caption}
          nextSrc={nextImage.original}
          prevSrc={prevImage.original}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </>
  );
};
export default KikitoGallery;
