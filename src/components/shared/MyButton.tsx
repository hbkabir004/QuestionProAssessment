interface MyButtonProps {
    className?: string;
    btnname: string;
    onClick?: () => void; // Optional click handler
    disabled?: boolean;   // Optional disabled state
}

export const MyButton: React.FC<MyButtonProps> = ({ className, btnname, onClick, disabled }) => {
    return (
        <button
            className={`${className} ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
            onClick={onClick}
            disabled={disabled}
        >
            {btnname}
        </button>
    );
};
