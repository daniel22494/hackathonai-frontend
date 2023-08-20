import "./Textfield.scss";
import sendIcon from "../../assets/Icons/send-icon.svg";
import smileyIcon from "../../assets/Icons/smiley-icon.svg";

function Textfield(){
    return (
        <div className="textfield">
            <input className="textfield__content" type="text" 
            name="textfield" id="textfield"
            placeholder="Text Message" />
            <div className="textfield__icons">
             <img src={smileyIcon} className="textfield__icons-icon" alt="smiley icon"/>
             <img src={sendIcon} className="textfield__icons-icon" alt="send icon" />
            </div>
        </div>
    )
}

export default Textfield;