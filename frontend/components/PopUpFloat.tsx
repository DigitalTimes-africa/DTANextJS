"use client"

import Image from "next/image"
import Link from "next/link"
import XMark from "@/assets/img/icons/x_mark.svg"
import Logo from "@/assets/img/avatar-logo.png"
import { useEffect, useState } from "react"

export default function PopUpFloat() {
    const [popUpOpen, setPopUpOpen] = useState(true)
    const [aceptedPrivacy, setAcceptedPrivacy] = useState(true)
        const getAcceptedStatus = typeof window !== 'undefined' && localStorage.getItem('notAcptdCP') === null
    useEffect(() => {
        setAcceptedPrivacy(getAcceptedStatus)
        setPopUpOpen(getAcceptedStatus)
    }, [])

    return (
        <div className={`fixed w-80 bg-white z-10 shadow-[0_1px_2px_rgba(0,0,0,0.1)] p-3 rounded-md left-6 bottom-6 ${popUpOpen ? 'block' : 'hidden'} delayed`}>
            <span className="absolute text-sm cursor-pointer transition duration-[0.17s] ease-[ease] right-3 top-2.5" onClick={()=>setPopUpOpen(!popUpOpen)}><Image src={XMark} alt="" /></span>
            <div className="float-left w-20 h-20 ml-0 mr-2.5 my-0"><Image src={Logo} alt="" /></div>
            <h3 className="text-lg font-semibold mt-0 mb-2 py-1 mx-0">We use Cookies</h3>
            <p className="excerpt">This website uses cookies to improve performance, analyse traffic and to provide content from third parties. By continuing to use our website, you agree to our use of cookies. <Link href="/cookies" className="underline">Learn more</Link></p>
            <Link href="#" onClick={()=>{localStorage.notAcptdCP=false; setPopUpOpen(!aceptedPrivacy)}} className="float-left w-full bg-btn-black text-sm text-primary-white text-center leading-7 transition duration-[0.17s] ease py-1 mt-4 mb-0 mx-0 rounded hover:bg-primary-blue dark:hover:bg-btn-hover">Accept</Link>
        </div>
    )
}