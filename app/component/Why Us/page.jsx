import React from "react"
import { GoThumbsup } from "react-icons/go"
import { IoPricetagOutline } from "react-icons/io5"
import { GoClock } from "react-icons/go"
import { FiAward } from "react-icons/fi"

const WhyUs = () => {
  return (
    <div className="mt-20 mx-5 space-y-8 lg:mx-32 lg:mt-28 lg:space-y-16">
      <div className="space-y-6 items-center flex flex-col lg:flex lg:flex-col lg:items-start">
        <h1 className="font-bold text-2xl">Why Us</h1>
        <p className="font-light text-sm">Mengapa harus pilih Binar Car Rental?</p>
      </div>
      <div className="mt-5 space-y-6 lg:grid lg:grid-cols-4 lg:gap-8 lg:mt-10 lg:space-y-0">
        <div className="bg-[#D0D0D0] bg-opacity-10 p-6 space-y-4 shadow-sm rounded-[8px] border">
          <GoThumbsup className="w-8 h-8 bg-[#F9CC00] text-white rounded-full p-1" />
          <h2 className="font-bold text-sm">Mobil Lengkap</h2>
          <p className="text-sm font-light">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
        </div>
        <div className="bg-[#D0D0D0] bg-opacity-10 p-6 space-y-4 shadow-sm rounded-[8px] border">
          <IoPricetagOutline className="w-8 h-8 bg-[#FA2C5A] text-white rounded-full p-1 -rotate-90" />
          <h2 className="font-bold text-sm">Harga Murah</h2>
          <p className="text-sm font-light">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
        </div>
        <div className="bg-[#D0D0D0] bg-opacity-10 p-6 space-y-4 shadow-sm rounded-[8px] border">
          <GoClock className="w-8 h-8 bg-[#0D28A6] text-white rounded-full p-1" />
          <h2 className="font-bold text-sm">Layanan 24 Jam</h2>
          <p className="text-sm font-light">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
        </div>
        <div className="bg-[#D0D0D0] bg-opacity-10 p-6 space-y-4 shadow-sm rounded-[8px] border">
          <FiAward className="w-8 h-8 bg-[#5CB85F] text-white rounded-full p-1" />
          <h2 className="font-bold text-sm">Sopir Profesional</h2>
          <p className="text-sm font-light">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
