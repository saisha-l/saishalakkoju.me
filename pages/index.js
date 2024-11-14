import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
export default function Home() {
  return (
    <div className={styles.grid}>
      <Head>
      
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
        <TypeAnimation
          sequence={['Saisha Lakkoju.']}
          wrapper="div"
          cursor={false}
          style={{ fontSize: '3em' }}
          repeat={0}
        />
      
        </h1>
        <div className={styles.rowContainer} >
        <text className={styles.centered1}> 
        Computer Science Student 
        </text>
        <img className={styles.img1} src={'./uwlogo2.png'}/>
        <text className={styles.centered1}>
        University of Washington
        </text>
        </div>
        <text className={styles.centered}> 
        Researcher and analyst with a passion for applying data science and technology to solve real world problems across healthcare and business domains. 
        </text>

        <h1 className={styles.centered2}> Experience </h1>

        <div className={styles.col1}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Market & Data Analyst, Business Impact Group &rarr;</h3>
            <p>Accelerating growth for SMBs in the Seattle area through delivering data-driven insights. Strengthening stakeholder relationships, by presenting research in an accessible format using data visualization to present strategies to increase capital.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Research Intern, Fred Hutchinson Cancer Center &rarr;</h3>
            <p>Currently working under the director of the Human Biology department, Dr. Eric Holland. Utilizing R and ML to analyze RNA-Seq data to understand molecular basis for different types of cancers.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Research Intern, University of Washington Medicine &rarr;</h3>
            <p>
        Analyzing paralysis and lifespan assays on C. Elegans nematode worm for pre-clinical screening of therapeutic agents  for age-related diseases such as Parkinsons and Alzheimers.
            </p>

          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>

        <h1> Projects </h1>

        <div className={styles.col1}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
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
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
