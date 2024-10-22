import React, {Component} from "react";
import Counter from "./counter.jsx";

class Counters extends Component{


    render(){
        return(
            <div>
                {this.props.counters.map(counter =>
                    <Counter key={counter.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement}
                             onDecrement={this.props.onDecrement} counter={counter}>
                        <h4>Title</h4>
                    </Counter>
                )}
            </div>
        )
    }
}

export default Counters;