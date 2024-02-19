import headerAD from './assets/landingPageHeader.webp'
import FavoriteMenu from './FavoriteMenu.js';
import './landingpage.css'
import Promo from './Promo.js'

const LandingPage = () => {


    return (
        <div>
            <img src={headerAD} className="landingHeaderImg" />
            <Promo/>
            <FavoriteMenu/>
        </div>


    );
}

export default LandingPage;