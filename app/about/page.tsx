import { AboutUs } from '@/components/AboutUs'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import About from '@/components/About'
import { ContactSection } from '@/components/ContactSection'

const AboutPage = () => {
    return (
        <main className="min-h-screen flex flex-col relative">
            <Navbar />
            {/* <div className="pt-20 h-[100vh]"> */}
            {/* <AboutUs /> */}
            <About />
            <ContactSection />
            {/* </div> */}
            <Footer about={true} />
        </main>
    )
}

export default AboutPage
