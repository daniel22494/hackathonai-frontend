import "./AIprompt.scss"
import bardIcon from "../../assets/Icons/Bard-logo.svg"
import {useNavigate} from "react-router-dom"


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
            <div className="aiprompt__content">AI has replaced these words: ____</div>
        </div>
    </>
}

export default AIprompt;