import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="d-flex" style={{ paddingTop: "10vh" }}>
        <img
          alt="Présentation"
          src="/documents/kikitropmims.webp"
          style={{ width: "25%", objectFit: "cover", borderRadius: "10px" }}
        />
        <div>
          <span className="display-flex-align-items-center pl-2">
            <h1
              className="mt-0 mb-0"
              style={{ fontFamily: "lemon-yellow-sun" }}
            >
              Léa Biscarat
            </h1>
          </span>
          <p className="pl-2">
            Diplômée d'un master en animation 3D avec une spécialisation en
            lighting et compositing, mon parcours professionnel m'a offert
            l'opportunité de travailler sur de superbes projets tels qu'Arcane,
            Idefix, Miraculous Ladybug et d'autres encore. Au-delà de mon
            implication dans l'animation, je suis également artiste peintre
            passionnée. Mon travail prend vie sur toile grâce à l'utilisation de
            l'acrylique et de posca, offrant des œuvres vibrantes et
            expressives.
            <br />
            <br />
            Je propose une gamme variée de services créatifs, incluant
            l'animation 2D/3D, le motion design, l'illustration 2D/3D, ainsi que
            la post-production et le montage vidéo.
            <br /> Mon expertise et mon engagement garantissent des réalisations
            de haute qualité, adaptées à vos besoins et à vos projets. Explorez
            ce site pour découvrir mon univers artistique, où l'animation, la 3D
            et la peinture se rencontrent. Merci de partager cette aventure
            artistique avec moi.
          </p>
        </div>
      </div>
      <div className="contact mt-1 mb-2">
        <span
          className="display-flex-align-items-center pl-1 pt-1"
          style={{
            fontFamily: "lemon-yellow-sun",
            fontSize: "1.5rem",
          }}
        >
          CONTACT
        </span>
        <div className="d-flex contact-icon-container mt-05">
          <a
            href="https://www.linkedin.com/in/l%C3%A9a-biscarat-b045aa133/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/logos/linkedin.webp" alt="linkedin icon" />
          </a>
          <a href="mailto:biscaratlea@gmail.com">
            <img src="/logos/gmail.webp" alt="gmail icon" />
          </a>
          <a
            href="https://www.instagram.com/leabis_l.p.c"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/logos/instagram.webp" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
