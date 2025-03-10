export const FeatCard = ({ img, featHead, featDesc }) => {
  return (
    <div className="rounded-lg border border-[#9982bf] shadow-lg overflow-hidden cursor-pointer relative group">
      {/* Image */}
      <img
        src={img}
        alt="feature image"
        className="w-full h-64 sm:h-80 md:h-96 object-cover brightness-75 transition-all duration-300 group-hover:opacity-0"
      />

      {/* Overlay Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-4">
        {/* Title */}
        <h3 className="font-head font-bold text-md sm:text-2xl md:text-3xl text-white transition-all duration-300 
          group-hover:text-[#1f1f1f] group-hover:-translate-y-2">
          {featHead}
        </h3>

        {/* Description */}
        <p className="font-sans text-sm md:text-base text-[#2f2f2f] opacity-0 transition-all duration-300 
          group-hover:opacity-100 group-hover:-translate-y-1">
          {featDesc}
        </p>
      </div>
    </div>
  );
};

