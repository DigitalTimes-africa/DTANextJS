import Image from "next/image";

export default function AdLongBottomSection() {

    return(
        <div className='py-10'>
            <small className="underline">Ads</small>
            <Image src="https://picsum.photos/1920/400" width={1920} height={400} alt="" />
        </div>
    )
}