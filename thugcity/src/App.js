import './App.css';
// module imports
import Landing from './Landing/Landing.js'
import Footer from './Footer/Footer.js'
import InfoRelease from './InfoRelease/InfoRelease.js'
import InfoNFTS from './InfoNFTS/InfoNFTS.js'
import InfoLaunch from './InfoLaunch/InfoLaunch.js'
import InfoWhitelist from './InfoWhitelist/InfoWhitelist';
import InfoGiveaway from './InfoGiveaway/InfoGiveaway';
import InfoEvents from './InfoEvents/InfoEvents';
import InfoPrizes from './InfoPrizes/InfoPrizes';
import Roadmap from './Roadmap/Roadmap';
import Faq from './Faq/Faq'
import InfoFounders from './InfoFounders/InfoFounders';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Footer/>
      <InfoRelease/>
      <InfoNFTS/>
      <InfoLaunch/>
      <InfoWhitelist/>
      <InfoGiveaway/>
      <InfoEvents/>
      <InfoPrizes/>
      <Roadmap/>
      <Faq/>
      <InfoFounders/>
    </div>
  );
}

export default App;
