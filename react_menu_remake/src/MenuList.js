import { Link } from "react-router-dom";

const MenuList = ({menus, title}) => {


    return (
        <div className="home">
            <h1>{title}</h1>
            {menus.map((menu) => (
                <div className="note-preview" key={menu.id}>
                    <Link to={`/menus/${menu.id}`}>
                        <h1>{menu.title}</h1>
                        <h3>⭐{menu.rating}</h3>
                        <p>{menu.content}</p>
                        <h1>click utk detail & delete</h1>
                    </Link>
                    <Link to={`/update/${menu.id}`}>
                        <button>Update</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default MenuList;