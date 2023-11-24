import "./Colors.css"
import Input from "../../components/Input";

function Colors({handleChange}){
    return(
        <div>
        <h2 className="sidebar-title color-title">Colors</h2>

                <label  className="sidebar-label-container">
                    <input onChange={handleChange} value="" type="radio" name="test1"/>
                    <span className="Checkmark all"></span>ALL
                </label>

             <Input
                handleChange={handleChange}
                value="black"
                title="Black"
                name="test1"
                color="blue"
             />


            <Input
                handleChange={handleChange}
                value="red"
                title="Red"
                name="test1"
                color="red"
             />


            <Input
                handleChange={handleChange}
                value="green"
                title="Green"
                name="test1"
                color="green"

             />



            <Input
                handleChange={handleChange}
                value="black"
                title="Black"
                name="test1"
                color="black"
             />

                <label  className="sidebar-label-container">
                    <input onChange={handleChange} value="white" type="radio" name="test1"/>
                    <span className="Checkmark" style={{backgroundColor: "white", border: "2px solid black"}}></span>White
                </label>


        </div>
    )

}


export default Colors;