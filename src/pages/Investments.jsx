
import Hero from './investmentcomponent/Hero'
import InvestmentsShowcase from './investmentcomponent/InvestmentsShowcase'

function Investments() {
    return (
        <div>
            <div>
                <div className=' w-full  md:min-h-screen py-24'><Hero /></div>
                <div className=' w-full  min-h-screen bg-blue-700/10'><InvestmentsShowcase /></div>
            </div>
        </div>
    )
}

export default Investments