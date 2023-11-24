import "./Sidebar.css"
import Category from "./Category/Category"
import Price from "./Price/Price"
import Colors from "./Colors/Colors"


function Sidebar({handleChange}){
return <>
    <div className="sidebar" >
        <div className="logo-container">
            <h1>cart</h1>
        </div>

        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>

    </div>
</>
}


export default Sidebar;
