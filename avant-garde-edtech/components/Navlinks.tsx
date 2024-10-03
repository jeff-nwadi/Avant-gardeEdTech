"use client"

import Link from "next/link"
import { useState } from "react"
import { IoMenu } from "react-icons/io5";
import { CiMail } from "react-icons/ci";


function Navlinks() {

    const [Open,setOpen] = useState(false);

    return(
        <>
            <div className="">
               
                <IoMenu  onClick={() => setOpen((prev) => !prev)} className="text-[30px] text-black cursor-pointer"/>
                {Open && (
                    
                    <ul className=" absolute left-0 top-20 bg-[#013819] text-white w-full h-[300vw] menu">
                        <div className="flex gap-8 text-[20px] flex-col items-center justify-center py-36">
                            <Link href=''>Home</Link>
                            <Link href=''>About Us</Link>
                            <Link href=''>Services</Link>

                            <Link href='' className="flex 
                            items-center
                            gap-2 
                            border-[1.5px]
                            p-2 border-[#fff] 
                            rounded
                            text-[15px]
                            bg-[#E7D1B1]
                            text-black
                            ">Let's Talk <CiMail className="font-bold text-[22px] text-black"/></Link>
                        </div>
                        
                    </ul>
                )}
                
                
            </div>    
        </>
    )
}

export default Navlinks