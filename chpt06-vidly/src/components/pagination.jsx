import PropTypes from "prop-types";


const Pagination = props => {

    const pageCount = props.itemsCount/props.pageSize +1;

    if (pageCount < 2){
        return  null;
    }

    return (
        <>
            <nav>
                <ul className="pagination">
                    {Array.from({ length:  pageCount}).map((_, index) => (
                        <li className={index+1 === props.currentPage ? "page-item active" : "page-item"} key={index+1}>
                            <a onClick={() => props.onPageChange(index+1)} className="page-link" >{index+1}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

Pagination.propTypes = {
    itemsCount : PropTypes.number.isRequired,
    pageSize : PropTypes.number.isRequired,
    onPageChange : PropTypes.func.isRequired,
    currentPage : PropTypes.number.isRequired
}

export default Pagination