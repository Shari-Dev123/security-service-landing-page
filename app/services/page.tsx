import ServicesGrid from '@/components/ServicesGrid'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Chatbot } from '@/components/Chatbot'

const page = () => {
  return (
    <div className='min-h-screen relative'>
      <Navbar />
      <ServicesGrid />
      <Footer services={true} />
      <Chatbot />
    </div>
  )
}

export default page