import headerAD from './assets/landingPageHeader.webp'
import FavoriteMenu from './FavoriteMenu.js';
import './landingpage.css'
import MomenBahagia from './MomenBahagia.js';
import Promo from './Promo.js'

const LandingPage = () => {


    return (
        <div>
            <img src={headerAD} className="landingHeaderImg" />
            <Promo/>
            <FavoriteMenu/>
            <MomenBahagia/>
        </div>


    );
}

export default LandingPage;