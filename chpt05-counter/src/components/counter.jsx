import React, {Component} from "react";

class Counter extends Component{
    // state = {
    //     value:this.props.counter.value,
    //     imageUrl : "https://picsum.photos/200",      // this returns a random 200px photo
    //     tags : ["tag1", "tag2", "tag3"]
    // };

    // renderTags(){
    //     if (this.state.tags.length === 0 ) return <p>There are no tags!</p>;
    //
    //     return <ul>
    //         {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
    //     </ul>;
    // }

    handleIncrement = (product) =>{
        console.log(product)
        console.log("Increment clicked ", this);
        this.setState({value: this.props.counter.value + 1})        // using this setState method, react is aware of the state changes and can update the UI accordingly
    }

    render(){
        console.log(this.props)

        return (
            <>
                {/*{this.props.children}*/}
                {/*<img src={this.state.imageUrl}  alt="no picture found :(" />*/}

                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

                <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={()=>this.props.onDelete(this.props.counter.id)}  className="btn btn-danger btn-sm m-2">Delete</button>
                <br />
                {/*{this.renderTags()}*/}
            </>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 "
        classes += (this.props.counter.value === 0 ? "badge-warning" : "badge-primary")
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;