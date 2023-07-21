import "./InfoRedir.scss"
import { useNavigate } from "react-router";

function InfoRedir(){
    const navigate = useNavigate();
    
    const HandleLink = (e)=>{
        e.preventDefault();
        navigate("/info");
    };
    return <>
        <div className="infoRedir">
            <div onClick={HandleLink} className="infoRedir__link">Want to learn more about this AI text?</div>
        </div>
    </>
}

export default InfoRedir;