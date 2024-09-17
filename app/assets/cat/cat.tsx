import cat from "@/app/assets/cat/cat.gif";
import Image from "next/image";

export default function PixelCat() {
    return (
        <Image src={cat} alt={"cat :)"} width={36} height={36} unoptimized={true}/>
    )
}
