import PropTypes from 'prop-types'
import React from 'react';
import style from './style.module.scss'

const Image = ({title, link, description}) => {
    return (
        <div className={style.images}>
            <p className={style.title}>{title}</p>
            <img src={link} alt="" width='420' height='400' />
            <p>{description}</p>
        </div>
    );
};

Image.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string
};

export default Image;