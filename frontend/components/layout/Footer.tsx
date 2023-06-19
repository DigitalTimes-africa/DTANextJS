import Image from "next/image"
import Link from "next/link"
import HomeIcon from "@/assets/img/icons/home_icon.svg"
import HomeIconW from "@/assets/img/icons/home_icon_white.svg"
import PhoneIcon from "@/assets/img/icons/phone_icon.svg"
import PhoneIconW from "@/assets/img/icons/phone_icon_white.svg"
import EnvelopeIcon from "@/assets/img/icons/envelope_icon.svg"
import EnvelopeIconW from "@/assets/img/icons/envelope_icon_white.svg"
import LinkedInIn from "@/assets/img/icons/fa_linkedin_in.svg"
import Facebook from "@/assets/img/icons/fa_facebook_f.svg"
import Twiiter from "@/assets/img/icons/fa_twiiter.svg"
import Telegram from "@/assets/img/icons/fa_telegram.svg"
import Instagram from "@/assets/img/icons/fa_instagram.svg"
import YouTube from "@/assets/img/icons/fa_youtube.svg"
import TikTok from "@/assets/img/icons/fa_tiktok.svg"
import WhatsApp from "@/assets/img/icons/fa_whatsapp.svg"
import Medium from "@/assets/img/icons/fa_medium.svg"
import SquareIcon from "@/assets/img/icons/stop_icon.svg"
import SquareIconW from "@/assets/img/icons/stop_icon_white.svg"

