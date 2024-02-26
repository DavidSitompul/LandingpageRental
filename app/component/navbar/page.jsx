"use client"
import React from "react"
import Link from "next/link"
import { Navbar } from "flowbite-react"
import Image from "next/image"

const NavbarComponent = () => {
  return (
    <Navbar fluid rounded className="bg-transparent mx-3 lg:mx-28">
      <Navbar.Brand>
        <div className="relative h-16 w-16 rounded-full">
          <Image
            src="https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhciUyMHBuZ3xlbnwwfHwwfHx8MA%3D%3D"
            className=" mr-3 h-6 sm:h-9 rounded-full"
            alt="Car Logo"
            fill
          />
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className=" lg:flex justify-between gap-8 items-center px-3 lg:px-0 ">
          <Navbar.Link as={Link} href="#">
            <p className="text-black text-sm font-normal hover:text-red-600">Our Service</p>
          </Navbar.Link>
          <Navbar.Link as={Link} href="#">
            <p className="text-black text-sm font-normal hover:text-red-600">Why Us</p>
          </Navbar.Link>
          <Navbar.Link as={Link} href="#">
            <p className="text-black text-sm font-normal hover:text-red-600">Testimonial</p>
          </Navbar.Link>
          <Navbar.Link as={Link} href="#">
            <p className="text-black text-sm font-normal hover:text-red-600">FAQ</p>
          </Navbar.Link>
        </div>
        <Navbar.Link as={Link} href="#">
          <button className="bg-[#5CB85F] rounded-sm px-3 py-2 text-white">Register</button>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent
