import MenuList from "./MenuList";
import useFetch from "./UseFetch";

const Home = () => {
    const {data: menus, error} = useFetch("http://localhost:3030/menus")
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {menus && <MenuList menus={menus.filter((menu) => menu.type === "food")} title="Foods" />}
            {menus && <MenuList menus={menus.filter((menu) => menu.type === "drink")} title="Drinks" />}
        </div>
    );
}

    

    






export default Home;
