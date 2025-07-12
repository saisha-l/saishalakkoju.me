import React from "react";
import mock01 from '../assets/images/1.png';
import mock02 from '../assets/images/2.png';
import mock03 from '../assets/images/3.png';
import mock04 from '../assets/images/4.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
        
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2> Mapping prostate cancer</h2></a>
                <p>Prostate cancer exhibits substantial molecular and clinical heterogeneity, necessitating a comprehensive reference framework for improved characterization. We compiled 5 datasets of bulk RNA sequencing data from 1,313 primary and metastatic prostate tumors to establish a detailed transcriptomic landscape. After rigorous batch effect correction, normalization, and dimensionality reduction, we constructed a unified map to investigate gene expression patterns, signaling pathways, gene fusions, and copy number alterations.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Personal Website V1</h2></a>
                <p>Built and deployed a portfolio website using Next.js and React frameworks working with version control through Git.                </p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Heart to Heart Project                </h2></a>
                <p>Developed a fluidic system capable of maintaining ex-ovo chick hearts under physiologically relevant conditions. Leveraged CAD software and microcontroller programming to design and fabricate custom components, ensuring precise control of temperature, pressure, and shear stress. Conducted iterative testing, reducing system failure rates by 40%.                </p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Identifying Differentially Expressed Genes for Medulloblastoma Cancer </h2></a>
                <p>Applied machine learning techniques including random forest and SVM to classify Medulloblastoma vs. healthy samples using gene expression data, optimizing feature selection through recursive feature elimination. Validated predictive accuracy with cross-validation and identified top genes with the highest discriminative power for diagnostic use.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Project;