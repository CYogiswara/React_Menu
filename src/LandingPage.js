import headerAD from './assets/landingPageHeader.webp'
import Carousel from './Carousel.js';
import FavoriteMenu from './FavoriteMenu.js';
import './landingpage.css'
import MomenBahagia from './MomenBahagia.js';
import Navbar from './Navbar.js';
import Promo from './Promo.js'

const LandingPage = () => {


    return (
        <div>
            <img src={headerAD} className="landingHeaderImg" />
            {/* <Carousel/> */}
            <Promo/>
            <FavoriteMenu/>
            <MomenBahagia/>
        </div>


    );
}

export default LandingPage;