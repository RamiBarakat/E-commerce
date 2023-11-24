import react from "react"
import {FiHeart} from "react-icons/fi"
import {AiOutlineUserAdd} from "react-icons/ai"
import { CiShoppingCart } from "react-icons/ci";
import "./Nav.css"


function Nav(){
    return(
        <nav>
           <div  className="nav-container">
                <input
                    type = "text"
                    className = "search-input"
                    placeholder = "Enter your search shoes."
                />
           </div>   

           <div className="profile-container">
            <a href="#">
                <FiHeart className = "nav-icons" />
            </a>

            <a href="#">
                <CiShoppingCart className = "nav-icons" />
            </a>

            <a href="#">
                <AiOutlineUserAdd className = "nav-icons" />
            </a>
           </div>           
        </nav>
    )

}



export default Nav;