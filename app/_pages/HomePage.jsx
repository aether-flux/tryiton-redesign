import { ArrowUpRight } from "lucide-react"
import { Navbar } from "../_components/Navbar"

export const HomePage = () => {
  return (
    <>
      <Navbar />

      <section id="main" className="mt-20">
        <div className="main-content">
          <div className="main-text flex flex-col items-center">
            <h1 className="font-head font-bold text-4xl text-[#1f1f1f] text-center w-1/2"><span className="font-bold">Studio-Quality</span> AI Headshots in <span className="font-bold">Minutes</span></h1>
            <p className="font-sans text-xl text-[#3f3f3f] text-center mt-8 w-1/2">Get premium, professional AI-generated headshots for you and your team—trusted by 800K+ professionals and enterprises worldwide.</p>
            <button className="flex items-center mt-10 cursor-pointer group">
              <div className="text-[#f9f9f9] text-xl rounded-full px-9 py-3 bg-[linear-gradient(90deg,#a275f8_0%,#7a41d7_100%)] 
                  bg-[length:200%_200%] transition-all duration-500 group-hover:bg-[position:100%_0%]">
                Get Your AI Headshot
              </div>

              <div className="w-13 h-13 rounded-full flex items-center justify-center bg-[linear-gradient(105deg,#3f3f3f_0%,#7a41d7_100%)]
                  bg-[length:150%_150%] transition-all duration-500 group-hover:bg-[position:100%_0%]">
                <ArrowUpRight className="w-5 h-5 text-[#f9f9f9]" />
              </div>
            </button>

          </div>
        </div>
      </section>
    </>
  )
}
 //  <button className={`flex items-center mt-10 cursor-pointer group`}>
//               <div className={`bg-[#8b59e3] text-[#f9f9f9] text-xl rounded-full px-9 py-3`}>Get Your AI Headshot</div>
//               <div className={`bg-[#1f1f1f] w-13 h-13 rounded-full flex items-center justify-center`}><ArrowUpRight className="w-5 h-5" color="#f9f9f9" /></div>
//             </button>

