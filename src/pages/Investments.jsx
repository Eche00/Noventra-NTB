
import Hero from './investmentcomponent/Hero'
import InvestmentsShowcase from './investmentcomponent/InvestmentsShowcase'

function Investments() {
    return (
        <div>
            <title>Investments | Grow Your Wealth with Smart Banking Options</title>
            <meta name="description" content="Explore investment opportunities designed to help you grow your wealth. Discover secure, flexible investment plans through our online banking platform." />
            <div>
                <div className=' w-full  md:min-h-screen py-24'><Hero /></div>
                <div className=' w-full  min-h-screen bg-blue-700/10'><InvestmentsShowcase /></div>
            </div>
        </div>
    )
}

export default Investments