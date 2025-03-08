import { ArrowUpRight } from "lucide-react"
import { Navbar } from "../_components/Navbar"
import { SwapCard } from "../_components/ui/SwapCard"
import { ReviewCard } from "../_components/ui/ReviewCard"

export const HomePage = () => {
  return (
    <>
      <Navbar />

      <section id="main" className="mt-20">
        <div className="main-content">
          <div className="main-text flex flex-col items-center">
            <h1 className="font-head font-bold text-4xl text-[#1f1f1f] text-center w-1/2"><span className="font-bold">Studio-Quality</span> AI Headshots in <span className="font-bold">Minutes</span></h1>
            <p className="font-sans text-xl text-[#3f3f3f] text-center mt-8 w-1/2">Get premium, professional AI-generated headshots for you and your team—trusted by <span className="font-bold">800K+ professionals</span> and enterprises worldwide.</p>
            <button className="flex items-center mt-10 cursor-pointer group">
              <div className="text-[#f9f9f9] text-xl rounded-full px-16 py-3 bg-[linear-gradient(90deg,#a275f8_0%,#7a41d7_100%)] 
                  bg-[length:200%_200%] transition-all duration-500 group-hover:bg-[position:100%_0%]">
                Get Your AI Headshot
              </div>
            </button>

          </div>

          <div className="flex justify-center items-center gap-16 mt-20">
            <SwapCard ai={"/person.jpg"} hover={"/person2.jpg"} />
            <SwapCard ai={"/person.jpg"} hover={"/person2.jpg"} />
            <SwapCard ai={"/person.jpg"} hover={"/person2.jpg"} />
            <SwapCard ai={"/person.jpg"} hover={"/person2.jpg"} />
            <SwapCard ai={"/person.jpg"} hover={"/person2.jpg"} />
          </div>
        </div>
      </section>

      <section id="feats" className="w-screen bg-[#000] mt-20 py-8">
        <h1 className="text-[#fcfcfc] font-head font-extrabold text-3xl uppercase text-center">Featured On</h1>
        <div className="flex justify-center items-center gap-16 mt-10">
          <div className="flex justify-center items-center gap-16">
            <img src="/Indi100.png" alt="Indi100" />
            <img src="/bbclogo.jpg" alt="BBC" />
            <img src="/independent.png" alt="Independent" />
          </div>
          <div className="flex justify-center items-center gap-16">
            <img src="/Indi100.png" alt="Indi100" />
            <img src="/bbclogo.jpg" alt="BBC" />
            <img src="/independent.png" alt="Independent" />
          </div>
        </div>
      </section>

      <section id="reviews" className="px-32 py-20 flex flex-col items-center">
        <h1 className="font-head font-extrabold text-4xl text-center text-[#1f1f1f]">What Our Customers Think</h1>
        <div className="mt-14 flex justify-between items-center">
          <ReviewCard img="/person.jpg" name="Kevin Gert" review="I needed headshots for my business. I've tried other AI generators, but this is the only one that actually worked & gave me results that look exactly like me. Plus, I got outstanding styling ideas! Highly recommend." />
          <ReviewCard img="/person.jpg" name="Kevin Gert" review="I needed headshots for my business. I've tried other AI generators, but this is the only one that actually worked & gave me results that look exactly like me. Plus, I got outstanding styling ideas! Highly recommend." />
          <ReviewCard img="/person.jpg" name="Kevin Gert" review="I needed headshots for my business. I've tried other AI generators, but this is the only one that actually worked & gave me results that look exactly like me. Plus, I got outstanding styling ideas! Highly recommend." />
        </div>
        <button className="flex items-center mt-10 cursor-pointer group">
          <div className="text-[#f9f9f9] text-xl rounded-full px-16 py-3 bg-[linear-gradient(90deg,#a275f8_0%,#7a41d7_100%)] bg-[length:200%_200%] transition-all duration-500 group-hover:bg-[position:100%_0%]">
            Get Your AI Headshot
          </div>
      </button>
      </section>
    </>
  )
}
