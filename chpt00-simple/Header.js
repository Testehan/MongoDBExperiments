import React from "react";


// one can use this approach to export the component, adding directly "export default" when the function is defined
function Header(){
    return  ( <header>
        <nav className="nav">
            <img src="./react-logo.png" width="40px"/>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    </header> )
}

// instead of exporting the component as it is done  below you can add the export at function definition
export default Header