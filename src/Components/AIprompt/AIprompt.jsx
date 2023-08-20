import "./AIprompt.scss"
import bardIcon from "../../assets/Icons/Bard-logo.svg"
import {useNavigate} from "react-router-dom"
import checkmark from "../../assets/Icons/checkmark.svg"


function AIprompt(){
    const navigate = useNavigate();
    return <>
        <div className="aiprompt">
            <div className="aiprompt__infolink">
                <p>
                Want to learn more about this AI text?
                </p>
                <img onClick={() => navigate("/info")}  alt="logo" src={bardIcon}/>
              </div>
             
            <div className="aiprompt__content">
                <div className="aiprompt__content-suggest">How about saying:</div>
                <p className="aiprompt__content-text"> AI has replaced these words: ____</p>
                <img className="aiprompt__content-icon" src={checkmark} alt="check mark"/>
               </div>
        </div>
    </>
}

export default AIprompt;