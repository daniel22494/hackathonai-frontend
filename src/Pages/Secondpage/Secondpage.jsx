import "./secondpage.scss";

const Secondpage = () => {
  return (
    <main className='main'>
        <header className='main__header'>
        <img alt='back icon' className='main__header-backIcon'/>
        <h2 className='main__header-text'>Explore the AI Wonders</h2>
        </header>

        <textarea className='main__greeting' placeholder='Placeholder'></textarea>

        <h3 className='main__midText'>Lorem ipsum dolor sit lorefkn;awuifha;wuioh.</h3>

        <div className='main__buttons'>

            <button className='main__buttons-button'>Lorem ipsum dolor sit amet.</button>
            <button className='main__buttons-button'>Lorem ipsum dolor sit amet.</button>
            <button className='main__buttons-button'>Lorem ipsum dolor sit amet.</button>
        </div>
    <div>
        <input className="main__search" placeholder='Your question here'></input>
    </div>
    </main>
  )
}

export default Secondpage;