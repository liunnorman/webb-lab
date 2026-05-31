import "./index.css";

export default function App() {
  const projects = [
    [
      "mt-ARS Disorders",
      "MARS2 & WARS2",
      "Defining how mitochondrial aminoacyl-tRNA synthetase variants disrupt oxidative phosphorylation and neurodevelopment.",
    ],
    [
      "Neurodevelopment",
      "POU4F1",
      "Modeling POU4F1-related neurodevelopmental disease using human stem-cell derived neurons.",
    ],
    [
      "Congenital Facial Weakness",
      "Moebius Syndrome",
      "Investigating genetic and developmental mechanisms underlying cranial nerve disorders.",
    ],
    [
      "Clinical Genomics",
      "Undiagnosed Disease Program",
      "Connecting genomic discovery, deep phenotyping, and functional validation for rare disease diagnosis.",
    ],
  ];

  const people = [
    ["Bryn Webb, MD", "Principal Investigator"],
    ["Research Staff", "Irshad Ali, PhD"],
    ["Medical Students", "Norman Liu"],
    ["Undergraduate Students", "Noah Schrodt · Lia Margolin "],
    ["Collaborators", "Samuele Marro · Sander Houten · UDN"],
  ];

  return (
    <main>
      <nav className="navbar">
        <div className="brand">
          <div className="logoMark"></div>
          <div>
            <strong>WEBB LABORATORY</strong>
            <span>University of Wisconsin–Madison</span>
          </div>
        </div>

        <div className="links">
          <a href="#research">Research</a>
          <a href="#projects">Projects</a>
          <a href="#people">People</a>
          <a href="#join">Join Us</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Advancing Precision Medicine</p>
          <h1>For Rare Pediatric Disorders</h1>
          <p>
            The Webb Laboratory integrates disease gene discovery, stem cell
            disease modeling, functional genomics, and translational research to
            advance precision medicine for rare pediatric disorders.
          </p>
          <a className="button" href="#research">
            Learn More →
          </a>
        </div>

        <div className="heroImage">
          <span>hiPSC-derived cortical neurons</span>
        </div>
      </section>

      <section id="research" className="research">
        <ResearchBlock
          number="01"
          label="Disease Gene Discovery"
          title="From Families to Function"
          text="We connect unresolved clinical presentations with genomic discovery and functional validation to identify disease-causing variants."
          imageClass="imageGene"
        />

        <ResearchBlock
          number="02"
          label="Stem Cell Disease Modeling"
          title="Modeling Development. Revealing Mechanisms."
          text="Patient-derived and engineered iPSC systems allow us to study rare neurodevelopmental and mitochondrial diseases in human cells."
          imageClass="imageStem"
        />

        <ResearchBlock
          number="03"
          label="Functional Genomics & Multi-Omics"
          title="Integrating Data. Driving Discovery."
          text="Transcriptomics, mitochondrial assays, and model systems help uncover convergent mechanisms across rare pediatric disorders."
          imageClass="imageOmics"
        />
      </section>

      <section id="projects" className="projects">
        <p className="eyebrow">Research Programs</p>
        <h2>Discovery platforms for rare disease biology.</h2>

        <div className="projectGrid">
          {projects.map(([label, title, text], i) => (
            <article className="projectCard" key={title}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <p className="cardLabel">{label}</p>
              <h3>{title}</h3>
              <p>{text}</p>
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

        <div className="peopleGrid">
          {people.map(([name, role]) => (
            <article className="personCard" key={name}>
              <div className="personPhoto"></div>

              <div className="personInfo">
                <h3>{name}</h3>
                <p>{role}</p>
              </div>
            </article>
          ))}
        </div>
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

      <footer id="contact">
        <strong>Webb Laboratory</strong>
        <span>WIMR West Wedge · 1111 Highland Ave · Madison, WI</span>
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
        <a href="#projects">Explore this research area →</a>
      </div>

      <div className={`researchImage ${imageClass}`}></div>
    </section>
  );
}