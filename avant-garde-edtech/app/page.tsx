import Image from "next/image";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FiArrowDownRight } from "react-icons/fi";
import { IoRemoveOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";



export default function Home() {
  return (
        <>

        {/* hero section */}

            <section className="hero-section bg-[#f3f3f3] h-[150vh] md:h-[140vh] lg:h-[130-vh]">
          <div className="hero-text justify-center flex flex-col items-center pt-16 gap-2">
            <div className="flex items-center gap-3">
              <IoRemoveOutline className="text-[30px] text-[#646464]" />
                <h3 className="lg:text-[30px] text-[#646464] oswald text-[20px]">AVANT-GARDE</h3>
              <IoRemoveOutline className="text-[30px] text-[#646464]" />
            </div>
            <h1 className="font-bold lg:text-[50px] text-center w-[100%] oswald text-[40px]">
              Empowering Future-Ready Education Solutions
            </h1>
             <h2 className="w-[70%] items-center text-center lg:w-[50%] text-[16x] lg:text-[20px] text-[#646464]">
              Innovative EdTech consulting for educational institutions,
              equipping you with cutting-edge tools and strategies to 
              enhance learning outcomes.
             </h2>
              <div className="btn gap-8 flex py-7">
                  <Link href="" className="flex gap-2 text-[18px] items-center bg-[#013819] text-[#fff] px-4 py-2 rounded"> <span className="text-[16px]">Get in Touch </span> <MdArrowOutward/></Link>
                  <Link href="" className="flex gap-2 text-[18px] items-center border-[1.5px] border-[#000] bg-white px-4 py-2 rounded "> <span className="text-[16px]">Learn More </span><FiArrowDownRight/> </Link>
              </div>
          </div>
              <div className="bg-pics pt-10 flex justify-center items-center relative">

                  {/* <NextVideo src={Agency} />  */}
                  
                  <img src="./agency-bg-1.jpg" alt="" className="
                  lg:rounded-xl 
                  text-center
                  h-[550px]
                  lg:w-[90%]
                  w-full" /> 

                  <div className="overlay w-full h-[550px] lg:w-[90%] bg-[rgba(0,0,0,.4)] absolute lg:rounded-xl opacity-10"></div>
              </div>
        </section>

        {/* About section */}

        <section className="about-section h-[150vh] md:h-[140vh] lg:h-[120vh] px-4 bg-[#fff] w-[95%] rounded-lg
            md:px-8 
            lg:px-16
             xl:px-20 
             2xl:px-30
             py-20 
             m-auto
             ">
          <div>
            <h1 className="text-[50px] font-bold pb-1">About us</h1>
            <hr className="bg-[#104424] pt-3 h-2 rounded-lg lg:w-[5%] md:w-[10] w-[15%]" />
          </div>

          <div className="about-contents grid grid-cols-1 lg:grid-cols-2 items-center gap-10 pt-16 ">
            <div className="image-container relative flex justify-center items-center">
              <img src="./agency-bg-2.jpg" alt="" className=" md:w-[100%] md:h-[450px] h-[400px] w-full rounded-2xl lg:w-full" />
              <div className="overlay w-full h-[400px] md:w-[100%] md:h-[450px] lg:w-full bg-[rgba(0,0,0,.4)] absolute rounded-2xl opacity-10"></div>
            </div>
            
            <div className="about-text">
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta sequi eveniet consequuntur nesciunt quos asperiores
                    numquam voluptates porro ducimus aperiam, saepe ab ullam 
                    consequatur exercitationem ipsa commodi, veniam omnis eligendi.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Quibusdam deleniti pariatur vero enim nostrum, accusamus, 
                    dolores nihil molestiae veniam soluta voluptatibus sit labore.
                      Ipsum dolores quo eos in id at?
                  </p>
              </div>
             
              <div className="py-6">
                  <Link href="" className="flex gap-2 text-[18px] items-center text-[#01461F]">
                    <span className="text-[16px]">Learn More </span>
                    <FiArrowDownRight/> 
                  </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our services section */}
      <div className="pt-16">

      </div>
        <section className="Our-services bg-[#013819] h-[120vh  w-[95%] rounded-lg m-auto
             px-4 
            md:px-8 
            lg:px-16
             xl:px-20 
             2xl:px-30
             py-12">
              <div>
                <h1 className="text-[#ffff] text-[50px]">Our Services</h1>
                <hr className="bg-[#ffff] pt-3 h-2 rounded-lg lg:w-[5%] md:w-[10] w-[15%]" />
                {/* <h3 className="text-[#fff] text-[16px] w-[80%] py-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque et nesciunt, delectus cum deserunt quasi?</h3> */}
              </div>

              <div className="pt-20">
                  <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                      <div className="card-box bg-[#01461F] gap-8 py-6 px-6 rounded-lg">
                        <div className="">
                           <CiMail className="font-bold text-[50px] text-[#000] bg-[#E7D1B1] p-2 flex items-center rounded-md"/>
                        </div>
                         
                          <h2 className="text-[#fff] text-[25px] py-4 font-bold oswald">Web & App Development</h2>

                          <p className="text-[#b7b7b4] text-[17px] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Voluptatem consectetur repellendus similique beatae.</p>

                            <div className="pt-16 pb-3 flex items-center"> 
                              <Link href="/" className="text-[#b7b7b4] border-[1.5px] border-[#b7b7b4] hover:text-[#fff] flex items-center gap-4 px-4 py-2 rounded-md"> <span>Schedule Discussion</span>  <FiArrowDownRight/> </Link>
                            </div>
                      </div>

                      <div className="card-box bg-[#01461F] gap-8 py-6 px-6 rounded-lg">
                        <div className="">
                           <CiMail className="font-bold text-[50px] text-[#000] bg-[#E7D1B1] p-2 flex items-center rounded-md"/>
                        </div>
                         
                          <h2 className="text-[#fff] text-[25px] py-4 font-bold oswald">Social Media Marketing</h2>

                          <p className="text-[#b7b7b4] text-[17px] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Voluptatem consectetur repellendus similique beatae.</p>

                            <div className="pt-16 pb-3 flex items-center"> 
                              <Link href="/" className="text-[#b7b7b4] border-[1.5px] border-[#b7b7b4] hover:text-[#fff] flex items-center gap-4 px-4 py-2 rounded-md"> <span>Schedule Discussion</span>  <FiArrowDownRight/> </Link>
                            </div>
                      </div>

                      <div className="card-box bg-[#01461F] gap-8 py-6 px-6 rounded-lg">
                        <div className="">
                           <CiMail className="font-bold text-[50px] text-[#000] bg-[#E7D1B1] p-2 flex items-center rounded-md"/>
                        </div>
                         
                          <h2 className="text-[#fff] text-[25px] py-4 font-bold oswald">Email Marketing</h2>

                          <p className="text-[#b7b7b4] text-[17px] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Voluptatem consectetur repellendus similique beatae.</p>

                            <div className="pt-16 pb-3 flex items-center"> 
                              <Link href="/" className="text-[#b7b7b4] border-[1.5px] border-[#b7b7b4] hover:text-[#fff] flex items-center gap-4 px-4 py-2 rounded-md"> <span>Schedule Discussion</span>  <FiArrowDownRight/> </Link>
                            </div>
                      </div>

                      <div className="card-box bg-[#01461F] gap-8 py-6 px-6 rounded-lg">
                        <div className="">
                           <CiMail className="font-bold text-[50px] text-[#000] bg-[#E7D1B1] p-2 flex items-center rounded-md"/>
                        </div>
                         
                          <h2 className="text-[#fff] text-[25px] py-4 font-bold oswald">Search Engine Marketing</h2>

                          <p className="text-[#b7b7b4] text-[17px] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Voluptatem consectetur repellendus similique beatae.</p>

                            <div className="pt-16 pb-3 flex items-center"> 
                              <Link href="/" className="text-[#b7b7b4] border-[1.5px] border-[#b7b7b4] hover:text-[#fff] flex items-center gap-4 px-4 py-2 rounded-md"> <span>Schedule Discussion</span>  <FiArrowDownRight/> </Link>
                            </div>
                      </div>

                      <div className="card-box bg-[#01461F] gap-8 py-6 px-6 rounded-lg">
                        <div className="">
                           <CiMail className="font-bold text-[50px] text-[#000] bg-[#E7D1B1] p-2 flex items-center rounded-md"/>
                        </div>
                         
                          <h2 className="text-[#fff] text-[25px] py-4 font-bold oswald">Creative & Content</h2>

                          <p className="text-[#b7b7b4] text-[17px] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Voluptatem consectetur repellendus similique beatae.</p>

                            <div className="pt-16 pb-3 flex items-center"> 
                              <Link href="/" className="text-[#b7b7b4] border-[1.5px] border-[#b7b7b4] hover:text-[#fff] flex items-center gap-4 px-4 py-2 rounded-md"> <span>Schedule Discussion</span>  <FiArrowDownRight/> </Link>
                            </div>
                      </div>

                      <div className="card-box bg-[#01461F] gap-8 py-6 px-6 rounded-lg">
                        <div className="">
                           <CiMail className="font-bold text-[50px] text-[#000] bg-[#E7D1B1] p-2 flex items-center rounded-md"/>
                        </div>
                         
                          <h2 className="text-[#fff] text-[25px] py-4 font-bold oswald">Digital Advertising & PPC</h2>

                          <p className="text-[#b7b7b4] text-[17px] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Voluptatem consectetur repellendus similique beatae.</p>

                            <div className="pt-16 pb-3 flex items-center"> 
                              <Link href="/" className="text-[#b7b7b4] border-[1.5px] border-[#b7b7b4] hover:text-[#fff] flex items-center gap-4 px-4 py-2 rounded-md"> <span>Schedule Discussion</span>  <FiArrowDownRight/> </Link>
                            </div>
                      </div>
                  </div>
              </div>
          </section>

          <div className="pt-16">

          </div>

        </>
  );
}

// gold color #E7D1B1
// darkgreen #013819
// light green #01461F
// light color #F0F0ED
 