import React, { useCallback, useRef } from "react";
import { digitalDrawings, paintings } from "../components/Gallery/Images";
import KikitoGallery from "../components/Gallery/KikitoGallery";
const Paintings = () => {
  const scrollPaintingContainerRef = useRef(null);
  const scrollDrawingContainerRef = useRef(null);

  // useEffect(() => {
  //   const handleWheel = (event) => {
  //     const scrollContainer = scrollContainerRef.current;

  //     const containerBottom =
  //       scrollContainerRef?.current?.getBoundingClientRect().bottom;
  //     const containerTop =
  //       scrollContainerRef?.current?.getBoundingClientRect().top;

  //     // console.log("containerBottom", containerBottom);
  //     // console.log("containerTop", containerTop);
  //     const windowHeight = window.innerHeight;
  //     // console.log("windowHeight", windowHeight);

  //     const isAtEnd =
  //       scrollContainer.scrollLeft >=
  //       scrollContainer.scrollWidth - scrollContainer.clientWidth;

  //     const menu = document.getElementById("menu");
  //     const isAtStart = scrollContainer.scrollLeft === 0;

  //     // if (
  //     //   containerBottom > windowHeight &&
  //     //   containerBottom + event.deltaY < windowHeight
  //     // ) {
  //     //   event.preventDefault();
  //     //   window.scrollTo({
  //     //     top: containerTop - windowHeight / 2,
  //     //     behavior: "smooth",
  //     //   });
  //     // }

  //     if (
  //       (containerBottom < windowHeight && event.deltaY > 0 && !isAtEnd) ||
  //       (containerTop > menu.offsetHeight && event.deltaY < 0 && !isAtStart)
  //     ) {
  //       event.preventDefault();
  //       if (
  //         containerTop < menu.offsetHeight ||
  //         containerBottom > windowHeight
  //       ) {
  //         window.scrollTo({
  //           top: containerTop,
  //           behavior: "smooth",
  //         });
  //       }
  //       if (scrollContainerRef.current) {
  //         scrollContainerRef.current.scrollLeft += event.deltaY;
  //       }
  //     }
  //   };

  // window.addEventListener("wheel", handleWheel, {
  //   passive: false,
  // });

  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, []);

  const handleScroll = (direction, ref) => {
    const scrollContainer = ref.current;
    scrollContainer.scrollBy({
      left: (direction === "left" ? -1 : 1) * 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">
      <h1>PEINTURES</h1>
      <p>
        Je réalise mes œuvres avec la peinture du posca et de l'acrylique,
        enfant des années 90, mon style est marqué par la pop culture avec une
        palette de couleurs à la fois vives et douces, le rose, l'orange, le
        bleu, le vert et le jaune sont les tons qui revienne le plus.
      </p>
      <div className="display-flex-align-items-center">
        <button
          type="button"
          style={{ left: "15%", top: "60%" }}
          class="nav-button-gallery nav-button-gallery-prev"
          aria-label="Previous image"
          title="Previous image"
          onClick={() => handleScroll("left", scrollPaintingContainerRef)}
        ></button>
        <div
          ref={scrollPaintingContainerRef}
          className="kikito-gallery kikito-gallery-paintings"
        >
          <KikitoGallery images={paintings} />
        </div>
        <button
          type="button"
          style={{ right: "15%", top: "60%" }}
          class="nav-button-gallery nav-button-gallery-next"
          aria-label="Previous image"
          title="Previous image"
          onClick={() => handleScroll("right", scrollPaintingContainerRef)}
        ></button>
      </div>
      <div className="paintings-title">
        <div>
          <h1>
            <pan>DESSINS NUMERIQUES </pan>
            <img
              src="/logos/adobe-photoshop-logo-0.png"
              style={{ width: "40px", height: "40px", marginLeft: "30px" }}
              alt="photoshop-logo"
            />
            <img
              src="/logos/illustrator-icon-new.png"
              style={{ width: "30px", height: "30px" }}
              alt="illustrator-logo"
            />
          </h1>
        </div>
      </div>

      <p>
        Explorez mes créations en dessin numérique réaliser sur Photoshop et/ou
        Illustrator. Concepts de personnages, décors, affiches.
      </p>
      <div className="display-flex-align-items-center">
        <button
          type="button"
          style={{ left: "15%", top: "60%" }}
          class="nav-button-gallery nav-button-gallery-prev"
          aria-label="Previous image"
          title="Previous image"
          onClick={() => handleScroll("left", scrollDrawingContainerRef)}
        ></button>
        <div
          ref={scrollDrawingContainerRef}
          className="kikito-gallery kikito-gallery-digital-drawings"
        >
          <KikitoGallery images={digitalDrawings} maxRows={2} />
        </div>
        <button
          type="button"
          style={{ right: "15%", top: "60%" }}
          class="nav-button-gallery nav-button-gallery-next"
          aria-label="Previous image"
          title="Previous image"
          onClick={() => handleScroll("right", scrollDrawingContainerRef)}
        ></button>
      </div>
    </div>
  );
};

export default Paintings;
