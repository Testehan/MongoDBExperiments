import React, {Component} from "react";

class Counter extends Component{
    state = {
        count:0,
        imageUrl : "https://picsum.photos/200",      // this returns a random 200px photo
        tags : ["tag1", "tag2", "tag3"]
    };

    renderTags(){
        if (this.state.tags.length === 0 ) return <p>There are no tags!</p>;

        return <ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>;
    }

    handleIncrement = (product) =>{
        console.log(product)
        console.log("Increment clicked ", this);
        this.setState({count: this.state.count + 1})        // using this setState method, react is aware of the state changes and can update the UI accordingly
    }

    render(){
        return (
            <>
                <img src={this.state.imageUrl}  alt="no picture found :(" />

                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

                <button onClick={()=>this.handleIncrement({id:1})} className="btn btn-secondary btn-sm">Increment</button>

                {this.renderTags()}
            </>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 "
        classes += (this.state.count === 0 ? "badge-warning" : "badge-primary")
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;