import react from "react"
import Input from "../../components/Input"

import "./Category.css"

function Category({handleChange}){
    return(
        <div>
            <h2 className="sidebar-title">Category</h2>
            <div>

               <label  className="sidebar-label-container">
                    <input onChange={handleChange} value="" type="radio" name="test"/>
                    <span className="Checkmark"></span>ALL
                </label>

                <Input 
                    handleChange={handleChange}
                    value="sneakers"
                    title="Sneakers"
                    name="test"
                />

                <Input 
                    handleChange={handleChange}
                    value="flats"
                    title="Flats"
                    name="test"
                />

                <Input 
                    handleChange={handleChange}
                    value="sandal"
                    title="Sandals"
                    name="test"
                />

                <Input 
                    handleChange={handleChange}
                    value="heels"
                    title="Heels"
                    name="test"
                />

            </div>


        </div>
    )

}

export default Category;