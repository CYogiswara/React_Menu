import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../Detail/menuDetail.css'
const MenuDetail = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3030/product/${id}`)
        .then((res) => res.json())
        .then((json) => setItem(json))
    }, [id])

    return (
        <div className="menu-detail-container">
            {item &&
                <div className="menu-detail">
                    <div>
                        <img src={item.img}/>
                    </div>
                    <div className="menu-detail-description">
                        <p>{item.description}</p>
                    </div>
                    
                    </div>
            }
        </div>
    )
}

export default MenuDetail;
