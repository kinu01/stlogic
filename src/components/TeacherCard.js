import PropTypes from 'prop-types';
import React from 'react';

const TeacherCard = ({ img, name, bio, detailLink }) => (
    <article className='teach-item'>
        <div className='teach-item-image'>
            <img src={img} alt='teacher' />
            <span />
        </div>
        <div className='teach-item-info'>
            <h2>{name}</h2>
            <p>
                {bio}
            </p>
            <a href={detailLink}>See All Detail</a>
        </div>
    </article>
);

TeacherCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    detailLink: PropTypes.string.isRequired
};

export default TeacherCard;
