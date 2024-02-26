import React from "react"
import Image from "next/image"
import NavbarComponent from "../navbar/page"

const HeroSection = () => {
  return (
    <div className="bg-[#F1F3FF] h-auto lg:h-[500px]">
      <NavbarComponent />
      <div className="mt-4 h-auto pl-4 lg:h-[420px] lg:grid lg:grid-cols-2 lg:pl-32">
        <div className="w-full lg:pt-28 space-y-7">
          <p className="font-extrabold text-3xl w-[80%] leading-relaxed lg:w-full">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</p>
          <p className="font-light text-sm w-[90%]">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          <button className="bg-[#5CB85F] rounded-sm px-3 py-2 text-white">Mulai Sewa Mobil</button>
        </div>

        <div className="w-full">
          <div className="relative h-[310px] w-[95%] mx-auto mt-10 ">
            <Image src="/img/Mercedes Car.png" fill alt="mercedes"  />
          </div>
          <div className="bg-[#0D28A6] h-[160px] -mt-[173px] rounded-ss-[80px] lg:h-[250px] lg:-mt-[173px] lg:rounded-ss-[80px]"></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
