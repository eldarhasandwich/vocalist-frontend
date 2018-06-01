import React, {Component} from 'react';
import {connect} from 'react-redux'

import * as StateActions from '../../Actions/state'
// import LandingPage from '../ContentContainer/LandingPage';
import ContentContainer from '../ContentContainer/ContentContainer';

class App extends Component {


    handleWindowResize = () => {
        this.props.updateWindowSize(window.innerWidth, window.innerHeight)
    }
    
    componentDidMount() {
        this.handleWindowResize()
        window.addEventListener('resize', this.handleWindowResize);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }


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
        updateWindowSize: (x,y) => dispatch(StateActions.updateWindowSize(x,y))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)