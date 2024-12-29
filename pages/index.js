import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Popup from 'reactjs-popup';

const SkillsSection = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [showFrontEnd, setShowFrontEnd] = useState(false);
  const [showBackEnd, setShowBackEnd] = useState(false);
  const [showConsulting, setShowConsulting] = useState(false);
  const [showBioinformatics, setShowBioinformatics] = useState(false);

  const toggleLanguages = () => setShowLanguages(!showLanguages);
  const toggleFrontEnd = () => setShowFrontEnd(!showFrontEnd);
  const toggleBackEnd = () => setShowBackEnd(!showBackEnd);
  const toggleConsulting = () => setShowConsulting(!showConsulting);
  const toggleBioinformatics = () => setShowBioinformatics(!showBioinformatics);

  return (
    <div>
      <h2 id="skills" className={styles.skillHead} onClick={toggleLanguages}>
        {showLanguages ? '▼ Languages' : '▶ Languages'}
      </h2>
      {showLanguages && (
        <div className={styles.skillContainer}>
          <p className={styles.disabledButton}>Java</p>
          <p className={styles.disabledButton}>Python</p>
          <p className={styles.disabledButton}>HTML/CSS/JavaScript</p>
          <p className={styles.disabledButton}>R</p>
        </div>
      )}

      <h2 id="skills" className={styles.skillHead} onClick={toggleFrontEnd}>
        {showFrontEnd ? '▼ Front End' : '▶ Front End'}
      </h2>
      {showFrontEnd && (
        <div className={styles.skillContainer}>
          <p className={styles.disabledButton}>HTML</p>
          <p className={styles.disabledButton}>CSS</p>
          <p className={styles.disabledButton}>JavaScript</p>
          <p className={styles.disabledButton}>Tailwind CSS</p>
          <p className={styles.disabledButton}>React</p>
          <p className={styles.disabledButton}>NextJS</p>
          <p className={styles.disabledButton}>Version Control</p>
        </div>
      )}

      <h2 id="skills" className={styles.skillHead} onClick={toggleBackEnd}>
        {showBackEnd ? '▼ Back End' : '▶ Back End'}
      </h2>
      {showBackEnd && (
        <div className={styles.skillContainer}>
          {/* Add Back End skills here */}
        </div>
      )}

      <h2 id="skills" className={styles.skillHead} onClick={toggleConsulting}>
        {showConsulting ? '▼ Consulting/Marketing' : '▶ Consulting/Marketing'}
      </h2>
      {showConsulting && (
        <div className={styles.skillContainer}>
          <p className={styles.disabledButton}>Microsoft Office</p>
          <p className={styles.disabledButton}>Microsoft Word</p>
          <p className={styles.disabledButton}>Microsoft Excel</p>
          <p className={styles.disabledButton}>Canva</p>
        </div>
      )}

      <h2 id="skills" className={styles.skillHead} onClick={toggleBioinformatics}>
        {showBioinformatics ? '▼ Bioinformatics' : '▶ Bioinformatics'}
      </h2>
      {showBioinformatics && (
        <div className={styles.skillContainer}>
          <p className={styles.disabledButton}>R</p>
          <p className={styles.disabledButton}>Principal Component Analysis</p>
          <p className={styles.disabledButton}>Chi Squared Analysis</p>
          <p className={styles.disabledButton}>UMAP Visualisation</p>
          <p className={styles.disabledButton}>RNA Sequencing</p>
          <p className={styles.disabledButton}>TSNE</p>
          <p className={styles.disabledButton}>CombatSeq</p>
          <p className={styles.disabledButton}>Life Span Assays</p>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  useEffect(() => {
    const nav = document.querySelector(`.${styles.nav}`);
    const sections = document.querySelectorAll('section'); // Assuming your sections are <section> elements
    const navButtons = document.querySelectorAll(`.${styles.navButton}`);

    if (nav) {
      const handleScroll = () => {
        if (window.scrollY > 50) { // Adjust the scroll position as needed
          nav.classList.add(styles.scrolled);
        } else {
          nav.classList.remove(styles.scrolled);
        }

        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 50 && rect.bottom >= 50) {
            navButtons.forEach(button => button.classList.remove(styles.active));
            navButtons[index].classList.add(styles.active);
          }
        });
      };

      window.addEventListener('scroll', handleScroll);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className={styles.grid}>
      <Head>
        <link rel="icon" href="/sl.ico" />
      </Head>

      {/* Navigation Bar */}
      <nav className={styles.nav}>
        <button 
          className={styles.navButton} 
          onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
        >
          Experience
        </button>
        <button 
          className={styles.navButton} 
          onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
        >
          Projects
        </button>
        <button 
          className={styles.navButton} 
          onClick={() => document.getElementById('education').scrollIntoView({ behavior: 'smooth' })}
        >
          Education
        </button>
      </nav>

      <main className={styles.body}>
        <h1 className={styles.title}>
          <TypeAnimation
            sequence={['Saisha Lakkoju.']}
            wrapper="div"
            cursor={false}
            style={{ fontSize: '3em' }}
            className={styles.name}
            repeat={0}
          />
        </h1>

        <div className={styles.rowContainer}>
          <text className={styles.centered1}> 
            Computer Science Student @ 
          </text>
          <img className={styles.img1} src={'./uwlogo2.png'} />
          <text className={styles.centered1}>
            University of Washington
          </text>
        </div>

        <text className={styles.centered}> 
          Researcher and analyst with a passion for applying data science and technology to solve real world problems across healthcare and business domains. 
        </text>

        {/* Experience Section */}
       <div id="experience" className={styles.container2}>
        <h1 id="experience" className={styles.centered2}>Experience</h1>
        <div className={styles.col1}>
        
        <Popup 
        trigger={<div className={styles.card}>
          <h3>Market & Data Analyst, Business Impact Group &rarr;</h3>
          <p>Accelerating growth for SMBs in the Seattle area through delivering data-driven insights. Strengthening stakeholder relationships, by presenting research in an accessible format using data visualization to present strategies to increase capital.</p>
          </div>} 
        modal
        overlayStyle={{ background: 'rgba(0, 0, 0, 0.5)' }} // Overlay styling
        contentStyle={{ borderRadius: '10px', padding: '20px', maxWidth: '500px' }} // Popup content styling
      >

        {close => (
          <div className={styles.cardpopup}>
            <img className={styles.img2} src={'./bigUWlogo.png'}/>
            <h3>Market & Data Analyst, Business Impact Group</h3>
            <p>Accelerating growth for SMBs in the Seattle area through delivering data-driven insights. Strengthening stakeholder relationships, by presenting research in an accessible format using data visualization to present strategies to increase capital.</p>
            <button onClick={close} className={styles.closeButton}>Close</button>
          </div>

        )}
      </Popup>

          <Popup 
            trigger={<div className={styles.card}>
              <h3>Research Intern, Fred Hutchinson Cancer Center &rarr;</h3>
            <p>Currently working under the director of the Human Biology department, Dr. Eric Holland. Utilizing R and ML to analyze RNA-Seq data to understand molecular basis for different types of cancers.</p>
            </div>} 
            modal
            overlayStyle={{ background: 'rgba(0, 0, 0, 0.5)' }} // Overlay styling
            contentStyle={{ borderRadius: '10px', padding: '20px', maxWidth: '500px' }} // Popup content styling
          >
            {close => (
              <div className={styles.cardpopup}>
                <img className={styles.img2} src={'./fredhutch.png'}/>
                <h3>Research Intern, Fred Hutchinson Cancer Center</h3>
                <p>Currently working under the director of the Human Biology department, Dr. Eric Holland. Utilizing R and ML to analyze RNA-Seq data to understand molecular basis for different types of cancers.</p>
                <button onClick={close} className={styles.closeButton}>Close</button>
              </div>
            )}
          </Popup>

          <Popup 
            trigger={<div className={styles.card}>
              <h3>Research Volunteer, University of Washington Medicine &rarr;</h3>
              <p>
              Analyzing paralysis and lifespan assays on C. Elegans nematode worm for pre-clinical screening of therapeutic agents for age-related diseases such as Parkinsons and Alzheimers.
              </p>
            </div>} 
            modal
            overlayStyle={{ background: 'rgba(0, 0, 0, 0.5)' }} // Overlay styling
            contentStyle={{ borderRadius: '10px', padding: '20px' }} // Popup content styling
          >
            {close => (
              <div className={styles.parentContainer}>
              <div className={styles.cardpopup2}>
                <div className={styles.gridContainer}>
                  <div className={styles.content} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div className={styles.imageContainer}>
                      <img className={styles.img2} src={'./uw1.jpg'} alt="Curie 1" />
                      <span className={styles.hoverText}>Kaeberlin Lab</span>
                    </div>
                    <div className={styles.imageContainer}>
                      <img className={styles.img2} src={'./uw2.jpg'} alt="Curie 2" />
                      
                    </div>
                    <div className={styles.imageContainer}>
                      <img className={styles.img2} src={'./uw3.jpeg'} alt="Curie 3" />
                      <span className={styles.hoverText}> Our volunteering team</span>
                    </div>
                  </div>
                  <div className={styles.content}>
                  <img className={styles.img1} src={'./loginLogo.png'}/>
                  <h3>Research Volunteer, University of Washington Medicine &rarr;</h3>
                  <p>
                  Analyzing paralysis and lifespan assays on C. Elegans nematode worm for pre-clinical screening of therapeutic agents for age-related diseases such as Parkinsons and Alzheimers.
                  </p>
                  <button onClick={close} className={styles.closeButton}>Close</button>
                  </div>
                </div>
              </div>
              </div>
            )}
          </Popup>
        </div>

        <h1 id="projects" className={styles.centered2}>Projects</h1>
        <div className={styles.col1}>
          <Popup 
            trigger={<div className={styles.card}>
              <h3>Heart to Heart Project&rarr;</h3>
              <p>
              Constructed a working bioreactor to sustain a ex vivo embryonic chicken heart. Worked under Dr. Newton de Faria using data acquisition to build and program an effective microcontroller to simulate natural cardiological conditions of (temperature, pressures, fluid exchange, and shear stresses).
              </p>
            </div>} 
            modal
            overlayStyle={{ background: 'rgba(0, 0, 0, 0.5)' }} // Overlay styling
            contentStyle={{ borderRadius: '10px', padding: '20px' }} // Popup content styling
          >
            {close => (
              <div className={styles.parentContainer}>
              <div className={styles.cardpopup2}>
                <div className={styles.gridContainer}>
                  
                  <div className={styles.content}>
                  <div className={styles.imageContainer}>
                  <img className={styles.img2} src={'./curie1.jpg'} alt="Curie 1"/>
                  <span className={styles.hoverText}>Bioreactor Set Up </span>
                  </div>
                  <div className={styles.imageContainer}>
                  <img className={styles.img2} src={'./curie2.jpeg'} alt="Curie 2"/>
                  <span className={styles.hoverText}>Adjusting hardware</span>
                  </div>
                  <div className={styles.imageContainer}>
                  <img className={styles.img2} src={'./curie3.jpeg'} alt="Curie 3"/>
                  <span className={styles.hoverText}>Designing the microcontroller</span>
                  </div>
                  

                  </div>
                  
                  <div className={styles.content}>
                  <img className={styles.img1} src={'./cornelllogo.png'}/>
                    <h3> Engineer - Bioreactor Data Acquisition and Control System Team</h3>
                    <p>Constructed a working bioreactor to sustain a ex vivo embryonic chicken heart. Worked under Dr. Newton de Faria using data acquisition to build and program an effective microcontroller to simulate natural cardiological conditions of (temperature, pressures, fluid exchange, and shear stresses).</p>
                    <button onClick={close} className={styles.closeButton}>Close</button>
                  </div>
                </div>
              </div>
              </div>
            )}
          </Popup>


          <Popup 
            trigger={<div className={styles.card}>
              <h3> Arise CO2 &rarr;</h3>
              <p>
              Worked with Python, SQL, and Google CoLab to analyse carbon emissions data in the transportation, industrial, agriculture and electrical sectors. Collected, cleaned and visualized data from the International Energy Agency. Built a cohesive UI using Canva Website Creator to display data.
              </p>
            </div>} 
            modal
            overlayStyle={{ background: 'rgba(0, 0, 0, 0.5)' }} // Overlay styling
            contentStyle={{ borderRadius: '10px', padding: '20px' }} // Popup content styling
          >
            {close => (
              <div className={styles.parentContainer}>
              <div className={styles.cardpopup2}>
                <div className={styles.gridContainer}>
                  
                  <div className={styles.content}>
                  <div className={styles.imageContainer}>
                  <img className={styles.img2} src={'./kwk1.jpg'} alt="Curie 1"/>
                  <span className={styles.hoverText}>Bioreactor Set Up </span>
                  </div>
                  <div className={styles.imageContainer}>
                  <img className={styles.img2} src={'./kwk2.jpg'} alt="Curie 2"/>
                  <span className={styles.hoverText}>Adjusting hardware</span>
                  </div>
                  <div className={styles.imageContainer}>
                  <img className={styles.img2} src={'./kwk3.jpg'} alt="Curie 3"/>
                  <span className={styles.hoverText}>Designing the microcontroller</span>
                  </div>
                  

                  </div>
                  
                  <div className={styles.content}>
                  <div className={styles.imageStack}>
  <img className={styles.img1} src={'./starbucks.png'} alt="Starbucks Logo"/>
  <img className={styles.img1} src={'./logokwk.png'} alt="KWK Logo"/>
</div>
                    <p>
                    Worked with Python, SQL, and Google CoLab to analyse carbon emissions data in the transportation, industrial, agriculture and electrical sectors. Collected, cleaned and visualized data from the International Energy Agency. Built a cohesive UI using Canva Website Creator to display data.
                    </p>
                                      
                    <a href="https://ariseco2.my.canva.site/" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                      Visit Link
                    </a>
                    <button onClick={close} className={styles.closeButton}>Close</button>
                  </div>
                </div>
              </div>
              </div>
            )}
          </Popup>
        </div>
        

<h1 id="education" className={styles.centered2}>Education</h1>
        
<div className={styles.col1}>
  <div className={styles.cardEducation}>


    <div className={styles.gridContainer}>

    <div className={styles.content}>
        <img className={styles.img2} src={'./uwPicture.jpeg'} alt="UW "/>
      </div>

    <div className={styles.content}>
        <h2 style={{ color: '#0f0e33' }}>University of Washington</h2>
        <p style={{ marginBottom: '1.5vh' }}>
        <br></br> Majoring in Computer Science with a concentration of Data Science 
        <br></br> Minoring in Business Administration
        </p>
        <p style={{ marginBottom: '0vh' }}>
          Clubs and Organizations:
        </p>
        <p style={{ fontStyle: 'italic', marginTop: '-2vh' }}>
          <br></br> &bull;  Business Impact Group
          <br></br> &bull;  Algorithmic Trading Club
          <br></br> &bull;  Computing Community
          <br></br> &bull;  Women in Computing
        </p>
      </div>
      
    <div className={styles.content}>
        <img className={styles.img2} src={'./gradpic.jpeg'} alt="Graduation"/>
      </div>

    <div className={styles.content}>
        <h2 style={{ color: '#0f0e33' }}>Bothell High School</h2>
        <p style={{ marginBottom: '1.5vh' }}>
          Graduated Summa Cum Laude from Bothell High School, as the Co-President of both Science Olympiad and National Honor Society. Was selected out of the 300+ class to be presented with departmental honors in Science and the Marines Academic Excellence award.
        </p>
        <p style={{ marginBottom: '0vh' }}>
          Other recognitions earned throughout highschool include:
        </p>
        <p style={{ fontStyle: 'italic', marginTop: '-2vh' }}>
          <br></br> &bull;  American Association of University Women (AAUW) STEM Recognition Award in Science 
          <br></br> &bull;  Presidential Service Award (2x) 
          <br></br> &bull;  Washington State Honors Award
          <br></br> &bull;   DECA Emerging Leader Award
          <br></br> &bull;   Congressional Recognition 
        </p>
      </div>
      
    </div>



  </div>
</div>

<h1 id="skills" className={styles.centered2}>Skills</h1>

<div className={styles.col1}>

<SkillsSection />

</div>
        </div>
        
        
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        .closeButton {
          background: #f50057;
          color: white;
          border: none;
          padding: 8px 12px;
          cursor: pointer;
          border-radius: 4px;
          margin-top: 10px;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          word-wrap: break-word; /* Allows long words to be broken and wrap to the next line */
          overflow-wrap: break-word; /* Ensures compatibility with different browsers */
        white-space: normal; /* Allows text to wrap normally */
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
        .gridContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 0 10vw;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        word-wrap: break-word; /* Allows long words to be broken and wrap to the next line */
        overflow-wrap: break-word; /* Ensures compatibility with different browsers */
       white-space: normal; /* Allows text to wrap normally */
          }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}