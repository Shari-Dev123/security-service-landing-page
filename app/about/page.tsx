import { AboutUs } from '@/components/AboutUs'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import About from '@/components/About'
import { ContactSection } from '@/components/ContactSection'
import { Chatbot } from '@/components/Chatbot'

const AboutPage = () => {
    return (
        <main className="min-h-screen flex flex-col relative">
            <Navbar />
            {/* <div className="pt-20 h-[100vh]"> */}
            {/* <AboutUs /> */}
            <div className='relative'>
                <About />
                <div className='absolute -bottom-26 z-100 left-[50%] translate-x-[-50%]'>
                    <svg width="100" height="100" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0 H50 L25 25 Z" fill="white" />
                    </svg>
                </div>
            </div>
            <div className='relative'>
                <ContactSection />
                <div className='absolute -bottom-25 z-100 left-[50%] translate-x-[-50%]'>
                    <svg width="100" height="100" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0 H50 L25 25 Z" fill="white" />
                    </svg>
                </div>
            </div>
            
            {/* </div> */}
            <Footer about={true} />
            <Chatbot />
        </main>
    )
}

export default AboutPage
