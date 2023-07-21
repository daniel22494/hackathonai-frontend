import "./Textfield.scss"
import { useNavigate } from "react-router-dom";


function Textfield(){
    const navigate = useNavigate();
    
    const HandleText = (e)=>{
        e.preventDefault();
        navigate("/prompt");
    };

    return (
        <div className="textfield">
            <input className="textfield__content" type="text" 
            name="textfield" id="textfield"
            placeholder="Text Message" />
            <button onClick={HandleText}className="textfield_submit">Send</button>
        </div>
    )
}

export default Textfield;