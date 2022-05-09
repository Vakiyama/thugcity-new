import './App.css';
// module imports
import Landing from './Landing/Landing.js'
import Footer from './Footer/Footer.js'
import InfoRelease from './InfoRelease/InfoRelease.js'
import InfoNFTS from './InfoNFTS/InfoNFTS.js'
import InfoLaunch from './InfoLaunch/InfoLaunch.js'

function App() {
  return (
    <div className="App">
      <Landing/>
      <Footer/>
      <InfoRelease/>
      <InfoNFTS/>
      <InfoLaunch/>
    </div>
  );
}

export default App;
