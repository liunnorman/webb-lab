import { Link } from "react-router-dom";
import brynHeadshot from "../assets/bryn-webb.jpg";
import logo from "../assets/logo.png";

export default function BrynProfile() {
  return (
    <main>
      <SiteNav />

      <section className="profileHero">
        <div className="profileIntro">
          <p className="eyebrow">Principal Investigator</p>
          <h1>Bryn Webb, MD</h1>
          <p>
            Dr. Webb leads a translational research program focused on rare
            pediatric disorders, clinical genomics, stem cell disease modeling,
            and functional approaches to understand disease mechanisms.
          </p>
        </div>

        <figure className="profilePortrait">
          <img src={brynHeadshot} alt="Bryn Webb, MD" />
        </figure>
      </section>

      <div className="backBand">
        <Link to="/#people">Back to people</Link>
      </div>

      <section className="profileContent">
        <div className="profileSection">
          <h2>About</h2>
          <div>
            <p>
              The Webb Laboratory works at the intersection of pediatric
              genetics, rare disease discovery, stem cell biology, and
              functional genomics. Dr. Webb's group connects clinical
              observations with human cellular models to better understand how
              genetic variation contributes to rare pediatric disease.
            </p>
          </div>
        </div>

        <div className="profileSection">
          <h2>Research Focus</h2>
          <div>
            <p>
              The lab studies rare neurodevelopmental and congenital disorders
              through deep phenotyping, genomic discovery, patient-derived stem
              cell models, and disease-relevant functional assays.
            </p>

            <div className="profileLinks">
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/?term=Webb+Bryn"
                target="_blank"
                rel="noopener noreferrer"
              >
                PubMed Profile →
              </a>
              <Link to="/#research">Lab Research →</Link>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <strong>Webb Laboratory</strong>
        <span>University of Wisconsin School of Medicine and Public Health</span>
      </footer>
    </main>
  );
}

function SiteNav() {
  return (
    <nav className="navbar">
      <Link className="brand" to="/">
        <img src={logo} alt="Webb Laboratory" className="navbarLogo" />
        <div>
          <strong>WEBB LABORATORY</strong>
          <span>University of Wisconsin School of Medicine and Public Health</span>
        </div>
      </Link>

      <input type="checkbox" id="menu-toggle" className="menuToggle" />

      <label htmlFor="menu-toggle" className="menuButton">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div className="links">
        <Link to="/#research">Research</Link>
        <Link to="/#projects">Disease Pages</Link>
        <Link to="/#people">People</Link>
        <Link to="/#publications">Publications</Link>
        <Link to="/#join">Join Us</Link>
      </div>
    </nav>
  );
}
