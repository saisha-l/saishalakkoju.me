import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - present"
            iconStyle={{ background: '#291B14', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Science Scholar</h3>
            <h4 className="vertical-timeline-element-subtitle">Kode with Klossy</h4>
            <div className="timeline-description">
           <p>
            Worked with Python, SQL, and Google CoLab to analyse carbon emissions data in the transportation, industrial, agriculture and electrical sectors. Collected, cleaned and visualized data using Looker Studio and Python Libraries (Matplotlib, Seaborn, ggPlot) from the International Energy Agency. Presented to Starbucks Technology team at HQ in Sodo, Seattle.
            </p>
            </div>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: '#291B14', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Pre-Clinical Research Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Washington Medicine</h4>
            <div className="timeline-description">
            <p>
            Analyzed paralysis and lifespan assays on C. Elegans nematode worm for pre-clinical screening of therapeutic agents for age-related diseases such as Parkinsons and Alzheimers. Worked with statistical methods to understand accuracy of assays.
            </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: '#291B14', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">State Board Member</h3>
            <h4 className="vertical-timeline-element-subtitle">Washington Science Olympiad</h4>
            <div className="timeline-description">
            <p>
            Elected as a student advisor for Washington State Science Olympiad Board. Provided a board with inputs on competition policies and how to increase STEM participation around the state with a focus on underserved rural areas.
Created custom Social Media page for WA Science Olympiad
            </p>
            </div>
          </VerticalTimelineElement>



          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#291B14', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Youth Advisory Board Member</h3>
            <h4 className="vertical-timeline-element-subtitle">Museum of Pop Culture</h4>
            <div className="timeline-description">
            <p>
            Developed and advocated for MoPop’s youth voice; produced international SciFi short film festival and SoundOff concert reaching audience of 4K+
            </p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;