import Image from "next/image";
import Link from "next/link";
import HomeImage from "@/assets/img/demo/home.jpg"
import Avatar from "@/assets/img/demo/avatar2.jpg"

export default function PostNewsHeadingSection() {

    return(
        <div className='pl-1.5 pr-0 h-full bg-white'>
          <div className='flex flex-row flex-wrap xmd:flex-nowrap justify-between'>
            <div className="w-full px-4 md:flex-[0_0_50%] md:max-w-[50%] xsm:py-20 pt-20 text-primary-black">
                <p className="font-bold pb-4 text-secondary-green uppercase"><Link href={'/category/news'}>Tech World</Link></p>
                <h1 className="capitalize text-4xl font-bold mb-4">Aenean donec mus rutrum augue, tellus pellentesque lectus.</h1>
                <div className="mb-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, tincidunt risus ultrices semper nisi integer, facilisis arcu porttitor lacus dignissim at.</p>
                </div>
                    <div className="flex flex-row flex-nowrap gap-2">
                        <Image src={Avatar} alt="" className="h-[4.375rem] w-[4.375rem] rounded-full" />
                        <div className='flex flex-col gap-1'>
                            <small className='text-[85%] text-[rgb(108,117,125)]'>
                                Verny Joy
                            </small>
                            <small className='text-[80%] text-[rgb(108,117,125)]'>
                            A few hours ago · 12:15pm 
                            </small>
                        </div>
                    </div>
            </div>
            <div className="w-full min-h-[1px] md:flex-[0_0_50%] md:max-w-[50%] md:block hidden pr-0 max-h-[41.125rem]">
                <Image src={HomeImage} alt="" className="h-full w-fit" />
            </div>
          </div>
        </div>
    )
}