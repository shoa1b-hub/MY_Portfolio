import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ experience }) => {
    return (
        <div className="card">
            <div className="top">
                <img src={experience.img} alt={`${experience.role} at ${experience.company}`} />
                <div className="body">
                    <div className="role">{experience.role}</div>
                    <div className="company">{experience.company}</div>
                    <div className="duration">{experience.date}</div>
                </div>
            </div>
            <div className="desc">
                {experience.desc}
                {experience?.skills && (
                    <div className="skills">
                        <div className="wrapper"><b>Skills:</b>
                            {experience.skills.map((skill, index) => (
                                <div key={index} className="skill">• {skill}</div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExperienceCard;
