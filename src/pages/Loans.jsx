import React from 'react'
import Hero from './loancomponent/Hero'
import LoanCta from './loancomponent/LoansCta'

function Loans() {
    return (
        <div>
            <div className=' w-full  md:min-h-screen py-24'><Hero /></div>
            <div className=' w-full  md:min-h-screen'><LoanCta /></div>
        </div>
    )
}

export default Loans