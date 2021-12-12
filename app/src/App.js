import React from 'react'
// import {MainPage} from './pages/MainPage';
// import {Security} from './pages/security/security';
// import { FAQ } from './pages/faq/faq';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { VerticalNavBar } from './components/VerticalNavBar'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
// import { PrivateMessenger } from './pages/PrivateMessenger/privateMessenger';
// import { AccountGeneration } from './pages/AccountGeneration/accountGeneration';
// import { SecureCryoto } from './pages/secureCryoti/SecureCrypto';
import { KeyPass } from './pages/keyPass/KeyPass'
// import { Web3Browser } from './pages/web3Browser/Web3Browser';
import { DVPN } from './pages/DVPN/DVPN'
import { Content } from './components/Content'

function App() {
  return (
    <BrowserRouter>
      <VerticalNavBar />
      <Header />
      <Routes>
        <Route path="/" exact element={<Content />} />
        <Route path="/keypass" element={<KeyPass />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
