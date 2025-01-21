

export interface ButtonProps {
    text?: string;
    handleClick: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
}