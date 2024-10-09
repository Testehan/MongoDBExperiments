import React from "react"
import './App.css'

function AppPlayingWithState() {
    const result = React.useState("No")
    console.log(result)     // if you check the console you will see that result is an array of 2 things, the string "No"
    // and a function...so below when we deconstruct result into 2 parameters, isImportant and setIsImportant, we can
    // then access them directly, without using something like result[0] or result[1]

    const [isImportant, setIsImportant] = React.useState("Yes")
    console.log(isImportant)

    function handleClick(){
        setIsImportant("No")
    }

    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div onClick={handleClick} className="state--value">
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}

export default AppPlayingWithState
