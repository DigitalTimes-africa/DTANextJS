import Image from "next/image";

export default function AdLargeBottomSection() {

    return(
        <div className='md:mb-20 2xsm:mb-14 mb-8'>
            <small className="underline">Ads</small>
            <Image src="https://picsum.photos/1920/600" width={1920} height={600} alt="" />
        </div>
    )
}