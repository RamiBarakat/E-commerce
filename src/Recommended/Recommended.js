import react from "react"
import "./Recommended.css"
import Button from "../components/Buttons";


function Recommended({handleClick}){
    return(
        <>
        <h1 className="recommended-title">Recommended</h1>
        <div className="recommended-flex">
            <button className="btns" onClick={handleClick}>All products</button>
           <Button 
                onClickHandler={handleClick} 
                value="Nike" 
                title="Nike"
            />

           <Button 
                onClickHandler={handleClick} 
                value="Adidas" 
                title="Adidas"
            />

           <Button 
                onClickHandler={handleClick}
                value="Puma" 
                title="Puma"
            />

           <Button 
                onClickHandler={handleClick} 
                value="Vans" 
                title="Vans"
           />

        </div>
        </>
    )

}

export default Recommended;