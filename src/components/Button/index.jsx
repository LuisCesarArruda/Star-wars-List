import "./style.css"

export const Button = ({text, onClick,disabled}) =>{
    return(
        
        <button
            disabled ={disabled}
            onClick={onClick}
            className="btn"
        >
                {text}
        </button>
    )
}