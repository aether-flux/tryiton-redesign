import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center w-screen my-8 sticky top-[2%] left-[50%] z-[999]">
        <div className="opacity-95 flex items-center justify-center gap-28 bg-[#f0edf5] rounded-full px-20 py-8 shadow-[0px_3px_15px_rgba(0,0,0,0.1)]">
          <Image src="/tryitonlogo.png" width={120} height={70} alt="logo image" />
          <div className="flex gap-8 font-sans">
            <Link className="duration-200 hover:text-[#672ad1] text-xl" href="#">Headshots</Link>
            <Link className="duration-200 hover:text-[#672ad1] text-xl" href="#">Gallery</Link>
            <Link className="duration-200 hover:text-[#672ad1] text-xl" href="#">Corporate</Link>
            <Link className="duration-200 hover:text-[#672ad1] text-xl" href="#">About</Link>
            <Link className="duration-200 hover:text-[#672ad1] text-xl" href="#">New AI Tools</Link>
            <Link className="duration-200 hover:text-[#672ad1] text-xl" href="#">Log In</Link>
          </div>
        </div>
      </nav>
    </>
  )
}
