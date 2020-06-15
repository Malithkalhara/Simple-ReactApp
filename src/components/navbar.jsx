import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( <div>
            <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" >
                            Shopping cart
                        </Typography>
                        <Badge badgeContent={this.props.totCounters} color="secondary" style={{margin:"15px"}}>
                            <ShoppingCartIcon />
                        </Badge>
                    </Toolbar>
                </AppBar>
        </div> );
    }
}
 
export default NavBar;