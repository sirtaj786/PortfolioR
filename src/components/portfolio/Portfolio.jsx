import React from 'react';
import IMG1 from '../../assets/KFC.png';
import IMG2 from '../../assets/SSense.png';
import IMG3 from '../../assets/SkinStore.png';
import IMG4 from '../../assets/fake.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'KFC Clone',
      img: IMG1,
      link: 'https://kfc-clone-masai.netlify.app/',
      github: 'https://github.com/sirtaj786/kfc_clone?organization=sirtaj786&organization=sirtaj786',
    },
    {
      id: 2,
      title: 'SSense Clone',
      img: IMG2,
      link: 'https://lucky-fenglisu-6040cb.netlify.app/',
      github: 'https://github.com/sirtaj786/Ssense-clone.git',
    },
    {
      id: 3,
      title: 'SkinStore Clone',
      img: IMG3,
      link: 'https://cool-axolotl-c9262b.netlify.app/',
      github: 'https://github.com/sirtaj786/SkinStore.git',
    },
    
  ];
  

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
          <div className="portfolio__item-image">
            <img src={pro.img} alt={pro.title} />
          </div>
          <h3>{pro.title}</h3>
          <div className="portfolio__item-cta">
            <a href={pro.github} className="btn">GitHub</a>
            <a href={pro.link} className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        ))}   
      </div>
    </section>
  )
}

export default Portfolio