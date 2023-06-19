import Image from 'next/image'
import Link from 'next/link'
import BlogImage1 from "@/assets/img/demo/blog6.jpg"
export default function AdVerticalRectangle() {
    return(
        <div className="max-h-screen max-w-auto shadow-sm dark:shadow-white p-4 pt-0">
            <small className="underline">Ads</small>
            <div className="h-full  w-auto">
                <Image src={BlogImage1} className="w-full h-full" alt="" />
            </div>
        </div>
    )
}