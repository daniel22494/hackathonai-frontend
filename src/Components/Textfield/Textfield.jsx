import "./Textfield.scss"

function Textfield(){
    return (
        <div className="textfield">
            <input className="textfield__content" type="text" 
            name="textfield" id="textfield"
            placeholder="Text Message" />
            <button className="textfield_submit">Send</button>
        </div>
    )
}

export default Textfield;