import './Message.tsx'
import Message from "./Message.tsx";
import ListGroup from "./components/ListGroup.tsx";

// TODO continue form hour 1:00:00

function App() {
    const cities = ['New York', 'London', 'Tokio']

    return <div><Message /> <br/> <ListGroup items={cities} heading={"Cities"}/></div>
}

export default App
