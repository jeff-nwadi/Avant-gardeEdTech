import Navlinks from "../components/Navlinks"
import Link from "next/link"
import { CiMail } from "react-icons/ci";

function Navbar() {
    return(
        <>
        <section className="nav-bar relative">
            <div className="h-20
            px-4 
            md:px-8 
            lg:px-16
             xl:px-20 
             2xl:px-30
             flex 
             items-center 
             gap-10 
             justify-between
             ">
                <div className="flex items-center gap-5">
                        {/* <img src="./Logo.svg" alt="" className="h-[100px] w-[120px]" />  */}
                        <div className="logo">
                             <h1 className="oswald text-[25px]">Avant-garde</h1>
                             <h3 className="font-light text-[16px]">EdTech</h3>
                        </div>
                       
                        <span className="text-[20px] md:flex hidden"> | </span>

                        <div className="hidden lg:flex">
                            <ul className="flex gap-7 text-[17px]">
                                <Link href=''>Home</Link>
                                <Link href=''>About Us</Link>
                                <Link href=''>Services</Link>
                            </ul>
                        </div>
                        
                </div>
                <div className="flex lg:hidden">
                    <Navlinks/>
                </div>
                 
                <div className="hidden lg:flex">
                    <Link href='' className="flex 
                    items-center
                        gap-2 
                        border-[1.5px]
                        p-2 border-[#000] 
                        rounded
                        bg-white
                        text-[15px]">Let's Talk <CiMail className="font-bold text-[22px]"/></Link>
                </div>
 
            </div>
        </section>

        </>
    )
}

export default Navbar