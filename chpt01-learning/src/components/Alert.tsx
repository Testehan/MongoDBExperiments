import {ReactNode} from "react";

interface Props {
    children: ReactNode;   // by doing this, you can pass html content to a component
}

const Alert = ({children}: Props) => {

    return (
        <div className="alert alert-primary">{children}</div>
    )
}

export default Alert;