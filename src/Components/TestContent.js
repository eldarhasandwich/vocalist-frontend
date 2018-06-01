import React, {Component} from 'react';
import {connect} from 'react-redux'


class TestContent extends Component {

    render() {
        return (
            <div>
 
                <h1>Item!</h1>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestContent)