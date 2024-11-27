import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import { projects } from '../../data/consts';

const Projects = () => {
  return (
    <div id='projects' className="projects">
        <div className="proj-title">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt="theme_pattern" />
        </div>
        <div className="proj-paragraph">
            <p>Here is my Journey Through Creative Solutions</p>
        </div>
        <div className="proj-section">
            {projects.map((proj) => (
                <div className="proj-subsection">
                    <img src={proj.img} />
                    <div className="proj-name">{proj.projname}</div>
                    <div className="proj-desc">{proj.desc}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects