import Image from "next/image";
import Link from "next/link";
import BlogImage from "@/assets/img/demo/blog4.jpg"
import BlogImage1 from "@/assets/img/demo/blog5.jpg"
import BlogImage2 from "@/assets/img/demo/blog6.jpg"
import BlogImage3 from "@/assets/img/demo/blog8.jpg"

export default function ReadNextSection() {
    return(
        <div className='md:mb-20 2xsm:mb-14 mb-8 pb-10'>
            <h5 className='relative border border-x-0 border-t-0 border-[#FAFFF5] pb-5 mb-8 font-bold text-xl'>
                <span className='absolute bottom-0 -mb-px pb-2 border-b-[rgba(0,0,0,0.5)] border-b border-solid'>
                 Read Next
                </span>
            </h5>
            <div className='flex flex-row flex-wrap xmd:flex-nowrap justify-between gap-4'>
                <div className="w-full min-h-[1px] xmd:flex-[0_0_50%] xmd:max-w-[50%]">
                    <div className='2xsm:mb-6 flex flex-col min-w-0 gap-3 pr-0'>
                        <div className='max-h-[9.375rem]'>
                            <Image src={BlogImage} className='h-[9.375rem] w-full' alt=''/>
                        </div>
                        <h2 className='text-2xl font-bold'><Link href={'/post/1'} > Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</Link></h2>
                            <p><Link href={'/post/1'} >Commodo facilisi tellus eget nec vivamus libero, nulla iaculis sollicitudin inceptos eros consectetur adipiscing elit, euismod nisl nascetur purus primis.</Link></p>
                        <div className='flex flex-col gap-1'>
                            <small className='text-[85%] text-[rgb(108,117,125)]'>
                                By Verny Joy in <strong className='uppercase'><Link href={'/category/innovation'} >Innovation</Link></strong>
                            </small>
                            <small className='text-[80%] text-[rgb(108,117,125)]'>
                            Dec 15, 2023 · 12:15pm 
                            </small>
                        </div>
                    </div>
                </div>
                <div className="w-full min-h-[1px] xmd:flex-[0_0_50%] xmd:max-w-[50%]">
                    <div className='flex flex-col gap-4'>
                    <div className='flex flex-row flex-nowrap gap-4'>
                        <Image src={BlogImage1} alt="" className='h-20 w-auto 2xsm:block hidden' />
                        <div className='flex flex-col gap-1'>
                        <h2 className='text-base font-bold capitalize leading-6'><Link href={'/post/1'} >Lorem ipsum dolor sit, amet consectetur adipiscing, elit purus.</Link></h2>
                        <small className='text-[85%] text-[rgb(108,117,125)]'>
                            By Dinnese A. in <strong className='uppercase'><Link href={'/category/innovation'} >Innovation</Link></strong>
                        </small>
                        <small className='text-[80%] text-[rgb(108,117,125)]'>
                            Dec 15, 2023 · 08:15am 
                        </small>
                        </div>
                    </div>
                    <div className='flex flex-row flex-nowrap gap-4'>
                        <Image src={BlogImage3} alt="" className='h-20 w-auto 2xsm:block hidden' />
                        <div className='flex flex-col gap-1'>
                        <h2 className='text-base font-bold capitalize leading-6'><Link href={'/post/1'} >consectetur ipsum dolor sit, amet adipiscing elit.</Link></h2>
                        <small className='text-[85%] text-[rgb(108,117,125)]'>
                            By Tony A. in <strong className='uppercase'><Link href={'/category/innovation'} >Innovation</Link></strong>
                        </small>
                        <small className='text-[80%] text-[rgb(108,117,125)]'>
                            Dec 15, 2023 · 09:15am 
                        </small>
                        </div>
                    </div>
                    <div className='flex flex-row flex-nowrap gap-4'>
                        <Image src={BlogImage2} alt="" className='h-20 w-auto 2xsm:block hidden' />
                        <div className='flex flex-col gap-1'>
                        <h2 className='text-base font-bold capitalize leading-6'><Link href={'/post/1'} >Ipsum dolor sit, amet adipiscing, elit purus.</Link></h2>
                        <small className='text-[85%] text-[rgb(108,117,125)]'>
                            By Eugene O. in <strong className='uppercase'><Link href={'/category/innovation'} >Innovation</Link></strong>
                        </small>
                        <small className='text-[80%] text-[rgb(108,117,125)]'>
                            Dec 15, 2023 · 04:15pm 
                        </small>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}