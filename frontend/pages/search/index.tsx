import RootLayout from "@/app/layout";
import Pagination from "@/components/Pagination";
import Heading from '@/components/layout/Heading'
import SideBar from "@/components/layout/Sidebar";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";

export default function Search() {
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
    const { query } = router.query;
    const [results, setResults] = useState<{ color: string; value: string; }[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / pageSize);

    const handlePageChange = (page: number) => {
    setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = results.slice(startIndex, endIndex);

    

    useEffect(() => {
        const fetchSearchResults = () => {
        // try {
            setResults(data);
        // } catch (error) {
        //     console.error('Error fetching search results:', error);
        // }
        };

        if (query) {
        fetchSearchResults();
        }
    }, [query]);

    return(
        <RootLayout>
            <Heading title={'Digital Times - Search'} name={'description'} content={'Digital Times Africa is a multimedia agency that provides a platform promoting African innovation. We curate relevant and credible content for startups, entrepreneurs and technology lovers in Africa.'} />
            <div className="flex py-4 items-center flex-col xmd:flex-row xmd:flex-nowrap xmd:justify-start mt-12">
                <div className="w-full m-auto py-4 text-primary-black dark:text-primary-white bg-white dark:bg-slate-800 text-[85%]">
                    <div className='flex flex-row flex-wrap xmd:flex-nowrap justify-between pt-12'>
                        <div className="xmd:w-4/6">
                            <h5 className='relative border border-x-0 border-t-0 border-[#FAFFF5] pb-5 mb-8 '>
                                <span className='absolute bottom-0 -mb-px pb-5 border-b-[rgba(0,0,0,0.5)] border-b border-solid text-xl'>
                                    Search results for <span className="capitalize font-bold text-xl">{query}</span>
                                </span>
                            </h5>
                            <div className="flex flex-col gap-4 pb-12">
                                {currentData?.map( e => 
                                    <div key={e.value}>
                                        <div className='2xsm:pr-4'>
                                            <h2 className='mb-1 text-lg font-bold'>
                                            <Link href={'/post/1'} >Auctor per phasellus accumsan fringilla himenaeos, molestie lectus a donec.</Link>
                                            </h2>
                                            <p className='mb-3'><Link href={'/post/1'} >Ultricies sociis mus placerat nam iaculis, sem ultrices phasellus. Fames ligula auctor etiam sociis, et vestibulum maecenas.</Link></p>
                                            <div className='flex flex-col gap-1 text-[rgb(108,117,125)]'>
                                            <small className='text-[80%]'>
                                                Dec 15, 2023 · 12:15pm  
                                            </small>
                                            
                                            </div>
                                        </div>
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