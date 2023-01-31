import React from 'react';
import constImg from '../../assets-profiles/const-profile-pic.jpeg';
import domImg from '../../assets-profiles/dom-profile-pic.jpg';
import khalidImg from '../../assets-profiles/khalid-profile-pic.jpg';
import style from './style.scss';
import wolfeImg from '../../assets-profiles/wolfe-profile-pic.jpg';

const AboutPage = () => {

    return (
        <div className='style'>
            <h2>About Us</h2>
                <h3>Constance Cain</h3>
                <img className={style.image} src={constImg} alt="constance profile" width='500' height='auto' />
                <p className={style.bio}>My name is Constance Cain. I live in Columbus, Ohio. I am a student developer at We Can Code IT.</p>
                
                <h3>Dominique Hawkins</h3>
                <img className={style.image} src={domImg} alt="dom profile" width='500' height='auto' />
                <p className={style.bio}>My name is Dominique Hawkins. I live in Columbus, Ohio and I am a Java full stack developer. I coach basketball and my favorite game is Kakarot.</p>

                <h3>Khalid Ahmed</h3>
                <img className={style.image} src={khalidImg} alt="khalid profile" width='500' height='auto' />
                <p className={style.bio}>My name is Khalid Ahmed. I am a student at The Ohio State University and I am also a part of the WeCanCodeIT part-time cohort.</p>

                <h3>Wolfe Ashcraft</h3>
                <img className={style.image} src={wolfeImg} alt="wolfe profile" width='500' height='auto' />
                <p className={style.bio}>My name is Wolfe AshCraft.</p>
        </div>
    );
}

export default AboutPage;