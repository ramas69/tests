import { ButtonProps } from "./Button.types";
import "./Button.scss";

export const Button = ({ 
    text = "Valider", 
    handleClick, 
    variant = "primary" 
}: ButtonProps) => {
    return (
        <button 
            onClick={handleClick} 
            className={`button ${variant}`}
        >
            {text}
        </button>
    );
};

