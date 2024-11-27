import React from 'react'
import './Skills.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import { skills } from '../../data/consts';

const Skills = () => {
    return (
        <div className='skills'>
            <div className="skills-title">
                <h1>My Skills</h1>
                <img src={theme_pattern} alt="theme_pattern" />
            </div>
            <div className="skill-paragraph">
                <p>Here are my skills which I have been working on for past 2 years</p>
            </div>
            <div id='skills' className="skill-section">
                {skills.map((item) => (
                    <div className="skill-subsection">
                        <div className="subsection-title">{item.title}</div>
                        <div className="subsection-list">
                            {item.skills.map((skill) => (
                                <div className="subsection-item">
                                    <img src={skill.image} />
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
