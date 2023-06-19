import Image from 'next/image'
import Link from 'next/link'
import BlogImage1 from "@/assets/img/demo/blog5.jpg"
export default function AdSquareSection() {
    return(
        <div className="max-h-80 max-w-auto shadow-sm dark:shadow-white p-4 pt-0">
            <small className="underline">Ads</small>
            <div className="h-[15.7rem] w-auto">
                <Image src={BlogImage1} className="w-full h-full" alt="" />
            </div>
        </div>
    )
}