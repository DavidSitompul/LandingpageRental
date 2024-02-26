import React from "react"

const CtaBanner = () => {
  return (
    <div className="mx-auto w-[340px] h-[430px] bg-[#0D28A6] py-8 mt-10 text-white space-y-10 rounded-2xl lg:py-3 lg:w-[750px] lg:h-[260px] xl:h-[310px] xl:w-[1000px] xl:mx-32 xl:py-10">
      <h1 className="text-center font-bold text-xl w-1/2 mx-auto leading-9 lg:text-3xl ">Sewa Mobil di (Lokasimu) Sekarang</h1>
      <p className="text-center text-sm w-[70%] relative m-auto leading-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quibusdam sint veritatis et nisi iure aliquam soluta molestiae, nihil dolores?</p>
      <button className="bg-[#5CB85F] flex mx-auto w-40 rounded-sm px-2 py-3 text-sm items-center text-center">
        <p className="mx-auto font-bold">Mulai Sewa Mobil</p>
      </button>
    </div>
  )
}

export default CtaBanner
