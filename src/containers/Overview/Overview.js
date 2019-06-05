import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import withLoading from 'components/withLoading/withLoading';
import './overview.css';

class Overview extends PureComponent {
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
                Dashboard
            </div>
        );
    }
}

export default withLoading(Overview);
