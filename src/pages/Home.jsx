import Hero from './homecomponents/Hero'
import About from './homecomponents/About'
import InvPlans from './homecomponents/InvPlans'
import Testimonial from './homecomponents/Testimonial'
import WeDo from './homecomponents/WeDo'

function Home() {
  return (
    <div>
      <title>Online Banking Made Simple | Secure Digital Banking Platform</title>
      <meta name="description" content="Manage your money anytime with our secure online banking platform. Check balances, transfer funds, apply for loans, and grow your savings easily." />
      <div className=' w-full  md:min-h-screen py-24'><Hero /></div>
      <div className=' w-full  min-h-[80vh] '><About /></div>
      <div className=' w-full  min-h-[60vh] bg-blue-700/10 py-10 '><WeDo /></div>
      <div className=' w-full  min-h-screen'><InvPlans /></div>
      <div className=' w-full  min-h-screen  mb-5'><Testimonial /></div>
    </div>
  )
}

export default Home