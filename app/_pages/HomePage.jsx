import { ArrowUpRight } from "lucide-react"
import { Navbar } from "../_components/Navbar"
import { SwapCard } from "../_components/ui/SwapCard"
import { ReviewCard } from "../_components/ui/ReviewCard"
import { FeatCard } from "../_components/ui/FeatCard"
import { Footer } from "../_components/Footer"

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
            Get Your AI Headshot Today
          </div>
        </button>
      </section>

      <section id="features" className="px-32 py-20 flex flex-col items-center gap-10">
        <h1 className="font-head font-extrabold text-4xl text-center text-[#1f1f1f]">Our AI Features</h1>
        <p className="font-sans text-lg text-center text-[#3f3f3f] w-1/2">Our studio offers a suite of AI tools to meet all portrait needs. Use Express AI for quick AI Headshots, Creative Studio for custom portraits, and Edit Your Own to edit your own images.</p>
        <div className="flex justify-between items-center gap-16">
          <FeatCard img="/person2.jpg" featHead="Efficiency" featDesc="Submit selfies and let AI create your AI headshots in 90 minutes." />
          <FeatCard img="/person2.jpg" featHead="Creativity" featDesc="Generate your own headshots with unique styles and more." />
          <FeatCard img="/person2.jpg" featHead="Flexibility" featDesc="Upload your photos and enhance them using our AI editing tools." />
        </div>
      </section>

      <section id="newfeats" className="flex flex-col items-center justify-center gap-10 px-32 py-20">
        <h1 className="font-head font-extrabold text-4xl text-center text-[#1f1f1f]">Our Latest AI Tools</h1>
        <p className="font-sans text-lg text-center text-[#3f3f3f] w-1/2">From the new Stella AI Marketing tool for businesses to the Custom Studio for advertising agencies. Click to learn more or book a meeting to discuss your company's AI needs.</p>
        <button className="flex items-center cursor-pointer group">
          <div className="text-[#f9f9f9] text-xl rounded-full px-16 py-3 bg-[linear-gradient(90deg,#a275f8_0%,#7a41d7_100%)] bg-[length:200%_200%] transition-all duration-500 group-hover:bg-[position:100%_0%]">
            Explore Latest Features
          </div>
        </button>
        <img src="/newfeats.jpg" alt="new feature" className="w-1/2 rounded-lg shadow-md" />
      </section>

      <section id="teams" className="px-32 py-20 flex flex-col items-center gap-10">
        <h1 className="font-head font-extrabold text-4xl text-center text-[#1f1f1f]">Want Headshots For The Entire Team?</h1>
        <p className="font-sans text-lg text-center text-[#3f3f3f] w-1/2">Used by global remote teams to create fully custom on-brand portraits. Invite team members, set custom photography styles for different teams, request custom editing and much more.</p>
        <div className="flex justify-center items-center gap-[-80px]">
          <img src="/person.jpg" alt="Team member" className="w-52 z-[80] mb-[-20px] mr-[-60px] rounded-md -rotate-30" />
          <img src="/person2.jpg" alt="Team member" className="w-60 z-[100] rounded-md" />
          <img src="/person.jpg" alt="Team member" className="w-52 z-[120] mb-[-20px] ml-[-60px] rounded-md rotate-30" />
        </div>
        <div className="flex justify-center items-center gap-5 mt-5">
          <button className="flex items-center cursor-pointer group">
            <div className="text-[#1f1f1f] text-xl rounded-full px-16 py-3 border-[2px] border-[#7a41d7] transition-all duration-500 group-hover:bg-[#1f1f1f] group-hover:text-[#fcfcfc] group-hover:border-[#1f1f1f]">
              Learn More
            </div>
          </button>
          <button className="flex items-center cursor-pointer group">
            <div className="text-[#f9f9f9] text-xl rounded-full px-16 py-3 bg-[linear-gradient(90deg,#a275f8_0%,#7a41d7_100%)] bg-[length:200%_200%] transition-all duration-500 group-hover:bg-[position:100%_0%]">
              Book A Demo
            </div>
          </button>
        </div>
      </section>

      <Footer />
    </>
  )
}
