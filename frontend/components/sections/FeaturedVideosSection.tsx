import Link from 'next/link'
export default function FeaturedVideosSection() {
    return(
        <div className='flex flex-col flex-wrap justify-between'>
            <ul>
                <li>
                    <div className="flex flex-col gap-1 pb-6">
                        <div className='h-full'>
                            <iframe id="ytplayer" className='w-full aspect-video bg-slate-300 dark:bg-gray-200'
                                src="https://www.youtube.com/embed/?listType=playlist&list=PLCAmnP5CxtbKreiS-GBoPi49YPZCsSqPv&autoplay=1&loop=1"
                                allowFullScreen></iframe>        
                        </div>
                    
                        <small className='text-[85%] text-[rgb(108,117,125)]'>
                        More on <strong className="uppercase"><Link href={'https://www.youtube.com/@DigitalTimesAfrica'} >YouTube</Link></strong>
                        </small>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col gap-1 pb-6">
                        <div className='h-full'>
                                <iframe id="ytplayer" className='w-full aspect-video bg-slate-300 dark:bg-gray-200'
                                    src="https://www.youtube.com/embed/DUOj8cKp8H8?autoplay=1&end=52&loop=1&start=0"
                                    allowFullScreen></iframe>    
                        </div>
                        
                        <small className='text-[85%] text-[rgb(108,117,125)]'>
                        More on <strong className="uppercase"><Link href={'https://www.youtube.com/@DigitalTimesAfrica'} >YouTube</Link></strong>
                        </small>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col gap-1 pb-6">
                        <div className='h-full'>
                                <iframe id="ytplayer" className='w-full aspect-video bg-slate-300 dark:bg-gray-200'
                                    src="https://www.youtube.com/embed/?listType=playlist&list=PLCAmnP5CxtbLhx1zOJsp8n92xzOYqS3B0&autoplay=1&end=60&loop=1&start=0"
                                     allowFullScreen></iframe>    
                        </div>
                        
                        <small className='text-[85%] text-[rgb(108,117,125)]'>
                        More on <strong className="uppercase"><Link href={'https://www.youtube.com/@DigitalTimesAfrica'} >YouTube</Link></strong>
                        </small>
                    </div>
                </li>
            </ul>
        </div>
    )
}