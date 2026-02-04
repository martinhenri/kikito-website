import { NavLink } from "react-router-dom";
import Tile from "../components/Tile/Tile";

const Home = () => {
  return (
    <div className="container">
      <div id="home-menu-tiles">
        <div className="d-flex justify-content-center">
          {/* // menu with tiles with images */}
          <NavLink to="/posters" className={"tile-link"}>
            <Tile backgroundImage="/menu/AFFICHE.webp" text="Affiches" />{" "}
          </NavLink>
          <NavLink to="/custom" className={"tile-link"}>
            <Tile
              backgroundImage="/menu/PERSONALISER02.webp"
              text="Illustrations personnalisées"
            />
          </NavLink>
          <NavLink to="/concepts" className={"tile-link"}>
            <Tile
              backgroundImage="/menu/CONCEPT.webp"
              text="Concepts pour projets"
            />
          </NavLink>
        </div>
        <div className="d-flex justify-content-center">
          <NavLink to="/animation" className={"tile-link"}>
            <Tile backgroundImage="/menu/video02.webp" text="Vidéos" />
          </NavLink>{" "}
          <NavLink to="/paintings" className={"tile-link"}>
            <Tile backgroundImage="/menu/PEINTURE.webp" text="Peintures" />
          </NavLink>{" "}
          <NavLink to="/3d" className={"tile-link"}>
            <Tile backgroundImage="/menu/COMPOSITING.webp" text="Compositing" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
