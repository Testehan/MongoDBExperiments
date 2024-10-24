


const ListGroup = props => {        // we pass textProperty and valueProperty, which are strings,
    // as props because we might use this component with objects different than Genre..and those objects could have different
    // field names...this way we can parameterize those fields
    const {items, textProperty, valueProperty} = props;

    // const genres = items;
    // const genresWithAll = [{name : "All genres"}, ...genres]

    return (
        <>

            <ul className="list-group">
                {items.map(item => (
                    <li className={item[valueProperty] === props.selectedItem ? 'list-group-item active' : 'list-group-item'}
                        onClick={() => props.onFilterChange(item[valueProperty])} key={item[valueProperty]}>
                        {item[textProperty]}
                    </li>))}

            </ul>

        </>
    )
}

// defined defaults here, so that when the component is used, we can shorthen the list of provided props
// (we avoided the need to add textProperty="name" valueProperty="_id")
ListGroup.defaultProps = {
    textProperty : "name",
    valueProperty: "_id"
}

export default ListGroup