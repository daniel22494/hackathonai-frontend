import "./Secondpage.scss"

const Secondpage = () => {
  return (
    <main className='main'>
        <header className='main__header'>
        <img alt='back icon' className='main__header-backIcon'/>
        <h2 className='main__header-text'>Explore the AI Wonders</h2>
        </header>

        <textarea className='main__greeting' placeholder='Placeholder'></textarea>

        <h3 className='main__'>Lorem ipsum dolor sit.</h3>

        <div>

            <button>Lorem ipsum dolor sit amet.</button>
            <button>Lorem ipsum dolor sit amet.</button>
            <button>Lorem ipsum dolor sit amet.</button>
        </div>
    <div>
        <input placeholder='Your question here'></input>
    </div>
    </main>
  )
}

export default Secondpage;