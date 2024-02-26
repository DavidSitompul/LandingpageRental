import React, { useState } from "react"
// import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
// import "swiper/css"

// import { Keyboard, Pagination } from "swiper/modules"
const Tes = () => {
  const [state, setState] = useState("testing")
  const handleState = () => {
    setState("new state")
  }
  return (
    <div>
      <h1>ini adalah {state}</h1>
      <button onClick={handleState} className="bg-red-500 p-5">
        apa sekarang
      </button>
    </div>
  )
}

export default Tes
