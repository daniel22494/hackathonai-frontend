import "./InfoRedir.scss"
import { useNavigate } from "react-router";
import Bard from "../../assets/Icons/bard-icon.svg"



function InfoRedir(){
    const navigate = useNavigate();
    
    const HandleLink = (e)=>{
        e.preventDefault();
        navigate("/info");
    };
    return <>
        {/* <div className="bard">
            <img className="bard-logo" src={Bard} alt="bard logo" />
        </div> */}
        <div className="infoRedir">
        <div className="bard">
            <img className="bard-logo" src={Bard} alt="bard logo" />
        </div>
            
            <div onClick={HandleLink} className="infoRedir__link">Want to learn more about this AI text?</div>
        </div>
    </>
}

export default InfoRedir;