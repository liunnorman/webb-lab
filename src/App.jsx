import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import heroMinimalImage from "./assets/site-images/hero-minimal.svg";
import aimGeneDiscoveryImage from "./assets/site-images/aim-gene-discovery.svg";
import aimStemCellImage from "./assets/site-images/aim-stem-cell.svg";
import aimOmicsImage from "./assets/site-images/aim-omics.svg";
import logo from "./assets/logo.png";
import brynHeadshot from "./assets/bryn-webb.jpg";
import liaHeadshot from "./assets/lia.jpg";
import normanHeadshot from "./assets/norman.jpg";
import laurenHeadshot from "./assets/lauren.jpg";
import irshadHeadshot from "./assets/irshad.png";
import quinnHeadshot from "./assets/quinn.jpeg";
import sidHeadshot from "./assets/sid-satheesh.jpeg";
import BrynProfile from "./pages/BrynProfile";
import DiseasePage from "./pages/DiseasePage";
import { diseaseList } from "./pages/diseaseData";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people/bryn-webb" element={<BrynProfile />} />
        <Route path="/diseases/:slug" element={<DiseasePage />} />
      </Routes>
    </>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView();
      return;
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  const projects = [
    {
      label: "Mitochondrial Translation",
      title: "mt-ARS Disorders",
      text: "Mitochondrial translation disorders studied through rare disease genomics and stem cell modeling.",
      slug: diseaseList[0].slug,
    },
    {
      label: "Neurodevelopment",
      title: "POU4F1",
      text: "POU4F1-related disease studied with stem cell models of neuronal development.",
      slug: diseaseList[1].slug,
    },
    {
      label: "Congenital Facial Weakness",
      title: "Moebius Syndrome",
      text: "Deep phenotyping and genetics for congenital facial weakness and cranial dysinnervation.",
      slug: diseaseList[2].slug,
    },
    {
      label: "Clinical Genomics",
      title: "Undiagnosed Disease",
      text: "Connecting deep phenotyping, genomic testing, and discovery for patients without a diagnosis.",
      slug: diseaseList[3].slug,
    },
  ];

  const people = [
  {
  name: "Irshad Ali, PhD",
  role: "Research Scientist",
  image: irshadHeadshot,
  },  
  {
    name: "Lia Margolin, BS",
    role: "Clinical Research Coordinator",
    image: liaHeadshot,
  },
  {
    name: "Norman Liu, BS",
    role: "Medical Student",
    image: normanHeadshot,
  },
  {
  name: "Lauren Onigkeit",
  role: "Undergraduate Research Assistant",
  image: laurenHeadshot
},
  {
  name: "Sid Satheesh",
  role: "Undergraduate Research Assistant",
  image: sidHeadshot
},
  {
  name: "Quinn Koffman",
  role: "Honorary Associate",
  image: quinnHeadshot
},
];

  return (
    <main>
      <nav className="navbar">
  <div className="brand">
    <img src={logo} alt="Webb Laboratory" className="navbarLogo" />

    <div>
      <strong>WEBB LABORATORY</strong>
      <span>University of Wisconsin School of Medicine and Public Health</span>
    </div>
  </div>

  <input type="checkbox" id="menu-toggle" className="menuToggle" />

  <label htmlFor="menu-toggle" className="menuButton">
    <span></span>
    <span></span>
    <span></span>
  </label>

  <div className="links">
    <a href="#research">Research</a>
    <a href="#projects">Disease Pages</a>
    <a href="#people">People</a>
    <a href="#publications">Publications</a>
    <a href="#join">Join Us</a>
  </div>
</nav>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Advancing Precision Medicine</p>

          <h1>For Rare Pediatric Disorders</h1>

          <p>
            The Webb Laboratory integrates disease gene discovery, stem cell
            disease modeling, functional genomics, and translational research.
          </p>

          <a className="button" href="#research">
            Learn More →
          </a>
        </div>

        <div className="heroImage realHeroImage">
          <img src={heroMinimalImage} alt="Rare disease research graphic" />
          <span>Rare disease discovery</span>
        </div>
      </section>

      <section id="research">
        <ResearchBlock
          number="01"
          label="Disease Gene Discovery"
          title="From Families to Function"
          text="We connect unresolved clinical presentations with genomic discovery and functional validation."
          imageClass="imageGene"
          image={aimGeneDiscoveryImage}
          imageAlt="Disease gene discovery graphic"
        />

        <ResearchBlock
          number="02"
          label="Stem Cell Disease Modeling"
          title="Modeling Development. Revealing Mechanisms."
          text="Patient-derived and engineered iPSC systems allow us to study rare diseases in human cells."
          imageClass="imageStem"
          image={aimStemCellImage}
          imageAlt="Stem cell disease modeling graphic"
        />

        <ResearchBlock
          number="03"
          label="Functional Genomics & Multi-Omics"
          title="Integrating Data. Driving Discovery."
          text="Transcriptomics, mitochondrial assays, and model systems help uncover disease mechanisms."
          imageClass="imageOmics"
          image={aimOmicsImage}
          imageAlt="Functional genomics and multi-omics graphic"
        />
      </section>

      <section id="projects" className="projects">
        <p className="eyebrow">Disease Pages</p>

        <h2>Focused pages for rare disease biology.</h2>

        <div className="projectGrid">
          {projects.map(({ label, title, text, slug }, i) => (
            <Link className="projectCard" to={`/diseases/${slug}`} key={title}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <p className="cardLabel">{label}</p>
              <h3>{title}</h3>
              <p>{text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="people" className="people">
        <div className="peopleIntro">
          <div>
            <p className="eyebrow">People</p>
            <h2>A collaborative science community.</h2>
          </div>

          <p>
            The Webb Laboratory brings together clinicians, scientists,
            trainees, students, and collaborators working at the intersection of
            pediatric genetics, stem cell biology, and functional genomics.
          </p>
        </div>

        <article className="piCard">
          <img src={brynHeadshot} alt="Bryn Webb, MD" className="piPhoto" />

          <div className="piText">
            <p className="eyebrow">
              Principal Investigator · Associate Professor
            </p>
            <h3>Bryn Webb, MD</h3>
            <p>
              Dr. Webb leads a translational research program focused on rare
              pediatric disorders, clinical genomics, stem cell disease
              modeling, and functional approaches to understand disease
              mechanisms.
            </p>
            <Link className="button" to="/people/bryn-webb">
              View Profile →
            </Link>
          </div>
        </article>

        <div className="peopleGrid">
  {people.map((person) => (
    <article className="personCard" key={person.name}>
      {person.image ? (
        <img
          src={person.image}
          alt={person.name}
          className="personPhoto"
        />
      ) : (
        <div className="personPhoto placeholder"></div>
      )}

      <div className="personInfo">
        <h3>{person.name}</h3>
        <p>{person.role}</p>
      </div>
    </article>
  ))}
</div>
      </section>

      <section id="publications" className="publications">
        <div className="publicationsIntro">
          <div>
            <p className="eyebrow">Publications</p>
            <h2>From discovery to disease mechanism.</h2>
          </div>

          <p>
            Selected publications and scholarly work from the Webb Laboratory
            spanning rare disease genomics, stem cell modeling, and
            translational pediatric research.
          </p>
        </div>

       <div className="publicationCTA">
  <div className="publicationIcon">
    <span>▤</span>
  </div>

  <div className="publicationText">
    <h3>Explore the Webb Laboratory publication portfolio</h3>

    <p>
      View peer-reviewed publications, reviews, and collaborative research
      contributions authored by Dr. Bryn Webb and members of the Webb
      Laboratory.
    </p>
  </div>

  <a
    href="https://pubmed.ncbi.nlm.nih.gov/?term=Webb+Bryn"
    target="_blank"
    rel="noopener noreferrer"
    className="pubmedCard"
  >
    <span className="externalIcon">↗</span>
    <span>
      View Publications
      <br />
      on PubMed →
    </span>
  </a>
</div>

<LatestPublications />


      </section>

<section className="udpSection">
  <div className="udpText">
    <p className="eyebrow">Clinical Program</p>

    <h2>Looking for answers to an undiagnosed rare disease?</h2>

    <p>
      The UW Undiagnosed Disease Program (UW-UDP) evaluates children and adults with suspected rare genetic disorders who remain without a diagnosis despite extensive prior testing. As a designated clinical site of the NIH Undiagnosed Diseases Network (UDN), the program combines advanced genomic technologies, deep phenotyping, multidisciplinary clinical expertise, and research-driven investigation to identify underlying disease mechanisms and provide answers for patients and families. By bridging clinical care and scientific discovery, UW-UDP helps shorten the diagnostic odyssey while advancing our understanding of rare genetic disease.
    </p>
  </div>

  <a
    href="https://precisionmedicine.wisc.edu/uw-undiagnosed-genetic-disease-program/"
    target="_blank"
    rel="noopener noreferrer"
    className="udpCard"
  >
    <span className="externalIcon">↗</span>

    <span>
      Learn About
      <br />
      UW-UDP →
    </span>
  </a>
</section>

      <section id="join" className="join">
        <div>
          <p className="eyebrow">Join Us</p>
          <h2>Build the next generation of rare disease discovery.</h2>
        </div>

        <p>
          We welcome collaborators, trainees, and students interested in rare
          disease genomics, stem cell modeling, mitochondrial biology,
          neurodevelopment, and translational pediatric research.
        </p>
      </section>

      <footer>
        <strong>Webb Laboratory</strong>
        <span>University of Wisconsin School of Medicine and Public Health</span>
      </footer>
    </main>
  );
}

function ResearchBlock({ number, label, title, text, imageClass, image, imageAlt }) {
  return (
    <section className="researchBlock">
      <div className="number">{number}</div>

      <div className="researchText">
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>

      <figure className={`researchImage ${imageClass}`}>
        <img src={image} alt={imageAlt} />
      </figure>
    </section>
  );
}

function LatestPublications() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch("/api/publications")
      .then((res) => res.json())
      .then((data) => setPublications(data))
      .catch(() => setPublications([]));
  }, []);

  return (
    <div className="latestPublications">
      <p className="eyebrow">Latest Publications</p>

      {publications.map((pub) => (
        <a
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="latestPublication"
          key={pub.id}
        >
          <span>{pub.date}</span>
          <div>
            <h3>{pub.title}</h3>
            <p>{pub.journal}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
