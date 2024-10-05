import './Message.tsx'
import Message from "./Message.tsx";
import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert.tsx";

// TODO continue form hour 1:00:00

function App() {
    const cities = ['New York', 'London', 'Tokio']

    return <div>
        <Message />
        <br/>
        <ListGroup items={cities} heading={"Cities"}/>
        <br/>
        <Alert>
            Hello <b>bish</b>
        </Alert>
    </div>
}

export default App
