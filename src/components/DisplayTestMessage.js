import React from 'react';
import { connect } from 'react-redux';
import { getStateTestMessage } from '../state/selectors/selectors';

const DisplayTestMessage = ({ message }) => (
    <div className="test-message">
        {message && message.length ? message : "No Message added yet"}
    </div>
);

const mapStateToProps = state => {
    const message = getStateTestMessage(state);
    return { message };
}

export default connect(
    mapStateToProps
)(DisplayTestMessage)