export default function Footer() {
    const dateYear = new Date().getFullYear()
    return(
        <div className="flex pt-4 items-center flex-col xmd:flex-row xmd:flex-nowrap xmd:justify-start mt-12">
            <div className="w-full m-auto pt-4 text-primary-black dark:text-primary-white bg-white dark:bg-slate-800 text-[85%] shadow-[0_-1px_0px_0_rgba(0,0,0,0.1)] dark:shadow-[0_-1px_0px_0_rgba(255,255,255,0.1)]">
                <div className="flex flex-wrap flex-row lg:flex-nowrap gap-10 justify-between pb-8">
                    <div className="xmd:flex-none w-full xsm:w-72">
                        <div>
                            <h3 className="text-lg pb-3">Contact Details</h3>
                            <address>
                                <ul>
                                    <li className="flex flex-row gap-2 pb-4 items-start"><Image src={HomeIcon} className="block dark:hidden" alt="DTA logo footer" />
                                        <Image src={HomeIconW} className="hidden dark:block" alt="DTA logo footer" />
                                        <Link href="https://goo.gl/maps/7SScPPR6QCcdGG8z5" className="flex flex-col gap-1.5" title="map"
                                            target="_blank">
                                            <span>GM-057-7751,</span>
                                            <span>14 Bombay St.</span>
                                            <span>Accra - Ghana</span>
                                            </Link></li>
                                    <li className="flex flex-row gap-2 pb-4 items-start"><Image src={PhoneIcon} className="block dark:hidden" alt="DTA logo footer" />
                                        <Image src={PhoneIconW} className="hidden dark:block" alt="DTA logo footer" />
                                        <div className="flex flex-col gap-1.5">
                                            <Link href="tel:+233302261832" title="telephone">
                                                +233 30 226 1832</Link>
                                            <Link href="tel:+233596567373" title="telephone">
                                                +233 59 656 7373</Link>
                                            <Link href="tel:+233596563636" title="telephone">
                                                +233 59 656 3636</Link>
                                        </div>
                                         </li>
                                    <li className="flex flex-row gap-2 pb-4 items-start"><Image src={EnvelopeIcon} className="block dark:hidden" alt="DTA logo footer" />
                                        <Image src={EnvelopeIconW} className="hidden dark:block" alt="DTA logo footer" />
                                        <div className="flex flex-col gap-1.5">
                                            <Link href="mailto:operations@digitaltimes.africa" className="break-all"
                                                title="link">operations@digitaltimes.africa</Link>
                                            <Link href="mailto:editor@digitaltimes.africa" className="break-all"
                                                title="link">editor@digitaltimes.africa</Link>
                                            <Link href="mailto:info@digitaltimes.africa" className="break-all"
                                                title="link">info@digitaltimes.africa</Link>
                                        </div>
                                    </li>
                                </ul>
                            </address>
                        </div>
                    </div>
                    <div className="xmd:flex-none w-full xsm:w-52">
                        <h3 className="text-lg pb-3">Quick Links</h3>
                        <div>
                            <ul className="flex flex-col gap-2">
                            <Link href={'/category/articles'} className="flex items-center gap-2">
                                <span className="w-2">
                                    <Image src={SquareIcon} className="block dark:hidden" alt="" />
                                    <Image src={SquareIconW} className="hidden dark:block" alt="" />
                                </span><span>Articles</span></Link>
                            <Link href={'/category/digital-creatives'} className="flex items-center gap-2">
                                <span className="w-2">
                                    <Image src={SquareIcon} className="block dark:hidden" alt="" />
                                    <Image src={SquareIconW} className="hidden dark:block" alt="" />
                                </span><span>Digital Creatives</span></Link>
                            <Link href={'/category/entrepreneurship'} className="flex items-center gap-2">
                                <span className="w-2">
                                    <Image src={SquareIcon} className="block dark:hidden" alt="" />
                                    <Image src={SquareIconW} className="hidden dark:block" alt="" />
                                </span><span>Entrepreneurship</span></Link>
                            <Link href={'/category/innovation'} className="flex items-center gap-2">
                                <span className="w-2">
                                    <Image src={SquareIcon} className="block dark:hidden" alt="" />
                                    <Image src={SquareIconW} className="hidden dark:block" alt="" />
                                </span><span>Innovation</span></Link>
                            <Link href={'/category/news'} className="flex items-center gap-2">
                                <span className="w-2">
                                    <Image src={SquareIcon} className="block dark:hidden" alt="" />
                                    <Image src={SquareIconW} className="hidden dark:block" alt="" />
                                </span><span>News</span></Link>
                            <Link href={'/opportunities'} className="flex items-center gap-2">
                                <span className="w-2">
                                    <Image src={SquareIcon} className="block dark:hidden" alt="" />
                                    <Image src={SquareIconW} className="hidden dark:block" alt="" />
                                </span><span>Opportunities</span></Link>
                            <Link href={'/our-services'} className="flex items-center gap-2">
                                <span className="w-2">
                                    <Image src={SquareIcon} className="block dark:hidden" alt="" />
                                    <Image src={SquareIconW} className="hidden dark:block" alt="" />
                                </span><span>Our Services</span></Link>
                            <Link href={'/category/press-release'} className="flex items-center gap-2">
                                <span className="w-2">
                                    <Image src={SquareIcon} className="block dark:hidden" alt="" />
                                    <Image src={SquareIconW} className="hidden dark:block" alt="" />
                                </span><span>Press Release</span></Link>
                            <Link href={'/category/sponsored-content'} className="flex items-center gap-2">
                                <span className="w-2">
                                    <Image src={SquareIcon} className="block dark:hidden" alt="" />
                                    <Image src={SquareIconW} className="hidden dark:block" alt="" />
                                </span><span>Sponsored Content</span></Link>
                            <Link href={'/category/tech-world'} className="flex items-center gap-2">
                                <span className="w-2">
                                    <Image src={SquareIcon} className="block dark:hidden" alt="" />
                                    <Image src={SquareIconW} className="hidden dark:block" alt="" />
                                </span><span>Tech World</span></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:grow xmd:w-1/2 w-full">
                        <h3 className="text-lg pb-3">Editor&apos;s Choice</h3>
                        <div>
                            <ul>
                                <li>
                                    <Link href={'/post/1'} className="flex flex-row gap-5 pb-4">
                                        <span className="font-yuji text-5xl leading-10">1</span>
                                        <span>Lorem ipsum dolor sit amet consectetur adipiscing, elit eu pharetra tellus dictumst.</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/post/2'} className="flex flex-row gap-4 pb-4">
                                        <span className="font-yuji text-5xl leading-10">2</span>
                                        <span>Eros magnis fermentum lectus fusce libero, tortor natoque mauris.</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/post/3'} className="flex flex-row gap-4 pb-4">
                                        <span className="font-yuji text-5xl leading-10">3</span>
                                        <span>Nunc primis penatibus laoreet fusce ac, torquent venenatis iaculis.</span>
                                    </Link>
                                </li>
                                <li >
                                    <Link href={'/post/4'} className="flex flex-row gap-4 pb-4">
                                        <span className="font-yuji text-5xl leading-10">4</span>
                                        <span>Tellus ullamcorper dignissim lectus ornare tincidunt integer, quam quis conubia mus mauris.</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="xmd:flex-none xmd:w-44 w-full">
                        <h3 className="text-lg pb-3">Socials</h3>
                        <div className="xmd:grid flex xmd:grid-flow-row-dense flex-row xmd:grid-cols-3 flex-wrap xmd:grid-rows-3 gap-4">
                            <a href="https://facebook.com/DigitalTimesAfrica/" className="bg-[#3b5998] hover:bg-primary-blue dark:hover:bg-btn-hover rounded w-[50px] flex justify-center items-center"
                                title="Facebook"
                                target="_blank"><Image src={Facebook} className="p-1" alt="" /></a>
                            <a href="https://twitter.com/DigitalTAfrica" className="bg-[#1da1f2] hover:bg-primary-blue dark:hover:bg-btn-hover rounded w-[50px] flex justify-center items-center"
                                title="Twitter"
                                target="_blank"><Image src={Twiiter} className="p-1.5" alt="" /></a>
                            <a href="https://www.linkedin.com/company/digitaltimesafrica/"
                                className="bg-[#0a66c2] hover:bg-primary-blue dark:hover:bg-btn-hover rounded w-[50px] flex justify-center items-center"
                                title="LinkedIn" target="_blank"><Image src={LinkedInIn} className="px-1.5" alt="" /></a>

                            <a href="https://www.instagram.com/digitaltimesafrica/" className="bg-gradient-to-br from-yellow-400 via-red-500 to-purple-800 hover:from-primary-blue hover:via-primary-blue hover:to-primary-blue dark:hover:from-btn-hover dark:hover:via-btn-hover dark:hover:to-btn-hover rounded w-[50px] flex justify-center items-center"
                                title="Instagram"
                                target="_blank"><Image src={Instagram} className="p-1.5" alt="" /></a>
                            <a href="https://www.youtube.com/channel/UCsLA-rwLOHa0w6EIC6SLM8w"
                                className="bg-[red] hover:bg-primary-blue dark:hover:bg-btn-hover rounded w-[50px] flex justify-center items-center"
                                title="YouTube" target="_blank"><Image src={YouTube} className="px-1.5" alt="" /></a>
                            <a href="https://t.me/digitaltafrica" className="tb2-cl bg-[#08c] hover:bg-primary-blue dark:hover:bg-btn-hover rounded w-[50px] flex justify-center items-center"
                                title="Telegram"
                                target="_blank"><Image src={Telegram} className="p-1.5" alt="" /></a>

                            <a href="https://chat.whatsapp.com/CZ01DnvggpL6f5EKxwIOAM"
                                className="bg-[#25d366] hover:bg-primary-blue dark:hover:bg-btn-hover rounded w-[50px] flex justify-center items-center" 
                                title="WhatsApp" target="_blank"><Image src={WhatsApp} className="p-1.5" alt="" /></a>
                            <a href="tiktok.com/@digitaltimes_africa" className="bg-black hover:bg-primary-blue dark:hover:bg-btn-hover rounded w-[50px] flex justify-center items-center"
                                title="TikTok" target="_blank"><Image src={TikTok} className="p-1.5" alt="" /></a>

                            <a href="https://digitaltimes-2020.medium.com/" className="bg-[#02b875] hover:bg-primary-blue dark:hover:bg-btn-hover rounded w-[50px]  flex justify-center items-center"
                                title="Medium" target="_blank"><Image src={Medium} className="p-2.5 leading-[30px]" alt="" /></a>
                        </div>
                    </div>
                </div> 
                <div className="flex flex-wrap flex-col xmd:flex-row justify-between xmd:flex-nowrap shadow-[0_-1px_0px_0_rgba(0,0,0,0.12)] dark:shadow-[0_-1px_0px_0_rgba(255,255,255,0.12)] py-4">
                    <div className="select-none">
                        Copyright &#64;{dateYear} <strong>Digital Times Africa</strong>. All rights reserved.
                    </div>
                    <div>
                        <ul className="flex flex-wrap flex-row 1xsm:flex-nowrap justify-between gap-8 pt-8 xmd:pt-0">
                            <li><Link href="/terms">Term</Link></li>
                            <li><Link href="/privacy">Privacy</Link></li>
                            <li><Link href="/cookie-policy">Cookies</Link></li>
                            <li><Link href="/about-us">About us</Link></li>
                            <li><Link href="mailto:operations@digitaltimes.africa">Contact</Link> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}