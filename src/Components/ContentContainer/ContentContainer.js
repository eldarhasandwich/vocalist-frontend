import React, {Component} from 'react';
import {connect} from 'react-redux'

import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';
import NavigationMenu from './NavigationMenu';

class ContentContainer extends Component {
    render() {
        return (
            <div>

                <NavigationMenu/>

                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Welcome to Vocalist
                        </Typography>
                    </Toolbar>
                </AppBar>

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

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer)