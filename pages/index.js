import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Popup from 'reactjs-popup';

export default function Home() {
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
          onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
        >
          Projects
        </button>
        <button 
          className={styles.navButton} 
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          About Me
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
       <div>
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
             <h3>Research Intern, University of Washington Medicine &rarr;</h3>
            <p>Analyzing paralysis and lifespan assays on C. Elegans nematode worm for pre-clinical screening of therapeutic agents for age-related diseases such as Parkinsons and Alzheimers.</p>
                </div>} 
            modal
            overlayStyle={{ background: 'rgba(0, 0, 0, 0.5)' }} // Overlay styling
            contentStyle={{ borderRadius: '10px', padding: '20px', maxWidth: '500px' }} // Popup content styling
          >
            {close => (
              <div className={styles.cardpopup}>
                <img className={styles.img2} src={'./loginLogo.png'}/>
                <h3>Research Intern, University of Washington Medicine</h3>
                <p>Analyzing paralysis and lifespan assays on C. Elegans nematode worm for pre-clinical screening of therapeutic agents for age-related diseases such as Parkinsons and Alzheimers.</p>
                <button onClick={close} className={styles.closeButton}>Close</button>
              </div>
            )}
          </Popup>

        </div>
        <div id="about" className={styles.rowContainer}>
          <img className={styles.img3} src={'./headshot1.png'} />
          <div className={styles.col2}>
              <h1> 
                Hi, I'm Saisha
              </h1>

          </div>
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
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}