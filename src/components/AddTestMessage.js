import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { testActionMessage } from '../state/actions/actions';

class AddTestMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { input: "" };
        
    }

    updateInput = input => {
        this.setState({ input });
    };

    addTestMessageFacade = () => {
        this.props.testActionMessage(this.state.input); // dispatch action
        this.setState({ input: "" }); // reset component input state
    }

    render() {
        return (
            <div>
                <input
                    onChange={ e => this.updateInput(e.target.value) }
                    value={ this.state.input }
                />
                <button className="add-message" onClick={this.addTestMessageFacade}>
                Add Test Message
                </button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        testActionMessage
    }, dispatch);
}
  
// export redux connected component
export default connect(
    null,
    mapDispatchToProps
)(AddTestMessage);