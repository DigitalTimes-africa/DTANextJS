import Image from "next/image";
import Link from "next/link";
import HomeImage from "@/assets/img/demo/home.jpg"

export default function NewsHeadingSection() {

    return(
        <div className='pl-1.5 pr-0 h-full bg-[#e8f3ec]'>
          <div className='flex flex-row flex-wrap xmd:flex-nowrap justify-between'>
            <div className="w-full px-4 md:flex-[0_0_50%] md:max-w-[50%] py-20 text-primary-black">
                <p className="font-bold pb-4 text-secondary-green uppercase"><Link href={'/category/news'}>News</Link></p>
                <h1 className="capitalize text-4xl font-bold mb-4 2xsm:break-normal break-all">Aenean donec mus rutrum augue, tellus pellentesque lectus.</h1>
                <div className="mb-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, tincidunt risus ultrices semper nisi integer, facilisis arcu porttitor lacus dignissim at.</p>
                </div>
                <Link href={'/post/1'}><button className="text-base leading-10 rounded text-white hover:text-primary-white font-medium bg-btn-black hover:bg-primary-blue dark:hover:bg-btn-hover px-4 py">Read More</button></Link>
            </div>
            <div className="w-full md:flex-[0_0_50%] md:max-w-[50%] md:block hidden pr-0 max-h-[41.125rem]">
                <Image src={HomeImage} alt="" className="h-full w-fit" />
            </div>
          </div>
        </div>
    )
}