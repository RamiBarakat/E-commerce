import react from "react"

function Button ({onClickHandler, value, title}) {
    return (
        <Button onClick={onClickHandler} value={value} className="btns">{title}</Button>
    )
}

export default Button;