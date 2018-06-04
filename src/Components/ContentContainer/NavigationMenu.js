import React, {Component} from 'react';
import {connect} from 'react-redux'
import { List, ListItem, ListItemText, Collapse, ListItemIcon } from '@material-ui/core';

import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

class NavigationMenu extends Component {

    constructor(props){
        super(props)

        this.state = {
            itemThreeSubmenuOpen: false,
            itemFourSubmenuOpen: false
        }
    }

    toggleSubmenu = (menu) => {
        switch (menu) {
            case ("three"): 
                this.setState({itemThreeSubmenuOpen: !this.state.itemThreeSubmenuOpen})
                break
            case ("four"):
                this.setState({itemFourSubmenuOpen: !this.state.itemFourSubmenuOpen})
                break
            default: return
        }
    }

    handleClick = () => {
        alert("click")
    }

    render() {
        return (
            <div 
                className="NavMenu"
                style={{}}    
            >
                <List component="nav">

                    <NavMenuButton
                        onClick={this.handleClick}
                        icon={<SendIcon/>}
                        title={"ItemOne"}
                    />

                    <NavMenuButton
                        onClick={this.handleClick}
                        icon={<SendIcon/>}
                        title={"ItemTwo"}
                    />

                    <NavMenuButton
                        onClick={this.toggleSubmenu.bind(this, "three")}
                        icon={<SendIcon/>}
                        title={"ItemThree"}
                        isMenuButton
                        menuIsOpen={this.state.itemThreeSubmenuOpen}
                    />

                    <Collapse in={this.state.itemThreeSubmenuOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding style={{marginLeft:"20px"}}>

                            <NavMenuButton
                                onClick={this.handleClick}
                                icon={<SendIcon/>}
                                title={"ThreeOne"}
                            />
                            
                            <NavMenuButton
                                onClick={this.handleClick}
                                icon={<SendIcon/>}
                                title={"ThreeTwo"}
                            />

                        </List>
                    </Collapse>

                    <NavMenuButton
                        onClick={this.toggleSubmenu.bind(this, "four")}
                        icon={<SendIcon/>}
                        title={"ItemFour"}
                        isMenuButton
                        menuIsOpen={this.state.itemFourSubmenuOpen}
                    />

                    <Collapse in={this.state.itemFourSubmenuOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding style={{marginLeft:"20px"}}>

                            <NavMenuButton
                                onClick={this.handleClick}
                                icon={<SendIcon/>}
                                title={"FourOne"}
                            />

                            <NavMenuButton
                                onClick={this.handleClick}
                                icon={<SendIcon/>}
                                title={"FourTwo"}
                            />

                        </List>
                    </Collapse>

                </List>
            </div>
        );
    }
}

class NavMenuButton extends Component {

    render() {
        return (
            <ListItem button onClick={this.props.onClick}>
                <ListItemIcon>
                    {this.props.icon}
                </ListItemIcon>
                <ListItemText primary={this.props.title}/>
                {
                    this.props.isMenuButton
                        ?   this.props.menuIsOpen ? <ExpandLess/> : <ExpandMore/>
                        :   null
                }
            </ListItem>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu)