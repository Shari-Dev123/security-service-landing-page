import ServicesGrid from '@/components/ServicesGrid'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const page = () => {
  return (
    <>
      <Navbar />
      <ServicesGrid />
      <Footer services={true} />
    </>
  )
}

export default page