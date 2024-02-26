"use client"
import HeroSection from "./component/herosection/page"
import OurService from "./component/ourservice/page"
import WhyUs from "./component/Why Us/page"
import Testimony from "./component/Testimony/page"
import CtaBanner from "./component/CTAbanner/page"
import FaQComponent from "./component/FAQ/page"
import Footer from "./component/Footer/page"
import Tes from "./component/tes/page"

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurService />
      <WhyUs />
      <Testimony />
      <CtaBanner />
      <FaQComponent />
      <Footer />
    </>
  )
}
