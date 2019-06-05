import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Container from 'reactstrap/lib/Container';

export default class ErrorBoundary extends Component {
    static propTypes = {
        children: PropTypes.any,
        location: PropTypes.object
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    state = {
        hasError: false
    }

    componentDidUpdate(prevProps) {
        if (this.props.location && prevProps.location !== this.props.location) {
            this.setState({
                hasError: false
            });
        }
    }

    componentDidCatch(error, info) {
        console.error(error);
        console.info(info);
    }

    render() {
        if (this.state.hasError) {
            const mainContent = (
                <Fragment>
                    <h2>Oops! An Error Occurred!</h2>

                    <p>Please try reloading the page or you can go to the <Link to='/'>homepage</Link>.</p>
                </Fragment>
            );

            return (
                <div id='page-wrap'>
                    <main className='error-page'>
                        <Container>
                            {mainContent}
                        </Container>
                    </main>
                </div>
            );
        }

        return this.props.children;
    }
}
