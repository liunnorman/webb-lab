import { useEffect, useState } from "react";
import "./index.css";
import heroImage from "./assets/hero.jpg";
import logo from "./assets/logo.png";
import brynHeadshot from "./assets/bryn-webb.jpg";
import liaHeadshot from "./assets/lia.jpg";
import normanHeadshot from "./assets/norman.jpg";
import laurenHeadshot from "./assets/lauren.jpg";
import irshadHeadshot from "./assets/irshad.png";

export default function App() {
  const projects = [
    ["mt-ARS Disorders", "MARS2 & WARS2"],
    ["Neurodevelopment", "POU4F1"],
    ["Congenital Facial Weakness", "Moebius Syndrome"],
    ["Clinical Genomics", "Undiagnosed Disease Program"],
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
];

  const publications = [
    [
      "2025",
      "Generation of an induced pluripotent stem cell line from a patient with combined oxidative phosphorylation deficiency 25.",
      "Stem Cell Research",
    ],
    [
      "2025",
      "Functional modeling of rare pediatric neurodevelopmental disorders.",
      "Manuscript in preparation",
    ],
    [
      "2024",
      "Exploring the neurodevelopmental consequences of POU4F1 haploinsufficiency in human neurons.",
      "Society for Neuroscience",
    ],
  ];

  return (
    <main>
      <nav className="navbar">
  <div className="brand">
    <img src={logo} alt="Webb Laboratory" className="navbarLogo" />

    <div>
      <strong>WEBB LABORATORY</strong>
      <span>University of Wisconsin–Madison</span>
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
    <a href="#projects">Projects</a>
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
          <img src={heroImage} alt="hiPSC-derived cortical neurons" />
          <span>hiPSC-derived cortical neurons</span>
        </div>
      </section>

      <section id="research">
        <ResearchBlock
          number="01"
          label="Disease Gene Discovery"
          title="From Families to Function"
          text="We connect unresolved clinical presentations with genomic discovery and functional validation."
          imageClass="imageGene"
        />

        <ResearchBlock
          number="02"
          label="Stem Cell Disease Modeling"
          title="Modeling Development. Revealing Mechanisms."
          text="Patient-derived and engineered iPSC systems allow us to study rare diseases in human cells."
          imageClass="imageStem"
        />

        <ResearchBlock
          number="03"
          label="Functional Genomics & Multi-Omics"
          title="Integrating Data. Driving Discovery."
          text="Transcriptomics, mitochondrial assays, and model systems help uncover disease mechanisms."
          imageClass="imageOmics"
        />
      </section>

      <section id="projects" className="projects">
        <p className="eyebrow">Research Programs</p>

        <h2>Discovery platforms for rare disease biology.</h2>

        <div className="projectGrid">
          {projects.map(([label, title], i) => (
            <article className="projectCard" key={title}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <p className="cardLabel">{label}</p>
              <h3>{title}</h3>
            </article>
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
        <span>University of Wisconsin–Madison</span>
      </footer>
    </main>
  );
}

function ResearchBlock({ number, label, title, text, imageClass }) {
  return (
    <section className="researchBlock">
      <div className="number">{number}</div>

      <div className="researchText">
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>

      <div className={`researchImage ${imageClass}`}></div>
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