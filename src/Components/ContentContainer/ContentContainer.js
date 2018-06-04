import React, {Component} from 'react';
import {connect} from 'react-redux'

import MenuIcon from '@material-ui/icons/Menu';

import {
    AppBar,
    Toolbar,
    Typography,
    Hidden,
    Drawer,
    IconButton,
    Grid,
} from '@material-ui/core';
import NavigationMenu from './NavigationMenu';
import TestContent from '../TestContent';

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
                    <Toolbar>
                        <Hidden mdUp>
                            <IconButton
                                onClick={this.handleDrawerToggle}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                        </Hidden>

                        <Typography variant="title" color="inherit" noWrap>
                            Vocalist
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div style={{width:"99%", margin:"auto"}}>
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

                    <Grid container spacing={20}>
                        <Hidden smDown>
                            <Grid item sm={12} md={3}>
                                <NavigationMenu/>
                            </Grid>
                        </Hidden>

                        <Grid item sm={12} md={9}>
                            <div style={{width:"95%", margin:"auto"}}>
                                <TestContent/> 
                            </div>
                        </Grid>
                    </Grid>
                </div>

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