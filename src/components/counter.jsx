import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';


class Counter extends Component {

    render() {
        return (
            <div>
                <Badge badgeContent={this.props.counter.value} color="secondary" style={{ margin: "20px" }}>
                    <LocalOfferIcon/>
                </Badge>
                <Button style={{ margin: "3px" }} onClick={()=>this.props.onIncrement(this.props.counter)} variant="contained" color="primary">
                    <AddIcon/>
                </Button>
                <Button onClick={()=>this.props.onDecrement(this.props.counter)} variant="contained" color="primary">
                    <RemoveIcon/>
                </Button>
                <Button variant="contained" style={{ margin: "13px" }} onClick={()=>this.props.onDelete(this.props.counter.id)} color="secondary">
                    Delete
                </Button>
            </div>
        );
    }

}

export default Counter;
