interface PictureProps {
    file: File | string;
}

export default function Picture({ file: picture }: PictureProps) {
    const url = picture instanceof File ? URL.createObjectURL(picture as any) : picture as string; 
    return(
        <div className="flex items-center justify-center size-[100px]">
            <img src={url} alt="Picture" className="object-cover w-full h-full object-center rounded"/>
        </div>
    )
}