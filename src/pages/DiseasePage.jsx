import { Link, Navigate, useParams } from "react-router-dom";
import logo from "../assets/logo.png";
import diseaseMtarsImage from "../assets/site-images/disease-mtars.svg";
import diseasePou4f1Image from "../assets/site-images/disease-pou4f1.svg";
import diseaseMoebiusImage from "../assets/site-images/disease-moebius.svg";
import diseaseUndiagnosedImage from "../assets/site-images/disease-undiagnosed.svg";
import { diseaseList } from "./diseaseData";

const diseaseImages = {
  "mt-ars-disorders": diseaseMtarsImage,
  pou4f1: diseasePou4f1Image,
  moebius: diseaseMoebiusImage,
  "undiagnosed-disease": diseaseUndiagnosedImage,
};

export default function DiseasePage() {
  const { slug } = useParams();

  if (slug === "mars2" || slug === "wars2") {
    return <Navigate to="/diseases/mt-ars-disorders" replace />;
  }

  const disease = diseaseList.find((item) => item.slug === slug);

  if (!disease) {
    return <Navigate to="/" replace />;
  }

  const heroImage = diseaseImages[disease.slug] ?? diseaseUndiagnosedImage;

  const sections = [
    [
      "Overview",
      <>
        {disease.highlight && (
          <p className="discoveryCallout">{disease.highlight}</p>
        )}
        <p>{disease.overview}</p>
        {disease.cta && (
          <a
            className="inlineCTA"
            href={disease.cta[1]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {disease.cta[0]} ↗
          </a>
        )}
      </>,
    ],
    [
      "Disease / Clinical Features",
      <>
        <p>{disease.disease}</p>
        <ul>
          {disease.clinical.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>,
    ],
    [
      "Current Projects",
      <ul>
        {disease.projects.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>,
    ],
    [
      "Key Publications",
      <div className="publicationList">
        {disease.pubs.map(([title, journal, url]) => (
          <a href={url} target="_blank" rel="noopener noreferrer" key={url}>
            <strong>{title}</strong>
            <span>{journal}</span>
          </a>
        ))}
      </div>,
    ],
  ];

  return (
    <main>
      <SiteNav />

      <section className="diseaseHero">
        <div className="diseaseTitle">
          <p className="eyebrow">{disease.label}</p>
          <h1>{disease.title}</h1>
          <p>{disease.overview}</p>
        </div>

        <figure className="diseaseHeroImage">
          <img src={heroImage} alt={`${disease.title} research graphic`} />
          <figcaption>{disease.title} research</figcaption>
        </figure>
      </section>

      <div className="backBand">
        <Link to="/#projects">Back to disease pages</Link>
      </div>

      <div className="diseaseContent">
        {sections.map(([title, body]) => (
          <section className="diseaseSection" id={sectionId(title)} key={title}>
            <h2>{title}</h2>
            <div className="sectionBody">{body}</div>
          </section>
        ))}
      </div>

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

function sectionId(title) {
  return title.toLowerCase().replace(/\s*\/\s*/g, "-").replaceAll(" ", "-");
}
