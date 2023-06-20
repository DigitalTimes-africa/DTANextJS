import Image from "next/image";
import Link from "next/link";
import BlogImage1 from "@/assets/img/demo/blog5.jpg"
import BlogImage2 from "@/assets/img/demo/blog6.jpg"
import BlogImage3 from "@/assets/img/demo/blog8.jpg"

export default function TagListSection(){
    return(
        <div className="flex flex-row flex-wrap 2xsm:gap-0 gap-6">
            <div className="md:basis-1/2 pb-8 2xsm:pr-4" >
                <div className='flex   flex-col flex-wrap gap-4 xlg:flex-nowrap xlg:justify-between xlg:mb-4'>
                    <Image src={BlogImage2} className='h-40 w-auto' alt="" />
                    <div className='2xsm:pr-4'>
                        <h2 className='mb-1 text-lg font-bold'>
                        <Link href={'/post/1'} >Auctor per phasellus accumsan fringilla himenaeos, molestie lectus a donec.</Link>
                        </h2>
                        <p className='mb-3'><Link href={'/post/1'} >Ultricies sociis mus placerat nam iaculis, sem ultrices phasellus. Fames ligula auctor etiam sociis, et vestibulum maecenas.</Link></p>
                        <div className='flex flex-col gap-1 text-[rgb(108,117,125)]'>
                        <small className='text-[85%]'>
                            By Verny Joy in <strong className='uppercase'><Link href={'/category/innovation'} >Innovation</Link></strong>
                        </small>
                        <small className='text-[80%]'>
                            Dec 15, 2023 · 12:15pm 
                        </small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:basis-1/2 pb-8 2xsm:pl-4" >
            <div className='flex   flex-col flex-wrap gap-4 2xsm:flex-nowrap xlg:justify-between xlg:mb-4'>
                <Image src={BlogImage3} className='h-40 w-auto' alt="" />
                <div className='2xsm:pl-0'>
                    <h2 className='mb-1 text-lg font-bold'>
                    <Link href={'/post/1'} >Auctor per phasellus accumsan fringilla himenaeos, molestie lectus a donec.</Link>
                    </h2>
                    <p className='mb-3'><Link href={'/post/1'} >Ultricies sociis mus placerat nam iaculis, sem ultrices phasellus. Fames ligula auctor etiam sociis, et vestibulum maecenas.</Link></p>
                    <div className='flex flex-col gap-1 text-[rgb(108,117,125)]'>
                    <small className='text-[85%]'>
                        By Verny Joy in <strong className='uppercase'><Link href={'/category/innovation'} >Innovation</Link></strong>
                    </small>
                    <small className='text-[80%]'>
                        Dec 15, 2023 · 12:15pm 
                    </small>
                    </div>
                </div>
            </div>
            </div>
            <div className="md:basis-1/2 pb-8 2xsm:pr-4" >
            <div className='flex   flex-col flex-wrap gap-4 xlg:flex-nowrap xlg:justify-between xlg:mb-4'>
                <Image src={BlogImage1} className='h-40 w-auto' alt="" />
                <div className='2xsm:pr-4'>
                    <h2 className='mb-1 text-lg font-bold'>
                    <Link href={'/post/1'} >Auctor per phasellus accumsan fringilla himenaeos, molestie lectus a donec.</Link>
                    </h2>
                    <p className='mb-3'><Link href={'/post/1'} >Ultricies sociis mus placerat nam iaculis, sem ultrices phasellus. Fames ligula auctor etiam sociis, et vestibulum maecenas.</Link></p>
                    <div className='flex flex-col gap-1 text-[rgb(108,117,125)]'>
                    <small className='text-[85%]'>
                        By Verny Joy in <strong className='uppercase'><Link href={'/category/innovation'} >Innovation</Link></strong>
                    </small>
                    <small className='text-[80%]'>
                        Dec 15, 2023 · 12:15pm 
                    </small>
                    </div>
                </div>
            </div>
            </div>
            <div className="md:basis-1/2 pb-8 2xsm:pl-4" >
                <div className='flex   flex-col flex-wrap gap-4 xlg:flex-nowrap xlg:justify-between xlg:mb-4'>
                    <Image src={BlogImage2} className='h-40 w-auto' alt="" />
                    <div className='2xsm:pl-0'>
                        <h2 className='mb-1 text-lg font-bold'>
                        <Link href={'/post/1'} >Auctor per phasellus accumsan fringilla himenaeos, molestie lectus a donec.</Link>
                        </h2>
                        <p className='mb-3'><Link href={'/post/1'} >Ultricies sociis mus placerat nam iaculis, sem ultrices phasellus. Fames ligula auctor etiam sociis, et vestibulum maecenas.</Link></p>
                        <div className='flex flex-col gap-1 text-[rgb(108,117,125)]'>
                        <small className='text-[85%]'>
                            By Verny Joy in <strong className='uppercase'><Link href={'/category/innovation'} >Innovation</Link></strong>
                        </small>
                        <small className='text-[80%]'>
                            Dec 15, 2023 · 12:15pm 
                        </small>
                        </div>
                    </div>
                </div>               
            </div>
        </div>
    )
}