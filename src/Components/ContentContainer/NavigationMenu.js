import React, {Component} from 'react';
import {connect} from 'react-redux'

class NavigationMenu extends Component {
    render() {
        return (
            <div>
                <h1>Naviagtion Menu</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu)