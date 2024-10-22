
// Stateless functional component
const Navbar = props => {         // unlike Classes, when using this approach we need to define "props" here
    return (<>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar
                    <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
                </a>
            </nav>
        </>
    )
}

export default Navbar



