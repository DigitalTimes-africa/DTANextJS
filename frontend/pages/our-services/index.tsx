import RootLayout from "@/app/layout";
import Heading from '@/components/layout/Heading'
import Image from "next/image";
import Link from "next/link";
import Img from "@/assets/img/hero-pics/pexels-picha-stock.jpg"
import CheckCircle from "@/assets/img/icons/circled-check.svg"

export default function OurServices() {
    return(
        <RootLayout> 
            <Heading title={'Digital Times - Our Services'} name={'description'} content={'Digital Times Africa is a multimedia agency that provides a platform promoting African innovation. We curate relevant and credible content for startups, entrepreneurs and technology lovers in Africa.'} />
            <div className="flex py-4 items-center flex-col xmd:flex-row xmd:flex-nowrap xmd:justify-start mt-12">
                <div className="w-full m-auto py-4 text-primary-black dark:text-primary-white bg-white dark:bg-slate-800 text-[85%]">
                    {/* ================= */}
                    <div className="flex flex-col">
                        <div className="w-full h-full z-[400] transition-all duration-[0.5s] ease-[ease] left-0 top-0">      
                            <div className="relative">
                                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner" role="listbox">
                                        <div className="item active">
                                            <Image src={Img} className="w-full" alt="" />
                                        </div>
                                        {/* <div className="item">
                                            <Image src={Img} className="w-full" alt="" />
                                        </div>
                                        <div className="item">
                                            <Image src={Img} className="w-full" alt="" />
                                        </div>
                                        <div className="item">
                                            <Image src={Img} className="w-full" alt="" />
                                        </div> */}
                                    </div>
                                </div>
                                <div className="absolute w-full translate-x-[0%] -translate-y-2/4 pl-[20%] pr-[27%] top-2/4">
                                    <div className=" container_header">
                                        <div className="flex flex-row absolute translate-x-[0%] -translate-y-2/4 mr-0 top-[60%]">
                                            <div className="xmd:w-8/12 pr-8 pl-0">
                                                <h1 className="text-[66px] leading-tight text-primary-white pb-2.5">Elevating African Startups, Entrepreneurs and Innovation</h1>
                                                <p className="text-lg text-primary-white">At Digital Times, we prioritise excellence in our work and customer satisfaction.</p>
                                                <button className="w-[210px] h-[60px] text-left text-sm font-bold text-primary-white relative mt-10 pl-5 border-[none] bg-secondary-green " id="about-us">GET IN TOUCH 
                                                <span className="h-px w-5 float-right inline-block relative mr-[21px] mt-2.5 transition-all duration-[0.4s] ease-[ease] delay-[0s] right-1.5 hover:rotate-90 hover:relative"></span>
                                                    <span></span>
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="w-10/12 mx-auto px-4 about1">
                                    <div className="w-[88%] relative top-[-110px] shadow-[rgba(0,0,0,0.03)_0px_2px_22px_13px] m-auto pt-[110px] pb-[60px] bg-[#f2f2f2]">
                                        <div className="flex flex-row">
                                            <div className="xsm:w-1/2 w-full pl-[85px]" >
                                                <span className="text-[#909090] text-[14px] font-bold">ABOUT</span>
                                                <h1 className="text-5xl text-primary-black">We focus on digital storytelling, PR and branding services.</h1>
                                            </div>
                                            <div className="xsm:w-1/2 w-full pr-[85px]">
                                                <p className=" text-[#909090] pt-2.5">Digital Times Africa is a mediatech company that focuses on elevating Africa’s tech, innovation and entrepreneurship
                                                scene through digital storytelling, PR and branding services.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="w-full">
                                    <div className="py-[150px] text-center" id="services">
                                        <div className="flex flex-row">
                                            <div className="w-full ">
                                                <span className="text-[#909090] text-[14px]">COVERED IN THESE AREAS</span>
                                                <p className="text-[50px] pt-5 pb-[70px]">Services We Provide</p>
                                            </div>
                                            <div className="flex flex-row flex-wrap">
                                                <div className="xmd:w-1/3 xsm:w-1/2 w-full pb-[60px] px-11 py-0">
                                                    <span className="h-[46px] w-[65px] inline-block"></span>
                                                    <h4 className="text-xl">Publications</h4>
                                                    <p className="text-[#909090]">Publicise information about your organisation to a wider audience. We promote news, articles,
                                                        blogs, press releases or
                                                        events on technology, innovation and entrepreneurship.</p>
                                                </div>
                                                <div className="xmd:w-1/3 xsm:w-1/2 w-full pb-[60px] px-11 py-0 border-x-[#ebebeb] border-r border-solid border-l">
                                                    <span className="h-[46px] w-[65px] inline-block"></span>
                                                    <h4 className="text-xl">Brand Design</h4>
                                                    <p className="text-[#909090]">We position you in the right place and at the right time. Using creative design elements such
                                                        as colours, logos,
                                                        typography and visuals in selling your brand improves competitive advantage, customer
                                                        experience and increases sales.</p>
                                                </div>
                                                <div className="xmd:w-1/3 xsm:w-1/2 w-full pb-[60px] px-11 py-0 emailmarketing">
                                                    <span className="h-[46px] w-[65px] inline-block"></span>
                                                    <h4 className="text-xl">Email Marketing</h4>
                                                    <p className="text-[#909090]">Consistent communication is very essential for your business growth! We make it easy for you,
                                                        by managing
                                                        commercial
                                                        messages to your clients.</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-row flex-wrap">
                                                <div className="xmd:w-1/3 xsm:w-1/2 w-full pb-[60px] px-11 py-0 printdesign">
                                                    <span className="h-[46px] w-[65px] inline-block"></span>
                                                    <h4 className="text-xl">Printed Design</h4>
                                                    <p className="text-[#909090]">Create aesthetic designs to enhance your brand’s visual communication. Our work includes
                                                        designing brochures, leaflets,
                                                        banners, business cards, book covers, labels etc.</p>
                                                </div>
                                                <div className="xmd:w-1/3 xsm:w-1/2 w-full pb-[60px] px-11 py-0 border-x-[#ebebeb] border-r border-solid border-l">
                                                    <span className="h-[46px] w-[65px] inline-block"></span>
                                                    <h4 className="text-xl">Newsletters</h4>
                                                    <p className="text-[#909090]">Keep your audience abreast consistently of your organisational activities or updates. We
                                                        ensure that your clientele or
                                                        employees are updated on a regular basis.</p>
                                                </div>
                                                <div className="xmd:w-1/3 xsm:w-1/2 w-full pb-[60px] px-11 py-0 design">
                                                    <span className="h-[46px] w-[65px] inline-block"></span>
                                                    <h4 className="text-xl">Graphics Design</h4>
                                                    <p className="text-[#909090]">Enhance your organisation’s visual communication through creative designs in texts, colours
                                                        and images.</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-row flex-wrap">
                                                <div className="xmd:w-1/3 xsm:w-1/2 w-full pb-[60px] px-11 py-0 development">
                                                    <span className="h-[46px] w-[65px] inline-block"></span>
                                                    <h4 className="text-xl">Website Development &amp; Management</h4>
                                                    <p className="text-[#909090]">Build a conducive environment for your business, by owning a visually appealing website that
                                                        connects your brand to your
                                                        clientele.</p>
                                                </div>
                                                <div className="xmd:w-1/3 xsm:w-1/2 w-full pb-[60px] px-11 py-0 border-x-[#ebebeb] border-r border-solid border-l">
                                                    <span className="h-[46px] w-[65px] inline-block"></span>
                                                    <h4 className="text-xl">Social Media Management</h4>
                                                    <p className="text-[#909090]">Enhance your brand’s image and visibility by having a robust social media presence! Content
                                                        creation and curation,
                                                        social media scheduling, posts, generating leads, traffic, analytics etc, are in the hands
                                                        of our skilled staff.</p>
                                                </div>
                                                <div className="xmd:w-1/3 xsm:w-1/2 w-full pb-[60px] px-11 py-0 livestream">
                                                    <span className="h-[46px] w-[65px] inline-block"></span>
                                                    <h4 className="text-xl">Live Streaming</h4>
                                                    <p className="text-[#909090]">For all your event coverage, we record life happenings and promote live on various social
                                                        media channels.</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-row flex-wrap">
                                                <div className="xmd:w-1/3 xsm:w-1/2 w-full pb-[60px] px-11 py-0 photography">
                                                    <span className="h-[46px] w-[65px] inline-block"></span>
                                                    <h4 className="text-xl">Photography &amp; Videography</h4>
                                                    <p className="text-[#909090]">Tell a compelling story with your photos and videos. A professional visual communication
                                                        opens your brand to a wider
                                                        audience. Become a competitive advantage with your story!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-[#f2f2f2]">
                                    <div className="w-full">
                                        <div className="flex flex-row pt-[50px] pb-10">
                                            <div className="xmd:w-9/12 w-full">
                                                <p className="text-2xl"><span className="pr-5"> <Image src={Img} alt="" /></span> Contact us if you
                                                    need a quote
                                                    
                                                </p>
                                            </div>
                                            <div className="xmd:3/12 w-full">
                                                <button className="bg-secondary-green w-[210px] h-[60px] text-left text-sm font-bold text-white relative pl-5 border-[none]"><Link href="mailto:partnership@digitaltimes.africa" className="text-white" >CONTACT US NOW</Link> <span></span><span
                                                        className="xoay"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                                <div className="w-full">
                                    <div className="flex flex-col">
                                        <div className="w-full max-h-[700px]">
                                            <Image src={Img} alt="" className="w-full h-[300px]" />
                                        </div>
                                        <div className="text-center py-[150px] bg-secondary-green">
                                            <p className="font-bold text-3xl text-white mx-[65px] pb-2.5 px-[31%]"><span className="h-[26px] w-[33px] inline-block ml-[-50px] mr-5"></span>Revolutionary!</p>
                                                <p className="text-white px-[31%]">It’s a pleasure to be featured by Digital Times Africa on the great work that we’ve done and continue to do at GoNomad, Movefunds,
                                                    and other things in the works.</p>
                                            <span className="font-sacramento text-3xl font-semibold text-[rgba(51,51,51,0.45)] inline-block mt-5">Uke Enun Jnr</span>
                                        </div>
                                    </div>
                                </div>
                        
                        
                                <div className="w-full pt-[150px]" id="pricing">
                                    <div className="flex flex-col">
                        
                                        <div className=" w-full">
                                            <span className="text-[#909090] text-[14px]">OUR PRICING TABLE</span>
                                            <h1 className="text-[50px] pt-5 pb-[70px]">Lowest Price With Best Result</h1>
                                        </div>
                                        <div className="flex flex-row flex-wrap pb-[150px]">
                                            <div className="xsm:w-1/3 w-full transition-all duration-[0.5s] border p-[50px] border-solid border-[#f2f2f2] hover:mt-[-5%] hover:text-white hover:py-[10%] hover:bg-[#202737]">
                                                <h1 className="text-4xl text-secondary-green">BRONZE</h1>
                                                <ul>
                                                    <li className="flex justify-center items-center"><Image src={CheckCircle} alt="" /><span>DT Africa to attend Event in Accra</span></li>
                                                    <li className="flex justify-center items-center"><Image src={CheckCircle} alt="" /><span>One post on FB & Twitter before event</span></li>
                                                    <li className="flex justify-center items-center"><Image src={CheckCircle} alt="" /><span>Live Tweet on DT’s account</span></li>
                                                    <li className="flex justify-center items-center"><Image src={CheckCircle} alt="" /><span>Pre-event Press release written by client</span></li>
                                                </ul>
                                                <button className="text-[#7CFC00] w-[135px] h-[60px] text-left font-bold relative mt-[17px] pl-0 border-[none"><Link  href="mailto:partnership@digitaltimes.africa" className="text-secondary-green">SIGN UP<span></span><span className="xoay"></span></Link></button>
                                            </div>
                                            <div className="xsm:w-1/3 w-full transition-all duration-[0.5s] border p-[50px] border-solid border-[#f2f2f2] hover:mt-[-5%] hover:text-white hover:py-[10%] hover:bg-[#202737]">
                                                <h1 className="text-4xl text-secondary-green">SILVER</h1>
                                                <ul>
                                                    <li className="flex justify-center items-center"><Image src={CheckCircle} alt="" /><span>DT Africa to attend Event in Accra</span></li>
                                                    <li className="flex justify-center items-center"><Image src={CheckCircle} alt="" /><span>Two posts on FB & Twitter before event</span></li>
                                                    <li className="flex justify-center items-center"><Image src={CheckCircle} alt="" /><span>Instagram live or FB Cross-posting on DT’s account</span></li>
                                                    <li className="flex justify-center items-center"><Image src={CheckCircle} alt="" /><span>Pre-event Press release written by client</span></li>
                                                    <li className="flex justify-center items-center"><Image src={CheckCircle} alt="" /><span>Photography -10 edited photos</span></li>
                                                </ul>
                                                <button className="text-[#7CFC00] w-[135px] h-[60px] text-left font-bold relative mt-[17px] pl-0 border-[none"><Link  href="mailto:partnership@digitaltimes.africa" className="text-secondary-green">SIGN UP<span></span><span className="xoay"></span></Link></button>
                                            </div>
                                            <div className="xsm:w-1/3 w-full transition-all duration-[0.5s] border p-[50px] border-solid border-[#f2f2f2] hover:mt-[-5%] hover:text-white hover:py-[10%] hover:bg-[#202737]">
                                                <h1 className="text-4xl text-secondary-green">GOLD</h1>
                                                <ul>
                                                    <li className="flex justify-center items-center"><Image src={CheckCircle} alt="" /><span>DT Africa to attend Event in Accra</span></li>
                                                    <li className="flex justify-center items-center"><Image src={CheckCircle} alt="" /><span>Three posts on all social media platforms before event</span></li>
                                                    <li className="flex justify-center items-center"><Image src={CheckCircle} alt="" /><span>Instagram live or FB Cross-posting on DT’s account</span></li>
                                                    <li className="flex justify-center items-center"><Image src={CheckCircle} alt="" /><span>Pre-event Press release written by DT Africa</span></li>
                                                    <li className="flex justify-center items-center"><Image src={CheckCircle} alt="" /><span>Photography -10 edited photos</span></li>
                                                    <li className="flex justify-center items-center"><Image src={CheckCircle} alt="" /><span>Post Publication after event (Article/Blog) Written by client</span></li>
                                                </ul>
                                                <button className="text-[#7CFC00] w-[135px] h-[60px] text-left font-bold relative mt-[17px] pl-0 border-[none"><Link href="mailto:partnership@digitaltimes.africa" className="text-secondary-green">SIGN UP<span></span><span className="xoay"></span></Link></button>
                                            </div>
                        
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full bg-[#333333] border-t-[10px] border-t-[#7CFC00] border-solid" id="contact-us">
                                <div className="flex flex-row">
                                    <div className="w-full">
                                        <div className="text-center" >
                                            <span className="text-[#909090] text-[14px]">CONTACT</span>
                                            <h1 className="text-[50px] text-white pt-5 pb-[70px]">Talk To Us About Your Project</h1>
                                            <p className="text-[#909090]">Our core clients are from the African continent, but we are happy to work with clients
                                                from all over the globe.</p>
                                        </div>
                                        
                                        <form action="" method="POST" target="_parent" className="flex flex-row flex-wrap">
                                            <div className="invalid-feedback"></div>
                                            <div className="xsm:1/2 w-full p-4">
                                                <input className=" w-full h-[60px] pl-5" placeholder="Full name *"/>
                                            </div>
                                            <div className="xsm:1/2 w-full p-4">
                                                <input className=" w-full h-[60px] pl-5" placeholder="Company *"/>
                                            </div>
                                            <div className="xsm:1/2 w-full p-4">
                                                <input type="email" className=" w-full h-[60px] pl-5"
                                                    name="email" id="email" placeholder="Email *" 
                                                    required />
                                            </div>
                                            <div className="xsm:1/2 w-full p-4">
                                                <input className=" w-full h-[60px] pl-5" placeholder="Telephone *"/>
                                            </div>
                                            <div className="text-center pt-[50px] button-contact">
                                                <button className="w-[36%] h-[60px] text-left font-bold text-white text-sm transition-all duration-[0.2s] relative pl-5 pr-1.5 border-[none] bg-secondary-green">SUBMIT YOUR REQUEST <span></span><span className="xoay"></span></button>
                                            </div>
                                        </form>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ================== */}
                </div>
            </div>
        </RootLayout>  
    )
}