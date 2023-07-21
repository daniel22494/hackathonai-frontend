import "./Secondpage.scss";
import { useNavigate } from "react-router-dom";

const Secondpage = () => {
  const navigate = useNavigate();
  return (
    <main  className='main'>
        <header className='main__header'>
        <img onClick={() => navigate("/")} alt='back icon' className='main__header-backIcon'/>
        <h2 className='main__header-text'>Explore the AI Wonders</h2>
        </header>

        <div className='main__greeting' >
Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit quasi autem suscipit. Quasi sit fuga ea, minima odit rerum dignissimos esse. Accusamus illum non ullam dolores tempora, debitis, velit in, reiciendis eligendi delectus possimus tenetur aliquam ipsam asperiores architecto!
        </div>

        <h3 className='main__midText'>Lorem ipsum dolor sit lorefkn;awuifha;wuioh.</h3>

        <div className='main__buttons'>

            <button onClick={() => navigate("/info/details")} className='main__buttons-button'>Lorem ipsum dolor sit amet.</button>
            <button onClick={() => navigate("/info/details")} className='main__buttons-button'>Lorem ipsum dolor sit amet.</button>
            <button onClick={() => navigate("/info/details")} className='main__buttons-button'>Lorem ipsum dolor sit amet.</button>
        </div>
    <div>
        <input className="main__search" placeholder='Your question here'></input>
    </div>
    </main>
  )
}

export default Secondpage;