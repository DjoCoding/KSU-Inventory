interface PictureProps {
    file: File;
}

export default function Picture({ file: picture }: PictureProps) {
    const url = URL.createObjectURL(picture);
    return(
        <div className="flex items-center justify-center size-[100px]">
            <img src={url} alt="Picture" className="object-cover w-full h-full object-center rounded"/>
        </div>
    )
}