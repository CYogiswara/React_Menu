import MenuList from "./MenuList";
import useFetch from "./UseFetch";
import './favoritemenu.css'
import { Link } from "react-router-dom";

const FavoriteMenu = () => {
    const { data: menus } = useFetch("http://localhost:3040/menus")
    return (
        <div className="favorite-container">
            {menus && <MenuList isFavorite="true" menus={menus.filter((menu) => menu.isFavorite === true)} title="Menu Favorit" />}
            <Link to="/menulist">
                <button className="view-all-button">View All Menus</button>
            </Link>

        </div>
    );
}

export default FavoriteMenu;