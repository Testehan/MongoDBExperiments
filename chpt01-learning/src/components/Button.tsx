

interface Props {
    text: string;
    onClick : () => void;           // a function with no parameters that returns void
}

const Button = ({text, onClick }: Props) => {

    return (
        <button type="button" className="btn btn-primary" onClick={onClick}>{text}</button>
    )
}

export default Button;
