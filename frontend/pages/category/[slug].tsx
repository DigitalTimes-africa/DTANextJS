import RootLayout from "@/app/layout";
import Pagination from "@/components/Pagination";
import Heading from '@/components/layout/Heading'
import SideBar from "@/components/layout/Sidebar";
import SectionTwo from "@/components/sections/SectionTwo";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useState } from "react";
import BlogImage from "@/assets/img/demo/blog4.jpg"
import slugToTitle from "../utils";


export default function Category() {
    const data = [
        {
            color: "red",
            value: "#f00"
        },
        {
            color: "green",
            value: "#0f0"
        },
        {
            color: "blue",
            value: "#00f"
        },
        {
            color: "cyan",
            value: "#0ff"
        },
        {
            color: "magenta",
            value: "#f0f"
        },
        {
            color: "yellow",
            value: "#f50"
        },
        {
            color: "black",
            value: "#060"
        },
        {
            color: "magenta",
            value: "#f7f"
        },
        {
            color: "yellow",
            value: "#4f0"
        },
        {
            color: "black",
            value: "#080"
        },
        {
            color: "magenta",
            value: "#f7k"
        },
        {
            color: "yellow",
            value: "#4f1"
        },
        {
            color: "black",
            value: "#084"
        }
    ];
    const pageSize = 10;
  const router = useRouter();
  const { slug } = router.query;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex);

    return(
        <RootLayout>
            <Heading title={`Digital Times - ${slugToTitle(`${slug}`)}`} name={'description'} content={'Digital Times Africa is a multimedia agency that provides a platform promoting African innovation. We curate relevant and credible content for startups, entrepreneurs and technology lovers in Africa.'} />
            <div className="flex py-4 items-center flex-col xmd:flex-row xmd:flex-nowrap xmd:justify-start mt-12">
                <div className="w-full m-auto py-4 text-primary-black dark:text-primary-white bg-white dark:bg-slate-800 text-[85%]">
                    <div className='flex flex-row flex-wrap xmd:flex-nowrap justify-between pt-12'>
                        <div className="xmd:w-4/6">
                            <h5 className='relative border border-x-0 border-t-0 border-[#FAFFF5] pb-5 mb-8 '>
                                <span className='absolute bottom-0 -mb-px pb-5 border-b-[rgba(0,0,0,0.5)] border-b border-solid text-xl'>
                                    Featured in <span className="capitalize font-bold text-xl">{slugToTitle(`${slug}`)}</span>
                                </span>
                            </h5>
                            <div className="flex flex-col gap-4 pb-12">
                                <div className="w-full">
                                    <div className='2xsm:mb-6 flex flex-col min-w-0 gap-3 pr-0'>
                                        <div className='h-80'>
                                            <Image src={BlogImage} className='h-full w-full' alt=''/>
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
                                {currentData.map( e => 
                                    <div key={e.value}>
                                        <SectionTwo />
                                    </div>
                                )}
                                
                            </div>
                            
                            <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
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