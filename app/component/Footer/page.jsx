import React from "react"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <div className="ml-5 space-y-8 mt-16 lg:grid lg:grid-cols-4 mb-14 lg:space-y-0 lg:mx-32">
      <div className="text-sm font-light space-y-3 mb-3">
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>Tarutungcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div className="text-sm font-light space-y-3 mb-3 lg:ml-10">
        <p>Our services</p>
        <p>Why Us</p>
        <p>Testimonial</p>
        <p>FAQ</p>
      </div>
      <div className="text-sm font-light space-y-3 mb-3">
        <p>Connect with us</p>
        <div className="flex space-x-4 mb-8">
          <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={32} className="text-blue-600 hover:text-blue-800" />
          </Link>
          <Link href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={32} className="text-blue-400 hover:text-blue-600" />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32} className="text-pink-600 hover:text-pink-800" />
          </Link>
          <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={32} className="text-red-700 hover:text-blue-900" />
          </Link>
        </div>
      </div>
      <div className="text-sm font-light space-y-3 mb-3">
        <p>Copyright TRT 2023</p>
        <div className="relative h-16 w-20 ">
          <Image
            src="https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhciUyMHBuZ3xlbnwwfHwwfHx8MA%3D%3D"
            className=" mr-3 h-6 sm:h-9 rounded-lg"
            alt="Car Logo"
            fill
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
