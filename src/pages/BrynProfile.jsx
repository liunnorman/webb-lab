import { Link } from "react-router-dom";
import brynHeadshot from "../assets/bryn-webb.jpg";
import logo from "../assets/logo.png";

export default function BrynProfile() {
  return (
    <main>
      <SiteNav />

      <section className="profileHero">
        <figure className="profilePortrait">
          <img src={brynHeadshot} alt="Bryn Webb, MD" />
        </figure>

        <div className="profileIntro">
          <p className="eyebrow">Faculty Profile</p>
          <h1>Bryn Webb, MD</h1>
          <p className="profileTitle">
            Principal Investigator · Associate Professor
          </p>
          <p>
            The Webb Laboratory integrates disease gene discovery, stem cell
            disease modeling, functional genomics, and translational research
            for rare pediatric disorders.
          </p>

          <div className="profileActions">
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/?term=Webb+Bryn"
              target="_blank"
              rel="noopener noreferrer"
            >
              PubMed →
            </a>
            <Link to="/#research">Lab Research →</Link>
          </div>
        </div>
      </section>

      <div className="backBand">
        <Link to="/#people">Back to people</Link>
      </div>

      <section className="profileContent">
        <aside className="profileDetails">
          <div>
            <h2>Title</h2>
            <p>Principal Investigator</p>
            <p>Associate Professor</p>
          </div>

          <div>
            <h2>Institution</h2>
            <p>University of Wisconsin School of Medicine and Public Health</p>
          </div>

          <div>
            <h2>On the Web</h2>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/?term=Webb+Bryn"
              target="_blank"
              rel="noopener noreferrer"
            >
              PubMed Profile →
            </a>
          </div>
        </aside>

        <div className="profileMain">
        <div className="profileSection">
          <h2>Overview</h2>
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
