import './App.css'
import Navbar from "./components/navbar.jsx";
import Counters from "./components/counters.jsx";
import {Component} from "react";

class App extends Component {

  state = {
    counters : [
      {id: 1, value: 4},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0}
    ]
  }

  constructor() {   // this can be used when you need to do some intializations of properties in this class, like the state.. in the mounting phase
    super();
    console.log("App constructor");
  }

  componentDidMount() {   // after component is rendered in the DOM ...and is the good place to fetch data from server if needed
    // also the place to set the sate
    console.log("App componentDidMount");
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

  handleDecrement = (counter) =>{
    console.log(counter)
    console.log("Increment clicked ", this);
    const counters= [...this.state.counters];
    const index= counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;

    this.setState({counters:counters});
  }

  render() {
    console.log("App rendered")
    return(
      <>
        <Navbar totalCounters={this.state.counters.filter(c => c.value>0).length}/>
        <main className="container">
          <Counters counters={this.state.counters} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete} />
        </main>
      </>
    )
  }
}

export default App
