import React, { useState } from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import about_profile from '../../assets/about_profile.jpg';
import sololearn_logo from '../../assets/sololearn_logo.jpg';
import aws_logo from '../../assets/aws_logo.png';
import rdng_icon from '../../assets/reading_icon.png';
import lsng_icon from '../../assets/listn_icon.png';
import wrtng_icon from '../../assets/wrtng_icon.png';
import spkng_icon from '../../assets/spkng_icon.png';

const About = () => {
    const [activeTab, setActiveTab] = useState('education');

    const opentab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="theme_pattern" />
            </div>
            <div className="about-section">
                <div className="left">
                    <img src={about_profile} alt="about_profile" />
                </div>
                <div className="right">
                    <div className="about-para">
                        <p>Currently, a Computer Science graduate student, I am an experienced Front End Developer with expertise in web development, JavaScript, and creating visually appealing websites. I possess expertise in Generative AI, with hands-on experience in programming languages such as Python, Java, and C++. Additionally, I have a strong command of AWS, leveraging it to enhance my skills and deliver innovative solutions. My zeal to learn is what makes me want to upgrade and apply my skills.</p>
                    </div>
                    <div className="tab-titles">
                        <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => opentab('education')}>Education </p> 
                        <p className={`tab-links ${activeTab === 'certifications' ? 'active-link' : ''}`} onClick={() => opentab('certifications')}>Certifications</p>
                        <p className={`tab-links ${activeTab === 'languages' ? 'active-link' : ''}`} onClick={() => opentab('languages')}>Languages known</p>
                    </div>
                    <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id='education'>
                        <ul>
                            <li><span>Masters in Computer Science  /  CGPA  /  Year</span><br />California State University  /  3.71  /  2022 - 2024</li><br />
                            <li><span>BTech in Computer Science  /  CGPA  /  Year</span><br />Koneru Lakshmayyah University  /  8.51  /  2017 - 2021</li>
                        </ul>
                    </div>
                    <div className={`tab-contents ${activeTab === 'certifications' ? 'active-tab' : ''}`} id='certifications'>
                        <ul>
                            <li><span>Python</span><br /><br /><img src={sololearn_logo} alt="sololearn_logo" />  By Sololearn</li><br />
                            <li><span>AWS Solutions Architect</span><br /><br /><img src={aws_logo} alt="aws_logo" />  By AWS</li>
                        </ul>
                    </div>
                    <div className={`tab-contents ${activeTab === 'languages' ? 'active-tab' : ''}`} id='languages'>
                        <ul>
                            <li><span>English</span><br /><br /><img src={rdng_icon} alt="rdng_icon" />    <img src={wrtng_icon} alt="wrtng_icon" />    <img src={spkng_icon} alt="spkng_icon" />    <img src={lsng_icon} alt="lsng_icon" /></li>
                            <li><span>Hindi</span><br /><br /><img src={rdng_icon} alt="rdng_icon" />    <img src={wrtng_icon} alt="wrtng_icon" />    <img src={spkng_icon} alt="spkng_icon" />    <img src={lsng_icon} alt="lsng_icon" /></li>
                            <li><span>Telugu</span><br /><br /><img src={rdng_icon} alt="rdng_icon" />    <img src={wrtng_icon} alt="wrtng_icon" />    <img src={spkng_icon} alt="spkng_icon" />    <img src={lsng_icon} alt="lsng_icon" /></li>
                            <li><span>Urdu</span><br /><br /><img src={rdng_icon} alt="rdng_icon" />    <img src={wrtng_icon} alt="wrtng_icon" />    <img src={spkng_icon} alt="spkng_icon" />    <img src={lsng_icon} alt="lsng_icon" /></li>
                            <li><span>Arabic</span><br /><br /><img src={rdng_icon} alt="rdng_icon" />    <img src={wrtng_icon} alt="wrtng_icon" /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="achievement">
                    <h1>LEAD MEMBER</h1>
                    <p>Focus KLEF / #Include Board</p>
                </div>
                
            </div>

        </div>
    );
}

export default About;
