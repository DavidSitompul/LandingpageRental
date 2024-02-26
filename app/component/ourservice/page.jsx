import Image from "next/image"
import React from "react"
import { FaCheck } from "react-icons/fa6"

const OurService = () => {
  return (
    <div className="mt-20 mx-5 lg:grid lg:grid-cols-2 lg:mt-28 lg:mx-48 lg:gap-20">
      <div className="relative h-72 mx-5 lg:h-96">
        <Image src="/img/img_service.png" fill className="w-full h-full" alt="img service"/>
      </div>
      <div className="space-y-5 mt-10 lg:mt-0">
        <h4 className="font-bold leading-9 text-xl">Best Car Rental for any kind of trip in (Lokasimu)!</h4>
        <p className="text-sm font-light">
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
        </p>
        <div className="space-y-2 lg:space-y-4">
          <div className="flex items-center gap-6 text-lg ">
            <FaCheck className="text-[#0D28A6] bg-[#CFD4ED] rounded-full p-1 w-6 h-6" />
            <span className="text-sm font-extralight lg:text-[16px] lg:font-light">Sewa Mobil Dengan Supir di Bali 12 Jam</span>
          </div>
          <div className="flex items-center gap-6 text-lg ">
            <FaCheck className="text-[#0D28A6] bg-[#CFD4ED] rounded-full p-1 w-6 h-6" />
            <span className="text-sm font-extralight lg:text-[16px] lg:font-light">Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
          </div>
          <div className="flex items-center gap-6 text-lg ">
            <FaCheck className="text-[#0D28A6] bg-[#CFD4ED] rounded-full p-1 w-6 h-6" />
            <span className="text-sm font-extralight lg:text-[16px] lg:font-light">Sewa Mobil Jangka Panjang Bulanan</span>
          </div>
          <div className="flex items-center gap-6 text-lg ">
            <FaCheck className="text-[#0D28A6] bg-[#CFD4ED] rounded-full p-1 w-6 h-6" />
            <span className="text-sm font-extralight lg:text-[16px] lg:font-light">Sewa Mobil Jangka Panjang Bulanan</span>
          </div>
          <div className="flex items-center gap-6 text-lg ">
            <FaCheck className="text-[#0D28A6] bg-[#CFD4ED] rounded-full p-1 w-6 h-6" />
            <span className="text-sm font-extralight lg:text-[16px] lg:font-light">Layanan Airport Transfer / Drop In Out</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurService
