import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQFXNRdrOsJ0dw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719900060176?e=1757548800&v=beta&t=2znbgucrlnf2DIvONMLVidc1iQAp0iw7JT2pFQ_fvlg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/saisha-l" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/saisha-lakkoju-5a3153212/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Saisha Lakkoju</h1>
          <p> ML Researcher, Full Stack Developer, CS @ University of Washington </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/saisha-l" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/saisha-lakkoju-5a3153212/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;