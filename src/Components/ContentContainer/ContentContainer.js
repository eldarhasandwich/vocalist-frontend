import React, {Component} from 'react';
import {connect} from 'react-redux'

import {
    AppBar,
    Toolbar,
    Typography,
    Hidden,
    Drawer,
    Button,
} from '@material-ui/core';
import NavigationMenu from './NavigationMenu';

class ContentContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            drawerOpen: false
        }
    }

    handleDrawerToggle = () => {
        this.setState({ drawerOpen: !this.state.drawerOpen });
    };

    drawerWidth = 240

    render() {
        return (
            <div className="ContentContainer">

                <AppBar position="static">
                    <Hidden mdUp>
                        <Button
                            onClick={this.handleDrawerToggle}
                        >
                            Menu
                        </Button>
                    </Hidden>

                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Welcome to Vocalist
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        open={this.state.drawerOpen}
                        onClose={this.handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <NavigationMenu/>
                    </Drawer>
                </Hidden>

                <Hidden smDown>
                    <NavigationMenu/>
                </Hidden>

                {/*Content goes here*/}

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