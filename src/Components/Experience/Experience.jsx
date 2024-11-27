import React from 'react'
import './Experience.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { experiences } from '../../data/consts';
import ExperienceCard from '../Cards/ExperienceCard';


const Experience = () => {
    return (
        <div className='experience' id='experience'>
            <div className="exp-title">
                <h1>Experience</h1>
                <img src={theme_pattern} alt="theme_pattern" />
            </div>
            <div className="exp-paragraph">
                <p>Crafting Success Through Experience: A Journey of Skills and Growth</p>
            </div>
            <div className="exp-timelinesec">
                <Timeline position='alternate'>
                    {experiences.map((experience,index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot variant='outlined' color='secondary'/>
                                {index !== experiences.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent sx={{py:"12px",px: 2,textAlign: index % 2 === 0 ? 'left' : 'right',flex: index % 2 === 0 ? '0 0 45%' : '0 0 45%'}}>
                                <ExperienceCard experience={experience}/>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </div>
    )
}

export default Experience
