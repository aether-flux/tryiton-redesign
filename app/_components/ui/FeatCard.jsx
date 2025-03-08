export const FeatCard = ({ img, featHead, featDesc }) => {
  return (
    <div className="rounded-lg border border-[#9982bf] shadow-lg overflow-hidden cursor-pointer">
      <div className="relative group transition-all duration-300 hover:scale-[1.2]">
        {/* Image */}
        <img
          src={img}
          alt="feature image"
          className="w-full h-full brightness-50 rounded-lg transition-all duration-300 group-hover:opacity-0"
        />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 text-center">
          <h3 className="font-head font-bold text-4xl text-[#fcfcfc] transition-all duration-300 
            group-hover:text-[#1f1f1f] group-hover:text-2xl group-hover:translate-y-[-40%] pointer-events-none">
            {featHead}
          </h3>
          <p className="px-10 font-sans text-sm text-[#3f3f3f] opacity-0 transition-all duration-300 
            group-hover:opacity-100 group-hover:translate-y-[-10%] pointer-events-none">
            {featDesc}
          </p>
        </div>
      </div>
    </div>
  );
};

