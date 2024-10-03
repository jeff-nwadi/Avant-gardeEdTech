import Link from "next/link"
import { CiMail } from "react-icons/ci"

function Footer() {
    return(
        <>
            <section className=" w-[95%] rounded-lg m-auto bg-white h-[150vh] md:h-[110vh] lg:h-[105vh]  xlg:h-[100vh]
             px-4 
            md:px-8 
            lg:px-16
             xl:px-20 
             2xl:px-30
             py-12">

              <div className="text-center bg-[#013819] text-white h-[40vh] lg:h-[40vh] rounded-lg">
                <div className="gap-5">
                  <h2 className="pt-4 pb-3 lg:text-[35px] text-[23px]">Ready To Lunch Your Digital <br /> Marketing Project?</h2> <br />
                  <p className="pb-6 lg:text-[15px] text-[#b7b7b4] text-[14px]" >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Recusandae illum optio aspernatur alias, consectetur voluptates.</p>

                    <Link href='/' className="flex items-center gap-2 roundedbg-white justify-center p-2 m-auto w-[30%] md:w-[20%] text-[15px] bg-white text-black lg:w-[15%] xl:w-[10%]">Let's Talk <CiMail className="font-bold text-[22px]"/> </Link>
                </div>
                  
              </div>

                <div className="grid pt-16 grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-14">
                    <div className="logo ">
                        <div>
                            <h1 className="oswald text-[25px]">Avant-garde</h1>
                            <h3 className="font-light text-[16px]">EdTech</h3>
                        </div>
                        <p className="py-14 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nam aliquid modi mollitia perspiciatis doloribus eius voluptatibus excepturi ipsum architecto? Aperiam?
                        </p>
                    </div>

                    <div className="grid grid-cols-3 pb-5">
                        <div className="gap-8 flex flex-col">
                            <h2 className="oswald text-[18px]">MENU</h2>

                            <ul className="flex flex-col gap-5 text-[#a3a3a2] ">
                                <Link href="" className="hover:text-[#000]">Home</Link>
                                <Link href="" className="hover:text-[#000]">About us</Link>
                                <Link href="" className="hover:text-[#000]">Services</Link>
                            </ul>
                        </div>

                        <div className="gap-8 flex flex-col">
                            <h2 className="oswald text-[18px]">SOCIAL MEDIA</h2>

                            <ul className="flex flex-col gap-5 text-[#a3a3a2] ">
                                <Link href="" className="hover:text-[#000]">Twitter</Link>
                                <Link href="" className="hover:text-[#000]">Facebook</Link>
                                <Link href="" className="hover:text-[#000]">Instagram</Link>
                            </ul>
                        </div> 
                        
                         <div className="gap-8 flex flex-col">
                            <h2 className="oswald text-[18px]">SERVICES</h2>

                            <ul className="flex flex-col gap-5 text-[#a3a3a2] ">
                                <Link href="" className="hover:text-[#000]">Web & App Development</Link>
                                <Link href="" className="hover:text-[#000]">Social Media Marketing</Link>
                                <Link href="" className="hover:text-[#000]">Email Marketing</Link>
                                <Link href="" className="hover:text-[#000]">Search Engine Marketing</Link>
                            </ul>
                        </div>
                        
                    </div>
                </div>

                <hr className="" />

                <div className="flex justify-between pt-5">
                    <div className="">© 2024 Avant-garde EdTech ltd </div>
                    <div>
                        <p>Terms & Conditions | Privacy Policy</p>
                    </div>
                </div>
          </section>

          <div className="pt-16">

          </div>

        </>
    )
}

export default Footer