import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import LinkedInIn from "@/assets/img/icons/fa_linkedin_in.svg"
import Facebook from "@/assets/img/icons/fa_facebook_f.svg"
import Twiiter from "@/assets/img/icons/fa_twiiter.svg"
import Telegram from "@/assets/img/icons/fa_telegram.svg"
import WhatsApp from "@/assets/img/icons/fa_whatsapp.svg"
import LinkIconW from "@/assets/img/icons/link_icon_white.svg"
import EnvelopeIconW from "@/assets/img/icons/envelope_icon_white.svg"
import Reddit from "@/assets/img/icons/fa_reddit.svg"
import Plus from "@/assets/img/icons/fa_plus.svg"
import Minus from "@/assets/img/icons/fa_minus.svg"


export default function ShareButtons() {
    const [toggleMore, setToggleMore] = useState(false)

    return(
        <div className="flex 1xsm:flex-col flex-row flex-wrap 1xsm:justify-center justify-normal items-center w-full text-center">
            <p className="text-gray-400 md:text-base text-sm">Share this</p>
            {/* <!-- facebook --> */}
            <Link className="bg-[#3b5998] xsm:w-10 xsm:h-10 w-9 h-9 inline-block 1xsm:mx-4 mx-2 my-2 rounded-full text-2xl text-white opacity-75 transition-opacity hover:opacity-100"
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.digitaltimes.africa{{ page.url }}%2F&display=popup&ref=plugin&src=like&kid_directed_site=0"
                target="blank"><Image src={Facebook} className="pt-2 pl-[0.8rem]" alt="" /></Link>

            {/* <!-- twitter --> */}
            <Link className="bg-[#55acee] xsm:w-10 xsm:h-10 w-9 h-9 inline-block 1xsm:mx-4 mx-2 my-2 rounded-full text-2xl text-white opacity-75 transition-opacity hover:opacity-100"
                href="https://twitter.com/share?text=&url={{ page.title}}+https://www.digitaltimes.africa{{ page.url }}"
                target="blank"><Image src={Twiiter} className="p-2" alt="" /></Link>

            {/* <!-- copy link -->  */}
            <Link className="bg-[#1e40af] xsm:w-10 xsm:h-10 w-9 h-9 inline-block 1xsm:mx-4 mx-2 my-2 rounded-full text-2xl text-white opacity-75 transition-opacity hover:opacity-100"
                href="https://www.digitaltimes.africa{{ page.url }"
                target="blank"><Image src={LinkIconW} className="w-10 p-2" alt="#2563eb" /></Link>
            
            {/* <!-- more option -->  */}
            <div title="See more" className={`${toggleMore ? "hidden": "block"} bg-[#2563eb] xsm:w-10 xsm:h-10 w-9 h-9 inline-block 1xsm:mx-4 mx-2 my-2 rounded-full text-2xl text-white opacity-75 transition-opacity hover:opacity-100`}
            onClick={() => setToggleMore(!toggleMore)} ><Image src={Plus} className="xsm:p-2.5 p-2" alt="" /></div>
            
            {/* <!-- email --> */}
            <Link className={`${toggleMore ? "block": "hidden"} bg-[#cb2027] xsm:w-10 xsm:h-10 w-9 h-9 inline-block 1xsm:mx-4 my-2 mx-2 rounded-full text-2xl text-white opacity-75 transition-opacity hover:opacity-100`}
                href="mailto:?subject=Digital Times:{{ page.title}}&body=https://www.digitaltimes.africa{{ page.url }}"
                target="blank"><Image src={EnvelopeIconW} className="w-10 p-2" alt="" /></Link>

            {/* <!-- whatsapp --> */}
            <Link className={`${toggleMore ? "block": "hidden"} bg-[#4dc247] xsm:w-10 xsm:h-10 w-9 h-9 inline-block 1xsm:mx-4 mx-2 my-2 rounded-full text-2xl text-white opacity-75 transition-opacity hover:opacity-100`}
                href="https://api.whatsapp.com/send?text={{ page.title }}+https://www.digitaltimes.africa{{ page.url }}"
                target="blank"><Image src={WhatsApp} className="xsm:py-3 xsm:px-3 py-2 px-2.5" alt="" /></Link>

            {/* <!-- linkedin --> */}
            <Link className={`${toggleMore ? "block": "hidden"} bg-[#0077b5] xsm:w-10 xsm:h-10 w-9 h-9 inline-block 1xsm:mx-4 mx-2 my-2 rounded-full text-2xl text-white opacity-75 transition-opacity hover:opacity-100`}
                href="http://www.linkedin.com/shareArticle?mini=true&url=https://www.digitaltimes.africa{{ page.url }}&title={{ page.title }}&summary={{ page.description|striptags|truncatewords:40 }}&source=Digital_Times"
                target="blank"><Image src={LinkedInIn} className="p-3" alt="" /></Link>

            {/* <!-- Reddit --> */}
            <Link className={`${toggleMore ? "block": "hidden"} bg-[#ff4500] xsm:w-10 xsm:h-10 w-9 h-9 inline-block 1xsm:mx-4 mx-2 my-2 rounded-full text-2xl text-white opacity-75 transition-opacity hover:opacity-100`} 
            href="http://reddit.com/submit?url=https://www.digitaltimes.africa{{ page.url }}&title={{ page.title }}" 
            target="_blank"><Image src={Reddit} className="p-2" alt="" /></Link>

            {/* <!-- Telegram --> */}
            <Link className={`${toggleMore ? "block": "hidden"} bg-[#0088CC] xsm:w-10 xsm:h-10 w-9 h-9 inline-block 1xsm:mx-4 mx-2 my-2 rounded-full text-2xl text-white opacity-75 transition-opacity hover:opacity-100`} 
            href="http://reddit.com/submit?url=https://www.digitaltimes.africa{{ page.url }}&title={{ page.title }}" 
            target="_blank"><Image src={Telegram} className="p-[0.10rem]" alt="" /></Link>

            {/* <!-- less option -->  */}
            <div title="See less" className={`${toggleMore ? "block": "hidden"} bg-[#2563eb] xsm:w-10 xsm:h-10 w-9 h-9 inline-block 1xsm:mx-4 mx-2 my-2 rounded-full text-2xl text-white opacity-75 transition-opacity hover:opacity-100`}
            onClick={() => setToggleMore(!toggleMore)} ><Image src={Minus} className="xsm:p-2.5 p-2" alt="" /></div>
            
        </div>
    )
}