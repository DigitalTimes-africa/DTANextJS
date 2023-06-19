import Link from "next/link"
import AdSquareSection from "../adsections/AdSquareSection"
import FeaturedVideosSection from "../sections/FeaturedVideosSection"
import AdVerticalRectangle from "../adsections/AdVerticalRectangle"

interface Props{
    classes : string
    hideFeaturedVideos: string
    hideTweets: string
    hideLongAd: string
}

export default function SideBar({classes, hideTweets, hideLongAd, hideFeaturedVideos}:Props){
    return(
        <div className={`grid grid-col xmd:gap-7 gap-16 ${classes}`}> 
            <div className="flex flex-col">
                <h5 className='relative border border-x-0 border-t-0 border-[#FAFFF5] pb-5 mb-8'>
                    <span className='absolute bottom-0 -mb-px pb-5 border-b-[rgba(0,0,0,0.5)] border-b border-solid font-bold text-xl'>
                        Popular
                    </span>
                </h5>
                <div className='flex flex-row flex-wrap xmd:flex-nowrap justify-between'>
                    <ul>
                        <li>
                            <div className="flex flex-row gap-5 pb-4">
                                <span className="font-libre text-4xl font-bold leading-10">01</span>
                                <div className="flex flex-col gap-1">
                                <span><Link  href={'/post/2'} >Lorem ipsum dolor sit amet consectetur adipiscing, elit eu pharetra tellus dictumst.</Link></span>
                                    <small className='text-[85%] text-[rgb(108,117,125)]'>
                                        By Verny Joy in <strong className='uppercase'><Link href={'/category/innovation'} >Innovation</Link></strong>
                                    </small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row gap-4 pb-4">
                                <span className="font-libre text-4xl font-bold leading-10">02</span>
                                <div className="flex flex-col gap-1">
                                <span><Link  href={'/post/2'} >Eros magnis fermentum lectus fusce libero, tortor natoque mauris.</Link></span>
                                <small className='text-[85%] text-[rgb(108,117,125)]'>
                                    By Verny Joy in <strong className="uppercase"><Link href={'/category/innovation'} >Innovation</Link></strong>
                                    </small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row gap-4 pb-4">
                                <span className="font-libre text-4xl font-bold leading-10">03</span>
                                <div className="flex flex-col gap-1">
                                <span><Link  href={'/post/2'} >Nunc primis penatibus laoreet fusce ac, torquent venenatis iaculis.</Link></span>
                                <small className='text-[85%] text-[rgb(108,117,125)]'>
                                    By Verny Joy in <strong className="uppercase"><Link href={'/category/news'} >Innovation</Link></strong>
                                    </small>
                                </div>
                            </div>
                        </li>
                        <li >
                            <div className="flex flex-row gap-4 pb-4">
                                <span className="font-libre text-4xl font-bold leading-10">04</span>
                                <div className="flex flex-col gap-1">
                                <span><Link  href={'/post/2'} >Tellus ullamcorper dignissim lectus ornare tincidunt integer, quam quis conubia mus mauris.</Link></span>
                                <small className='text-[85%] text-[rgb(108,117,125)]'>
                                    By Verny Joy in <strong className="uppercase"><Link href={'/category/innovation'} >Innovation</Link></strong>
                                    </small>
                                </div>
                            </div>
                        </li>
                        <li >
                            <div className="flex flex-row gap-4 pb-4">
                                <span className="font-libre text-4xl font-bold leading-10">05</span>
                                <div className="flex flex-col gap-1">
                                <span><Link  href={'/post/2'} >Tellus ullamcorper dignissim lectus ornare tincidunt integer, quam quis conubia mus mauris.</Link></span>
                                <small className='text-[85%] text-[rgb(108,117,125)]'>
                                    By Verny Joy in <strong className="uppercase"><Link href={'/category/innovation'} >Innovation</Link></strong>
                                    </small>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <AdSquareSection />
            <div className={`pt-[2.4rem] ${hideTweets} hidden`}>
                <div>
                <h5 className='relative border border-x-0 border-t-0 border-[#FAFFF5] pb-5 mb-8'>
                    <span className='absolute bottom-0 -mb-px pb-5 border-b-[rgba(0,0,0,0.5)] border-b border-solid font-bold text-xl'>
                        Tweet Feed
                    </span>
                </h5>
                <div>
                    <div>
                    <Link className="twitter-timeline" data-height="425"
                    href="https://twitter.com/DigitalTAfrica?ref_src=twsrc%5Etfw">Tweets by @DigitalTAfrica</Link>
                    </div>
                </div>
                </div>
            </div>
            <div className={`pt-[6rem] ${hideLongAd} hidden xsm:pt-0`}>
                <AdVerticalRectangle />
            </div>

            <div className={`pt-[2.4rem] ${hideFeaturedVideos} hidden`}>
                <div>
                <h5 className='relative border border-x-0 border-t-0 border-[#FAFFF5] pb-5 mb-8'>
                    <span className='absolute bottom-0 -mb-px pb-5 border-b-[rgba(0,0,0,0.5)] border-b border-solid font-bold text-xl'>
                        Featured Videos
                    </span>
                </h5>
                <div className="xlg:mb-0 mb-[33rem] pb-[6rem]">
                    <FeaturedVideosSection />
                </div>
                </div>
            </div>
        </div>
    )
}
export const revalidate = 60