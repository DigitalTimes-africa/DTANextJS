import RootLayout from "@/app/layout";
import Heading from '@/components/layout/Heading'
import SideBar from "@/components/layout/Sidebar";
import Image from "next/image";
import Link from "next/link";
import Img from "@/assets/img/hero-pics/pexels-rebrand-cities.jpg"
import Img1 from "@/assets/img/hero-pics/pexels-christina-morillo-2.jpg"
import Img2 from "@/assets/img/hero-pics/pexels-christina-morillo.jpg"
import Img3 from "@/assets/img/hero-pics/pexels-fauxels-short.jpg"
import Img4 from "@/assets/img/hero-pics/pexels-picha-stock.jpg"

export default function AboutUs() {
    return(
        <RootLayout>
            <Heading title={'Digital Times - About Us'} name={'description'} content={'Digital Times Africa is a multimedia agency that provides a platform promoting African innovation. We curate relevant and credible content for startups, entrepreneurs and technology lovers in Africa.'} />
            <div className="flex py-4 items-center flex-col xmd:flex-row xmd:flex-nowrap xmd:justify-start mt-12">
                <div className="w-full m-auto py-4 text-primary-black dark:text-primary-white bg-white dark:bg-slate-800 text-[85%]">
                    <div className='flex flex-row flex-wrap xmd:flex-nowrap justify-between pt-12'>
                        <div className=" pt-12 mb-20">
                            <div className="flex flex-col gap-20">
                                <div className="flex flex-wrap lg:flex-nowrap gap-8">
                                    <div className="w-full lg:order-1 order-2 lg:py-12">
                                        <h1 className="xsm:text-5xl text-4xl pb-4">Elevating African Startups, Entrepreneurs and Innovation</h1>
                                        <span className="text-xl">
                                            Digital Times Africa is a mediatech company that focuses on elevating
                                            Africa’s tech, innovation and entrepreneurship scene through digital
                                            storytelling, PR and branding services.
                                        </span>
                                    </div>
                                    <div className="w-full lg:order-2 order-1 pr-0 max-h-[41.125rem]">
                                        <Image src={Img1} alt="" className="rounded lg:block hidden" /> 
                                        <Image src={Img3} alt="" className="rounded block lg:hidden" />
                                    </div>
                                </div>
                                <div className="w-full bg-[#e8f3ec]">
                                    <div className="flex flex-wrap md:flex-nowrap md:gap-8 ">
                                        <div className={`w-full relative md:block hidden pr-0`}><Image src={Img} fill={true} alt="" /> </div>
                                        <div className="w-full md:py-10 py-20 px-8">
                                            <h2 className="xsm:text-3xl text-2xl pb-2 text-primary-black">Our Mission</h2>
                                            <p className="text-lg text-primary-black">
                                                Our mission is to empower African entrepreneurs and innovators by providing them with the tools and resources they need to succeed. We believe that by sharing their stories and ideas, we can help create a brighter future for Africa.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-r from-blue-300 to-blue-500 text-white py-12 flex flex-col sm:flex-row items-center justify-between">
                                    <div className="w-full sm:w-1/3 text-center mb-4 sm:mb-0 px-4 sm:pb-0 pb-12">
                                        <h3 className="xsm:text-4xl text-3xl font-bold">100+</h3>
                                        <p className="text-lg">Startups Featured</p>
                                    </div>
                                    <div className="w-full sm:w-1/3 text-center mb-4 sm:mb-0  px-4 sm:py-0 py-12 sm:border-l-2 sm:border-t-0 border-l-0 border-t-2 border-primary-white">
                                        <h3 className="xsm:text-4xl text-3xl font-bold">50+</h3>
                                        <p className="text-lg">Entrepreneurs Interviewed</p>
                                    </div>
                                    <div className="w-full sm:w-1/3 text-center px-4 sm:pt-0 pt-12 sm:border-l-2 sm:border-t-0 border-l-0 border-t-2 border-primary-white">
                                        <h3 className="xsm:text-4xl text-3xl font-bold">10+</h3>
                                        <p className="text-lg">Innovations Showcased</p>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                                    <div className="grid grid-cols-1 xmd:grid-cols-2 gap-8">
                                        <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg text-primary-black">
                                            <Image src={Img2} alt="" className="w-full h-auto mb-4" />
                                                <Link href="/our-services">
                                                    <h3 className="text-xl font-bold text-center mb-2">Digital Storytelling</h3>
                                                </Link>
                                                <p className="text-center">
                                                    We help startups and entrepreneurs share their stories through engaging digital content.
                                                </p>
                                            
                                        </div>
                                        <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg text-primary-black">
                                            <Image src={Img4} alt="" className="w-full h-auto mb-4" />
                                                <Link href="/our-services">
                                                    <h3 className="text-xl font-bold text-center mb-2">PR and Branding Services</h3>
                                                </Link>
                                                <p className="text-center">
                                                    We provide PR and branding services to help startups and entrepreneurs build their brand and reach their target audience.
                                                </p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <aside className="w-full min-h-[1px] xmd:flex-[0_0_33.33333%] xmd:max-w-[33.33333%] xmd:pl-20">
                            <SideBar classes={"xmd:sticky xmd:top-20"} hideFeaturedVideos={''} hideTweets={'block'} hideLongAd={'block'} />
                        </aside>
                    </div>
                </div>
            </div>
        </RootLayout>
    )
}