import React, { useState } from 'react';
import './AboutMe.css';

export default function AboutMe() {

  const [aboutText, setAboutText] = useState(
    `I am Chun Wai Chung, a seeker of logic within structure and beauty beneath function. Schooled at Centennial College in the field of Software Engineering, I tread the line where innovation stirs and systems respond.
    
Impossible considered, yet resolutely pursued were challenges that demanded both rigor and imagination. With each line of code, a pattern emerges; with each interface, an experience unfolds. Put rest and must set kind — thus begins the next task, the next trial, the next silent triumph.

Design, development, deployment — all meet where intention sharpens skill. I do not simply build; I interpret. For in the realm of software, even silence is structured.`
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [tempText, setTempText] = useState(aboutText);


  const handleSave = () => {
    setAboutText(tempText);
    setIsModalOpen(false);
  };


  const handleOpenModal = () => {
    setTempText(aboutText);
    setIsModalOpen(true);
  };

  return (
    <section className="about-section">
      <div className="container about-container">
        <div className="about-image">
          <img src="/img/author.jpg" alt="Profile" />
        </div>

        <div className="about-content">
          <h2>Introduce Myself</h2>
          <h4>Who I am</h4>
          <p style={{ whiteSpace: 'pre-line' }}>
            {aboutText}
          </p>

          <button className="edit-btn" onClick={handleOpenModal}>
            ✏️ Edit About Me
          </button>

          <a href="/img/Resume.pdf" download className="download-resume-btn">
            📄 Download My Resume
          </a>

          <div className="skills">
            <SkillBar label="GRAPHIC" value="70%" />
            <SkillBar label="UX/UI DESIGN" value="80%" />
            <SkillBar label="CODING" value="70%" />
            <SkillBar label="WORDPRESS" value="60%" />
          </div>
        </div>
      </div>

   
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Edit About Me</h3>
            <textarea
              rows={8}
              value={tempText}
              onChange={(e) => setTempText(e.target.value)}
              style={{ width: '100%', resize: 'vertical', padding: '8px' }}
            />
            <div className="modal-buttons">
              <button onClick={handleSave} className="save-btn">Save</button>
              <button onClick={() => setIsModalOpen(false)} className="cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function SkillBar({ label, value }) {
  return (
    <div className="skill-bar">
      <span className="label">{label}</span>
      <div className="bar">
        <div className="fill" style={{ width: value }}></div>
        <span className="value">{value}</span>
      </div>
    </div>
  );
}
