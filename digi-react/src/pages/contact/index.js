import React from 'react';
import style from './style.module.scss';

const ContactPage = () => {

    return (
        <div className={style.container}>
            <h2>Contact Jac Enterprises today!</h2>
            <p>Our website was started in 2023 to help students explore space and the arts. As a company, we always make an effort to act in our users' interest. We create a space for learning and understanding of old and new concepts.,/p.</p>

            <p>
                Nasa-One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. Great way to learn something new about space and Nasa in general.
            </p>
            <p>
                MetMuseum-The library’s work is driven by its strategic plan that outlines what we believe in, why we exist, how we see the future, our focused efforts and benefits.
            </p>
            <p>
                Kid Books-This is a way to gain new knowledge on something you may not have previously known.
            </p>
            
            <a  href="http://127.0.0.1:5500/src/jackr-enterprises-site-main/" >Contact</a>
        </div>
    );
}

export default ContactPage;