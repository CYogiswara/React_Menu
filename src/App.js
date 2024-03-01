import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MenuDetail from './MenuDetail';
import Update from './Update';
import LandingPage from './LandingPage';
import Footer from './Footer';
import PromoList from './PromoList';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route path='/menulist' element={<Home />} />
            <Route path='/create' element={<Create/>}></Route>
            <Route path='/menus/:id' element={<MenuDetail />} />
            <Route path='/update/:id' element={<Update />} />
            <Route path='/promolist' element={<PromoList />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
