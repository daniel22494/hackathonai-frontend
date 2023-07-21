import "./Textfield.scss"

function Textfield(){
    return (
        <div className="textfield">
            <input className="textfield__content" type="text" 
            name="textfield" id="textfield"
            placeholder="Enter Message.." />
        </div>
    )
}

export default Textfield;