import RootLayout from "@/app/layout";
import Heading from '@/components/layout/Heading'
import Image from "next/image";
import Err404 from "@/assets/img/error-images/404_Error.gif"
import Link from "next/link";

export default function NotFound() {

    return(
      <RootLayout> 
        <Heading title={'Digital Times - Page Not Found'} name={'description'} content={'Digital Times Africa is a multimedia agency that provides a platform promoting African innovation. We curate relevant and credible content for startups, entrepreneurs and technology lovers in Africa.'} />
        <div className="flex py-4 items-center flex-col xmd:flex-row xmd:flex-nowrap xmd:justify-start mt-12">
          <div className="w-full m-auto py-4 text-primary-black dark:text-primary-white bg-white dark:bg-slate-800 text-[85%]">
            <div className="flex justify-center items-center bg-white">
              <Image src={Err404} alt="" className="hidden xmd:block" />
              <main className="grid min-h-full place-items-center px-6 py-24 sm: lg:px-8">
                <div className="text-center">
                  <p className="text-base font-semibold text-primary-blue xmd:block hidden">Oops!</p>
                  <p className="text-base font-semibold text-primary-blue xmd:hidden block">404</p>
                  <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary-black sm:text-5xl xmd:hidden block">Oops!</h1>
                  <h1 className="mt-6 text-2xl tracking-tight text-gray-600 xmd:block hidden">The page you seek cannot be found.</h1>
                  <p className="mt-6 text-base leading-7 text-gray-600 xmd:hidden block">The page you seek cannot be found.</p>
                  <p className="mt-6 text-primary-black text-lg font-medium">Find out trending <Link href="/"><span className="font-bold text-secondary-green hover:underline">News</span></Link>.</p>
                  <div className="mt-10 flex 2xsm:flex-nowrap flex-wrap items-center justify-center gap-x-6">
                    <Link
                      href="/search"
                      className="rounded-md bg-btn-black px-3.5 py-2.5 text-sm font-semibold text-white hover:text-white shadow-sm hover:bg-btn-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-btn-hover"
                    >
                      Search for page
                    </Link>
                    <Link href="javascript:history.go(-1)" className="text-sm 2xsm:mt-0 mt-6 font-semibold text-primary-black">
                      Go back home <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </RootLayout>  
    )
}