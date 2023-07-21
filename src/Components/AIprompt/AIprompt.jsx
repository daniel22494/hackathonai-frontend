import "./AIprompt.scss"
import { useNavigate } from "react-router-dom";

function AIprompt(){
    const navigate = useNavigate();
    
    const HandlePrompt = (e)=>{
        e.preventDefault();
        navigate("/redirect");
    };
    return <>
        <div className="aiprompt">
            {/* <div className="aiprompt__infolink">Want to learn more about this AI text?</div> */}
            <div onClick={HandlePrompt} className="aiprompt__content">I'm still not ready to talk about it</div>
        </div>
    </>
}

export default AIprompt;