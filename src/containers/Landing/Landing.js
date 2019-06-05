import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import withLoading from 'components/withLoading/withLoading';
import './landing.css';

class Landing extends PureComponent {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        isProcessing: PropTypes.bool.isRequired,
        processingText: PropTypes.string,
    };

    state = {

    };

    render() {
        return (
            <div>
                Landing
            </div>
        );
    }
}

export default withLoading(Landing);
