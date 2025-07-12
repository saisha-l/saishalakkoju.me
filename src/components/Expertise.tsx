import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import ubicompLogo from '../assets/images/ubicomp-logo.png';
import FredHutch from '../assets/images/fred-hutch-logo.jpeg';
import Big from '../assets/images/big-logo.png';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Highlighted Experiences</h1>
            <div className="skills-grid">
                <div className="skill">
                <img src={ubicompLogo} alt="Ubicomp Logo" style={{ width: '3rem', height: '3rem', marginTop: "3rem", borderWidth: "2rem", borderRadius: "5rem" }} />
                    <h3>Machine Learning Research Intern @ UW UbiComp Lab</h3>
                    <p>Utilizing Python to develop and implement machine learning algorithms, process multimodal sensor data, and build real-time inference pipelines for adaptive, user-aware health interventions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    
                <img src={FredHutch} alt="Fred Hutch Logo" style={{ width: '3rem', height: '3rem', marginTop: "3rem", borderWidth: "2rem", borderRadius: "5rem" }} />
                    <h3> Bioinformatics Research Intern @ Fred Hutch </h3>
                    <p>Contributing to comprehensive transcriptomic analysis of prostate and brain cancer, processing and normalizing RNASeq data from large biomedical datasets using Machine Learning in order to identify molecular subtypes and biomarkers of cancers. 
Discovered key transcriptional programs linked to disease progression and treatment resistance, enabling more precise molecular classification. </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                <img src={Big} alt="UW Big Logo" style={{ width: '3.2rem', height: '3.2rem', marginTop: "3rem", borderWidth: "2rem", borderRadius: "5rem" }} />
                    <h3>Market Expansion Consultant @ Business Impact Group </h3>
                    <p>Developed scalable business models by analyzing revenue growth patterns, pricing strategies and competitive positioning for Lemonicious Drink Co. Identifying key industry trends to optimize profitability and comparing competitor sales strategies.
Led efforts to optimize product offerings by revising the website user experience, aligning with strategic business goals.                                          		                        </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;