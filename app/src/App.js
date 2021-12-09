// import {MainPage} from './pages/MainPage';
// import {Security} from './pages/security/security';
// import { FAQ } from './pages/faq/faq';
import { VerticalNavBar } from './components/VerticalNavBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
// import { PrivateMessenger } from './pages/PrivateMessenger/privateMessenger';
// import { AccountGeneration } from './pages/AccountGeneration/accountGeneration';
// import { SecureCryoto } from './pages/secureCryoti/SecureCrypto';
import { KeyPass } from './pages/keyPass/KeyPass';
// import { Web3Browser } from './pages/web3Browser/Web3Browser';
import { DVPN } from './pages/DVPN/DVPN';

function App() {
  return (
    <div className="App">
      <VerticalNavBar />
      <Header />
      <KeyPass  />
      <Footer />
    </div>
  );
}

export default App;
