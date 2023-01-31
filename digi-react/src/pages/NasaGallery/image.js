import PropTypes from 'prop-types'
import React from 'react';
import style from './style.module.scss'

const Image = ({title, link}) => {
    return (
        <div className={style.images}>
            <p className={style.title}>{title}</p>
            <img src={link} alt="" width='420' height='400' />
        </div>
    );
};

Image.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string
};

export default Image;