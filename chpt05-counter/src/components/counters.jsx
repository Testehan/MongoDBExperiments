import React, {Component} from "react";
import Counter from "./counter.jsx";

class Counters extends Component{
    state = {
        counters : [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    }

    handleDelete = (counterId) => {
        console.log("Delete Event handler called " + counterId)
        const counters = this.state.counters.filter(c=>c.id !== counterId);
        this.setState({counters : counters})
    }

    handleIncrement = (counter) =>{
        console.log(counter)
        console.log("Increment clicked ", this);
        const counters= [...this.state.counters];
        const index= counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;

        this.setState({counters:counters});


    }

    render(){
        return(
            <div>
                {this.state.counters.map(counter =>
                    <Counter key={counter.id} onDelete={this.handleDelete} onIncrement={this.handleIncrement} counter={counter}>
                        <h4>Title</h4>
                    </Counter>
                )}
            </div>
        )
    }
}

export default Counters;