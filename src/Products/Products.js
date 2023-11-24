import "./Products.css"
import Card from "../components/Card"
import Data from "../db/data"

function Products({result}){
    return <>
        <div className="card-container">

          {result}
           
        </div>
    </>
}


export default Products;
