import React, {Component} from 'react';
import {connect} from 'react-redux'

import ContentContainer from '../ContentContainer/ContentContainer';

class App extends Component {

    render() {
        return (
            <div>
 
                <ContentContainer/>
                
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

export default connect(mapStateToProps, mapDispatchToProps)(App)