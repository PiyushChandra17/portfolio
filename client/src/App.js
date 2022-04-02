import "./App.css"
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./PortfolioContainer/Footer/Footer"
import Footer1 from "./PortfolioContainer/Footer1/Footer1"
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PortfolioContainer />
      <Footer />
      <Footer1 />
    </div>
  );
}

export default App;
