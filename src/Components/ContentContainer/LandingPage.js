import React, {Component} from 'react';
import {connect} from 'react-redux'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Vocalist</h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)