import PropTypes from 'prop-types';
import React from 'react';
import './spinner.css';

const DEFAULT_COLOR = '#3699da';

Spinner.propTypes = {
    color: PropTypes.string,
    useDefaultColor: PropTypes.bool,
    size: PropTypes.number,
    className: PropTypes.string
};

Spinner.defaultProps = {
    size: 50
};

export default function Spinner(props) {
    const strokeColor = props.useDefaultColor
        ? DEFAULT_COLOR
        : (props.color || 'currentColor');

    return (
        <span className={props.className}>
            <svg
                className='spinner'
                fill='currentColor'
                width={`${props.size}px`}
                height={`${props.size}px`}
                viewBox='0 0 66 66'
                xmlns='http://www.w3.org/2000/svg'>
                <circle
                    className='path'
                    fill='none'
                    stroke={strokeColor}
                    strokeWidth='6'
                    strokeLinecap='round'
                    cx='33'
                    cy='33'
                    r='30' />
            </svg>
        </span>
    );
}
