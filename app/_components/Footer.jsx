import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-[#fff] px-8 md:px-32 py-10 md:py-12 border-t border-t-[#9982bf88] flex flex-col md:flex-row gap-8 md:gap-0 justify-between">
      <div>
        <img src="/tryitonlogo.png" alt="logo image" className="w-[150px]" />
        <div className="flex items-center gap-4 mt-4">
          <div className="w-8 h-8 p-2 flex items-center justify-center bg-[#1f1f1f] rounded-full transition-all duration-300 hover:opacity-90 cursor-pointer">
            <Instagram className="w-4 h-4" stroke="#fcfcfc" />
          </div>
          <div className="w-8 h-8 p-2 flex items-center justify-center bg-[#1f1f1f] rounded-full transition-all duration-300 hover:opacity-90 cursor-pointer">
            <Twitter className="w-4 h-4" stroke="#fcfcfc" />
          </div>
          <div className="w-8 h-8 p-2 flex items-center justify-center bg-[#1f1f1f] rounded-full transition-all duration-300 hover:opacity-90 cursor-pointer">
            <Linkedin className="w-4 h-4" stroke="#fcfcfc" />
          </div>
          <div className="w-8 h-8 p-2 flex items-center justify-center bg-[#1f1f1f] rounded-full transition-all duration-300 hover:opacity-90 cursor-pointer">
            <Youtube className="w-4 h-4" stroke="#fcfcfc" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-5">
        <a href="#" className="font-sans text-[#2f2f2f] transition-all duration-300 hover:text-[#7a41d7]">AI Headshots For Teams</a>
        <a href="#" className="font-sans text-[#2f2f2f] transition-all duration-300 hover:text-[#7a41d7]">AI Headshots For Companies</a>
        <a href="#" className="font-sans text-[#2f2f2f] transition-all duration-300 hover:text-[#7a41d7]">Privacy Policy</a>
        <a href="#" className="font-sans text-[#2f2f2f] transition-all duration-300 hover:text-[#7a41d7]">Terms of Service</a>
        <a href="#" className="font-sans text-[#2f2f2f] transition-all duration-300 hover:text-[#7a41d7]">About Us</a>
      </div>
      <div className="flex flex-col gap-1">
        <a href="#" className="font-sans text-[#2f2f2f] transition-all duration-300 hover:text-[#7a41d7]">Professional AI Headshots</a>
        <a href="#" className="font-sans text-[#2f2f2f] transition-all duration-300 hover:text-[#7a41d7]">Lifestyle AI Portraits</a>
        <a href="#" className="font-sans text-[#2f2f2f] transition-all duration-300 hover:text-[#7a41d7]">Influencer AI Headshots</a>
        <a href="#" className="font-sans text-[#2f2f2f] transition-all duration-300 hover:text-[#7a41d7]">Lawyer Headshots</a>
      </div>
      <div className="flex flex-col gap-1">
        <a href="#" className="font-sans text-[#2f2f2f] transition-all duration-300 hover:text-[#7a41d7]">News</a>
        <a href="#" className="font-sans text-[#2f2f2f] transition-all duration-300 hover:text-[#7a41d7]">Affiliates</a>
        <a href="#" className="font-sans text-[#2f2f2f] transition-all duration-300 hover:text-[#7a41d7">Earn with Try it on</a>
        <a href="#" className="font-sans text-[#2f2f2f] transition-all duration-300 hover:text-[#7a41d7]">AI Marketing Platforms</a>
      </div>
    </footer>
  )
}
