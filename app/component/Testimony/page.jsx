"use client"
import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// import Swiper core and required modules
import { Navigation, Keyboard } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import ButtonSwiper from "../buttonswiper/page"
//
import Image from "next/image"
import { FaStar } from "react-icons/fa"

const Testimony = () => {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
      nama: "Alexander",
      testy:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, unde alias. Exercitationem, voluptate? Repellat inventore dicta, numquam consequatur optio tempora fuga ab accusamus incidunt, placeat dolores ratione voluptatibus iusto laudantium.",
    },
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
      nama: "sarama",
      testy:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, unde alias. Exercitationem, voluptate? Repellat inventore dicta, numquam consequatur optio tempora fuga ab accusamus incidunt, placeat dolores ratione voluptatibus iusto laudantium.",
    },
    {
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww",
      nama: "godly",
      testy:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, unde alias. Exercitationem, voluptate? Repellat inventore dicta, numquam consequatur optio tempora fuga ab accusamus incidunt, placeat dolores ratione voluptatibus iusto laudantium.",
    },
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
      nama: "raham",
      testy:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, unde alias. Exercitationem, voluptate? Repellat inventore dicta, numquam consequatur optio tempora fuga ab accusamus incidunt, placeat dolores ratione voluptatibus iusto laudantium.",
    },
    {
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
      nama: "Vicky",
      testy:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, unde alias. Exercitationem, voluptate? Repellat inventore dicta, numquam consequatur optio tempora fuga ab accusamus incidunt, placeat dolores ratione voluptatibus iusto laudantium.",
    },
    {
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      nama: "sushi",
      testy:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, unde alias. Exercitationem, voluptate? Repellat inventore dicta, numquam consequatur optio tempora fuga ab accusamus incidunt, placeat dolores ratione voluptatibus iusto laudantium.",
    },
    {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      nama: "Joshi",
      testy:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, unde alias. Exercitationem, voluptate? Repellat inventore dicta, numquam consequatur optio tempora fuga ab accusamus incidunt, placeat dolores ratione voluptatibus iusto laudantium.",
    },
    {
      img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      nama: "Leio",
      testy:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, unde alias. Exercitationem, voluptate? Repellat inventore dicta, numquam consequatur optio tempora fuga ab accusamus incidunt, placeat dolores ratione voluptatibus iusto laudantium.",
    },
    {
      img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      nama: "Christopher",
      testy:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, unde alias. Exercitationem, voluptate? Repellat inventore dicta, numquam consequatur optio tempora fuga ab accusamus incidunt, placeat dolores ratione voluptatibus iusto laudantium.",
    },
    {
      img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      nama: "Leiwal",
      testy:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, unde alias. Exercitationem, voluptate? Repellat inventore dicta, numquam consequatur optio tempora fuga ab accusamus incidunt, placeat dolores ratione voluptatibus iusto laudantium.",
    },
    {
      img: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      nama: "Haast",
      testy:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, unde alias. Exercitationem, voluptate? Repellat inventore dicta, numquam consequatur optio tempora fuga ab accusamus incidunt, placeat dolores ratione voluptatibus iusto laudantium.",
    },
  ]
  return (
    <div id="tes" className="mt-20 mb-20 lg:mt-28 lg:mb-28">
      <div className="space-y-6 lg:space-y-8">
        <h1 className="text-center text-base font-bold">Testimonial</h1>
        <h4 className="text-center text-sm font-light"> Berbagai review positif dari para pelanggan kami</h4>
      </div>

      <div className="flex justify-center items-center">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Keyboard]}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 500,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 470,
            },
            // tambahkan breakpoint lain jika diperlukan
          }}
          loop={true}
          keyboard
          className="swiper-container mt-10 "
        >
          {data.map((slide, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="mx-auto bg-[#F1F3FF] w-[280px] h-[420px] shadow-md rounded-[8px] sm:mx-auto border lg:-ml-[190px] lg:py-6 lg:space-y-4 lg:w-[450px] lg:h-[240px] xl:-ml-[200px] xl:w-[550px] xl:h-[210px]">
                  <div className="p-7 flex items-center flex-col space-y-5 lg:space-y-0 lg:py-0 lg:flex-row lg:items-start">
                    <div className="relative h-20 w-20 lg:mr-5">
                      <Image src={slide.img} fill className="rounded-full" alt="" sizes="100" />
                    </div>
                    <div className="w-[90%] space-y-3 lg:space-y-2 lg:w-[75%]">
                      <div className="flex gap-1 items-center justify-center lg:items-start lg:justify-start">
                        <span>
                          <FaStar fill="gold" />
                        </span>
                        <span>
                          <FaStar fill="gold" />
                        </span>
                        <span>
                          <FaStar fill="gold" />
                        </span>
                        <span>
                          <FaStar fill="gold" />
                        </span>
                        <span>
                          <FaStar fill="gold" />
                        </span>
                      </div>

                      <p className="text-sm">{slide.testy}</p>
                      <h3 className="font-semibold">{slide.nama}</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
          <ButtonSwiper />
        </Swiper>
      </div>
    </div>
  )
}

export default Testimony
