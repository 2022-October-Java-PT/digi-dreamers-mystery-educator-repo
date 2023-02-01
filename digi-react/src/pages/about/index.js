import React from 'react';
import constImg from '../../assets-profiles/const-profile-pic.jpeg';
import domImg from '../../assets-profiles/dom-profile-pic.jpg';
import khalidImg from '../../assets-profiles/khalid-profile-pic.jpg';
import style from './style.scss';
import wolfeImg from '../../assets-profiles/wolfe-profile-pic.jpg';

const AboutPage = () => {

    return (
        <div className='style-about'>
            <div className='style-about-heading'>
                <h2>About Us</h2>
            </div>
            <div className="grid-container">
                <div className="grid-item grid-item1">
                    <h3>Constance Cain</h3>
                    <img className="style-img" src={constImg} alt="constance profile" width='300' height='auto' />
                    <p className="style-bio">I live in Columbus, Ohio. I am a student developer at We Can Code IT. My hobbies include Photography and Painting</p>
                </div>
                <div className="grid-item grid-item2">    
                    <h3>Dominique Hawkins</h3>
                    <img className="style-img" src={domImg} alt="dom profile" width='300' height='auto' />
                    <p className="style-bio">I live in Columbus, Ohio and I am a Java full stack developer. I coach basketball and my favorite game is Kakarot.</p>
                </div>
                <div className="grid-item grid-item3">
                    <h3>Khalid Ahmed</h3>
                    <img className="style-img" src={khalidImg} alt="khalid profile" width='300' height='auto' />
                    <p className="style-bio">I am a student at The Ohio State University and I am also a part of the WeCanCodeIT part-time cohort.</p>
                </div>
                <div className="grid-item grid-item4">
                    <h3>Wolfe Ashcraft</h3>
                    <img className="style-img" src={wolfeImg} alt="wolfe profile" width='300' height='auto' />
                    <p className="style-bio">I live in Cleveland, Ohio. I am a Java Full Stack developer. I am an Aquarius </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;