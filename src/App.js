import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
    state = {
        counters: [
            { id: 1,name:"Item_1", value: 0 },
            { id: 2,name:"Item_2", value: 0 },
            { id: 3,name:"Item_3", value: 5 },
            { id: 4,name:"Item_4", value: 0 },
        ],
    };

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({ counters: counters });
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters: counters });
    };
    render() {
        return (
            <div className="App">
                <NavBar totCounters={this.state.counters.filter(c=>c.value>0).length}/>
                <Counters counters={this.state.counters} onDelete={this.handleDelete} onReset={this.handleReset} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
            </div>
        );
    }
}

export default App;
