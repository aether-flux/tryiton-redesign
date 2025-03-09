export const SwapCard = ({ ai, hover, className }) => {
  return (
    <div className={`${className} relative w-full max-w-[8rem] sm:max-w-[8rem] md:max-w-[12rem] lg:max-w-[15rem] aspect-[2/3] rounded-lg overflow-hidden group cursor-pointer hover:scale-[1.1] duration-200`}>
      {/* AI Generated Image (Default Visible) */}
      <div className="absolute inset-0 w-full h-full transition-transform delay-200 duration-500 ease-in-out origin-center group-hover:scale-x-0">
        <img src={ai} alt="AI Generated" className="w-full h-full object-cover" />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-md text-xs sm:text-sm text-center">
          Made with TryItOn
        </div>
      </div>

      {/* Original Image (Expands on Hover) */}
      <div className="absolute inset-0 w-full h-full scale-x-0 transition-transform delay-200 duration-500 ease-in-out origin-center group-hover:scale-x-100">
        <img src={hover} alt="Original" className="w-full h-full object-cover" />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-md text-xs sm:text-sm text-center">
          Original Image
        </div>
      </div>
    </div>
  )
}

