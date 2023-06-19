import NewsHeadingSection from '@/components/sections/NewsHeadingSection'
import SideBar from '@/components/layout/Sidebar'
import SectionOne from '@/components/sections/SectionOne'
import SectionTwo from '@/components/sections/SectionTwo'
import SectionThree from '@/components/sections/SectionThree'
import SectionFour from '@/components/sections/SectionFour'
import RootLayout from '@/app/layout'
import Heading from '@/components/layout/Heading'
import AdLargeBottomSection from '@/components/adsections/AdLargeBottomSection'

export default function Home() {
  return (
    <RootLayout>
      <Heading title={'Digital Times'} name={'description'} content={'Digital Times Africa is a multimedia agency that provides a platform promoting African innovation. We curate relevant and credible content for startups, entrepreneurs and technology lovers in Africa.'} />
      <div className="flex py-4 items-center flex-col xmd:flex-row xmd:flex-nowrap xmd:justify-start mt-12 bg-white dark:bg-slate-800">
        <div className="w-full py-4 text-primary-black dark:text-primary-white text-[85%]">
            <NewsHeadingSection />
            <div className='py-12'>
              <SectionOne />
            </div>
            <div className='flex flex-row flex-wrap xmd:flex-nowrap justify-between pt-12'>
              <div className="xmd:w-4/6">
                <div className='md:mb-20 2xsm:mb-14 mb-8 pb-10'>
                  <h5 className='relative border border-x-0 border-t-0 border-[#FAFFF5] pb-5 mb-8'>
                      <span className='absolute bottom-0 -mb-px pb-5 border-b-[rgba(0,0,0,0.5)] border-b border-solid font-bold text-xl'>
                          News
                      </span>
                  </h5>
                  <SectionTwo />
                </div>
                <div className='md:mb-20 2xsm:mb-14 mb-8 pb-12'>
                  <h5 className='relative border border-x-0 border-t-0 border-[#FAFFF5] pb-5 mb-8'>
                      <span className='absolute bottom-0 -mb-px pb-5 border-b-[rgba(0,0,0,0.5)] border-b border-solid font-bold text-xl'>
                          Entrepreneurship
                      </span>
                  </h5>
                  <SectionOne />
                </div>
                <div className='md:mb-20 2xsm:mb-14 mb-8 pb-12'>
                  <h5 className='relative border border-x-0 border-t-0 border-[#FAFFF5] pb-5 mb-8'>
                      <span className='absolute bottom-0 -mb-px pb-5 border-b-[rgba(0,0,0,0.5)] border-b border-solid font-bold text-xl'>
                          Tech World
                      </span>
                  </h5>
                  <SectionThree />
                </div>
                <div className='md:mb-20 2xsm:mb-14 mb-8'>
                  <h5 className='relative border border-x-0 border-t-0 border-[#FAFFF5] pb-5 mb-8'>
                      <span className='absolute bottom-0 -mb-px pb-5 border-b-[rgba(0,0,0,0.5)] border-b border-solid font-bold text-xl'>
                          Opportunities
                      </span>
                  </h5>
                  <SectionFour />
                </div>
                <AdLargeBottomSection />
              </div>
              <aside className="w-full min-h-[1px] xmd:flex-[0_0_33.33333%] xmd:max-w-[33.33333%] xmd:pl-20">
                <SideBar classes={""} hideFeaturedVideos={'xmd:block'} hideTweets={'block'} hideLongAd={'block'} />
              </aside>
            </div>
        </div>
      </div>
    </RootLayout>
  )
}
