import {Fragment} from "react";
import {MouseEvent} from "react";
import {useState} from "react";

const handleClick = (event: MouseEvent) => console.log( event);

// we use this to pass parameters to our component
interface Props {
    items : string[];
    heading: string;
}

function ListGroup({items, heading}: Props) {


    // this is called a hook
    // useState()
    const [selectedIndex, setSelectedIndex] = useState(-1) // initial value is -1 as no city is selected initially

    return (
        <Fragment>
            <h1>A function can only return 1 element..so if we need to return more elements, like in this case
            an h1 and an ul, we can use a fragment</h1>
            <h2>{heading}</h2>
            <ul className="list-group">
                {items.map((city, index) => (
                    <li
                        className={selectedIndex == index ? 'list-group-item active' : 'list-group-item'}
                        onClick={() => setSelectedIndex(index)} key={city}>{city}
                    </li>))}
             </ul>;
        </Fragment>
    )
}

export default ListGroup;