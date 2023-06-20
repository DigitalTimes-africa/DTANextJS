import Image from "next/image";
import SearchIcon from "@/assets/img/icons/search_icon.svg";
import { useState } from "react";
import { useRouter } from "next/router";

export default function SearchBox() {
    const router = useRouter();
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        try {
            await router.push(`/search?query=${query}`)
            .then(() => router.reload())
        } catch(error) {
            console.log(error)
        }
       
    };
    return (
      <div className="xsm:p-16 p-10 xsm:pt-14 pt-7 bg-white dark:bg-slate-800 rounded">
        <label htmlFor="search" className="block font-mont font-medium text-primary-black dark:text-primary-white uppercase">
          Search for:
        </label>
        <div className="relative mt-3 ml-3 rounded-md shadow-sm flex flex-nowrap items-center">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm"></span>
          </div>
          <input
            type="search"
            name="search"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            className="block w-full rounded-md border-0 py-2.5 pl-7 pr-10 text-primary-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Search with keyword, title, or name"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <div
            onClick={handleSearch}
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-4 sm:text-sm flex items-center"
            >
              <Image src={SearchIcon} alt="search icon" />
            </div>
          </div>
        </div>
      </div>
    )
  }