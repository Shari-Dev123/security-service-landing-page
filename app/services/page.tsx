import ServicesGrid from '@/components/ServicesGrid'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Chatbot } from '@/components/Chatbot'

const page = () => {
  return (
    <div className='min-h-screen relative'>
      <Navbar />
      <div className='relative'>
                <ServicesGrid />
                <div className='absolute -bottom-17.8 z-100 left-[50%] translate-x-[-50%]'>
                    <svg width="100" height="100" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0 H50 L25 25 Z" fill="white" />
                    </svg>
                </div>
            </div>
      <Footer services={true} />
      <Chatbot />
    </div>
  )
}

export default page