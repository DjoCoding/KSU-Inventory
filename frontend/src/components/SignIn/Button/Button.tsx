interface ButtonProps {
    onClick: () => Promise<void>;
}

export default function Button({ onClick: handleClick }: ButtonProps) {
    return(
        <button onClick={handleClick} type="button" className="capitalize mt-5 py-2 px-2 rounded-xl hover:scale-101 focus:scale-99 duration-300 transition-all cursor-pointer  w-full bg-primary text-white font-medium">
            sign in
        </button>
    )
}