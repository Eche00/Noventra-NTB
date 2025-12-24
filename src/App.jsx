import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Container from './components/Container'
import Home from './pages/Home'
import Escrow from './pages/Escrow'
import ScrollToTop from './components/ScrollToTop'
import Dashcontainer from './Dashboard/Dashcontainer'
import Dashboard from './Dashboard/Dashboardpages/Dashboard'
import Withdraw from './Dashboard/Dashboardpages/Withdraw'
import Deposit from './Dashboard/Dashboardpages/Deposit'
import CreateEscrow from './Dashboard/Dashboardpages/CreateEscrow'
import EscrowManagement from './Dashboard/Dashboardpages/EscrowManagement'
import PropertyManagement from './Dashboard/Dashboardpages/PropertyManagement'
import DashProperties from './Dashboard/Dashboardpages/DashProperties'
import Transactions from './Dashboard/Dashboardpages/Transactions'
import Profile from './Dashboard/Dashboardpages/Profile'
import Signin from './Auth.jsx/Signin'
import Signup from './Auth.jsx/Signup'
import Forgotpassword from './Auth.jsx/Forgotpassword'
import { Toaster } from 'react-hot-toast'
import Property from './Dashboard/Dashboardpages/Property'
import Users from './Dashboard/Dashboardpages/Users'
import AdminTransactions from './Dashboard/Dashboardpages/AdminTransactions'
import WithdrawalList from './Dashboard/Dashboardpages/WithdrawalList'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Investments from './pages/Investments'
import Loans from './pages/Loans'
import Transfer from './Dashboard/Dashboardpages/Transfer'
import SmartCard from './Dashboard/Dashboardpages/SmartCard'

function App() {
  return (
    <div className='overflow-hidden'>

      <Toaster
        position="top-right"
        reverseOrder={false}

      />
      <Router>
        <ScrollToTop />

        <Routes>
          <Route path='/' element={<Container />} >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/investments' element={<Investments />} />
            <Route path='/loans' element={<Loans />} />
          </Route>
          <Route path='/dashboard' element={<Dashcontainer />} >
            <Route index element={<Dashboard />} />
            <Route path='transfer' element={<Transfer />} />
            <Route path='get-card' element={<SmartCard />} />
            <Route path='withdraw' element={<Withdraw />} />
            <Route path='deposit' element={<Deposit />} />
            <Route path='create-escrow' element={<CreateEscrow />} />
            <Route path='escrow-management' element={<EscrowManagement />} />
            <Route path='properties' element={<DashProperties />} />
            <Route path='transactions' element={<Transactions />} />
            <Route path='profile' element={<Profile />} />
            <Route path=':id' element={<Property />} />

            {/* Admin routes  */}
            <Route path='property-management' element={<PropertyManagement />} />
            <Route path='users-management' element={<Users />} />
            <Route path='transactions-management' element={<AdminTransactions />} />
            <Route path='withdraw-management' element={<WithdrawalList />} />

          </Route>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgotpassword' element={<Forgotpassword />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App