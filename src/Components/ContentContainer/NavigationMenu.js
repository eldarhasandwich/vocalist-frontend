import React, {Component} from 'react';
import {connect} from 'react-redux'
import { List, ListItem, ListItemText } from '@material-ui/core';

class NavigationMenu extends Component {
    render() {
        return (
            <div 
                className="NavMenu"
                style={{width:"240px"}}    
            >
                <List component="nav">

                    <ListItem button>
                        <ListItemText primary="ItemOne"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="ItemTwo"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="ItemThree"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="ItemFour"/>
                    </ListItem>


                </List>
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