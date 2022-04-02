import "./App.css"
import Footer from "./PortfolioContainer/Footer/Footer"
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;
