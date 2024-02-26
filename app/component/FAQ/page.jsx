"use client"
import React from "react"
import { Accordion } from "flowbite-react"

const FaQComponent = () => {
  const dataFaQ = [
    {
      questions: "Apa saja syarat yang dibutuhkan ?",
      subquestions: " Lorem ipsum dolor sit amet consectetur adipisicing elit Quasi magni a officia corrupti quia esse doloribus sapiente sequi repudiandae animi placeat cumque ipsum natus nam perspiciatis saepe temporibus inventore  ",
    },
    {
      questions: "Berapa hari minimal sewa mobil lepas kunci ?",
      subquestions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni a officia corrupti quia esse, doloribus sapiente sequi repudiandae, animi placeat cumque ipsum natus nam perspiciatis saepe temporibus inventore ab?",
    },
    {
      questions: "Berapa hari sebelumnya sabaiknya booking sewa mobil ?",
      subquestions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni a officia corrupti quia esse, doloribus sapiente sequi repudiandae, animi placeat cumque ipsum natus nam perspiciatis saepe temporibus inventore ab?",
    },
    {
      questions: "Apakah Ada biaya antar-jemput ?",
      subquestions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni a officia corrupti quia esse, doloribus sapiente sequi repudiandae, animi placeat cumque ipsum natus nam perspiciatis saepe temporibus inventore ab?",
    },
    {
      questions: "Bagaimana jika terjadi kecelakaan ?",
      subquestions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni a officia corrupti quia esse, doloribus sapiente sequi repudiandae, animi placeat cumque ipsum natus nam perspiciatis saepe temporibus inventore ab?",
    },
  ]
  return (
    <div className="flex mt-16 space-y-10  mx-auto flex-col lg:flex-row lg:mx-32 lg:justify-between lg:space-y-0">
      <div className="w-full text-center h-auto space-y-3 lg:mx-0 lg:w-[40%] lg:text-left">
        <h1 className="font-bold text-2xl">Frequently Asked Question</h1>
        <p className="text-sm font-light">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="text-black w-full h-auto px-3 py-1 lg:w-[60%]">
        <Accordion collapseAll flush={true} className="space-y-4 border-none">
          {dataFaQ.map((data, i) => {
            return (
              <Accordion.Panel key={i}>
                <div className="border-none p-1">
                  <Accordion.Title className="border p-2 px-4 bg-[#D4D4D4] bg-opacity-5 text-sm rounded-sm">{data.questions}</Accordion.Title>
                </div>
                <Accordion.Content className="border-none">
                  <p className="border -mt-9 p-2 text-sm">{data.subquestions}</p>
                </Accordion.Content>
              </Accordion.Panel>
            )
          })}
        </Accordion>
      </div>
    </div>
  )
}

export default FaQComponent
