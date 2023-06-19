import Image from "next/image";
import Err404 from "@/assets/img/error-images/404_Error.gif"

export default function Error404() {

    return(
        <div className="w-full">
            <div className="flex justify-center items-center">
                <Image src={Err404} alt="" />
            </div>
        </div>
    )
}