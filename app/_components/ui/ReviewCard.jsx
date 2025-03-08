import { Star } from 'lucide-react';

export const ReviewCard = ({ img, name, review }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 px-6 py-3">
      <img src={img} alt="photo" className="w-1/2 h-1/2 rounded-md" />
      <h3 className="font-head font-bold text-xl text-[#1f1f1f]">{name}</h3>
      <div className="flex justify-center items-center gap-3">
        <Star className="w-4 h-4" fill="#FF6F61" stroke="none" />
        <Star className="w-4 h-4" fill="#FF6F61" stroke="none"/>
        <Star className="w-4 h-4" fill="#FF6F61" stroke="none"/>
        <Star className="w-4 h-4" fill="#FF6F61" stroke="none"/>
        <Star className="w-4 h-4" fill="#FF6F61" stroke="none"/>
      </div>
      <p className="text-md font-sans text-center text-[#3f3f3f]">{review}</p>
    </div>
  )
}
