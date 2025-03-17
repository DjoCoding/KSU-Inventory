interface HeaderProps {
    handleClose: () => void;
    handleSubmit: (data: any) => void;
}

export default function Header({ handleClose }: HeaderProps) {
    return(
        <div className="flex justify-between items-center py-2">
            <button onClick={handleClose} type="button" className="capitalize text-primary font-medium cursor-pointer">
                cancel
            </button>
            <button type="button" className="capitalize text-primary font-medium cursor-pointer">
                submit
            </button>
        </div>
    )
}