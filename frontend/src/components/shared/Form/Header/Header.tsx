interface HeaderProps {
    onClose: () => void;
    onSubmit: () => Promise<void>;
}

export default function Header({ onClose: handleClose, onSubmit: handleSubmit }: HeaderProps) {
    return(
        <div className="flex justify-between items-center py-2">
            <button onClick={handleClose} type="button" className="capitalize text-primary font-medium cursor-pointer">
                cancel
            </button>
            <button onClick={handleSubmit} type="button" className="capitalize text-primary font-medium cursor-pointer">
                submit
            </button>
        </div>
    )
}