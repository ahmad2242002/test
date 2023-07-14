import Image from 'next/image'
import background from '../images/background.webp'
import background2 from '../images/background2.webp'
import { Inter } from 'next/font/google'
import Footer from '../components/footer.js'
import Header from '@/components/header.js'
import '@fortawesome/fontawesome-svg-core/styles.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    <Header/>
   <div className='relative flex flex-col justify-center items-center overflow-hidden space-y-4  h-[300px] md:h-[400px] lg:h-[600px] xl:h-[720px]'>
   <Image src = {background} layout='fit' fill alt='backgroung image' quality={100}></Image>
   <div className="z-10 text-black text-sm md:text-xl font-normal">Not sure where to go? Perfect.</div>
            <button className="rounded-full px-3 md:px-8 md:py-3 py-2 hover:drop-shadow-2xl text-xs md:text-base text-purple-500 md:font-bold font-medium bg-white drop-shadow-md active:scale-90 transition duration-200">
            I&apos;m flexible</button>
   </div>

   <div className="xl:mx-44 lg:mx-10 mx-5  my-5">
        <div className="text-4xl font-semibold my-8 p-1">Explore Nearby</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="m-2 my-4 flex items-center grid-flow-row-dense hover:scale-105 transition duration-200  hover:bg-gray-100 hover:cursor-pointer rounded-xl">
                    <div className="card-image z-10 bg-cover h-16 w-16 rounded-lg "></div>
                    <div className="flex  flex-col justify-center -ms-5 ps-10 ">
                        <div>
                            London
                        </div>
                        <div>
                            45-minute drive
                        </div>
                    </div>
            </div>

            <div className="m-2 my-4 flex items-center grid-flow-row-dense hover:scale-105 transition duration-200  hover:bg-gray-100 hover:cursor-pointer rounded-xl">
                    <div className="card-image-1 z-10 bg-cover h-16 w-16 rounded-lg "></div>
                    <div className="flex flex-col justify-center -ms-5 ps-10 ">
                        <div>
                        Manchester
                        </div>
                        <div>
                        4.5-hour drive
                        </div>
                    </div>
            </div>

            <div className="m-2 my-4 flex items-center grid-flow-row-dense hover:scale-105 transition duration-200  hover:bg-gray-100 hover:cursor-pointer rounded-xl">
                    <div className="card-image-2 z-10 bg-cover h-16 w-16 rounded-lg "></div>
                    <div className="flex flex-col justify-center -ms-5 ps-10 ">
                        <div>
                        Liverpool
                        </div>
                        <div>
                        4.5-hour drive
                        </div>
                    </div>
            </div>

            <div className="m-2 my-4 flex items-center grid-flow-row-dense hover:scale-105 transition duration-200  hover:bg-gray-100 hover:cursor-pointer rounded-xl">
                    <div className="card-image-3 z-10 bg-cover h-16 w-16 rounded-lg "></div>
                    <div className="flex flex-col justify-center -ms-5 ps-10 ">
                        <div>
                        York
                        </div>
                        <div>
                        4-hour drive
                        </div>
                    </div>
            </div>

            <div className="m-2 my-4 flex items-center grid-flow-row-dense hover:scale-105 transition duration-200  hover:bg-gray-100 hover:cursor-pointer rounded-xl">
                    <div className="card-image-4 z-10 bg-cover h-16 w-16 rounded-lg "></div>
                    <div className="flex flex-col justify-center -ms-5 ps-10 ">
                        <div>
                        Cardiff
                        </div>
                        <div>
                            45-minute drive
                        </div>
                    </div>
            </div>

            <div className="m-2 my-4 flex items-center grid-flow-row-dense hover:scale-105 transition duration-200  hover:bg-gray-100 hover:cursor-pointer rounded-xl">
                    <div className="card-image-5 z-10 bg-cover h-16 w-16 rounded-lg "></div>
                    <div className="flex flex-col justify-center -ms-5 ps-10 ">
                        <div>
                        Birkenhead
                        </div>
                        <div>
                        4.5-hour drive
                        </div>
                    </div>
            </div>

            <div className="m-2 my-4 flex items-center grid-flow-row-dense hover:scale-105 transition duration-200  hover:bg-gray-100 hover:cursor-pointer rounded-xl">
                    <div className="card-image-6 z-10 bg-cover h-16 w-16 rounded-lg "></div>
                    <div className="flex flex-col justify-center -ms-5 ps-10 ">
                        <div>
                        Newquay
                        </div>
                        <div>
                        6-hour drive
                        </div>
                    </div>
            </div>

            <div className="m-2 my-4 flex items-center grid-flow-row-dense hover:scale-105 transition duration-200  hover:bg-gray-100 hover:cursor-pointer rounded-xl">
                    <div className="card-image-7 z-10 bg-cover h-16 w-16 rounded-lg "></div>
                    <div className="flex flex-col justify-center -ms-5 ps-10 ">
                        <div>
                        Hove
                        </div>
                        <div>
                        2-hour drive
                        </div>
                    </div>
                </div>
        </div>
    </div>

    <div className="xl:mx-44 lg:mx-10 mx-5   my-5">
        <div className="text-4xl font-semibold my-8 p-1">Live Anywhere</div>
        <div className="flex py-2 flex-nowrap overflow-x-auto scrollbar-hide hover:cursor-pointer">
            <div className="relative h-25 w-25 p-2 hover:scale-105 transition duration-200">
                <div className="scroll-image-1 w-80 h-80 rounded-2xl bg-cover"></div>
                <h1 className="text-2xl py-2">Outdoor getaways</h1>
            </div>
            <div className="relative h-25 w-25 p-2 hover:scale-105 transition duration-200">
                <div  className="scroll-image-2 w-80 h-80 rounded-2xl bg-cover"></div>
                <h1 className="text-2xl py-2">Unique stays</h1>
            </div>
            <div className="relative h-25 w-25 p-2 hover:scale-105 transition duration-200">
                <div className="scroll-image-3 w-80 h-80 rounded-2xl bg-cover"></div>
                <h1 className="text-2xl py-2">Entire homes</h1>
            </div>
            <div className="relative h-25 w-25 p-2 hover:scale-105 transition duration-200">
                <div  className="scroll-image-4 w-80 h-80 rounded-2xl bg-cover"></div>
                <h1 className="text-2xl py-2">Pet allowed</h1>
            </div>

        </div>
    </div>

    <div className="h-80 w-100 xl:mx-44 lg:mx-10 mx-5  ">
    <div className = "relative hover:cursor-pointer flex flex-col justify-center items-start overflow-hidden h-[400px] w-100 mb-40 mt-20 rounded-2xl">
    <Image src = {background2} layout='fit' fill alt='backgroung image 2' quality={100}></Image>
        <div className = "z-10 mx-12 -mt-12">
        <div className=" text-black text-4xl font-450">The Greatest<br></br>Outdoor</div>
        <div className=" text-black text-medium m-1">Wishlists created by Hassan</div>
            <div className="m-1 mt-6">
                <button className="rounded-lg px-5 py-2  text-sm  text-white font-normal bg-black">
                Get Inspiration</button>
            </div>
        </div>
    </div>
    </div>
    <Footer/>
   </main>

  )
  }
