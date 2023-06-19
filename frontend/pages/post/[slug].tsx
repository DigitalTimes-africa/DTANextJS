import RootLayout from "@/app/layout";
import ShareButtons from "@/components/ShareButtons";
import Heading from "@/components/layout/Heading";
import PostContentSection from "@/components/sections/PostContentSection";
import PostNewsHeadingSection from "@/components/sections/PostNewsHeadingSection";
import ReadNextSection from "@/components/sections/ReadNextSection";
import AdLongBottomSection from '@/components/adsections/AdLongBottomSection'
import "./styles/postStyles.css"

export default function SinglePost() {
    return(
        <RootLayout>
            <Heading title={'Digital Times - News Story'} name={'description'} content={'Digital Times Africa is a multimedia agency that provides a platform promoting African innovation. We curate relevant and credible content for startups, entrepreneurs and technology lovers in Africa.'} />
            <div className="flex py-4 items-center flex-col xmd:flex-row xmd:flex-nowrap xmd:justify-start mt-12">
                <div className="w-full m-auto py-4 text-primary-black dark:text-primary-white bg-white dark:bg-slate-800 text-[85%]">
                    <PostNewsHeadingSection />
                    <div className="flex flex-col xmd:justify-center items-center 1xsm:pt-12 pt-5 xsm:mb-10">
                        <div className="xmd:w-8/12 flex 1xsm:flex-row flex-col xmd:gap-8">
                            <div className="1xsm:w-2/12 w-full">
                                <div className="1xsm:sticky 1xsm:top-20 xsm:pr-10 pr-5 pb-5">
                                    <ShareButtons />
                                </div>
                            </div>
                            <div className="1xsm:w-10/12 w-full">
                                <PostContentSection />
                            </div>
                        </div>
                    </div>
                    <AdLongBottomSection />
                    <ReadNextSection />
                </div>
            </div>
        </RootLayout>
    )
}