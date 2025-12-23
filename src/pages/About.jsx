import Hero from './aboutcomponent/Hero'
import Records from './aboutcomponent/Records'
import Aboutus from './aboutcomponent/Aboutus'
import WeDo from './homecomponents/WeDo'

function About() {
    return (
        <div>
            <title>About Us | Trusted Online Banking You Can Rely On</title>
            <meta name="description" content="Learn more about our mission, values, and commitment to secure, customer-focused online banking solutions designed for modern financial needs." />
            <div className=' w-full md:min-h-screen py-24'><Hero /></div>
            <div ><Records /></div>
            <div className=' w-full bg-blue-700/10 min-h-screen '><Aboutus /></div>
            <div className=' w-full  min-h-[70vh] pb-10'><WeDo /></div>

        </div>
    )
}

export default About