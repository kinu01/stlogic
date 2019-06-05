// import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const containerStyle = { minHeight: '400px' };

NotFoundPage.propTypes = {

};

export default function NotFoundPage(props) {
    return (
        <div style={containerStyle}>
            <h2>Oops! Nothing found!</h2>

            <p>
                <Link to='/'>Go to the homepage</Link>
            </p>
        </div>
    );
}
