import React from 'react';

import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/sirtaj.png';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3+ Completed Projects</small>
            </article>
          </div>
          <p>The things that I love the most are writing code and learning about new emerging technologies. This passion for coding boosted my urge to learn more programming languages. I've learned Javascript, ExpressJs, Mongodb, React, HTML, CSS. I always took the goal-oriented path to complete the tasks at hand. I want to explore much more in web app development. I am looking forward to obtaining the position of a developer to give my best to enhance the end-user experience.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro