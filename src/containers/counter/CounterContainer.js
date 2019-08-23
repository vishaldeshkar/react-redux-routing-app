import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as counterActions from '../../actions/counterActions';
import CounterComponent from '../../components/counter/CounterComponent';

class CounterContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <CounterComponent {...this.props} />
            </React.Fragment>
        );
    }
}

function mapStateToProps(storeState, ownProps) {
    return {
        count: storeState.counterReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        inc: (by) => dispatch(counterActions.incCounter(by)),
        dec: (by) => dispatch(counterActions.decCounter(by))
    };
}

// var componentEnhancer = connect(mapStateToProps, mapDispatchToProps);
// var enhancedCounterContainer = componentEnhancer(CounterContainer);
// export default enhancedCounterContainer;

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);