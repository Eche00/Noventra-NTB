import React from 'react'
import Hero from './loancomponent/Hero'
import LoanCta from './loancomponent/LoansCta'

function Loans() {
    return (
        <div>
            <title>Loans | Flexible Personal & Business Loan Solutions</title>
            <meta name="description" content="Discover flexible loan options tailored to your personal and business needs. Apply for loans easily through our secure online banking platform." />
            <div className=' w-full  md:min-h-screen py-24'><Hero /></div>
            <div className=' w-full  md:min-h-screen'><LoanCta /></div>
        </div>
    )
}

export default Loans