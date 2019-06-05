import PropTypes from 'prop-types';
import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import Spinner from 'components/Spinner/Spinner';

export default function withLoading(Comp) {
    LoadingComponent.propTypes = {
        isLoading: PropTypes.bool.isRequired
    };

    LoadingComponent.displayName = `withLoading(${Comp.displayName || Comp.name})`;

    function LoadingComponent(props) {
        if (props.isLoading) {
            return (
                <main>
                    <div className='loading-container text-center'>
                        <Spinner useDefaultColor={true} />
                    </div>
                </main>
            );
        }

        return <Comp {...props} />;
    }

    return hoistNonReactStatic(LoadingComponent, Comp);
}
