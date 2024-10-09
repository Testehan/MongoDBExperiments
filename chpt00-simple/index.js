// the imports do not work because of this project setup, where the js libraries are obtained from a CDN.. however
// if using vite, things would be simpler
// import React from "react"
// import ReactDom from "react-dom"
// import Header from './Header.js'


function MyOwnComponent(){
    return <h1>I am learning react!</h1>
}

const AnotherComponent = (
    <p>How is this printed to console?</p>
)

console.log(MyOwnComponent);
console.log(AnotherComponent);


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

function Footer(){
    return (
        <footer><small>Copyright Dan</small></footer>
    )
}

function MainContent(){
    return (
        <div>
        <h1>Fun facts about react</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Has over 100k stars on github</li>
            <li>Maintained by Facebook</li>
        </ul>
        </div>
    )
}

function FunFactsPage() {
    return <div>

        <Header/>

        <MainContent/>

        <Footer />
    </div>
}

// ReactDOM.render is deprecated in React18 ... but still it works
ReactDOM.render(
    <div>
        <h1>I hope this works</h1>
        <MyOwnComponent />
        <FunFactsPage />
    </div>,
    document.getElementById("root")
);