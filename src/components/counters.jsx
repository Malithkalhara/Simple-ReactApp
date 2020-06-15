import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import Counter from "./counter";


class Counters extends Component {
    
    render() {
        return (
            <div>
                <Button variant="contained" onClick={this.props.onReset} style={{margin:"20px"}}>
                    Reset
                </Button>
                {this.props.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onDecrement={this.props.onDecrement}
                        onIncrement={this.props.onIncrement}
                        onDelete={this.props.onDelete}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
