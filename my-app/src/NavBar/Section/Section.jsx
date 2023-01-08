import { NavLink } from "react-router-dom"
import "./Section.scss"

const Section=(props)=>{
    return(
        <div className="Section">
        <ul>
        <li> <NavLink activeClassName="activeLink" to="/profile">Профиль</NavLink> </li>
        <li><NavLink activeClassName="activeLink" to="/aside">Диалоги</NavLink> </li>
        <li><NavLink activeClassName="activeLink" to="/music">Музыка</NavLink> </li>
        <li><NavLink activeClassName="activeLink" to="/friends">Друзья</NavLink> </li>
        <li><NavLink activeClassName="activeLink" to="/news">Новости</NavLink> </li>
        </ul>
        </div>
    )
}

export default Section
