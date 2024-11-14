type BtnProps = {
    btnname: string;
    className?: string;
};

export function MyButton({ btnname, className }: BtnProps) {
    return (
        <button type="button" className={className}>
            {btnname}
        </button>
    );
}