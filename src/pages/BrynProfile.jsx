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
              href="https://www.pediatrics.wisc.edu/staff/webb-md-bryn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pediatrics Profile →
            </a>
            <a
              href="https://precisionmedicine.wisc.edu/staff/webb-bryn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Precision Medicine Profile →
            </a>
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
            <h2>Board Certifications</h2>
            <p>Clinical Genetics and Genomics</p>
            <p>Clinical Molecular Genetics</p>
            <p>Pediatrics</p>
          </div>

          <div>
            <h2>On the Web</h2>
            <a
              href="https://www.pediatrics.wisc.edu/staff/webb-md-bryn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              UW Pediatrics Profile →
            </a>
            <a
              href="https://precisionmedicine.wisc.edu/staff/webb-bryn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Precision Medicine Profile →
            </a>
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
          <h2>Biography</h2>
          <div>
            <p>
              Dr. Webb is a physician-scientist whose work centers on children
              and families affected by rare genetic disorders. Her laboratory
              brings together clinical genetics, disease gene discovery, stem
              cell modeling, and functional genomics to better understand the
              molecular mechanisms that underlie rare pediatric disease.
            </p>

            <p>
              She trained in pediatrics, clinical genetics, and molecular
              genetics, and applies that background to translational research
              questions that begin with careful patient phenotyping and extend
              into human cellular models. The Webb Laboratory focuses on
              connecting clinical observations with experimental systems that
              can clarify disease mechanisms and support future diagnostic and
              therapeutic work.
            </p>
          </div>
        </div>

        <div className="profileSection">
          <h2>Credentials &amp; Training</h2>
          <div className="credentialList">
            <div>
              <h3>Medical School</h3>
              <p>University of Texas Southwestern Medical Center, Dallas, TX</p>
            </div>

            <div>
              <h3>Clinical Molecular Genetics Fellowship</h3>
              <p>Icahn School of Medicine at Mount Sinai, New York, NY</p>
            </div>

            <div>
              <h3>Combined Pediatrics / Clinical Genetics Residency</h3>
              <p>Icahn School of Medicine at Mount Sinai, New York, NY</p>
            </div>
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
